import Link from "next/link";
import { PhoneLink } from "@/components/PhoneLink";
import { Icon } from "@/components/Icon";

export function MobileCallBar() {
  return <div className="mobile-call-bar hidden" aria-label="빠른 이동 및 전화 문의"><Link className="mobile-call-bar__fleet" href="/cars"><Icon name="car" size={18}/> 차량·요금</Link><PhoneLink placement="mobile_sticky" className="mobile-call-bar__phone"><Icon name="phone" size={18}/> 전화 문의</PhoneLink></div>;
}
