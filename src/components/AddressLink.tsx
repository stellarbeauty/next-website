"use client";

import type { ReactNode, MouseEvent } from "react";

interface AddressLinkProps {
  address: string;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

export function AddressLink({ address, className, children, ariaLabel }: AddressLinkProps) {
  const encoded = encodeURIComponent(address);
  const googleUrl = `https://maps.google.com/?q=${encoded}`;

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (typeof navigator === "undefined") return;
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS) {
      e.preventDefault();
      window.location.href = `maps://?q=${encoded}`;
    }
  };

  return (
    <a
      href={googleUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      aria-label={ariaLabel ?? `Open ${address} in maps`}
    >
      {children}
    </a>
  );
}
