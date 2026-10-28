"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { PhoneLink } from "@/components/PhoneLink";
import { vehicles } from "@/data/vehicles";

const moments = [
  { id:"city", kicker:"01 / CITY DRIVE", name:"필요한 차량을,", highlight:"합리적인 요금으로.", line:"일상과 출장에 필요한 차량을 비교해 보세요.", vehicleId:"g80", alt:"제네시스 G80 차량 이미지", short:"CITY" },
  { id:"weekend", kicker:"02 / WEEKEND MODE", name:"주말 여행도,", highlight:"SUV로 편안하게.", line:"여행 일정과 인원에 맞는 차종을 선택하세요.", vehicleId:"gv80", alt:"제네시스 GV80 차량 이미지", short:"WEEKEND" },
  { id:"together", kicker:"03 / GO TOGETHER", name:"가족·단체 이동,", highlight:"넉넉한 승합차.", line:"가족 나들이와 단체 이동을 위한 차량 안내.", vehicleId:"carnival", alt:"기아 더뉴카니발 9인승 차량 이미지", short:"TOGETHER" },
] as const;

export function HeroStage() {
  const [active, setActive] = useState(0);
  const moment = moments[active];
  const getImage = (id: string) => vehicles.find((car) => car.id === id)?.image ?? "/images/hero/studio-sedan.webp";
  return <section className="kinetic-hero relative [height:calc(100svh_-_72px)] [min-height:680px] [max-height:1120px] text-paper bg-kinetic-ink overflow-hidden [isolation:isolate]" id="top" aria-labelledby="hero-title">
    <div className="kinetic-hero__visual" aria-hidden="true">
      {moments.map((item,i)=><div className={`kinetic-hero__frame opacity-0 [transform:scale(1.07)] [transition:opacity_1.05s_ease,transform_6s_ease] [will-change:opacity,transform] ${i===active ? "is-active" : ""}`} key={item.id}>
        <Image src={getImage(item.vehicleId)} fill priority={i===0} sizes="100vw" alt="" className="kinetic-hero__image object-cover [object-position:60%_center]" />
      </div>)}
      <div className="kinetic-hero__overlay [background:linear-gradient(90deg,rgba(4,7,12,.84)_0%,rgba(4,7,12,.54)_42%,rgba(4,7,12,.07)_92%),linear-gradient(0deg,rgba(4,7,12,.86),transparent_27%,rgba(4,7,12,.13)_100%)]" />
      <div className="kinetic-hero__grain" />
    </div>
    <div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] kinetic-hero__content">
      <div className="kinetic-hero__eyebrow flex items-center [gap:11px] absolute [top:50px] [left:0] [font-weight:760] [font-size:11px] [letter-spacing:.19em]"><span className="pulse-dot inline-block [background:var(--kinetic-lime)] [height:7px] [width:7px] [border-radius:50%] [box-shadow:0_0_0_5px_#ddf57e1c] [animation:pulse_2s_ease-in-out_infinite]" /> GUN-A RENTCAR <span className="separator">/</span> BUSAN</div>
      <div className="kinetic-hero__head [animation:hero-head-in_.85s_cubic-bezier(.16,1,.3,1)_both]" key={moment.id}>
        <p className="kinetic-hero__index [font-size:11px] [letter-spacing:.2em] [font-weight:750] [color:var(--kinetic-lime)] [margin-bottom:23px]">{moment.kicker}</p>
        <h1 id="hero-title">{moment.name}<br/><em>{moment.highlight}</em></h1>
        <p className="kinetic-hero__lead [font-size:clamp(16px,1.5vw,20px)] [line-height:1.72] [color:#ebedf0] [font-weight:520]">{moment.line}<br/>다양한 선택, 합리적인 부산 렌터카.</p>
        <div className="kinetic-hero__actions flex [gap:13px] [margin-top:37px] [flex-wrap:wrap]">
          <Link className="kinetic-hero__primary [background:var(--kinetic-lime)] [color:#151b1b]" href="/cars">차량·요금 확인 <Icon name="arrowRight" size={19}/></Link>
          <PhoneLink placement="hero" className="kinetic-hero__secondary [background:#ffffff15] [backdrop-filter:blur(20px)] [border:1px_solid_#ffffff66] text-paper">바로 전화하기 <Icon name="arrow" size={19}/></PhoneLink>
        </div>
      </div>
      <div className="kinetic-hero__bottom">
        <div className="kinetic-hero__tabs flex [gap:10px]" role="group" aria-label="메인 차량 장면 선택">
          {moments.map((item,i)=><button key={item.id} type="button" onClick={()=>setActive(i)} aria-pressed={i===active} className={`kinetic-hero__tab [background:transparent] [border:0] [border-top:1px_solid_#ffffff4d] [color:#ffffffa8] [min-width:125px] [padding:16px_5px_6px_1px] relative flex items-center [gap:11px] [font-size:10px] [letter-spacing:.12em] [font-weight:730] text-left [transition:color_.3s] ${i===active?"is-active":""}`}><span className="kinetic-hero__tab-line absolute [top:-2px] [left:0] [width:0] [height:3px] [background:var(--kinetic-lime)] [transition:width_.5s_cubic-bezier(.16,1,.3,1)]"/><span>{String(i+1).padStart(2,"0")}</span>{item.short}</button>)}
        </div>
        <a className="kinetic-hero__scroll [font-size:10px] [font-weight:750] [letter-spacing:.16em] [color:#ffffffc1] flex [gap:16px] items-center" href="#intro">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a>
      </div>
    </div>
  </section>;
}
