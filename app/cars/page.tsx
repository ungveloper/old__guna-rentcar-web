import type { Metadata } from "next";
import { vehicles } from "@/data/vehicles";
import PageContent from "@/app/_components/cars/cars-page";

export const metadata: Metadata = {
  title: "부산 렌터카 차량별 요금·차종 안내 | 건아렌트카",
  description: `건아렌트카 차량 ${vehicles.length}개 항목의 사진과 시간별·기간별 대여 요금을 확인하세요. 경차·중형·SUV·승합차 등 실제 요금표 기준 안내. 상담 051-866-1124.`,
  alternates: { canonical: "/cars" },
  openGraph: { title: "차량·요금 안내 | 건아렌트카", description: `전체 ${vehicles.length}개 차량 항목별 대여 요금과 차종 정보를 확인하세요.`, url: "/cars", images: ["/images/og/cover.png"] },
};

export default function Page() {
  return <PageContent />;
}
