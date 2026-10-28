import type { Metadata } from "next";
import Link from "next/link";
import { DetailHero } from "@/components/DetailHero";
import { InnerPageShell } from "@/components/InnerPageShell";
import { FAQ } from "@/components/FAQ";
import { rentalProcess } from "@/data/process";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "건아렌트카 이용안내·자주 묻는 질문 | 부산 렌터카",
  description: "건아렌트카 전화 상담부터 차량 인수·반납까지의 이용 절차와 면허·보험·대여 기간·사고대차 등 자주 묻는 질문 안내.",
  alternates: { canonical: "/guide" },
  openGraph: { title: "렌터카 이용안내·FAQ | 건아렌트카", description: "전화 상담·차량 인수·반납과 자주 묻는 질문.", url: "/guide", images: ["/images/og/cover.png"] },
};

export default function GuidePage() {
  return <InnerPageShell>
    <DetailHero eyebrow="06 / RENTAL GUIDE" title="차량 대여 전," accent="이용 방법을 확인하세요." description="예약 시스템 없이 전화로 상담합니다. 대여 일정·보험·운전자 조건·인수와 반납에 필요한 정보를 정리했습니다." image="/images/vehicles/ray.webp" imageAlt="기아 더뉴레이 차량 사진" detailLabel="이용안내" />
    <section className="detail-section [padding:116px_0_126px] [background:white] detail-section--soft [background:#f5f6f8]" id="details"><div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto]"><div className="detail-heading [max-width:920px] [margin-bottom:47px]"><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)]">HOW TO RENT</span><h2>이용 절차</h2><p>전화 문의에서 차량 반납까지 아래 순서로 진행합니다.</p></div><div className="how__steps grid [grid-template-columns:repeat(4,1fr)] [gap:20px] guide-how__steps [margin-bottom:35px]">{rentalProcess.map((item) => <article key={item.no}><span>{item.no}</span><h3>{item.name}</h3><p>{item.description}</p></article>)}</div><p className="detail-body-copy [font-size:14px] [color:#787b81] [line-height:1.9]">{site.hoursNote}. 정확한 요금과 이용 자격 및 보험·면책 조건은 대여 전 상담 시 확인해 주세요.</p></div></section>
    <FAQ />
    <section className="detail-section [padding:116px_0_126px] [background:white] detail-section--soft [background:#f5f6f8]"><div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto]"><div className="detail-heading [max-width:920px] [margin-bottom:47px]"><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)]">NEXT STEPS</span><h2>차량을 확인하고 문의하세요.</h2><div className="detail-inline-links flex [gap:22px] [flex-wrap:wrap] [margin-top:32px]"><Link href="/cars">차량·요금 보기 →</Link><Link href="/contact">위치·연락처 보기 →</Link></div></div></div></section>
  </InnerPageShell>;
}
