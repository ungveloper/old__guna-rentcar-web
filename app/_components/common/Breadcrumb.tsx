import Link from "next/link";

export function Breadcrumb({ items }: { items: ReadonlyArray<{ label: string; href?: string }> }) {
  return <nav aria-label="현재 위치" className="py-5 text-xs text-muted">
    <ol className="flex flex-wrap items-center gap-2">
      <li><Link href="/" className="hover:text-gold-dark">홈</Link></li>
      {items.map((item, index) => <li key={`${item.label}-${index}`} className="flex items-center gap-2">
        <span aria-hidden="true" className="text-line">/</span>
        {item.href ? <Link href={item.href} className="hover:text-gold-dark">{item.label}</Link> : <span aria-current="page" className="font-semibold text-ink">{item.label}</span>}
      </li>)}
    </ol>
  </nav>;
}
