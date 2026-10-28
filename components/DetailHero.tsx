import Image from "next/image";
import Link from "next/link";
import { PhoneLink } from "@/components/PhoneLink";
import { Icon } from "@/components/Icon";

type Props = {
  eyebrow: string;
  title: string;
  accent: string;
  description: string;
  image: string;
  imageAlt: string;
  detailLabel: string;
  breadcrumbParent?: { label: string; href: string };
};

export function DetailHero({ eyebrow, title, accent, description, image, imageAlt, detailLabel, breadcrumbParent }: Props) {
  return <>
    <nav className="detail-breadcrumb flex items-center [gap:11px] [padding-top:18px] [padding-bottom:18px] [font-size:12px] [color:#7a7e87] container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto]" aria-label="현재 위치"><Link href="/">홈</Link>{breadcrumbParent && <><span aria-hidden="true">/</span><Link href={breadcrumbParent.href}>{breadcrumbParent.label}</Link></>}<span aria-hidden="true">/</span><span aria-current="page">{detailLabel}</span></nav>
    <section className="detail-hero relative [isolation:isolate] [min-height:590px] [height:min(68vw,740px)] [background:#11151b] [color:white] overflow-hidden" aria-labelledby="detail-hero-title">
      <div className="detail-hero__photo"><Image src={image} alt={imageAlt} fill priority sizes="100vw" /></div>
      <div className="detail-hero__scrim [background:linear-gradient(90deg,rgba(5,9,15,.89)_0%,rgba(5,9,15,.68)_38%,rgba(5,9,15,.25)_70%,rgba(5,9,15,.25)_100%),linear-gradient(0deg,rgba(5,9,15,.47),transparent_35%)]" />
      <div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] detail-hero__inner">
        <div className="detail-hero__copy [max-width:920px]"><p className="micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)] micro-label--light [color:#e0cba5]">{eyebrow}</p><h1 id="detail-hero-title">{title}<br /><span>{accent}</span></h1><p>{description}</p>
          <div className="detail-hero__links flex [gap:10px] [flex-wrap:wrap] [margin-top:33px]"><a href="#details" className="detail-action detail-action--light [background:white] [color:#12161c]">내용 확인 <Icon name="arrowRight" size={17}/></a><PhoneLink placement="detail_hero" className="detail-action detail-action--outline [border:1px_solid_#ffffff85] [color:white] [background:#ffffff12] [backdrop-filter:blur(12px)]">전화 문의 <Icon name="phone" size={16}/></PhoneLink></div>
        </div>
        <span className="detail-hero__marker absolute [right:0] [bottom:29px] [color:#e1e1e1] [font-size:10px] [letter-spacing:.2em] font-bold">GUN-A RENTCAR / BUSAN</span>
      </div>
    </section>
  </>;
}
