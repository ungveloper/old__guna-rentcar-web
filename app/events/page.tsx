import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DetailHero } from "@/components/DetailHero";
import { InnerPageShell } from "@/components/InnerPageShell";
import { promotions, guideCards } from "@/data/promotions";

export const metadata: Metadata = {
  title: "건아렌트카 진행 중인 이벤트·이용 안내 | 부산 렌터카",
  description: "건아렌트카의 현재 등록된 이벤트와 차량 대여 이용 안내를 확인하세요. 프로모션 혜택은 실제 등록된 내용만 표시하며, 차량별 기준 요금과 서비스 정보도 안내합니다.",
  alternates: { canonical: "/events" },
  openGraph: { title: "이벤트·이용 안내 | 건아렌트카", description: "건아렌트카의 이벤트와 대여 이용 안내를 확인하세요.", url: "/events", images: ["/images/og/cover.png"] },
};

export default function EventsPage() {
  const published = promotions.filter((item) => item.enabled);
  const guides = guideCards.filter((item) => item.enabled);
  return <InnerPageShell>
    <DetailHero eyebrow="04 / EVENTS & NEWS" title="진행 중인 이벤트," accent="여기서 확인하세요." description="확정된 프로모션과 알아두면 좋은 차량 이용 정보를 안내합니다. 실제로 등록된 행사만 노출합니다." image="/images/vehicles/gv80.webp" imageAlt="제네시스 GV80 차량 이미지" detailLabel="이벤트" />
    <section className="detail-section [padding:116px_0_126px] [background:white]" id="details"><div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto]"><div className="detail-heading [max-width:920px] [margin-bottom:47px]"><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)]">ONGOING EVENTS</span><h2>진행 중인 이벤트</h2><p>이벤트 내용과 혜택은 등록된 실제 운영 정보를 기준으로 표시합니다. 이벤트별 적용 조건을 확인한 뒤 전화로 문의해 주세요.</p></div>
      {published.length === 0 ? <div className="detail-empty-event [padding:70px_66px] rounded-[22px] [background:#f4f5f7] [min-height:260px] [border:1px_solid_#e7e8eb]"><span>EVENTS / 00</span><h3>현재 등록된 진행 중 이벤트가 없습니다.</h3><p>새로운 이벤트가 확정되면 이 페이지에 안내하겠습니다. 아래 상시 차량 요금 및 렌트 서비스 정보는 언제든 확인할 수 있습니다.</p></div> :
      <div className="detail-event-grid grid [grid-template-columns:repeat(2,minmax(0,1fr))] [gap:20px]">{published.map((event) => <article className="detail-event overflow-hidden rounded-[20px] [border:1px_solid_#e6e7e9]" key={event.id}><div className="detail-event__photo"><Image src={event.image} alt={event.imageAlt} fill sizes="(max-width: 800px) 100vw, 45vw"/></div><div className="detail-event__body [padding:28px]"><span>{event.eyebrow}</span><h3>{event.title}</h3><p>{event.description}</p>{event.finePrint && <small>{event.finePrint}</small>}<Link href={event.href}>{event.actionLabel} →</Link></div></article>)}</div>}
    </div></section>
    <section className="detail-section [padding:116px_0_126px] [background:white] detail-section--soft [background:#f5f6f8]"><div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto]"><div className="detail-heading [max-width:920px] [margin-bottom:47px]"><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)]">RENTAL GUIDES</span><h2>차량 이용 안내</h2><p>아래 정보는 할인 이벤트가 아닌 상시 기준 요금 및 서비스 안내입니다.</p></div><div className="detail-guide-grid grid [grid-template-columns:repeat(3,minmax(0,1fr))] [gap:18px]">{guides.map((guide) => <Link className="detail-guide flex flex-col overflow-hidden [background:white] [border:1px_solid_#e7e8eb] rounded-[19px] [transition:transform_.3s,box-shadow_.3s]" href={guide.href} key={guide.id}><div className="detail-guide__photo"><Image src={guide.image} alt={guide.imageAlt} fill sizes="(max-width: 800px) 100vw, 28vw" /></div><div className="detail-guide__body [padding:25px] flex flex-col [flex:1]"><span>{guide.eyebrow}</span><h3>{guide.title}</h3><p>{guide.description}</p>{guide.finePrint && <small>{guide.finePrint}</small>}<strong>{guide.actionLabel} ↗</strong></div></Link>)}</div></div></section>
  </InnerPageShell>;
}
