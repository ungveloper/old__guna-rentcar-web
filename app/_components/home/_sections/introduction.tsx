import { site } from "@/data/site";
import { services } from "@/data/services";


/** Homepage introduction: a separately reusable, server-rendered section. */
export function HomeIntroductionSection() {
  return (
    <section className={"manifesto section-pad [padding:148px_0] [&_h2]:text-[clamp(44px,5.4vw,80px)] [&_h2]:font-[760] [&_h2]:[line-height:1.14] [&_h2]:[letter-spacing:-.065em] [&_h2]:[margin:25px_0_24px] [&_h2_span]:text-[#9a9da4] [&_h2_span]:[font-style:normal] bg-paper text-center [&_h2]:text-[clamp(58px,7vw,108px)] [&_h2]:[margin:30px_auto_30px] [@media(max-width:900px)]:[padding:105px_0] [@media(max-width:600px)]:[padding:85px_0] [@media(max-width:600px)]:[&_h2]:text-[clamp(41px,10.5vw,62px)] [@media(max-width:600px)]:[&_h2]:[margin:20px_0] [@media(max-width:600px)]:text-center [@media(max-width:600px)]:[&_h2]:text-[clamp(49px,11.6vw,70px)] bg-[#fafafa] [&_h2]:[letter-spacing:-.095em] [&_h2]:text-[clamp(69px,9.5vw,146px)] [&_h2]:[margin:29px_auto_31px] [&_h2]:[line-height:1.035] [&_h2_span]:text-[#a6a9ad] [@media(max-width:760px)]:[&_h2]:text-[clamp(54px,12vw,87px)]"} id="intro" aria-labelledby="intro-title">
        <div className={"container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] manifesto__inner [&>p]:text-[clamp(17px,2vw,22px)] [&>p]:text-[#757980] [&>p]:max-w-[720px] [&>p]:[margin:0_auto] [&>p]:[word-break:keep-all] [@media(max-width:1180px)]:[width:calc(100%_-_64px)] [@media(max-width:900px)]:[width:calc(100%_-_48px)] [@media(max-width:600px)]:[width:calc(100%_-_36px)] [@media(max-width:600px)]:[&>p]:text-[15px] [&>p]:max-w-[670px]"}>
          <span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)] [@media(max-width:600px)]:text-[10px] [@media(max-width:600px)]:[letter-spacing:.15em]">THE GUN-A EXPERIENCE</span>
          <h2 id="intro-title">부산에서 렌터카가 필요할 때,<br/><span>건아렌트카.</span></h2>
          <p>부산 렌터카가 필요한 순간. 합리적인 기준과 다양한 차종, 그리고 약 20년간 쌓아온 경험으로 여정에 어울리는 한 대를 안내합니다.</p>
          <div className={"manifesto__facts flex justify-center [gap:0] [margin:97px_auto_0] max-w-[830px] [&>div]:[flex:1] [&>div]:flex [&>div]:flex-col [&>div]:gap-[13px] [&>div]:[padding:0_26px] [&>div+div]:[border-left:1px_solid_#e4e4e4] [&_strong]:text-[clamp(54px,5.7vw,88px)] [&_strong]:[line-height:1] [&_strong]:font-[710] [&_strong]:[letter-spacing:-.08em] [&_strong_small]:text-[22px] [&_strong_small]:ml-[5px] [&_span]:text-[13px] [&_span]:text-[#888b90] [&_span]:font-semibold [@media(max-width:900px)]:mt-[70px] [@media(max-width:600px)]:mt-[55px] [@media(max-width:600px)]:[&>div]:[padding:0_8px] [@media(max-width:600px)]:[&>div]:gap-[9px] [@media(max-width:600px)]:[&_strong]:text-[clamp(36px,11vw,58px)] [@media(max-width:600px)]:[&_strong_small]:text-sm [@media(max-width:600px)]:[&_span]:text-[10px] max-w-[940px] mt-[90px] [&_strong]:font-extrabold [&[data-reveal]]:[transition-duration:1s]"} data-reveal aria-label="건아렌트카 주요 정보">
            <div><strong>{site.experience}</strong><span>렌터카 운영 경험</span></div>
            <div><strong>{site.fleetCount}</strong><span>약 50대 차량 보유</span></div>
            <div><strong>{String(services.length).padStart(2, "0")}</strong><span>맞춤형 렌트 서비스</span></div>
          </div>
        </div>
      </section>
  );
}
