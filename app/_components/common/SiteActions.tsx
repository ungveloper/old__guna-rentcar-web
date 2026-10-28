"use client";

import { useInquiry } from "@/app/_components/common/InquiryProvider";

type Props = { vehicleId?: string; service?: string; className?: string; light?: boolean; compact?: boolean };

/** 큰 전화 상담 + 작은 노션 상담 요청. 어디서든 동일한 디자인과 동작. */
export function SiteActions({ vehicleId, service, className = "", light = false, compact = false }: Props) {
  const { openInquiry } = useInquiry();
  return <div className={`flex w-full flex-wrap items-stretch gap-3 sm:w-auto ${className}`}>
    <a href="tel:0518661124" aria-label="건아렌트카 전화로 예약 상담 051-866-1124" className={`inline-flex min-h-14 flex-[2] items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-extrabold shadow-sm transition-colors sm:flex-none ${compact ? "sm:px-5" : "sm:px-8"} ${light ? "bg-white text-charcoal hover:bg-silver" : "bg-charcoal text-white hover:bg-ink"}`}>
      <span aria-hidden="true">☎</span> 전화로 예약 상담
    </a>
    <button type="button" onClick={() => openInquiry({ vehicleId, service })} className={`inline-flex min-h-14 flex-1 items-center justify-center rounded-full border px-4 py-3 text-sm font-bold transition-colors sm:flex-none ${light ? "border-white/40 bg-white/10 text-white hover:bg-white/20" : "border-line bg-white text-ink hover:bg-silver"}`}>
      상담 요청 남기기
    </button>
  </div>;
}
