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
    <nav className={("detail-breadcrumb flex items-center [gap:11px] [padding-top:18px] [padding-bottom:18px] [font-size:12px] [color:#7a7e87] container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto]") + " [@media(max-width:1180px)]:[width:calc(100%_-_64px)] [@media(max-width:900px)]:[width:calc(100%_-_48px)] [@media(max-width:600px)]:[width:calc(100%_-_36px)] [&_a]:text-[#373a41] [&_a]:[transition:color_.2s] [&_a:hover]:text-[#a88c62] [@media(max-width:480px)]:[padding-block:13px]"} aria-label="현재 위치"><Link href="/">홈</Link>{breadcrumbParent && <><span aria-hidden="true">/</span><Link href={breadcrumbParent.href}>{breadcrumbParent.label}</Link></>}<span aria-hidden="true">/</span><span aria-current="page">{detailLabel}</span></nav>
    <section className={("detail-hero relative [isolation:isolate] [min-height:590px] [height:min(68vw,740px)] [background:#11151b] [color:white] overflow-hidden") + " [&_h1]:text-[clamp(55px,6.4vw,103px)] [&_h1]:[line-height:1.15] [&_h1]:[letter-spacing:-.075em] [&_h1]:[margin:20px_0_20px] [&_h1]:font-extrabold [&_h1]:[word-break:keep-all] [&_h1_span]:text-[#e5d0ad] [@media(max-width:950px)]:min-h-[570px] [@media(max-width:750px)]:min-h-[620px] [@media(max-width:750px)]:[height:auto] [@media(max-width:750px)]:[&_h1]:text-[clamp(47px,9vw,72px)] [@media(max-width:480px)]:min-h-[570px]"} aria-labelledby="detail-hero-title">
      <div className={("detail-hero__photo") + " absolute [inset:0] [&_img]:object-cover [&_img]:[object-position:center_55%] [&_img]:[transform:scale(1.045)] [&_img]:[animation:detail-photo-in_1.7s_cubic-bezier(.12,.8,.23,1)_both] [@media(max-width:750px)]:[&_img]:[object-position:63%_center] [@media(prefers-reduced-motion:reduce)]:[&_img]:[animation:none] [@media(prefers-reduced-motion:reduce)]:[&_img]:[transform:none]"}><Image src={image} alt={imageAlt} fill priority sizes="100vw" /></div>
      <div className={("detail-hero__scrim [background:linear-gradient(90deg,rgba(5,9,15,.89)_0%,rgba(5,9,15,.68)_38%,rgba(5,9,15,.25)_70%,rgba(5,9,15,.25)_100%),linear-gradient(0deg,rgba(5,9,15,.47),transparent_35%)]") + " absolute [inset:0] [@media(max-width:750px)]:[background:linear-gradient(0deg,#070a0fe8_0%,#070a0f9a_40%,#070a0f55_100%)]"} />
      <div className={("container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] detail-hero__inner") + " [@media(max-width:1180px)]:[width:calc(100%_-_64px)] [@media(max-width:900px)]:[width:calc(100%_-_48px)] [@media(max-width:600px)]:[width:calc(100%_-_36px)] relative [z-index:1] [min-height:inherit] h-full flex flex-col justify-center items-start [padding-block:75px] [@media(max-width:750px)]:min-h-[620px] [@media(max-width:750px)]:[padding-block:76px] [@media(max-width:480px)]:min-h-[570px] [@media(max-width:480px)]:[padding-block:60px]"}>
        <div className={("detail-hero__copy [max-width:920px]") + " [&>p:not(.micro-label)]:text-[clamp(15px,1.65vw,19px)] [&>p:not(.micro-label)]:max-w-[590px] [&>p:not(.micro-label)]:text-[#e2e5ea] [&>p:not(.micro-label)]:[line-height:1.8] [&>p:not(.micro-label)]:[word-break:keep-all] [@media(max-width:480px)]:[&>p:not(.micro-label)]:text-sm"}><p className={("micro-label inline-flex items-center [gap:10px] [font-size:11px] font-extrabold [letter-spacing:.2em] [color:var(--gold-dark)] micro-label--light [color:#e0cba5]") + " [@media(max-width:600px)]:text-[10px] [@media(max-width:600px)]:[letter-spacing:.15em]"}>{eyebrow}</p><h1 id="detail-hero-title">{title}<br /><span>{accent}</span></h1><p>{description}</p>
          <div className={("detail-hero__links flex [gap:10px] [flex-wrap:wrap] [margin-top:33px]") + " [@media(max-width:480px)]:gap-2"}><a href="#details" className={("detail-action detail-action--light [background:white] [color:#12161c]") + " inline-flex items-center justify-between gap-[23px] rounded-[100px] [padding:16px_22px] min-h-[54px] text-sm font-[730] [transition:transform_.25s,background_.25s] [&:hover]:[transform:translateY(-3px)] [@media(max-width:480px)]:text-xs [@media(max-width:480px)]:[padding:13px_18px] [@media(max-width:480px)]:min-h-[49px]"}>내용 확인 <Icon name="arrowRight" size={17}/></a><PhoneLink placement="detail_hero" className={("detail-action detail-action--outline [border:1px_solid_#ffffff85] [color:white] [background:#ffffff12] [backdrop-filter:blur(12px)]") + " inline-flex items-center justify-between gap-[23px] rounded-[100px] [padding:16px_22px] min-h-[54px] text-sm font-[730] [transition:transform_.25s,background_.25s] [&:hover]:[transform:translateY(-3px)] [@media(max-width:480px)]:text-xs [@media(max-width:480px)]:[padding:13px_18px] [@media(max-width:480px)]:min-h-[49px]"}>전화 문의 <Icon name="phone" size={16}/></PhoneLink></div>
        </div>
        <span className={("detail-hero__marker absolute [right:0] [bottom:29px] [color:#e1e1e1] [font-size:10px] [letter-spacing:.2em] font-bold") + " [@media(max-width:750px)]:bottom-[22px]"}>GUN-A RENTCAR / BUSAN</span>
      </div>
    </section>
  </>;
}
