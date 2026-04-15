"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";

type SmoothScrollLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export function SmoothScrollLink({
  href,
  onClick,
  children,
  ...rest
}: SmoothScrollLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;
    if (!href.startsWith("#")) return;
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", href);
  }

  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
