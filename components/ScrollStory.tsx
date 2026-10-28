"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/Icon";
import { vehicles } from "@/data/vehicles";

const stories = [
  { key: "city", index: "01", category: "CITY / COMPACT", title: "가벼운 도심 이동.", description: "가까운 일정과 일상적인 이동에 알맞은 경차를 살펴보세요.", vehicleId: "ray", label: "1~2일 기준 · 1일 요금" },
  { key: "weekend", index: "02", category: "WEEKEND / SUV", title: "주말과 장거리 이동.", description: "여행 일정과 짐의 양에 맞춰 SUV를 선택할 수 있습니다.", vehicleId: "tucson", label: "1~2일 기준 · 1일 요금" },
  { key: "group", index: "03", category: "TOGETHER / VAN", title: "여럿이 함께하는 이동.", description: "가족 나들이와 단체 이동에 적합한 승합차를 확인해 보세요.", vehicleId: "carnival", label: "1~2일 기준 · 1일 요금" },
] as const;
const displayStories = stories.map((item) => {
  const vehicle = vehicles.find((car) => car.id === item.vehicleId);
  if (!vehicle) throw new Error(`Missing rental vehicle data: ${item.vehicleId}`);
  return { ...item, car: vehicle.model, image: vehicle.image, price: vehicle.rates.days1to2.toLocaleString("ko-KR") };
});

const clamp = (value: number) => Math.min(1, Math.max(0, value));

/** Scroll-bound scene changes; images/copy remain in the initial HTML for SEO. */
export function ScrollStory() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const lastActiveRef = useRef(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    if (!section || !sticky) return;

    let frame = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      frame = 0;
      const topOffset = Number.parseFloat(window.getComputedStyle(sticky).top) || 0;
      const travel = Math.max(1, section.offsetHeight - sticky.offsetHeight);
      const progress = clamp((topOffset - section.getBoundingClientRect().top) / travel);
      const position = Math.min(displayStories.length - Number.EPSILON, progress * displayStories.length);
      const nextActive = Math.min(displayStories.length - 1, Math.floor(position));
      if (nextActive !== lastActiveRef.current) {
        lastActiveRef.current = nextActive;
        setActive(nextActive);
      }
      section.style.setProperty("--story-progress", progress.toFixed(4));

      // Each segment fills progressively as the user scrolls, not only at scene boundaries.
      progressRef.current?.querySelectorAll<HTMLElement>("span").forEach((segment, index) => {
        segment.style.setProperty("--story-segment-fill", `${Math.round(clamp(position - index) * 100)}%`);
      });
      if (!reducedMotion.matches) {
        const local = clamp(position - nextActive);
        section.style.setProperty("--story-image-scale", (1.06 - local * 0.045).toFixed(3));
        section.style.setProperty("--story-image-offset", `${(-11 * local).toFixed(1)}px`);
      }
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section ref={sectionRef} className="story-scroll" id="about" aria-label="이용 목적별 추천 차량">
      <div className="story-scroll__sticky" ref={stickyRef}>
        <div className="story-scroll__media absolute [inset:0_0_0_40%] overflow-hidden" aria-hidden="true">
          {displayStories.map((story, index) => (
            <div key={story.key} className={`story-scroll__scene absolute [inset:0] opacity-0 [transform:scale(1.08)] [transition:opacity_.7s_ease,transform_1.2s_cubic-bezier(.16,1,.3,1)] ${index === active ? "is-active" : ""}`}>
              <Image fill sizes="(max-width: 800px) 100vw, 58vw" src={story.image} alt="" />
            </div>
          ))}
        </div>
        <div className="story-scroll__shade absolute [inset:0] [pointer-events:none] [background:linear-gradient(90deg,#090c12_0%,#090c12_29%,#090c12d6_44%,#090c1245_72%,#090c121a_100%),linear-gradient(0deg,#090c12a8,transparent_34%)]" />
        <div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] story-scroll__inner">
          <div className="story-scroll__intro">
            <span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)] micro-label--light [color:#e0cba5]">CHOOSE YOUR RENTAL</span>
            <span className="story-scroll__tag [font-size:11px] [color:#fff9] [letter-spacing:.04em]">이용 목적에 맞춘 차량 안내</span>
          </div>
          <div className="story-scroll__copy relative [width:min(650px,63%)] [flex:1] flex items-center" aria-live="off">
            {displayStories.map((story, index) => (
              <div key={story.key} className={`story-scroll__copy-item absolute [inset:auto_0] opacity-0 [transform:translateY(38px)] [pointer-events:none] [transition:opacity_.5s_ease,transform_.7s_cubic-bezier(.16,1,.3,1)] ${index === active ? "is-active" : ""}`} aria-hidden={index !== active}>
                <p>{story.index} / {story.category}</p>
                <h2>{story.title}</h2>
                <p className="story-scroll__description [font-size:clamp(15px,1.4vw,19px)] [color:#e0e2e5] [max-width:430px] [word-break:keep-all]">{story.description}</p>
                <Link href="/cars" tabIndex={index === active ? 0 : -1}>
                  전체 차량·요금 확인 <Icon name="arrowRight" size={18} />
                </Link>
              </div>
            ))}
          </div>
          <div className="story-scroll__footer">
            <div className="story-scroll__progress flex [gap:8px] [width:min(480px,52%)]" ref={progressRef} aria-label={`차량 추천 ${active + 1}/${displayStories.length}`}>
              {displayStories.map((story, index) => <span key={story.key} className={index <= active ? "is-active" : ""} />)}
            </div>
            <div className="story-scroll__vehicle flex flex-col items-end [gap:6px]">
              <span>{displayStories[active].car}</span>
              <strong>{displayStories[active].price}원 <small>/ 1일</small></strong>
              <small>{displayStories[active].label}</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
