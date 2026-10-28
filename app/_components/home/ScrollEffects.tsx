"use client";

import { useEffect } from "react";

/** Optional scroll choreography: all page content remains available without JS. */
export function ScrollEffects() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const progress = document.querySelector<HTMLElement>(".reading-progress");
    const visuals = reducedMotion ? [] : Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-visual]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const range = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      progress?.style.setProperty("transform", `scaleX(${Math.min(1, Math.max(0, window.scrollY / range))})`);

      for (const element of visuals) {
        const rect = element.getBoundingClientRect();
        if (rect.bottom < -80 || rect.top > window.innerHeight + 80) continue;
        const displacement = ((rect.top + rect.height / 2) - window.innerHeight / 2) / Math.max(1, window.innerHeight);
        const shift = Math.min(28, Math.max(-28, displacement * -35));
        element.style.setProperty("--scroll-shift", `${shift.toFixed(1)}px`);
      }
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };

    let observer: IntersectionObserver | undefined;
    if (!reducedMotion && "IntersectionObserver" in window) {
      const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer?.unobserve(entry.target);
        });
      }, { threshold: 0.07, rootMargin: "0px 0px -32px 0px" });
      elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight * 0.9) return;
        element.classList.add("will-reveal");
        observer?.observe(element);
      });
    }

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);
  return <div className="reading-progress fixed [top:0] [left:0] w-full [height:3px] [background:var(--kinetic-lime)] [z-index:150] [transform:scaleX(0)] [transform-origin:left_center] [pointer-events:none] [@media(max-width:760px)]:h-[2px]" aria-hidden="true" />;
}
