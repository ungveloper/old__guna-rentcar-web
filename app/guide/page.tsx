import type { Metadata } from "next";
import PageContent from "@/app/_components/guide/guide-page";

export const metadata: Metadata = {
  title: "건아렌트카 이용안내·자주 묻는 질문 | 부산 렌터카",
  description: "건아렌트카 전화 상담부터 차량 인수·반납까지의 이용 절차와 면허·보험·대여 기간·사고대차 등 자주 묻는 질문 안내.",
  alternates: { canonical: "/guide" },
  openGraph: { title: "렌터카 이용안내·FAQ | 건아렌트카", description: "전화 상담·차량 인수·반납과 자주 묻는 질문.", url: "/guide", images: ["/images/og/cover.png"] },
};

export default function Page() {
  return <PageContent />;
}
