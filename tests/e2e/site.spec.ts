import { test, expect } from "@playwright/test";
import { vehicles } from "../../data/vehicles";

test("홈과 독립 서비스 페이지 이동", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("main")).toBeVisible();
  await page.goto("/services/monthly");
  await expect(page.locator("h1").first()).toBeVisible();
  await expect(page).toHaveURL(/\/services\/monthly$/);
});

test("차량 검색/정렬과 실제 상세 URL", async ({ page }) => {
  await page.goto("/cars");
  await page.getByRole("searchbox", { name: "차량명 또는 제조사 검색" }).fill("G80");
  await expect(page.getByText("1개", { exact: false }).first()).toBeVisible();
  await page.getByRole("combobox", { name: "정렬", exact: true }).selectOption("price-low");
  await page.goto("/cars/g80");
  await expect(page.getByRole("heading", { name: "G80", exact: true })).toBeVisible();
  await expect(page.getByRole("link", { name: /전화로 예약 상담/ }).first()).toBeVisible();
});

test("상담 요청 UI 및 접수 조건", async ({ page }) => {
  await page.goto("/cars/ray");
  await page.getByRole("button", { name: "상담 요청 남기기" }).first().click();
  const dialog = page.getByRole("dialog", { name: "상담 요청 남기기" });
  await expect(dialog).toBeVisible();
  await expect(dialog.getByText("예약이 확정", { exact: false }).first()).toBeVisible();
  await expect(dialog.getByRole("button", { name: "상담 요청 접수하기" })).toBeVisible();
  await dialog.getByRole("button", { name: "상담 요청 닫기" }).click();
  await expect(dialog).not.toBeVisible();
});

test("잘못된 서버 문의 요청을 거절", async ({ request }) => {
  const result = await request.post("/api/inquiries", { data: { name: "", phone: "123", privacyConsent: "no" } });
  expect(result.status()).toBe(400);
  expect((await result.json()).ok).toBe(false);
});

test("모바일 CTA 두 개가 유지됨", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/cars/ray");
  const bar = page.getByLabel("차량 예약 상담");
  await expect(bar.getByRole("link", { name: /전화로 예약 상담/ })).toBeVisible();
  await expect(bar.getByRole("button", { name: "상담 요청 남기기" })).toBeVisible();
});


test("모든 차량 SEO 상세 경로가 200 응답", async ({ request }) => {
  for (const vehicle of vehicles) {
    const response = await request.get(`/cars/${vehicle.id}`);
    expect(response.status(), vehicle.id).toBe(200);
    const html = await response.text();
    expect(html).toContain(vehicle.model);
  }
});

test("다른 출처에서의 문의 요청 차단", async ({ request }) => {
  const response = await request.post("/api/inquiries", {
    headers: { Origin: "https://invalid.example" },
    data: { name: "테스트", phone: "01012345678", privacyConsent: "yes" },
  });
  expect(response.status()).toBe(403);
});
