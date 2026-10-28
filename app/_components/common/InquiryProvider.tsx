"use client";

import { createContext, useCallback, useContext, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { Toaster, toast } from "sonner";

export type InquiryContextValue = { openInquiry: (context?: { vehicleId?: string; service?: string }) => void };
const InquiryContext = createContext<InquiryContextValue | null>(null);

export function useInquiry() {
  const value = useContext(InquiryContext);
  if (!value) throw new Error("InquiryProvider 아래에서만 useInquiry를 사용하세요.");
  return value;
}

const labelClass = "block text-sm font-semibold text-ink mb-2";
const fieldClass = "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 placeholder:text-muted";

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [context, setContext] = useState<{ vehicleId?: string; service?: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const firstField = useRef<HTMLInputElement>(null);
  const dialogRef = useRef<HTMLElement>(null);
  const trigger = useRef<Element | null>(null);
  const formId = useId();
  const openInquiry = useCallback((next?: { vehicleId?: string; service?: string }) => {
    trigger.current = document.activeElement;
    setContext(next ?? {});
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    if (submitting) return;
    setOpen(false);
    if (trigger.current instanceof HTMLElement) trigger.current.focus();
  }, [submitting]);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusId = requestAnimationFrame(() => firstField.current?.focus());
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); close(); }
      if (event.key === "Tab" && dialogRef.current) {
        const focusables = [...dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled]), input:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]), a[href]')].filter(el => el.getClientRects().length > 0);
        if (!focusables.length) return;
        const first = focusables[0], last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previous; cancelAnimationFrame(focusId); window.removeEventListener("keydown", onKey); };
  }, [isOpen, close]);

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/inquiries", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, vehicleId: context.vehicleId ?? "", service: context.service ?? "" }),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };
      if (!response.ok || !result.ok) throw new Error(result.message || "접수를 완료할 수 없습니다.");
      toast.success("상담 요청이 접수되었습니다.", { description: "확인 후 전화로 안내드리겠습니다. 접수는 예약 확정이 아닙니다." });
      form.reset();
      setOpen(false);
      if (trigger.current instanceof HTMLElement) trigger.current.focus();
    } catch (error) {
      toast.error("상담 요청을 저장하지 못했습니다.", {
        description: error instanceof Error ? error.message : "전화 051-866-1124로 문의해 주세요.",
        duration: 6500,
      });
    } finally { setSubmitting(false); }
  };

  return <InquiryContext.Provider value={{ openInquiry }}>
    {children}
    <Toaster position="top-center" richColors closeButton />
    {isOpen && <div className="fixed inset-0 z-[300] flex items-center justify-center overflow-y-auto bg-black/75 px-4 py-8" onMouseDown={event => { if (event.currentTarget === event.target) close(); }}>
      <section ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={`${formId}-title`} className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <button type="button" onClick={close} disabled={submitting} aria-label="상담 요청 닫기" className="absolute right-5 top-5 flex size-9 items-center justify-center rounded-full bg-silver text-ink hover:bg-line">✕</button>
        <p className="mb-2 text-xs font-bold tracking-widest text-gold-dark">GUN-A RENTCAR · INQUIRY</p>
        <h2 id={`${formId}-title`} className="mb-2 text-3xl font-extrabold tracking-tight text-ink">상담 요청 남기기</h2>
        <p className="mb-6 text-sm leading-relaxed text-muted">희망 차량과 일정을 남겨주시면 전화로 안내드립니다. <strong>접수만으로 예약이 확정되지는 않습니다.</strong></p>
        <form onSubmit={submit} className="space-y-4">
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <div><label htmlFor={`${formId}-name`} className={labelClass}>성함 <span className="text-red-600">*</span></label><input id={`${formId}-name`} name="name" ref={firstField} required minLength={2} maxLength={50} autoComplete="name" className={fieldClass} placeholder="성함을 입력하세요" /></div>
          <div><label htmlFor={`${formId}-phone`} className={labelClass}>연락처 <span className="text-red-600">*</span></label><input id={`${formId}-phone`} name="phone" type="tel" required maxLength={25} autoComplete="tel" inputMode="tel" className={fieldClass} placeholder="010-0000-0000" /></div>
          <div><label htmlFor={`${formId}-date`} className={labelClass}>희망 이용 시작일 <span className="font-normal text-muted">(선택)</span></label><input id={`${formId}-date`} name="desiredDate" type="date" className={fieldClass} /></div>
          <div><label htmlFor={`${formId}-message`} className={labelClass}>문의 내용 <span className="font-normal text-muted">(선택)</span></label><textarea id={`${formId}-message`} name="message" rows={3} maxLength={1000} className={fieldClass} placeholder="대여 기간, 인수 장소, 궁금한 점 등을 남겨주세요" /></div>
          {(context.vehicleId || context.service) && <p className="rounded-lg bg-silver px-3 py-2 text-xs text-muted">문의 구분: {[context.service, context.vehicleId].filter(Boolean).join(" · ")}</p>}
          <label className="flex cursor-pointer items-start gap-3 text-xs leading-relaxed text-muted"><input type="checkbox" name="privacyConsent" value="yes" required className="mt-0.5 size-4 accent-charcoal" /><span>상담 연락을 위해 이름·연락처·문의 내용이 노션 업무 데이터베이스에 저장되는 것에 동의합니다. 정보는 상담 및 후속 안내에 이용됩니다. <strong className="text-ink">(필수)</strong></span></label>
          <button type="submit" disabled={submitting} className="w-full rounded-xl bg-charcoal px-5 py-4 text-base font-bold text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:opacity-50">{submitting ? "접수 중…" : "상담 요청 접수하기"}</button>
          <a href="tel:0518661124" className="block text-center text-sm font-semibold text-muted underline underline-offset-4">빠른 상담은 051-866-1124</a>
        </form>
      </section>
    </div>}
  </InquiryContext.Provider>;
}
