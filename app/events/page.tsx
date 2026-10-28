import type { Metadata } from "next";
import PageContent from "@/app/_components/events/events-page";

export const metadata: Metadata = {
  title: "건아렌트카 진행 중인 이벤트·이용 안내 | 부산 렌터카",
  description: "건아렌트카의 현재 등록된 이벤트와 차량 대여 이용 안내를 확인하세요. 프로모션 혜택은 실제 등록된 내용만 표시하며, 차량별 기준 요금과 서비스 정보도 안내합니다.",
  alternates: { canonical: "/events" },
  openGraph: { title: "이벤트·이용 안내 | 건아렌트카", description: "건아렌트카의 이벤트와 대여 이용 안내를 확인하세요.", url: "/events", images: ["/images/og/cover.png"] },
};

export default function Page() {
  return <PageContent />;
}
