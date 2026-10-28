"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { visiblePromoCards } from "@/data/promotions";

export function PromotionCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(visiblePromoCards.length > 1);

  const updatePosition = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-promo-slide]"));
    const left = track.getBoundingClientRect().left;
    let nearestIndex = 0;
    let nearestDistance = Infinity;
    cards.forEach((card, index) => {
      const distance = Math.abs(card.getBoundingClientRect().left - left);
      if (distance < nearestDistance) {
        nearestIndex = index;
        nearestDistance = distance;
      }
    });
    setActiveIndex(nearestIndex);
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 4);
  }, []);

  useEffect(() => {
    updatePosition();
    window.addEventListener("resize", updatePosition);
    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(updatePosition) : null;
    if (trackRef.current) observer?.observe(trackRef.current);
    return () => {
      window.removeEventListener("resize", updatePosition);
      observer?.disconnect();
    };
  }, [updatePosition]);

  const scrollToCard = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.querySelectorAll<HTMLElement>("[data-promo-slide]"));
    if (cards.length === 0) return;
    const target = Math.max(0, Math.min(index, cards.length - 1));
    track.scrollTo({
      left: cards[target].offsetLeft - cards[0].offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  };

  if (visiblePromoCards.length === 0) return null;

  const activePromotions = visiblePromoCards.filter((card) => card.kind === "promotion").length;

  return (
    <section className={"promo-section relative overflow-hidden [background:#f4f5f7] [padding:100px_0_98px] [color:#15181f]"} id="promotions" aria-labelledby="promotions-title">
      <div className={"promo-wrapper [width:min(100%_-_96px,1360px)] [margin:0_auto]"}>
        <div className={"promo-heading"}>
          <div>
            <div className={"promo-kicker flex items-center [gap:9px] [font-size:11px] [letter-spacing:.17em] [color:#8b7452] font-extrabold"}><span className={"promo-dot [width:7px] [height:7px] [border-radius:50%] [background:#b7a07b] [box-shadow:0_0_0_4px_rgba(183,160,123,.13)]"} /> WHAT&apos;S ON AT GUN-A</div>
            <h2 id="promotions-title">이벤트와 이용 안내<span className={"promo-titlePoint [color:#ab9168]"}>.</span></h2>
            <p>차량을 선택하기 전 알아두면 좋은 소식과 이용 정보를 확인하세요.</p>
          </div>
          <div className={"promo-toolbar flex items-center [gap:9px] [flex-shrink:0] [padding-bottom:3px]"}>
            <span className={"promo-counter [color:#969aa3] [font-size:12px] [letter-spacing:.1em] [margin-right:16px] [font-variant-numeric:tabular-nums]"} aria-live="polite"><strong>{String(activeIndex + 1).padStart(2, "0")}</strong> / {String(visiblePromoCards.length).padStart(2, "0")}</span>
            <button className={"promo-arrow grid [place-items:center] [border:1px_solid_#d8dbe0] bg-paper [color:#1c2028] [border-radius:50%] [width:45px] [height:45px] [transition:color_.2s,background_.2s,transform_.2s,border-color_.2s] [font-size:20px] [line-height:1]"} type="button" aria-label="이전 안내 카드" onClick={() => scrollToCard(activeIndex - 1)} disabled={!canPrev}><span aria-hidden="true">←</span></button>
            <button className={"promo-arrow grid [place-items:center] [border:1px_solid_#d8dbe0] bg-paper [color:#1c2028] [border-radius:50%] [width:45px] [height:45px] [transition:color_.2s,background_.2s,transform_.2s,border-color_.2s] [font-size:20px] [line-height:1]"} type="button" aria-label="다음 안내 카드" onClick={() => scrollToCard(activeIndex + 1)} disabled={!canNext}><span aria-hidden="true">→</span></button>
          </div>
        </div>
        <div className={"promo-viewport relative flex [gap:18px] [overflow-x:auto] [overflow-y:hidden] [scroll-snap-type:x_mandatory] [scroll-padding:0] [scrollbar-width:none] [-ms-overflow-style:none] [overscroll-behavior-x:contain] [touch-action:pan-x_pan-y] [padding-bottom:4px]"} ref={trackRef} onScroll={updatePosition} tabIndex={0} aria-label="프로모션 및 차량 이용 안내 카드 목록">
          {visiblePromoCards.map((card, index) => (
            <Link className={"promo-card"} style={{ position: "relative" }} href={card.href} key={card.id} data-promo-slide aria-label={`${card.title.replace("\n", " ")} - ${card.actionLabel}`}>
              <Image className={"promo-image object-cover [transform:scale(1.015)] [transition:transform_.65s_cubic-bezier(.2,.8,.2,1)]"} src={card.image} fill sizes="(max-width: 650px) 78vw, (max-width: 1050px) 43vw, 330px" alt={card.imageAlt} style={{ objectPosition: card.imagePosition ?? "center" }} />
              <span className={"promo-shade absolute [inset:0] [background:linear-gradient(180deg,rgba(10,13,19,.46)_0%,rgba(10,13,19,.08)_23%,rgba(7,9,14,.28)_47%,rgba(7,9,14,.95)_100%)] [z-index:1]"} aria-hidden="true" />
              <span className={"promo-badge absolute [z-index:2] [left:22px] [top:22px] [border:1px_solid_rgba(255,255,255,.42)] [background:rgba(12,16,23,.3)] [backdrop-filter:blur(13px)] text-paper rounded-[100px] [padding:8px_12px] [font-size:10px] [font-weight:750] [letter-spacing:.13em]"}>{card.kind === "promotion" ? "EVENT" : "GUIDE"}</span>
              <span className={"promo-serial absolute [z-index:2] [right:21px] [top:25px] [font-size:11px] font-bold [letter-spacing:.08em] [color:#ffffffb8]"}>{String(index + 1).padStart(2, "0")}</span>
              <span className={"promo-cardContent relative [z-index:2] flex flex-col [padding:29px_25px_25px] items-start"}>
                <span className={"promo-eyebrow [font-size:10px] [letter-spacing:.2em] font-extrabold [color:#d6c39e] [margin-bottom:11px]"}>{card.eyebrow}</span>
                <strong className={"promo-cardTitle [font-size:clamp(24px,2.05vw,31px)] font-extrabold [line-height:1.28] [letter-spacing:-.058em] [white-space:pre-line] [word-break:keep-all]"}>{card.title}</strong>
                <span className={"promo-description [font-size:12px] [color:#e6e8eb] [line-height:1.58] [margin-top:11px] [min-height:37px] [word-break:keep-all]"}>{card.description}</span>
                {card.finePrint ? <span className={"promo-finePrint [font-size:10px] [line-height:1.5] [color:#bdc1c7] [margin-top:9px] [word-break:keep-all]"}>{card.finePrint}</span> : null}
                <span className={"promo-action"}>{card.actionLabel} <span aria-hidden="true">↗</span></span>
              </span>
            </Link>
          ))}
          <div className={"promo-endSpacer hidden"} aria-hidden="true" />
        </div>
        <div className={"promo-footer"}>
          <div className={"promo-dots flex items-center [gap:7px]"} aria-label="안내 카드 바로가기">
            {visiblePromoCards.map((card, index) => <button type="button" key={card.id} aria-label={`${index + 1}번째 카드로 이동`} aria-current={index === activeIndex ? "true" : undefined} className={index === activeIndex ? "promo-dotActive" : ""} onClick={() => scrollToCard(index)} />)}
          </div>
          <Link className="promo-all-link [font-size:12px] [font-weight:780] [color:#393d46] [border-bottom:1px_solid_currentColor] [padding-bottom:6px] [white-space:nowrap]" href="/events">이벤트 전체보기 <span aria-hidden="true">↗</span></Link>
        </div>
        {activePromotions === 0 ? <p className={"promo-disclaimer [font-size:11px] [color:#8d9299] [margin:15px_0_0] [line-height:1.5]"}>현재 별도로 등록된 할인 이벤트는 없으며, 위 내용은 차량별 기준 요금 및 서비스 안내입니다.</p> : null}
      </div>
    </section>
  );
}
