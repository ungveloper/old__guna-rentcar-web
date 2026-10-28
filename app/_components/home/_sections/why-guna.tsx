import Image from "next/image";
import { Icon } from "@/app/_components/common/Icon";
import { PhoneLink } from "@/app/_components/common/PhoneLink";
import { site } from "@/data/site";


/** Homepage why-guna: a separately reusable, server-rendered section. */
export function HomeWhyGunaSection() {
  return (
    <section className={"dark-story [&_h2_span]:text-[#9a9da4] [&_h2_span]:[font-style:normal] bg-[#0e1116] text-paper grid [grid-template-columns:54%_46%] min-h-[680px] [@media(max-width:900px)]:[grid-template-columns:1fr] bg-[#10151c]"} id="benefits" aria-labelledby="story-title">
        <div className={"dark-story__visual [min-height:680px] relative overflow-hidden [&_img]:object-cover [&_img]:[object-position:center] [@media(max-width:900px)]:h-[540px] [@media(max-width:900px)]:[min-height:0] [@media(max-width:600px)]:h-[335px]"} data-scroll-visual><Image src="/images/vehicles/grandeur-gn7.webp" fill sizes="(max-width: 900px) 100vw, 56vw" alt="그랜저 GN7 측면 사진" /></div>
        <div className={"dark-story__copy [max-width:625px] [align-self:center] [padding:85px_8vw_85px_7vw] [&_h2]:text-[clamp(39px,4.3vw,68px)] [&_h2]:[line-height:1.18] [&_h2]:[margin:25px_0] [&>p]:text-[15px] [&>p]:[line-height:1.85] [&>p]:text-[#bfc2c8] [&>p]:[word-break:keep-all] [@media(max-width:1180px)]:[padding:70px_5vw] [@media(max-width:900px)]:max-w-full [@media(max-width:900px)]:[padding:85px_7vw] [@media(max-width:600px)]:[padding:64px_24px_80px] [@media(max-width:600px)]:[&_h2]:text-[43px]"} data-reveal><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)] micro-label--light [color:#e0cba5] [@media(max-width:600px)]:text-[10px] [@media(max-width:600px)]:[letter-spacing:.15em]">02 / WHY GUN-A</span><h2 id="story-title">오랜 경험은,<br/>작은 차이를 만듭니다.</h2><p>{`약 ${site.experience} 동안`} 부산 연제구 연산동에서 렌터카 서비스를 운영해 왔습니다. 필요한 차량을 찾는 순간부터 인수와 반납까지, 한 번 더 확인하고 더 명확하게 안내합니다.</p><div className={"dark-story__lines flex flex-col [border-top:1px_solid_#ffffff3b] [margin:32px_0_35px] [&_span]:[padding:13px_0] [&_span]:[border-bottom:1px_solid_#ffffff3b] [&_span]:text-[#e0e1e3] [&_span]:text-[13px]"}><span>연중무휴 운영</span><span>부산 전역 서비스 안내</span><span>김해·양산·창원 등 인근 지역 협의 가능</span></div><PhoneLink placement="story" className={"inline-light-link inline-flex items-center [gap:14px] [padding-bottom:7px] [border-bottom:1px_solid_#ffffff89] text-paper [font-size:14px] font-bold [&:hover]:text-[#dec49a] [&:hover]:[border-color:#dec49a]"}>문의하기 <Icon name="arrowRight" size={19}/></PhoneLink></div>
      </section>
  );
}
