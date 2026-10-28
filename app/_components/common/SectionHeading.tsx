import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return <header className="mb-10 max-w-3xl">
    <p className="mb-3 text-xs font-extrabold uppercase tracking-widest text-gold-dark">{eyebrow}</p>
    <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">{title}</h2>
    {children && <p className="mt-5 text-base leading-relaxed text-muted">{children}</p>}
  </header>;
}
