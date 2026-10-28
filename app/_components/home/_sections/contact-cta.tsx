import { SiteActions } from "@/app/_components/common/SiteActions";


/** Homepage contact-cta: a separately reusable, server-rendered section. */
export function HomeContactCtaSection() {
  return (
    <section className={"contact-cta [padding:134px_0] [background:radial-gradient(ellipse_at_50%_0,#34353b_0%,#17191f_51%,#0a0d11_100%)] text-paper text-center [&_h2]:text-[clamp(57px,8vw,112px)] [&_h2]:font-[760] [&_h2]:[line-height:1.1] [&_h2]:[margin:24px_0_21px] [&_p]:text-lg [&_p]:text-[#c3c4c9] [&_p]:mb-[34px] [&_.pill]:min-w-[270px] [@media(max-width:600px)]:[padding:96px_0] [@media(max-width:600px)]:[&_h2]:text-[clamp(49px,12vw,74px)] [@media(max-width:600px)]:[&_p]:text-[15px] bg-[#0e1319] [&_.pill--white]:[background:var(--kinetic-lime)] [&_.pill--white]:text-[#111] [&_.pill--white:hover]:bg-[#edfda3]"} aria-labelledby="cta-title"><div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] contact-cta__inner [@media(max-width:1180px)]:[width:calc(100%_-_64px)] [@media(max-width:900px)]:[width:calc(100%_-_48px)] [@media(max-width:600px)]:[width:calc(100%_-_36px)]"><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)] micro-label--light [color:#e0cba5] [@media(max-width:600px)]:text-[10px] [@media(max-width:600px)]:[letter-spacing:.15em]">READY FOR THE NEXT DRIVE?</span><h2 id="cta-title">차량·대여 조건,<br/>전화로 확인하세요.</h2><p>필요한 차량과 일정을 알려주세요.<br/>건아렌트카가 전화로 안내해 드립니다.</p><SiteActions service="home" light className="mx-auto justify-center" /></div></section>
  );
}
