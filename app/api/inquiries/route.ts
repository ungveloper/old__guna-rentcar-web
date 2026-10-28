import { NextResponse, type NextRequest } from "next/server";

const notionVersion = "2025-09-03";
const allowedServices = new Set(["short-term", "monthly", "long-term", "accident", "cars", "home", "contact", "guide", "events", "services", "mobile", ""]);
const truncate = (s: string, n: number) => s.trim().slice(0, n);
// Best-effort per-process throttle. For public production traffic add a shared
// persistent limiter / WAF (each serverless instance has its own memory).
const recentRequests = new Map<string, number[]>();
function isThrottled(ip: string) {
  const now = Date.now();
  if (recentRequests.size > 4000) recentRequests.clear();
  const list = (recentRequests.get(ip) ?? []).filter(time => now - time < 10 * 60_000);
  if (list.length >= 3) { recentRequests.set(ip, list); return true; }
  list.push(now); recentRequests.set(ip, list); return false;
}


function str(value: unknown) { return typeof value === "string" ? value : ""; }
function paragraph(label: string, value: string) {
  return { object: "block", type: "paragraph", paragraph: { rich_text: [{ type: "text", text: { content: `${label}: ${value || "미입력"}` } }] } };
}
function json(message: string, status: number) {
  return NextResponse.json({ ok: false, message }, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== request.nextUrl.host) return json("허용되지 않은 요청 출처입니다.", 403);
    } catch { return json("잘못된 요청 출처입니다.", 403); }
  }
  if (!request.headers.get("content-type")?.startsWith("application/json")) return json("JSON 형식으로 요청해 주세요.", 415);
  const size = Number(request.headers.get("content-length") || 0);
  if (size > 8192) return json("문의 내용이 너무 깁니다.", 413);
  let value: Record<string, unknown>;
  try { value = await request.json(); } catch { return json("요청 내용을 확인할 수 없습니다.", 400); }
  if (!value || typeof value !== "object" || Array.isArray(value)) return json("올바르지 않은 요청입니다.", 400);
  if (str(value.website)) return json("요청을 처리할 수 없습니다.", 400);
  const name = truncate(str(value.name), 50);
  const phone = truncate(str(value.phone), 25);
  const desiredDate = truncate(str(value.desiredDate), 16);
  const message = truncate(str(value.message), 1000);
  const service = truncate(str(value.service), 60);
  const vehicleId = truncate(str(value.vehicleId), 80);
  if (name.length < 2 || !/^[0-9+()\s-]{9,25}$/.test(phone)) return json("성함과 연락처를 확인해 주세요.", 400);
  if (value.privacyConsent !== "yes") return json("개인정보 수집 동의가 필요합니다.", 400);
  if (desiredDate && !/^\d{4}-\d{2}-\d{2}$/.test(desiredDate)) return json("날짜를 확인해 주세요.", 400);
  if (!allowedServices.has(service)) return json("문의 종류를 확인해 주세요.", 400);
  if (vehicleId && !/^[a-z0-9-]{1,80}$/.test(vehicleId)) return json("차량 선택값을 확인해 주세요.", 400);

  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const ip = (forwarded || request.headers.get("x-real-ip") || "unknown").slice(0, 80);
  if (isThrottled(ip)) return json("일시적으로 접수가 많습니다. 잠시 후 다시 시도하거나 전화로 문의해 주세요.", 429);
  const token = process.env.NOTION_API_KEY;
  const source = process.env.NOTION_DATA_SOURCE_ID;
  if (!token || !source) return json("현재 온라인 상담 접수가 준비 중입니다. 051-866-1124로 전화해 주세요.", 503);
  if (!/^[a-f\d-]{32,36}$/i.test(source)) return json("상담 접수 설정을 확인해 주세요.", 503);
  const headers = { Authorization: `Bearer ${token}`, "Notion-Version": notionVersion, "Content-Type": "application/json" };
  try {
    // 실제 data source의 제목 필드 이름을 확인해 임의의 스키마를 가정하지 않습니다.
    const schemaResponse = await fetch(`https://api.notion.com/v1/data_sources/${source}`, { headers, cache: "no-store", signal: AbortSignal.timeout(9000) });
    if (!schemaResponse.ok) { console.error("Notion source access failed", schemaResponse.status); return json("접수 시스템 연결을 확인할 수 없습니다. 전화로 문의해 주세요.", 502); }
    const schema = await schemaResponse.json() as { properties?: Record<string, { type?: string }> };
    const titleKey = Object.entries(schema.properties || {}).find(([, property]) => property.type === "title")?.[0];
    if (!titleKey) return json("상담 데이터베이스의 제목 속성이 필요합니다.", 503);
    const title = `[상담 요청] ${name} · ${vehicleId || service || "일반 문의"}`;
    const submittedAt = new Date().toISOString();
    const body = {
      parent: { type: "data_source_id", data_source_id: source },
      properties: { [titleKey]: { type: "title", title: [{ type: "text", text: { content: title } }] } },
      children: [
        paragraph("성함", name), paragraph("연락처", phone), paragraph("서비스", service),
        paragraph("관심 차량 ID", vehicleId), paragraph("희망 시작일", desiredDate),
        paragraph("문의 내용", message), paragraph("접수 일시(UTC)", submittedAt),
        paragraph("접수 경로", "건아렌트카 홈페이지"),
        paragraph("안내", "상담 요청이며 예약이 확정된 상태가 아닙니다."),
      ],
    };
    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST", headers, body: JSON.stringify(body), signal: AbortSignal.timeout(10000), cache: "no-store",
    });
    if (!response.ok) { console.error("Notion page creation failed", response.status); return json("상담 저장에 실패했습니다. 잠시 후 다시 시도하거나 전화로 문의해 주세요.", 502); }
    const result = await response.json() as { id?: string };
    if (!result.id) return json("접수 결과를 확인하지 못했습니다. 전화로 확인해 주세요.", 502);
    return NextResponse.json({ ok: true, message: "상담 요청이 접수되었습니다." }, { status: 201, headers: { "Cache-Control": "no-store" } });
  } catch (error) {
    console.error("Notion request unavailable", error instanceof Error ? error.name : "unknown");
    return json("일시적으로 접수할 수 없습니다. 051-866-1124로 전화해 주세요.", 502);
  }
}
