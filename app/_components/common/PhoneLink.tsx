"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { site } from "@/data/site";
import { Icon } from "@/app/_components/common/Icon";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  placement: string;
  vehicleId?: string;
  withIcon?: boolean;
};

export function PhoneLink({ placement, vehicleId, withIcon = false, children, onClick, ...props }: Props) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    try {
      window.gtag?.("event", "phone_click", {
        placement,
        ...(vehicleId ? { vehicle_id: vehicleId } : {}),
      });
    } catch {
      // Analytics must never prevent the phone dialer from opening.
    }
    onClick?.(event);
  }
  return (
    <a href={site.phoneHref} onClick={handleClick} {...props}>
      {withIcon ? <Icon name="phone" size={17} /> : null}{children}
    </a>
  );
}
