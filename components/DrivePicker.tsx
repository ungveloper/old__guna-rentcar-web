"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { vehicles } from "@/data/vehicles";

const picks=[
  {id:"ray",mood:"가볍게",sub:"THE CITY EDIT",line:"도심 이동에 알맞은 경차.",caption:"가까운 거리부터 일상적인 이동까지"},
  {id:"k5",mood:"스타일 있게",sub:"THE DAILY EDIT",line:"여유 있는 중형 세단.",caption:"출퇴근부터 출장까지 편리한 선택"},
  {id:"gv80",mood:"특별하게",sub:"THE SIGNATURE EDIT",line:"넉넉한 공간의 대형 SUV.",caption:"장거리 이동과 여유로운 실내 공간"},
] as const;

export function DrivePicker(){
  const [selected,setSelected]=useState(0);
  const current=picks[selected];
  const vehicle=vehicles.find(v=>v.id===current.id);
  if(!vehicle) return null;
  return <section className={("drive-picker [background:#edf0f1] [padding:138px_0_123px] overflow-hidden") + " [@media(max-width:760px)]:[padding:93px_0_84px]"} aria-labelledby="drive-picker-title">
    <div className={("container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] drive-picker__container") + " [@media(max-width:1180px)]:[width:calc(100%_-_64px)] [@media(max-width:900px)]:[width:calc(100%_-_48px)] [@media(max-width:600px)]:[width:calc(100%_-_36px)]"}>
      <div className={("drive-picker__intro text-center") + " [&_h2]:text-[clamp(56px,7vw,105px)] [&_h2]:font-[820] [&_h2]:[letter-spacing:-.09em] [&_h2]:[line-height:1.06] [&_h2]:[margin:22px_0_16px] [&_h2_span]:text-[#a5a7ac] [&>p]:text-base [&>p]:text-[#747980] [@media(max-width:760px)]:text-left [@media(max-width:760px)]:[&_h2]:text-[clamp(51px,11.3vw,81px)] [@media(max-width:760px)]:[&>p]:text-sm"} data-reveal><span className={("micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)]") + " [@media(max-width:600px)]:text-[10px] [@media(max-width:600px)]:[letter-spacing:.15em]"}>THE DRIVE EDIT / 2026</span><h2 id="drive-picker-title">이용 목적에 맞는 차량,<br/><span>쉽게 비교하세요.</span></h2><p>추천 차종을 선택하면 차량 사진과 기준 대여 요금을 바로 확인할 수 있습니다.</p></div>
      <div className={("drive-picker__tabs") + " flex justify-center gap-[5px] [margin:39px_auto_40px] bg-[#dfe2e5] [width:max-content] max-w-full p-[5px] rounded-[99px] [&_button]:border-0 [&_button]:bg-transparent [&_button]:flex [&_button]:items-center [&_button]:gap-[9px] [&_button]:rounded-[99px] [&_button]:[padding:14px_24px] [&_button]:text-[13px] [&_button]:font-[740] [&_button]:text-[#777b82] [&_button]:[transition:background_.25s,box-shadow_.25s,color_.25s] [&_button>span]:text-[10px] [&_button>span]:[opacity:.7] [&_button.is-active]:bg-paper [&_button.is-active]:text-ink [&_button.is-active]:[box-shadow:0_4px_20px_#1a1b2022] [@media(max-width:760px)]:w-full [@media(max-width:760px)]:[justify-content:stretch] [@media(max-width:760px)]:[margin:28px_auto] [@media(max-width:760px)]:[&_button]:[flex:1] [@media(max-width:760px)]:[&_button]:justify-center [@media(max-width:760px)]:[&_button]:[padding:12px_8px] [@media(max-width:760px)]:[&_button]:text-xs [@media(max-width:760px)]:[&_button]:gap-[5px]"} role="group" aria-label="추천 차량 선택">
        {picks.map((p,i)=><button type="button" key={p.id} onClick={()=>setSelected(i)} aria-pressed={i===selected} className={i===selected?"is-active":""}><span>0{i+1}</span>{p.mood}</button>)}
      </div>
      <div className={("drive-picker__stage relative grid [grid-template-columns:1.45fr_1fr] [min-height:550px] [background:#11151b] rounded-[30px] overflow-hidden [box-shadow:0_25px_70px_#1d22221b]") + " [@media(max-width:1050px)]:[grid-template-columns:1.1fr_1fr] [@media(max-width:760px)]:flex [@media(max-width:760px)]:flex-col [@media(max-width:760px)]:rounded-[24px] [@media(max-width:760px)]:[min-height:0]"}>
        <div className={("drive-picker__media relative [min-height:500px] [animation:picker-in_.55s_ease_both]") + " [&_img]:object-cover [&_img]:[object-position:center_center] [@media(max-width:760px)]:min-h-[300px] [@media(max-width:760px)]:[aspect-ratio:1.25] [@media(prefers-reduced-motion:reduce)]:[animation:none] [@media(prefers-reduced-motion:reduce)]:[transition:none] [@media(prefers-reduced-motion:reduce)]:[transform:none]"} key={vehicle.id}><Image src={vehicle.image} alt={`${vehicle.model} 차량 사진`} fill sizes="(max-width: 760px) 100vw, 65vw" /></div>
        <div className={("drive-picker__detail") + " [padding:clamp(36px,5vw,82px)] text-white flex flex-col justify-center [&>span]:text-[10px] [&>span]:[letter-spacing:.19em] [&>span]:[color:var(--kinetic-lime)] [&>span]:font-extrabold [&_h3]:text-[clamp(37px,3.5vw,61px)] [&_h3]:[line-height:1.12] [&_h3]:[letter-spacing:-.07em] [&_h3]:[margin:27px_0_12px] [&>p]:text-sm [&>p]:text-[#aeb3b9] [&>a]:inline-flex [&>a]:items-center [&>a]:justify-between [&>a]:gap-5 [&>a]:mt-[30px] [&>a]:[align-self:flex-start] [&>a]:[background:var(--kinetic-lime)] [&>a]:rounded-[50px] [&>a]:text-[#12171b] [&>a]:[padding:15px_23px] [&>a]:text-[13px] [&>a]:font-extrabold [&>a]:[transition:transform_.2s] [&>a:hover]:[transform:translateY(-3px)] [@media(max-width:1050px)]:p-[34px] [@media(max-width:760px)]:[padding:28px_27px_32px] [@media(max-width:760px)]:[&_h3]:text-[clamp(39px,9vw,61px)] [@media(max-width:760px)]:[&_h3]:[margin:13px_0] [@media(max-width:760px)]:[&>a]:mt-[22px] [@media(prefers-reduced-motion:reduce)]:[&>a]:[transition:none]"}><span>{current.sub}</span><h3>{current.line}</h3><p>{current.caption}</p><div className={("drive-picker__meta flex flex-col [border-top:1px_solid_#ffffff30] [margin-top:48px] [padding-top:21px] [gap:7px]") + " [&>span]:text-[13px] [&>span]:text-[#c2c7cd] [&>strong]:text-[33px] [&>strong]:[letter-spacing:-.055em] [&>strong_small]:text-sm [&>strong_small]:font-[520] [&>strong_small]:[letter-spacing:0] [&>small]:text-[11px] [&>small]:text-[#929aa3] [@media(max-width:760px)]:mt-[21px] [@media(max-width:760px)]:pt-[15px] [@media(max-width:760px)]:[&>strong]:text-[28px]"}><span>{vehicle.model}</span><strong>{vehicle.rates.days1to2.toLocaleString("ko-KR")}원 <small>/ 1일</small></strong><small>1~2일 대여 기준</small></div><Link href="/cars">이 차 자세히 보기 <Icon name="arrowRight" size={18}/></Link></div>
      </div>
    </div>
  </section>;
}
