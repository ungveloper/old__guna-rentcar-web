import { Icon } from "@/app/_components/common/Icon";
import Link from "next/link";
import { site } from "@/data/site";


/** Homepage related-links: a separately reusable, server-rendered section. */
export function HomeRelatedLinksSection() {
  return (
    <section className="home-detail-links [background:#f5f6f8] section-pad [padding:148px_0] [@media(max-width:900px)]:[padding:105px_0] [@media(max-width:600px)]:[padding:85px_0]" aria-label="이용 안내 및 위치 바로가기">
        <div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] home-detail-links__grid grid [grid-template-columns:repeat(2,minmax(0,1fr))] [gap:18px] [@media(max-width:1180px)]:[width:calc(100%_-_64px)] [@media(max-width:900px)]:[width:calc(100%_-_48px)] [@media(max-width:600px)]:[width:calc(100%_-_36px)] [@media(max-width:600px)]:[grid-template-columns:1fr]">
          <Link href="/guide" className={"home-detail-link flex flex-col justify-between min-h-[310px] p-[45px] rounded-[22px] bg-paper [border:1px_solid_#e2e3e6] [transition:transform_.3s,box-shadow_.3s] [&:hover]:[transform:translateY(-5px)] [&:hover]:[box-shadow:0_20px_40px_#00000010] [&_h2]:text-[clamp(26px,3vw,44px)] [&_h2]:[line-height:1.17] [&_h2]:[margin:20px_0_12px] [&_p]:text-sm [&_p]:text-[#777c84] [&_p]:max-w-[390px] [&>span:last-child]:mt-[25px] [&>span:last-child]:text-[13px] [&>span:last-child]:font-[750] [&>span:last-child]:flex [&>span:last-child]:gap-[10px] [&>span:last-child]:items-center [@media(max-width:600px)]:min-h-[255px] [@media(max-width:600px)]:p-7"}><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)] [@media(max-width:600px)]:text-[10px] [@media(max-width:600px)]:[letter-spacing:.15em]">RENTAL GUIDE</span><h2>대여 전 알아둘 정보</h2><p>차량 인수·반납, 운전자·보험 안내, 자주 묻는 질문을 확인하세요.</p><span>이용안내 보기 <Icon name="arrowRight" size={19}/></span></Link>
          <Link href="/contact" className={"home-detail-link flex flex-col justify-between min-h-[310px] p-[45px] rounded-[22px] bg-paper [border:1px_solid_#e2e3e6] [transition:transform_.3s,box-shadow_.3s] [&:hover]:[transform:translateY(-5px)] [&:hover]:[box-shadow:0_20px_40px_#00000010] [&_h2]:text-[clamp(26px,3vw,44px)] [&_h2]:[line-height:1.17] [&_h2]:[margin:20px_0_12px] [&_p]:text-sm [&_p]:text-[#777c84] [&_p]:max-w-[390px] [&>span:last-child]:mt-[25px] [&>span:last-child]:text-[13px] [&>span:last-child]:font-[750] [&>span:last-child]:flex [&>span:last-child]:gap-[10px] [&>span:last-child]:items-center [@media(max-width:600px)]:min-h-[255px] [@media(max-width:600px)]:p-7"}><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)] [@media(max-width:600px)]:text-[10px] [@media(max-width:600px)]:[letter-spacing:.15em]">LOCATION</span><h2>건아렌트카 찾아오기</h2><p>{site.address} · {site.stationNote}. 차량 인수·반납 위치를 확인하세요.</p><span>오시는 길 <Icon name="arrowRight" size={19}/></span></Link>
        </div>
      </section>
  );
}
