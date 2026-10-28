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
  return <header className={`site-header [height:72px] sticky [top:0] [z-index:90] [background:#fafafaed] [backdrop-filter:saturate(180%)_blur(22px)] [-webkit-backdrop-filter:saturate(180%)_blur(22px)] [transition:box-shadow_.2s]${scrolled?" is-scrolled":""}`}>
    <div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] header-inner">
      <Brand />
      <nav className="desktop-nav flex items-center [gap:clamp(17px,2.05vw,34px)] [margin-left:auto]" aria-label="주요 메뉴">{navigation.map(n=><Link key={n.href} href={n.href} prefetch={false} onClick={(event) => openPage(event, n.href)} aria-current={pathname === n.href ? "page" : undefined}>{n.label}</Link>)}</nav>
      <div className="header-actions flex items-center">
        <PhoneLink placement="header" className="header-call flex items-center [gap:10px] rounded-[40px] [background:#1c1e23] text-paper [padding:12px_17px] [font-size:12px] font-bold"><Icon name="phone" size={16}/> <span>051-866-1124</span> <Icon name="arrow" size={17}/></PhoneLink>
        <button className="mobile-menu-trigger" type="button" aria-label={menuOpen?"메뉴 닫기":"메뉴 열기"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={()=>setMenuOpen(v=>!v)}><Icon name={menuOpen?"close":"menu"} size={24}/></button>
      </div>
    </div>
    <nav className={`mobile-nav${menuOpen?" mobile-nav--open":""}`} id="mobile-navigation" aria-label="모바일 메뉴" aria-hidden={!menuOpen}>
      <div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto]">{navigation.map((n,i)=><Link key={n.href} tabIndex={menuOpen?0:-1} href={n.href} prefetch={false} aria-current={pathname === n.href ? "page" : undefined} onClick={(event) => { setMenuOpen(false); openPage(event, n.href); }}><span>{String(i+1).padStart(2,"0")}</span>{n.label}<Icon name="arrow" size={18}/></Link>)}
        <PhoneLink tabIndex={menuOpen?0:-1} placement="mobile_menu" onClick={()=>setMenuOpen(false)} className="mobile-nav__call" withIcon>전화 문의하기 <Icon name="arrow" size={17}/></PhoneLink>
      </div>
    </nav>
  </header>;
}
