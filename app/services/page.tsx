import type { Metadata } from "next";
import PageContent from "@/app/_components/services/services-page";

export const metadata: Metadata = {
  title: "부산 렌터카 서비스 종류·비교 | 건아렌트카",
  description: "부산 건아렌트카 단기렌트, 월렌트, 장기렌트, 보험사고대차를 이용 목적과 기간에 따라 비교하세요. 각 서비스별 요금·조건·FAQ 확인.",
  alternates: { canonical: "/services" },
  openGraph: { type: "website", locale: "ko_KR", title: "건아렌트카 렌트 서비스 안내", description: "단기·월·장기렌트와 사고대차를 비교하세요.", url: "/services", images: ["/images/og/cover.png"] },
};

export default function Page() {
  return <PageContent />;
}
