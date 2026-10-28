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
  return <section className="drive-picker [background:#edf0f1] [padding:138px_0_123px] overflow-hidden" aria-labelledby="drive-picker-title">
    <div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] drive-picker__container">
      <div className="drive-picker__intro text-center" data-reveal><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)]">THE DRIVE EDIT / 2026</span><h2 id="drive-picker-title">이용 목적에 맞는 차량,<br/><span>쉽게 비교하세요.</span></h2><p>추천 차종을 선택하면 차량 사진과 기준 대여 요금을 바로 확인할 수 있습니다.</p></div>
      <div className="drive-picker__tabs" role="group" aria-label="추천 차량 선택">
        {picks.map((p,i)=><button type="button" key={p.id} onClick={()=>setSelected(i)} aria-pressed={i===selected} className={i===selected?"is-active":""}><span>0{i+1}</span>{p.mood}</button>)}
      </div>
      <div className="drive-picker__stage relative grid [grid-template-columns:1.45fr_1fr] [min-height:550px] [background:#11151b] rounded-[30px] overflow-hidden [box-shadow:0_25px_70px_#1d22221b]">
        <div className="drive-picker__media relative [min-height:500px] [animation:picker-in_.55s_ease_both]" key={vehicle.id}><Image src={vehicle.image} alt={`${vehicle.model} 차량 사진`} fill sizes="(max-width: 760px) 100vw, 65vw" /></div>
        <div className="drive-picker__detail"><span>{current.sub}</span><h3>{current.line}</h3><p>{current.caption}</p><div className="drive-picker__meta flex flex-col [border-top:1px_solid_#ffffff30] [margin-top:48px] [padding-top:21px] [gap:7px]"><span>{vehicle.model}</span><strong>{vehicle.rates.days1to2.toLocaleString("ko-KR")}원 <small>/ 1일</small></strong><small>1~2일 대여 기준</small></div><Link href="/cars">이 차 자세히 보기 <Icon name="arrowRight" size={18}/></Link></div>
      </div>
    </div>
  </section>;
}
