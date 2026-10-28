import Image from "next/image";
import { Header } from "@/components/Header";
import { Icon } from "@/components/Icon";
import { PhoneLink } from "@/components/PhoneLink";
import { MobileCallBar } from "@/components/MobileCallBar";
import { FleetPreview } from "@/components/FleetPreview";
import { Reviews } from "@/components/Reviews";
import Link from "next/link";
import { site } from "@/data/site";
import { rentalProcess } from "@/data/process";
import { services } from "@/data/services";
import { HeroStage } from "@/components/HeroStage";
import { ScrollStory } from "@/components/ScrollStory";
import { ScrollEffects } from "@/components/ScrollEffects";
import { DrivePicker } from "@/components/DrivePicker";
import { SiteFooter } from "@/components/SiteFooter";
import { PromotionCarousel } from "@/components/PromotionCarousel";


export default function Home() {
  return <>
    <a className="skip-link fixed [z-index:300] [top:-60px] [left:15px] bg-paper [color:#111] [padding:12px_20px]" href="#main">본문으로 바로가기</a>
    <Header />
    <ScrollEffects />
    <main id="main">
      <HeroStage />
      <PromotionCarousel />

      <section className="manifesto section-pad [padding:148px_0]" id="intro" aria-labelledby="intro-title">
        <div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] manifesto__inner">
          <span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)]">THE GUN-A EXPERIENCE</span>
          <h2 id="intro-title">부산에서 렌터카가 필요할 때,<br/><span>건아렌트카.</span></h2>
          <p>부산 렌터카가 필요한 순간. 합리적인 기준과 다양한 차종, 그리고 약 20년간 쌓아온 경험으로 여정에 어울리는 한 대를 안내합니다.</p>
          <div className="manifesto__facts" data-reveal aria-label="건아렌트카 주요 정보">
            <div><strong>{site.experience}</strong><span>렌터카 운영 경험</span></div>
            <div><strong>{site.fleetCount}</strong><span>약 50대 차량 보유</span></div>
            <div><strong>{String(services.length).padStart(2, "0")}</strong><span>맞춤형 렌트 서비스</span></div>
          </div>
        </div>
      </section>

      <ScrollStory />

      <section className="services section-pad [padding:148px_0]" id="services" aria-labelledby="services-title">
        <div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto]">
          <div className="section-intro [max-width:840px] [margin:0_auto_72px] text-center" data-reveal><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)]">01 / OUR SERVICES</span><h2 id="services-title">단기부터 사고대차까지,<br/><span>목적에 맞는 렌트.</span></h2><p>필요한 시간만큼, 원하는 방식으로. 부산 단기렌트부터 월렌트·장기렌트·보험사고대차까지 목적에 맞게 안내합니다.</p></div>
          <div className="services-list grid [grid-template-columns:repeat(4,1fr)] [border-top:1px_solid_#d9dade] [border-bottom:1px_solid_#d9dade]">{services.map((s) => <article className="service-item" data-reveal key={s.number}><div className="service-item__top"><span className="service-item__no [font-size:10px] [letter-spacing:.14em] [color:#898b92] [font-weight:760]">{s.number} / {s.english}</span><span className="service-item__icon [color:#9e896c]"><Icon name={s.icon} size={27}/></span></div><h3>{s.title}</h3><p>{s.description}</p><Link href={s.href} className="service-item__link inline-flex items-center [gap:9px] [font-size:13px] [font-weight:760] [margin-top:auto] [padding-top:28px]">자세히 보기 <Icon name="arrowRight" size={18}/></Link></article>)}</div>
        </div>
      </section>

      <DrivePicker />
      <FleetPreview />

      <section className="dark-story" id="benefits" aria-labelledby="story-title">
        <div className="dark-story__visual [min-height:680px] relative overflow-hidden" data-scroll-visual><Image src="/images/vehicles/grandeur-gn7.webp" fill sizes="(max-width: 900px) 100vw, 56vw" alt="그랜저 GN7 측면 사진" /></div>
        <div className="dark-story__copy [max-width:625px] [align-self:center] [padding:85px_8vw_85px_7vw]" data-reveal><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)] micro-label--light [color:#e0cba5]">02 / WHY GUN-A</span><h2 id="story-title">오랜 경험은,<br/>작은 차이를 만듭니다.</h2><p>{`약 ${site.experience} 동안`} 부산 연제구 연산동에서 렌터카 서비스를 운영해 왔습니다. 필요한 차량을 찾는 순간부터 인수와 반납까지, 한 번 더 확인하고 더 명확하게 안내합니다.</p><div className="dark-story__lines flex flex-col [border-top:1px_solid_#ffffff3b] [margin:32px_0_35px]"><span>연중무휴 운영</span><span>부산 전역 서비스 안내</span><span>김해·양산·창원 등 인근 지역 협의 가능</span></div><PhoneLink placement="story" className="inline-light-link inline-flex items-center [gap:14px] [padding-bottom:7px] [border-bottom:1px_solid_#ffffff89] text-paper [font-size:14px] font-bold">문의하기 <Icon name="arrowRight" size={19}/></PhoneLink></div>
      </section>

      <section className="how bg-silver section-pad [padding:148px_0]" id="process" aria-labelledby="process-title"><div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto]"><div className="section-intro [max-width:840px] [margin:0_auto_72px] text-center" data-reveal><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)]">03 / HOW IT WORKS</span><h2 id="process-title">렌트는 어렵지 않게.<br/><span>전화 한 통이면 시작.</span></h2><p>온라인 예약 없이 전화로 정확한 조건을 확인합니다. 필요한 차량을 살펴본 뒤 편하게 연락해 주세요.</p></div><div className="how__steps grid [grid-template-columns:repeat(4,1fr)] [gap:20px]">{rentalProcess.map(s=><article key={s.no} data-reveal><span>{s.no}</span><h3>{s.name}</h3><p>{s.description}</p></article>)}</div><div className="how__note flex items-center [gap:11px] [margin-top:43px] [color:#73767b] [font-size:13px]"><Icon name="clock" size={19}/><p>영업시간 외 인수·반납 및 별도 픽업은 사전 협의가 필요합니다.</p></div></div></section>

      <Reviews />
      <section className="home-detail-links [background:#f5f6f8] section-pad [padding:148px_0]" aria-label="이용 안내 및 위치 바로가기">
        <div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] home-detail-links__grid grid [grid-template-columns:repeat(2,minmax(0,1fr))] [gap:18px]">
          <Link href="/guide" className="home-detail-link"><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)]">RENTAL GUIDE</span><h2>대여 전 알아둘 정보</h2><p>차량 인수·반납, 운전자·보험 안내, 자주 묻는 질문을 확인하세요.</p><span>이용안내 보기 <Icon name="arrowRight" size={19}/></span></Link>
          <Link href="/contact" className="home-detail-link"><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)]">LOCATION</span><h2>건아렌트카 찾아오기</h2><p>{site.address} · {site.stationNote}. 차량 인수·반납 위치를 확인하세요.</p><span>오시는 길 <Icon name="arrowRight" size={19}/></span></Link>
        </div>
      </section>

      <section className="contact-cta" aria-labelledby="cta-title"><div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] contact-cta__inner"><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)] micro-label--light [color:#e0cba5]">READY FOR THE NEXT DRIVE?</span><h2 id="cta-title">차량·대여 조건,<br/>전화로 확인하세요.</h2><p>필요한 차량과 일정을 알려주세요.<br/>건아렌트카가 전화로 안내해 드립니다.</p><PhoneLink placement="final_cta" className="pill pill--white bg-paper [color:#191b20]"><Icon name="phone" size={18}/> 051-866-1124 <Icon name="arrowRight" size={18}/></PhoneLink></div></section>
    </main>
    <SiteFooter />
    <MobileCallBar />
  </>;
}
