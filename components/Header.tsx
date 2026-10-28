"use client";

import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Brand } from "@/components/Brand";
import { PhoneLink } from "@/components/PhoneLink";
import { Icon } from "@/components/Icon";
import { navigation } from "@/data/site";

/** Each menu opens a REAL route as a fresh document, never a same-page anchor. */
function openPage(event: MouseEvent<HTMLAnchorElement>, href: string) {
  if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  window.location.assign(href);
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const listener = () => setScrolled(window.scrollY > 30);
    listener();window.addEventListener("scroll",listener,{passive:true});return ()=>window.removeEventListener("scroll",listener);
  },[]);
  useEffect(()=>{
    if(!menuOpen) return;
    const listener = (event: KeyboardEvent) => {if(event.key==="Escape") setMenuOpen(false);};
    window.addEventListener("keydown",listener); return ()=>window.removeEventListener("keydown",listener);
  },[menuOpen]);
  return <header className={(`site-header [height:72px] sticky [top:0] [z-index:90] [background:#fafafaed] [backdrop-filter:saturate(180%)_blur(22px)] [-webkit-backdrop-filter:saturate(180%)_blur(22px)] [transition:box-shadow_.2s]${scrolled?" is-scrolled":""}`) + " [&.is-scrolled]:[box-shadow:0_1px_0_#00000011] [@media(max-width:600px)]:h-[63px]"}>
    <div className={("container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] header-inner") + " h-[72px] flex items-center gap-[26px] justify-between [@media(max-width:1180px)]:[width:calc(100%_-_64px)] [@media(max-width:900px)]:[width:calc(100%_-_48px)] [@media(max-width:600px)]:h-[63px] [@media(max-width:600px)]:[width:calc(100%_-_36px)] [@media(max-width:600px)]:gap-[10px]"}>
      <Brand />
      <nav className={("desktop-nav flex items-center [gap:clamp(17px,2.05vw,34px)] [margin-left:auto]") + " [&_a]:text-xs [&_a]:font-[650] [&_a]:text-[#4c4d51] [&_a]:[transition:color_.2s] [&_a:hover]:text-[#a18863] [@media(max-width:1180px)]:gap-[15px] [@media(max-width:1180px)]:[&_a]:text-[11px] [@media(max-width:900px)]:hidden [&_a[aria-current=\"page\"]]:[color:var(--gold-dark)] [&_a[aria-current=\"page\"]]:font-[850] [@media(max-width:1100px)]:hidden"} aria-label="주요 메뉴">{navigation.map(n=><Link key={n.href} href={n.href} prefetch={false} onClick={(event) => openPage(event, n.href)} aria-current={pathname === n.href ? "page" : undefined}>{n.label}</Link>)}</nav>
      <div className="header-actions flex items-center">
        <PhoneLink placement="header" className={("header-call flex items-center [gap:10px] rounded-[40px] [background:#1c1e23] text-paper [padding:12px_17px] [font-size:12px] font-bold") + " [&_svg:last-child]:hidden [&:hover]:bg-[#494b52] [@media(max-width:600px)]:w-[38px] [@media(max-width:600px)]:h-[38px] [@media(max-width:600px)]:p-0 [@media(max-width:600px)]:justify-center [@media(max-width:600px)]:[&_span]:hidden [@media(max-width:600px)]:[&_svg:first-child]:w-[17px]"}><Icon name="phone" size={16}/> <span>051-866-1124</span> <Icon name="arrow" size={17}/></PhoneLink>
        <button className={("mobile-menu-trigger") + " hidden border-0 [background:none] [color:var(--ink)] w-[40px] h-[40px] items-center justify-center [@media(max-width:900px)]:flex [@media(max-width:1100px)]:flex"} type="button" aria-label={menuOpen?"메뉴 닫기":"메뉴 열기"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={()=>setMenuOpen(v=>!v)}><Icon name={menuOpen?"close":"menu"} size={24}/></button>
      </div>
    </div>
    <nav className={(`mobile-nav${menuOpen?" mobile-nav--open":""}`) + " hidden [@media(max-width:900px)]:hidden [@media(max-width:900px)]:bg-paper [@media(max-width:900px)]:[border-top:1px_solid_#ececef] [@media(max-width:900px)]:[box-shadow:0_14px_30px_#0001] [@media(max-width:900px)]:[&_.container]:[padding:17px_0_24px] [@media(max-width:900px)]:[&_a:not(.mobile-nav\\_\\_call)]:[padding:17px_1px] [@media(max-width:900px)]:[&_a:not(.mobile-nav\\_\\_call)]:flex [@media(max-width:900px)]:[&_a:not(.mobile-nav\\_\\_call)]:gap-[19px] [@media(max-width:900px)]:[&_a:not(.mobile-nav\\_\\_call)]:items-center [@media(max-width:900px)]:[&_a:not(.mobile-nav\\_\\_call)]:[border-bottom:1px_solid_#ececef] [@media(max-width:900px)]:[&_a:not(.mobile-nav\\_\\_call)]:font-[730] [@media(max-width:900px)]:[&_a:not(.mobile-nav\\_\\_call)]:text-base [@media(max-width:900px)]:[&_a>span]:text-[11px] [@media(max-width:900px)]:[&_a>span]:text-[#9b9ea4] [@media(max-width:900px)]:[&_a_svg]:[margin-left:auto] [max-height:calc(100dvh_-_72px)] [overflow-y:auto] [@media(max-width:480px)]:[max-height:calc(100dvh_-_64px)] [&_a[aria-current=\"page\"]]:[color:var(--gold-dark)] [&_a[aria-current=\"page\"]]:font-[850] [@media(max-width:1100px)]:[&_.container]:[padding:17px_0_24px] [@media(max-width:1100px)]:[&_a:not(.mobile-nav\\_\\_call)]:[padding:16px_1px] [@media(max-width:1100px)]:[&_a:not(.mobile-nav\\_\\_call)]:flex [@media(max-width:1100px)]:[&_a:not(.mobile-nav\\_\\_call)]:gap-[19px] [@media(max-width:1100px)]:[&_a:not(.mobile-nav\\_\\_call)]:items-center [@media(max-width:1100px)]:[&_a:not(.mobile-nav\\_\\_call)]:[border-bottom:1px_solid_#ececef] [@media(max-width:1100px)]:[&_a:not(.mobile-nav\\_\\_call)]:font-[730] [@media(max-width:1100px)]:[&_a:not(.mobile-nav\\_\\_call)]:text-[15px] [@media(max-width:1100px)]:[&_a>span]:text-[11px] [@media(max-width:1100px)]:[&_a>span]:text-[#9b9ea4] [@media(max-width:1100px)]:[&_a_svg]:[margin-left:auto]"} id="mobile-navigation" aria-label="모바일 메뉴" aria-hidden={!menuOpen}>
      <div className={("container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto]") + " [@media(max-width:1180px)]:[width:calc(100%_-_64px)] [@media(max-width:900px)]:[width:calc(100%_-_48px)] [@media(max-width:600px)]:[width:calc(100%_-_36px)]"}>{navigation.map((n,i)=><Link key={n.href} tabIndex={menuOpen?0:-1} href={n.href} prefetch={false} aria-current={pathname === n.href ? "page" : undefined} onClick={(event) => { setMenuOpen(false); openPage(event, n.href); }}><span>{String(i+1).padStart(2,"0")}</span>{n.label}<Icon name="arrow" size={18}/></Link>)}
        <PhoneLink tabIndex={menuOpen?0:-1} placement="mobile_menu" onClick={()=>setMenuOpen(false)} className={("mobile-nav__call") + " [@media(max-width:900px)]:flex [@media(max-width:900px)]:gap-[10px] [@media(max-width:900px)]:items-center [@media(max-width:900px)]:justify-center [@media(max-width:900px)]:p-[15px] [@media(max-width:900px)]:mt-[22px] [@media(max-width:900px)]:bg-[#1d1f23] [@media(max-width:900px)]:rounded-[40px] [@media(max-width:900px)]:text-white [@media(max-width:1100px)]:flex [@media(max-width:1100px)]:gap-[10px] [@media(max-width:1100px)]:items-center [@media(max-width:1100px)]:justify-center [@media(max-width:1100px)]:p-[15px] [@media(max-width:1100px)]:mt-4 [@media(max-width:1100px)]:bg-[#1d1f23] [@media(max-width:1100px)]:rounded-[40px] [@media(max-width:1100px)]:text-white"} withIcon>전화 문의하기 <Icon name="arrow" size={17}/></PhoneLink>
      </div>
    </nav>
  </header>;
}
