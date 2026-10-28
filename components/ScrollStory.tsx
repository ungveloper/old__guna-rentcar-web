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
    <section ref={sectionRef} className={("story-scroll") + " [--story-progress:0] relative [height:340svh] bg-[#080b10] text-paper [@media(max-width:760px)]:[height:290svh] [@media(max-width:760px)]:[height:320svh]"} id="about" aria-label="이용 목적별 추천 차량">
      <div className={("story-scroll__sticky") + " sticky top-18 [height:calc(100svh_-_72px)] min-h-[630px] overflow-hidden [isolation:isolate] [@media(max-width:760px)]:top-[63px] [@media(max-width:760px)]:[height:calc(100svh_-_63px)] [@media(max-width:760px)]:min-h-[620px] [min-height:0] [@media(max-width:760px)]:top-18 [@media(max-width:760px)]:[height:calc(100svh_-_72px)] [@media(max-width:760px)]:[min-height:0] [@media(max-width:600px)]:top-[63px] [@media(max-width:600px)]:[height:calc(100svh_-_63px_-_76px_-_env(safe-area-inset-bottom,0px))] [@media(max-width:600px)]:[min-height:0]"} ref={stickyRef}>
        <div className={("story-scroll__media absolute [inset:0_0_0_40%] overflow-hidden") + " [@media(max-width:1050px)]:[left:30%] [@media(max-width:760px)]:[inset:0]"} aria-hidden="true">
          {displayStories.map((story, index) => (
            <div key={story.key} className={(`story-scroll__scene absolute [inset:0] opacity-0 [transform:scale(1.08)] [transition:opacity_.7s_ease,transform_1.2s_cubic-bezier(.16,1,.3,1)] ${index === active ? "is-active" : ""}`) + " [&.is-active]:opacity-100 [&.is-active]:[transform:scale(1)] [&_img]:object-cover [&_img]:[object-position:52%_center] [@media(max-width:760px)]:[&_img]:[object-position:center_42%] [@media(prefers-reduced-motion:reduce)]:[animation:none] [@media(prefers-reduced-motion:reduce)]:[transition:none] [@media(prefers-reduced-motion:reduce)]:[transform:none] [&.is-active]:[transform:translate3d(0,var(--story-image-offset,0px),0)_scale(var(--story-image-scale,1.04))] [@media(max-width:600px)]:[&_img]:[object-position:center_39%] [@media(prefers-reduced-motion:reduce)]:[&.is-active]:[transform:none]"}>
              <Image fill sizes="(max-width: 800px) 100vw, 58vw" src={story.image} alt="" />
            </div>
          ))}
        </div>
        <div className={("story-scroll__shade absolute [inset:0] [pointer-events:none] [background:linear-gradient(90deg,#090c12_0%,#090c12_29%,#090c12d6_44%,#090c1245_72%,#090c121a_100%),linear-gradient(0deg,#090c12a8,transparent_34%)]") + " [@media(max-width:760px)]:[background:linear-gradient(0deg,#080b10_0%,#080b10e8_30%,#080b1045_80%),linear-gradient(90deg,#080b1085,transparent_85%)] [@media(max-width:600px)]:[background:linear-gradient(0deg,#080b10_0%,#080b10ef_25%,#080b10a0_50%,#080b1020_83%),linear-gradient(90deg,#080b1069,transparent_85%)]"} />
        <div className={("container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] story-scroll__inner") + " [@media(max-width:1180px)]:[width:calc(100%_-_64px)] [@media(max-width:900px)]:[width:calc(100%_-_48px)] [@media(max-width:600px)]:[width:calc(100%_-_36px)] h-full relative flex flex-col justify-between pt-[62px] pb-12 [@media(max-width:760px)]:pt-[27px] [@media(max-width:760px)]:pb-[35px] [@media(max-width:760px)]:[padding-top:clamp(18px,3svh,30px)] [@media(max-width:760px)]:[padding-bottom:clamp(14px,2.5svh,24px)] [@media(max-width:600px)_and_(max-height:690px)]:pt-[13px] [@media(max-width:600px)_and_(max-height:690px)]:pb-[10px]"}>
          <div className={("story-scroll__intro") + " flex items-center justify-between gap-[15px] [@media(max-width:760px)]:block [@media(max-width:760px)]:[&_.micro-label]:text-[9px] [@media(max-width:600px)]:relative [@media(max-width:600px)]:[z-index:2]"}>
            <span className={("micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)] micro-label--light [color:#e0cba5]") + " [@media(max-width:600px)]:text-[10px] [@media(max-width:600px)]:[letter-spacing:.15em]"}>CHOOSE YOUR RENTAL</span>
            <span className={("story-scroll__tag [font-size:11px] [color:#fff9] [letter-spacing:.04em]") + " [@media(max-width:760px)]:block [@media(max-width:760px)]:mt-[9px] [@media(max-width:760px)]:text-[11px] [@media(max-width:600px)_and_(max-height:690px)]:hidden"}>이용 목적에 맞춘 차량 안내</span>
          </div>
          <div className={("story-scroll__copy relative [width:min(650px,63%)] [flex:1] flex items-center") + " [@media(max-width:1050px)]:[width:min(620px,77%)] [@media(max-width:760px)]:w-full [@media(max-width:760px)]:items-end [@media(max-width:760px)]:pb-28 [@media(max-width:400px)]:pb-31 [@media(max-width:760px)]:[min-height:0] [@media(max-width:760px)]:[padding-bottom:clamp(16px,3svh,32px)] [@media(max-width:600px)]:pb-3 [@media(max-width:600px)_and_(max-height:690px)]:pb-[7px]"} aria-live="off">
            {displayStories.map((story, index) => (
              <div key={story.key} className={(`story-scroll__copy-item absolute [inset:auto_0] opacity-0 [transform:translateY(38px)] [pointer-events:none] [transition:opacity_.5s_ease,transform_.7s_cubic-bezier(.16,1,.3,1)] ${index === active ? "is-active" : ""}`) + " [&.is-active]:opacity-100 [&.is-active]:[transform:translateY(0)] [&.is-active]:[pointer-events:auto] [&>p:first-child]:text-[11px] [&>p:first-child]:[letter-spacing:.22em] [&>p:first-child]:font-extrabold [&>p:first-child]:[color:var(--kinetic-lime)] [&_h2]:text-[clamp(52px,6.9vw,105px)] [&_h2]:[line-height:1.07] [&_h2]:[letter-spacing:-.083em] [&_h2]:font-[820] [&_h2]:[margin:23px_0] [&>a]:inline-flex [&>a]:items-center [&>a]:gap-[13px] [&>a]:[border-bottom:1px_solid_#fffc] [&>a]:pb-[9px] [&>a]:mt-[31px] [&>a]:text-sm [&>a]:font-[750] [@media(max-width:760px)]:[bottom:0] [@media(max-width:760px)]:[top:auto] [@media(max-width:760px)]:[&_h2]:text-[clamp(52px,11vw,80px)] [@media(max-width:760px)]:[&_h2]:[margin:16px_0_13px] [@media(max-width:760px)]:[&>a]:mt-5 [@media(max-width:760px)]:[&>a]:text-xs [@media(prefers-reduced-motion:reduce)]:[animation:none] [@media(prefers-reduced-motion:reduce)]:[transition:none] [@media(prefers-reduced-motion:reduce)]:[transform:none] [@media(max-width:760px)]:[inset:auto_0_0] [@media(max-width:760px)]:[&_h2]:text-[clamp(35px,9.2vw,60px)] [@media(max-width:760px)]:[&_h2]:[line-height:1.08] [@media(max-width:760px)]:[&_h2]:[letter-spacing:-.065em] [@media(max-width:760px)]:[&_h2]:[margin:12px_0_10px] [@media(max-width:760px)]:[&>p:first-child]:text-[10px] [@media(max-width:760px)]:[&>p:first-child]:[letter-spacing:.13em] [@media(max-width:760px)]:[&>a]:mt-[13px] [@media(max-width:760px)]:[&>a]:min-h-[28px] [@media(max-width:600px)]:[&_h2]:text-[clamp(36px,9.5vw,56px)] [@media(max-width:600px)_and_(max-height:690px)]:[&_h2]:text-[clamp(31px,8.6vw,46px)] [@media(max-width:600px)_and_(max-height:690px)]:[&_h2]:[margin:8px_0] [@media(max-width:600px)_and_(max-height:690px)]:[&>a]:mt-2"} aria-hidden={index !== active}>
                <p>{story.index} / {story.category}</p>
                <h2>{story.title}</h2>
                <p className={("story-scroll__description [font-size:clamp(15px,1.4vw,19px)] [color:#e0e2e5] [max-width:430px] [word-break:keep-all]") + " [@media(max-width:760px)]:text-sm [@media(max-width:760px)]:max-w-[360px] [@media(max-width:760px)]:text-[clamp(12px,1.9vw,15px)] [@media(max-width:760px)]:[line-height:1.58] [@media(max-width:760px)]:m-0 [@media(max-width:600px)_and_(max-height:690px)]:text-xs [@media(max-width:600px)_and_(max-height:690px)]:[line-height:1.48]"}>{story.description}</p>
                <Link href="/cars" tabIndex={index === active ? 0 : -1}>
                  전체 차량·요금 확인 <Icon name="arrowRight" size={18} />
                </Link>
              </div>
            ))}
          </div>
          <div className={("story-scroll__footer") + " flex justify-between [align-items:end] gap-[26px] [@media(max-width:760px)]:items-center [@media(max-width:760px)]:items-end [@media(max-width:760px)]:gap-[15px] [@media(max-width:600px)]:relative [@media(max-width:600px)]:[z-index:2]"}>
            <div className={("story-scroll__progress flex [gap:8px] [width:min(480px,52%)]") + " [&_span]:h-[3px] [&_span]:[flex:1] [&_span]:bg-[#ffffff4d] [&_span]:[transition:background_.4s] [&_span.is-active]:[background:var(--kinetic-lime)] [@media(max-width:760px)]:[width:34%] [&_span]:relative [&_span]:overflow-hidden [&_span]:[background:#ffffff49]! [&_span::after]:[content:''] [&_span::after]:absolute [&_span::after]:[inset:0_auto_0_0] [&_span::after]:[width:var(--story-segment-fill,0%)] [&_span::after]:[background:var(--kinetic-lime)] [&_span::after]:[transition:width_.1s_linear] [@media(max-width:760px)]:pb-2 [@media(prefers-reduced-motion:reduce)]:[&_span::after]:[transition:none]"} ref={progressRef} aria-label={`차량 추천 ${active + 1}/${displayStories.length}`}>
              {displayStories.map((story, index) => <span key={story.key} className={index <= active ? "is-active" : ""} />)}
            </div>
            <div className={("story-scroll__vehicle flex flex-col items-end [gap:6px]") + " [&>span]:text-xs [&>span]:font-bold [&>span]:text-[#e1e4e7] [&_strong]:text-[27px] [&_strong]:[letter-spacing:-.05em] [&_strong_small]:text-xs [&_strong_small]:font-medium [&_strong_small]:[letter-spacing:0] [&>small]:text-[10px] [&>small]:text-[#bec0c4] [@media(max-width:760px)]:[&_strong]:text-xl [@media(max-width:760px)]:[&>small]:text-[9px] [@media(max-width:400px)]:[&>small]:hidden [@media(max-width:760px)]:[&>span]:text-[11px] [@media(max-width:760px)]:[&_strong]:text-[19px] [@media(max-width:600px)]:gap-[3px] [@media(max-width:600px)]:[max-width:67%] [@media(max-width:600px)]:text-right [@media(max-width:600px)]:[&>small]:text-[9px] [@media(max-width:600px)_and_(max-height:690px)]:[&>small]:hidden"}>
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
