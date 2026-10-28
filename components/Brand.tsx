import Link from "next/link";

/** Temporary clean SVG adaptation while the vector master logo is being supplied. */
export function Brand({ light = false, footer = false }: { light?: boolean; footer?: boolean }) {
  return (
    <Link href="/" className={`brand inline-flex items-center [gap:11px] [flex-shrink:0] [color:var(--gold)] ${light ? "brand--light" : ""} ${footer ? "brand--footer" : ""}`} aria-label="건아렌트카 홈으로">
      <svg className="brand__mark [width:47px] [height:32px]" viewBox="0 0 88 52" aria-hidden="true">
        <path d="M4 25c8 3 17 4 23 1 5-2 8-7 11-9 1 4 2 6 6 8 4-2 5-4 6-8 3 2 6 7 11 9 6 3 15 2 23-1-2 8-12 12-21 12-1 7-10 11-19 11s-18-4-19-11C16 37 6 33 4 25Z" fill="currentColor"/>
        <text x="44" y="21" fontSize="22" fontWeight="800" letterSpacing="2.5" textAnchor="middle" fill="currentColor">GA</text>
      </svg>
      <span className="brand__text flex flex-col [line-height:1.06] [color:#17181b]"><strong>건아렌트카</strong><small>GUN-A RENTCAR</small></span>
    </Link>
  );
}
