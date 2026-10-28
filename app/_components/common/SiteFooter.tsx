import Link from "next/link";
import { Brand } from "@/app/_components/common/Brand";
import { site, navigation } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className={"footer [background:#0b0d11] [color:#dadbe0] [padding:65px_0_30px] [&_nav]:flex [&_nav]:[align-content:flex-start] [&_nav]:[flex-wrap:wrap] [&_nav]:[gap:18px_25px] [&_nav]:max-w-[440px] [&_nav_a]:text-[#b5b7be] [&_nav_a]:text-xs [&_nav_a:hover]:text-white [@media(max-width:600px)]:[padding:55px_0_130px] [@media(max-width:600px)]:[&_nav]:mt-7 [@media(max-width:600px)]:[&_nav]:[gap:13px_20px]"}>
      <div className={"container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] footer__top flex justify-between gap-[50px] pb-20 [&_p]:text-[13px] [&_p]:[line-height:1.9] [&_p]:mt-5 [&_p]:text-[#81858d] [@media(max-width:1180px)]:[width:calc(100%_-_64px)] [@media(max-width:900px)]:[width:calc(100%_-_48px)] [@media(max-width:600px)]:[width:calc(100%_-_36px)] [@media(max-width:600px)]:block [@media(max-width:600px)]:pb-[45px]"}>
        <div><Brand light footer /><p>부산 연제구 연산동 건아렌트카.<br />차량별 요금과 렌트 서비스를 확인하세요.</p></div>
        <nav aria-label="하단 메뉴">
          <Link href="/">홈</Link>
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
      </div>
      <div className={"container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] footer__bottom flex justify-between [align-items:end] gap-[30px] [border-top:1px_solid_#292c32] pt-6 [&_div]:flex [&_div]:[flex-wrap:wrap] [&_div]:[gap:9px_20px] [&_div]:text-[11px] [&_div]:text-[#979ba3] [&_strong]:text-[#c6c8cd] [&_strong]:font-bold [&_small]:text-[10px] [&_small]:text-[#727780] [&_small]:[white-space:nowrap] [@media(max-width:1180px)]:[width:calc(100%_-_64px)] [@media(max-width:900px)]:[width:calc(100%_-_48px)] [@media(max-width:600px)]:[width:calc(100%_-_36px)] [@media(max-width:600px)]:block [@media(max-width:600px)]:[&_div]:grid [@media(max-width:600px)]:[&_div]:gap-2 [@media(max-width:600px)]:[&_small]:block [@media(max-width:600px)]:[&_small]:mt-[25px]"}>
        <div><strong>{site.legalName}</strong><span>{site.address}</span><span>대표전화 {site.phoneDisplay}</span></div>
        <small>© 2026 GUN-A RENTCAR. ALL RIGHTS RESERVED.</small>
      </div>
    </footer>
  );
}
