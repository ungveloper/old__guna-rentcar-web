"use client";

import { useState } from "react";
import Link from "next/link";
import { faqs } from "@/data/faqs";
import { Icon } from "@/components/Icon";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);
  return <section className="section faq-section [padding:135px_0] bg-silver" id="faq" aria-labelledby="faq-title"><div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] faq-layout grid [grid-template-columns:40%_1fr] [gap:10%]">
    <div className="faq-intro"><span className="eyebrow"><span className="eyebrow-line"/> FREQUENTLY ASKED</span><h2 id="faq-title">자주 묻는<br/><em>질문들.</em></h2><p>렌터카 이용 전 알아두면 좋은 내용을 정리했습니다. 궁금한 내용은 언제든 전화로 문의해 주세요.</p><Link href="/contact" className="text-link inline-flex items-center [gap:12px] [margin-top:27px] [border-bottom:1px_solid_#333] [padding-bottom:8px] [font-weight:750] [font-size:13px]">위치 및 연락처 보기 <Icon name="arrow" size={17}/></Link></div>
    <div className="faq-list [border-top:1px_solid_#cfd0d4]">{faqs.map((faq, i) => {const isOpen = openId === faq.id; return <div className={`faq-item [border-bottom:1px_solid_#cfd0d4] ${isOpen ? "faq-item--open" : ""}`} key={faq.id}><h3><button type="button" aria-expanded={isOpen} aria-controls={`faq-panel-${faq.id}`} onClick={() => setOpenId(isOpen ? null : faq.id)}><span className="faq-index [font-size:11px] [color:#9a9da2] [min-width:25px]">{String(i + 1).padStart(2, "0")}</span><span>{faq.question}</span><span className="faq-toggle [margin-left:auto] [color:#666] grid [place-items:center]"><Icon name={isOpen ? "minus" : "plus"} size={18}/></span></button></h3><div id={`faq-panel-${faq.id}`} className="faq-answer [padding:0_20px_25px_45px] [color:#70737a] [font-size:14px] [line-height:1.9]" hidden={!isOpen}><p>{faq.answer}</p></div></div>;})}</div>
  </div></section>;
}
