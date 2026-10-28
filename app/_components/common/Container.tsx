import type { ReactNode } from "react";

export function Container({ children, className = "", as: Tag = "div" }: { children: ReactNode; className?: string; as?: "div" | "section" | "article" }) {
  return <Tag className={`mx-auto w-[calc(100%_-_2rem)] max-w-7xl sm:w-[calc(100%_-_3rem)] lg:w-[calc(100%_-_4rem)] ${className}`}>{children}</Tag>;
}
