import { PageTabs } from "@/app/_components/common/PageTabs";

import Link from "next/link";
import { DetailHero } from "@/app/_components/common/DetailHero";
import { InnerPageShell } from "@/app/_components/common/InnerPageShell";
import { Fleet } from "@/app/_components/cars/Fleet";
import { vehicles } from "@/data/vehicles";


export default function CarsPage() {
  return <InnerPageShell>
    <DetailHero eyebrow="01 / OUR FLEET" title="필요한 차량을," accent="요금과 함께 비교하세요." description="제공된 요금표를 기준으로 차종별 6시간·12시간·기간별 1일 요금을 안내합니다. 사진은 참고용이며 최종 조건은 전화로 확인해 주세요." image="/images/vehicles/g80.webp" imageAlt="제네시스 G80 차량 소개 사진" detailLabel="차량·요금" />
    <PageTabs active="/cars" tabs={[{ label: "전체 차량", href: "/cars" }, { label: "단기렌트", href: "/services/short-term" }, { label: "월렌트", href: "/services/monthly" }]} /><Fleet />
    <section className="detail-section [padding:116px_0_126px] [background:white] detail-section--soft [background:#f5f6f8] [@media(max-width:750px)]:[padding:76px_0]"><div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] [@media(max-width:1180px)]:[width:calc(100%_-_64px)] [@media(max-width:900px)]:[width:calc(100%_-_48px)] [@media(max-width:600px)]:[width:calc(100%_-_36px)]"><div className={"detail-heading [max-width:920px] [margin-bottom:47px] [&_h2]:text-[clamp(37px,4.7vw,68px)] [&_h2]:[line-height:1.2] [&_h2]:[letter-spacing:-.065em] [&_h2]:[margin:18px_0_14px] [&_h2]:font-[780] [&_h2]:[word-break:keep-all] [&>p]:text-base [&>p]:[line-height:1.85] [&>p]:text-[#717680] [&>p]:max-w-[760px] [&>p]:[word-break:keep-all] [@media(max-width:750px)]:mb-8 [@media(max-width:750px)]:[&>p]:text-sm [@media(max-width:480px)]:[&_h2]:text-[36px]"}><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)] [@media(max-width:600px)]:text-[10px] [@media(max-width:600px)]:[letter-spacing:.15em]">RENTAL OPTIONS</span><h2>기간에 맞는 서비스도 확인하세요.</h2><p>차량별 공개 금액은 기준 대여 요금입니다. 월·장기렌트 계약 금액이나 보험사고대차 조건은 별도로 상담합니다.</p></div><div className={"detail-inline-links flex [gap:22px] [flex-wrap:wrap] [margin-top:32px] [&_a]:inline-flex [&_a]:items-center [&_a]:gap-3 [&_a]:[border-bottom:1px_solid_currentColor] [&_a]:[padding:0_0_9px] [&_a]:font-[750] [&_a]:text-sm [&_a]:mt-[22px]"}><Link href="/services/short-term">단기렌트 상세 요금 →</Link><Link href="/services/long-term">월·장기렌트 안내 →</Link><Link href="/services/accident">사고대차 안내 →</Link></div><p className="detail-body-copy [font-size:14px] [color:#787b81] [line-height:1.9]">총 {vehicles.length}개 차량 항목을 안내하고 있습니다. 실제 이용 가능한 차종 및 차량 상태는 전화 상담 시 확인해 주세요.</p></div></section>
  </InnerPageShell>;
}
