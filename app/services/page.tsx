import type { Metadata } from "next";
import Link from "next/link";
import { DetailHero } from "@/components/DetailHero";
import { InnerPageShell } from "@/components/InnerPageShell";
import { serviceDetails, serviceOrder } from "@/data/service-details";
import { getSiteUrl } from "@/lib/seo";
import { escapeJson } from "@/lib/service-seo";

export const metadata: Metadata = {
  title: "부산 렌터카 서비스 종류·비교 | 건아렌트카",
  description: "부산 건아렌트카 단기렌트, 월렌트, 장기렌트, 보험사고대차를 이용 목적과 기간에 따라 비교하세요. 각 서비스별 요금·조건·FAQ 확인.",
  alternates: { canonical: "/services" },
  openGraph: { type: "website", locale: "ko_KR", title: "건아렌트카 렌트 서비스 안내", description: "단기·월·장기렌트와 사고대차를 비교하세요.", url: "/services", images: ["/images/og/cover.png"] },
};

export default function ServicesPage() {
  const origin = getSiteUrl();
  const url = new URL("/services", origin).toString();
  const jsonLd = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: "건아렌트카 렌트 서비스 안내", description: "단기렌트, 월렌트, 장기렌트, 보험사고대차 비교 안내" },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: `${origin}/` },
        { "@type": "ListItem", position: 2, name: "렌트 서비스", item: url },
      ] },
      { "@type": "ItemList", "@id": `${url}#services`, name: "건아렌트카 렌터카 서비스", itemListElement: serviceOrder.map((key, index) => ({
        "@type": "ListItem", position: index + 1, name: serviceDetails[key].name, url: new URL(serviceDetails[key].path, origin).toString(),
      })) },
    ],
  };
  return <InnerPageShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: escapeJson(jsonLd) }} />
    <DetailHero eyebrow="RENTAL SERVICES / BUSAN" title="필요한 기간과 목적에 맞게," accent="렌트 서비스를 비교하세요." description="단기·월·장기렌트 및 보험사고대차의 특징과 상담 전 확인할 사항을 확인하세요." image="/images/vehicles/gv80.webp" imageAlt="건아렌트카 서비스 소개용 제네시스 GV80 사진" detailLabel="렌트 서비스" />
    <section className={("detail-section [padding:116px_0_126px] [background:white]") + " [@media(max-width:750px)]:[padding:76px_0]"} id="details"><div className={("container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto]") + " [@media(max-width:1180px)]:[width:calc(100%_-_64px)] [@media(max-width:900px)]:[width:calc(100%_-_48px)] [@media(max-width:600px)]:[width:calc(100%_-_36px)]"}><div className={("detail-heading [max-width:920px] [margin-bottom:47px]") + " [&_h2]:text-[clamp(37px,4.7vw,68px)] [&_h2]:[line-height:1.2] [&_h2]:[letter-spacing:-.065em] [&_h2]:[margin:18px_0_14px] [&_h2]:font-[780] [&_h2]:[word-break:keep-all] [&>p]:text-base [&>p]:[line-height:1.85] [&>p]:text-[#717680] [&>p]:max-w-[760px] [&>p]:[word-break:keep-all] [@media(max-width:750px)]:mb-8 [@media(max-width:750px)]:[&>p]:text-sm [@media(max-width:480px)]:[&_h2]:text-[36px]"}><span className={("micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)]") + " [@media(max-width:600px)]:text-[10px] [@media(max-width:600px)]:[letter-spacing:.15em]"}>FOUR RENTAL SERVICES</span><h2>건아렌트카 렌트 서비스</h2><p>차량이 필요한 상황과 기간에 맞춰 서비스를 선택하세요. 실제 계약 요금·대여 가능 여부는 전화 상담으로 확인합니다.</p></div><div className={("service-seo__hub-grid grid [grid-template-columns:repeat(2,minmax(0,1fr))] [gap:18px]") + " [@media(max-width:760px)]:[grid-template-columns:1fr]"}>{serviceOrder.map((key, index) => {
      const service = serviceDetails[key];
      return <Link href={service.path} key={key} className={("service-seo__hub-card rounded-[14px] bg-kinetic-surface [padding:36px] [min-height:266px] flex flex-col [transition:background_.2s,transform_.2s]") + " [&:hover]:bg-[#e9eaec] [&:hover]:[transform:translateY(-3px)] [&>span]:text-[10px] [&>span]:[letter-spacing:.12em] [&>span]:text-[#83735f] [&>span]:font-extrabold [&_h3]:text-[clamp(25px,3vw,36px)] [&_h3]:[margin:25px_0_10px] [&_h3]:[letter-spacing:-.045em] [&_p]:text-[#666b72] [&_p]:text-sm [&_p]:[line-height:1.8] [&_p]:[word-break:keep-all] [&_strong]:text-[13px] [&_strong]:[margin-top:auto] [&_strong]:pt-[21px] [@media(max-width:760px)]:min-h-[215px] [@media(max-width:760px)]:p-7 [@media(prefers-reduced-motion:reduce)]:[transition:none] [@media(prefers-reduced-motion:reduce)]:[&:hover]:[transform:none]"}><span>{String(index + 1).padStart(2, "0")} / {service.heroEyebrow.split(" / ")[1]}</span><h3>{service.name}</h3><p>{service.intro}</p><strong>이용 안내·FAQ 확인 ↗</strong></Link>;
    })}</div></div></section>
    <section className={("detail-section [padding:116px_0_126px] [background:white] detail-section--soft [background:#f5f6f8]") + " [@media(max-width:750px)]:[padding:76px_0]"}><div className={("container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto]") + " [@media(max-width:1180px)]:[width:calc(100%_-_64px)] [@media(max-width:900px)]:[width:calc(100%_-_48px)] [@media(max-width:600px)]:[width:calc(100%_-_36px)]"}><div className={("detail-heading [max-width:920px] [margin-bottom:47px]") + " [&_h2]:text-[clamp(37px,4.7vw,68px)] [&_h2]:[line-height:1.2] [&_h2]:[letter-spacing:-.065em] [&_h2]:[margin:18px_0_14px] [&_h2]:font-[780] [&_h2]:[word-break:keep-all] [&>p]:text-base [&>p]:[line-height:1.85] [&>p]:text-[#717680] [&>p]:max-w-[760px] [&>p]:[word-break:keep-all] [@media(max-width:750px)]:mb-8 [@media(max-width:750px)]:[&>p]:text-sm [@media(max-width:480px)]:[&_h2]:text-[36px]"}><h2>차량과 요금부터 확인하세요</h2><p>단기렌트 시간별·일일 기준 요금은 공개되어 있으며 월·장기렌트 계약 금액과 사고대차 비용은 별도 상담이 필요합니다.</p></div><div className={("detail-inline-links flex [gap:22px] [flex-wrap:wrap] [margin-top:32px]") + " [&_a]:inline-flex [&_a]:items-center [&_a]:gap-3 [&_a]:[border-bottom:1px_solid_currentColor] [&_a]:[padding:0_0_9px] [&_a]:font-[750] [&_a]:text-sm [&_a]:mt-[22px]"}><Link href="/cars">전체 차량·요금 보기 →</Link><Link href="/guide">이용안내·FAQ →</Link><Link href="/contact">오시는 길·전화 →</Link></div></div></section>
  </InnerPageShell>;
}
