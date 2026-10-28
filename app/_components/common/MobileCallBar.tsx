import { SiteActions } from "@/app/_components/common/SiteActions";

/** Mobile fixed actions: phone is visually larger than inquiry. */
export function MobileCallBar() {
  return <aside aria-label="차량 예약 상담" className="fixed inset-x-0 bottom-0 z-80 border-t border-line bg-white/95 px-3 pt-2 pb-[calc(.5rem+env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(0,0,0,.07)] backdrop-blur-xl min-[761px]:hidden">
    <SiteActions service="mobile" compact />
  </aside>;
}
