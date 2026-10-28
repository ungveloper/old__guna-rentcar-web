import Image from "next/image";
import Link from "next/link";
import { vehicles } from "@/data/vehicles";
import { Icon } from "@/components/Icon";

/** Main and /cars read the SAME data/vehicles.ts. The full filter + price dialog lives on /cars. */
const picks = ["ray", "avante-cn7", "k5", "gv80"];
const featured = picks.map((id) => vehicles.find((car) => car.id === id)).filter((car) => car !== undefined);

export function FleetPreview() {
  return <section className="fleet-preview section-pad [padding:148px_0]" id="fleet" aria-labelledby="fleet-preview-title">
    <div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto]">
      <div className="section-intro [max-width:840px] [margin:0_auto_72px] text-center" data-reveal><span className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)]">GUN-A / VEHICLE COLLECTION</span>
        <h2 id="fleet-preview-title">차량·요금,<br /><span>모델별로 확인하세요.</span></h2>
        <p>실제 제공된 요금표를 기준으로 차량별 금액을 공개합니다. 전체 {vehicles.length}개 차량의 시간별·기간별 요금은 차량 안내 페이지에서 확인할 수 있습니다.</p>
      </div>
      <div className="fleet-grid grid [grid-template-columns:repeat(3,minmax(0,1fr))] [gap:54px_22px] fleet-grid--preview [grid-template-columns:repeat(4,minmax(0,1fr))] [gap:16px]">{featured.map((car) => <Link className="fleet-card fleet-preview__card block [min-width:0] overflow-hidden" href="/cars" key={car.id}>
        <div className="fleet-card__visual"><Image src={car.image} alt={car.imageAlt} width={1280} height={853} sizes="(max-width: 680px) 100vw, (max-width: 1080px) 50vw, 25vw" /><span className="fleet-card__open absolute [bottom:15px] [right:15px] [width:40px] [height:40px] [border-radius:50%] bg-paper [color:#111] grid [place-items:center] [transition:transform_.25s]"><Icon name="arrow" size={20}/></span></div>
        <div className="fleet-card__content"><div><span className="fleet-card__brand [font-size:11px] [font-weight:730] [color:#898b91] [letter-spacing:.06em]">{car.brand}</span><h3>{car.model}</h3></div><div className="fleet-card__price text-right [flex-shrink:0]"><span>1~2일 대여 · 1일 기준</span><strong>{car.rates.days1to2.toLocaleString("ko-KR")}원</strong></div></div>
        <span className="fleet-card__details">전체 대여 요금 확인 <Icon name="arrowRight" size={17}/></span>
      </Link>)}</div>
      <div className="fleet-preview__all"><Link href="/cars" className="pill pill--dark [background:#1b1d22] text-paper">{vehicles.length}개 차량 모두 보기 <Icon name="arrowRight" size={18}/></Link></div>
    </div>
  </section>;
}
