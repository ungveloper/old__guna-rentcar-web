import Link from "next/link";
import { Brand } from "@/components/Brand";
import { site, navigation } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="footer [background:#0b0d11] [color:#dadbe0] [padding:65px_0_30px]">
      <div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] footer__top">
        <div><Brand light footer /><p>부산 연제구 연산동 건아렌트카.<br />차량별 요금과 렌트 서비스를 확인하세요.</p></div>
        <nav aria-label="하단 메뉴">
          <Link href="/">홈</Link>
          {navigation.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
        </nav>
      </div>
      <div className="container [max-width:1360px] [width:calc(100%_-_96px)] [margin-inline:auto] footer__bottom">
        <div><strong>{site.legalName}</strong><span>{site.address}</span><span>대표전화 {site.phoneDisplay}</span></div>
        <small>© 2026 GUN-A RENTCAR. ALL RIGHTS RESERVED.</small>
      </div>
    </footer>
  );
}
