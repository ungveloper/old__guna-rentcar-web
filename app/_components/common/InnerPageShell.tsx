import type { ReactNode } from "react";
import { Header } from "@/app/_components/common/Header";
import { SiteFooter } from "@/app/_components/common/SiteFooter";
import { MobileCallBar } from "@/app/_components/common/MobileCallBar";
import { PhoneLink } from "@/app/_components/common/PhoneLink";
import { Icon } from "@/app/_components/common/Icon";

export function InnerPageShell({ children }: { children: ReactNode }) {
  return <>
    <a className={"skip-link fixed [z-index:300] [top:-60px] [left:15px] bg-paper [color:#111] [padding:12px_20px] [&:focus]:top-[10px]"} href="#detail-main">본문으로 바로가기</a>
    <Header />
    <main id="detail-main">{children}</main>
    <div className={"detail-bottom-cta [background:radial-gradient(ellipse_at_60%_0%,#34383f,#101318_75%)] text-paper [padding:110px_0] [&_h2]:text-[clamp(45px,5.2vw,78px)] [&_h2]:[letter-spacing:-.065em] [&_h2]:[line-height:1.15] [&_h2]:[margin:18px_0] [&_p]:text-sm [&_p]:[line-height:1.8] [&_p]:text-[#b9bdc5] [@media(max-width:750px)]:[padding:75px_0_120px]"}>
      <div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] detail-bottom-cta__inner [@media(max-width:1180px)]:[width:calc(100%_-_64px)] [@media(max-width:900px)]:[width:calc(100%_-_48px)] [@media(max-width:600px)]:[width:calc(100%_-_36px)] flex justify-between items-end gap-[30px] [@media(max-width:750px)]:block">
        <div><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)] micro-label--light [color:#e0cba5] [@media(max-width:600px)]:text-[10px] [@media(max-width:600px)]:[letter-spacing:.15em]">GUN-A RENTCAR · BUSAN</span><h2>필요한 차량과 일정,<br />전화로 문의하세요.</h2><p>대여 가능 여부와 최종 요금·조건은 전화 상담으로 안내해 드립니다.</p></div>
        <PhoneLink placement="service_bottom" className={"detail-call-button inline-flex items-center justify-center gap-[13px] bg-paper text-[#16191f] rounded-[100px] [padding:19px_24px] font-extrabold [white-space:nowrap] [transition:transform_.2s] [&:hover]:[transform:translateY(-3px)] [@media(max-width:750px)]:mt-5"}><Icon name="phone" size={19} /> 051-866-1124 <Icon name="arrowRight" size={18}/></PhoneLink>
      </div>
    </div>
    <SiteFooter />
    <MobileCallBar />
  </>;
}
