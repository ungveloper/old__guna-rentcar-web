import type { Metadata } from "next";
import PageContent from "@/app/_components/contact/contact-page";

export const metadata: Metadata = {
  title: "건아렌트카 위치·전화·차량 인수 안내 | 부산 연제구 렌터카",
  description: "부산광역시 연제구 반송로 68 건아렌트카 위치, 전화번호 051-866-1124, 연산역 접근 및 차량 인수·반납 방법 안내.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "오시는 길·전화 문의 | 건아렌트카", description: "부산 연제구 반송로 68, 051-866-1124.", url: "/contact", images: ["/images/og/cover.png"] },
};

export default function Page() {
  return <PageContent />;
}
