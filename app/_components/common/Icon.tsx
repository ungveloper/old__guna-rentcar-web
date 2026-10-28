import type { ReactNode, SVGProps } from "react";

type Name = "arrow" | "arrowRight" | "phone" | "menu" | "close" | "check" | "pin" | "clock" | "calendar" | "key" | "shield" | "sun" | "chevron" | "plus" | "minus" | "quote" | "map" | "steering" | "car";

type Props = SVGProps<SVGSVGElement> & { name: Name; size?: number };

export function Icon({ name, size = 20, ...props }: Props) {
  const paths: Record<Name, ReactNode> = {
    arrow: <><path d="M5 15 15 5M6 5h9v9" /></>,
    arrowRight: <><path d="M4 12h16m-7-7 7 7-7 7" /></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.5 19.5 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8L7.2 10a16 16 0 0 0 6.8 6.8l1.5-1.8a2 2 0 0 1 1.8-.6l3 .5a2 2 0 0 1 1.7 2Z"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="m5 5 14 14M19 5 5 19" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" /></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18"/></>,
    key: <><circle cx="8" cy="15" r="4"/><path d="m11 12 9-9 2 2-3 3 1 2-3 3-2-1-2 2" /></>,
    shield: <><path d="m12 2 9 4v6c0 5.7-3.4 8.7-9 10-5.6-1.3-9-4.3-9-10V6l9-4Z"/><path d="m8 12 3 3 5-6"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></>,
    chevron: <><path d="m6 9 6 6 6-6"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <><path d="M5 12h14"/></>,
    quote: <><path d="M10 11H4v7h7V9H5M21 11h-6v7h7V9h-6"/></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Zm6-3v15m6-12v15"/></>,
    steering: <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M3 12h7m4 0h7m-9 2v7"/></>,
    car: <><path d="m5 11 2-5h10l2 5 2 2v5h-3v-2H6v2H3v-5l2-2ZM3 12h18M7 16h.01M17 16h.01"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name]}</svg>;
}
