"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";
import { categoryOptions, vehicles } from "@/data/vehicles";
import { PhoneLink } from "@/components/PhoneLink";
import { Icon } from "@/components/Icon";
import type { Vehicle, VehicleCategory } from "@/types/content";

const formatPrice = (n: number) => `${n.toLocaleString("ko-KR")}원`;
const categoryEnglish: Record<VehicleCategory, string> = {
  compact: "COMPACT", sedan: "SEDAN", premium: "PREMIUM", suv: "SUV", van: "VAN & RV",
};

function Rate({ label, price, daily = false }: { label: string; price?: number; daily?: boolean }) {
  return <div className="rate-line"><span>{label}</span><strong>{price === undefined ? "전화 문의" : formatPrice(price)}{daily && price !== undefined ? <small> / 1일</small> : null}</strong></div>;
}

function VehicleCard({ vehicle, index, onOpen }: { vehicle: Vehicle; index: number; onOpen: (v: Vehicle) => void }) {
  return <article className="fleet-card" id={`vehicle-${vehicle.id}`} data-reveal>
    <button type="button" className="fleet-card__visual" onClick={() => onOpen(vehicle)} aria-label={`${vehicle.model} 차량 사진 및 전체 대여 요금 보기`}>
      <Image src={vehicle.image} alt={vehicle.imageAlt} width={1280} height={853} sizes="(max-width: 680px) 100vw, (max-width: 1080px) 50vw, 33vw" />
      <span className="fleet-card__index absolute [top:15px] [left:16px] [padding:8px_11px] [background:#16191ed2] [backdrop-filter:blur(8px)] text-paper [font-size:10px] [font-weight:750] [letter-spacing:.08em] rounded-[40px]">{String(index + 1).padStart(2, "0")} / {categoryEnglish[vehicle.category]}</span>
      <span className="fleet-card__open absolute [bottom:15px] [right:15px] [width:40px] [height:40px] [border-radius:50%] bg-paper [color:#111] grid [place-items:center] [transition:transform_.25s]"><Icon name="arrow" size={23}/></span>
    </button>
    <div className="fleet-card__content"><div><span className="fleet-card__brand [font-size:11px] [font-weight:730] [color:#898b91] [letter-spacing:.06em]">{vehicle.brand} {vehicle.seats ? `· ${vehicle.seats}` : ""}</span><h3>{vehicle.model}</h3></div><div className="fleet-card__price text-right [flex-shrink:0]"><span>1~2일 대여 · 1일</span><strong>{formatPrice(vehicle.rates.days1to2)}</strong></div></div>
    <button className="fleet-card__details" onClick={() => onOpen(vehicle)} type="button">전체 대여 요금 보기 <Icon name="arrowRight" size={17}/></button>
  </article>;
}

export function Fleet() {
  const [active, setActive] = useState<"all" | VehicleCategory>("all");
  const [selected, setSelected] = useState<Vehicle | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const filtered = useMemo(() => vehicles.filter(v => active === "all" || v.category === active), [active]);

  function open(vehicle: Vehicle) { setSelected(vehicle); dialogRef.current?.showModal(); }
  function close() { dialogRef.current?.close(); setSelected(null); }

  return <section className="fleet-section section-pad [padding:148px_0]" id="fleet" aria-labelledby="fleet-title">
    <div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto]">
      <div className="section-intro [max-width:840px] [margin:0_auto_72px] text-center"><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)]">OUR COLLECTION / VEHICLES</span><h2 id="fleet-title">보유 차종과 대여 요금,<br/><span>한눈에 확인하세요.</span></h2><p>경차부터 SUV·승합차까지 {vehicles.length}개 차량 항목의 기준 요금을 비교하세요. 차량을 선택하면 시간별·기간별 상세 요금을 확인할 수 있습니다.</p></div>
      <div className="fleet-toolbar"><div className="fleet-filters flex [gap:6px] [flex-wrap:wrap]" role="group" aria-label="차종별 차량 필터">{categoryOptions.map(opt => <button key={opt.value} type="button" className={active === opt.value ? "is-active" : ""} aria-pressed={active === opt.value} onClick={()=>setActive(opt.value)}>{opt.label}</button>)}</div><span className="fleet-count [white-space:nowrap] [font-size:11px] [letter-spacing:.1em] [font-weight:750] [color:#8b8e95]">{String(filtered.length).padStart(2,"0")} MODELS</span></div>
      <div className="fleet-grid grid [grid-template-columns:repeat(3,minmax(0,1fr))] [gap:54px_22px]" aria-live="polite">{filtered.map((v,i)=><VehicleCard key={v.id} vehicle={v} index={i} onOpen={open}/>)}</div>
      <p className="fleet-disclaimer [font-size:12px] [color:#85878d] [margin-top:40px] [max-width:920px] [word-break:keep-all]">※ 사진은 차종 안내용 이미지로, 실제 대여 차량의 색상·연식·트림과 다를 수 있습니다. 표시 금액은 제공받은 요금표 기준이며 차량 이용 가능 여부, 보험 및 세부 적용 조건은 전화로 확인해 주세요.</p>
    </div>
    <dialog ref={dialogRef} className="rate-dialog [padding:0] [border:0] rounded-[22px] [max-width:min(1060px,calc(100vw_-_36px))] w-full [max-height:calc(100dvh_-_36px)] overflow-auto bg-paper [color:#16171a] [box-shadow:0_50px_140px_#0008]" aria-label={selected ? `${selected.model} 대여 요금` : "차량 요금 안내"} onClose={()=>setSelected(null)} onClick={e => {if(e.target===dialogRef.current)close();}}>
      {selected && <div className="rate-dialog__inner grid [grid-template-columns:1.03fr_1fr]">
        <div className="rate-dialog__photo relative [background:#e9e9e9] [min-height:590px]"><Image src={selected.image} alt={selected.imageAlt} width={1280} height={853} sizes="(max-width: 900px) 100vw, 47vw"/><span>{categoryEnglish[selected.category]}</span><button type="button" aria-label="요금창 닫기" onClick={close}><Icon name="close" size={22}/></button></div>
        <div className="rate-dialog__info [padding:53px_45px_42px]"><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)]">FULL RATE GUIDE</span><h3>{selected.model}</h3><p>이용 기간별로 달라지는 기준 대여 요금을 확인해 보세요.</p>
          <div className="rate-group [margin:22px_0] [border-top:1px_solid_#dfe0e3]"><h4>시간별 대여 요금</h4><Rate label="6시간" price={selected.rates.hours6}/><Rate label="12시간" price={selected.rates.hours12}/></div>
          <div className="rate-group [margin:22px_0] [border-top:1px_solid_#dfe0e3]"><h4>대여기간별 1일 요금</h4><Rate label="1~2일" price={selected.rates.days1to2} daily/><Rate label="3~6일" price={selected.rates.days3to6} daily/><Rate label="7일 이상" price={selected.rates.days7plus} daily/></div>
          <PhoneLink placement="vehicle_modal" vehicleId={selected.id} className="pill pill--dark [background:#1b1d22] text-paper"><Icon name="phone" size={17}/> 이 차량 전화 문의 <Icon name="arrowRight" size={17}/></PhoneLink>
          <small>차량 이미지와 실제 대여 차량의 사양은 다를 수 있습니다. 보험·면책·인수 조건 및 최종 요금은 전화로 확인해 주세요.</small>
        </div>
      </div>}
    </dialog>
  </section>;
}
