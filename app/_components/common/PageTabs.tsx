import Link from "next/link";

export function PageTabs({ tabs, active }: { tabs: ReadonlyArray<{ label: string; href: string }>; active: string }) {
  return <nav aria-label="관련 페이지" className="mb-8 overflow-x-auto border-b border-line">
    <ul className="flex min-w-max gap-1 sm:gap-4">{tabs.map(tab => <li key={tab.href}>
      <Link href={tab.href} aria-current={tab.href === active ? "page" : undefined} className={`inline-flex border-b-2 px-4 py-3 text-sm font-bold transition-colors ${tab.href === active ? "border-gold text-ink" : "border-transparent text-muted hover:text-ink"}`}>{tab.label}</Link>
    </li>)}</ul>
  </nav>;
}
