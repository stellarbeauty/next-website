"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { PillButton } from "@/components/PillButton";

const NAV = [
  { href: "/", label: "Home", exact: true },
  { href: "/about", label: "About", exact: false },
  { href: "/services-and-pricing", label: "SERVICES & PRICING", exact: false },
  { href: "/contact", label: "CONTACT", exact: false },
] as const;

function Logo({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className={`font-display text-sm font-medium tracking-[-0.02em] uppercase ${className}`}
    >
      STELLAR<span className="text-[color:var(--khaki)]">.</span>
    </Link>
  );
}

function NavLink({
  href,
  label,
  exact,
  className,
  onClick,
}: {
  href: string;
  label: string;
  exact: boolean;
  className: string;
  onClick?: () => void;
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname.startsWith(href) && href !== "/";

  return (
    <Link href={href} onClick={onClick} className={`${className} ${isActive ? "text-[color:var(--forest)]" : ""}`}>
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting), {
      rootMargin: "0px",
      threshold: 0,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentinelRef} aria-hidden className="absolute top-0 left-0 h-px w-px" />
      <header
        data-scrolled={scrolled ? "true" : "false"}
        className="sticky top-0 z-40 bg-background/85 backdrop-blur transition-shadow duration-300 data-[scrolled=true]:shadow-[0_1px_0_0_var(--rule-color)]"
      >
        <div className="container-page grid h-14 grid-cols-[1fr_auto_1fr] items-center gap-6 md:h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          <nav className="hidden items-center justify-center gap-7 md:flex">
            {NAV.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                exact={item.exact}
                className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)] transition-colors hover:text-[color:var(--forest)]"
              />
            ))}
          </nav>
          <div className="hidden items-center justify-end md:flex">
            <PillButton href="/contact" label="Book Now" size="sm" />
          </div>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="col-start-3 ml-auto rounded-full border border-[color:var(--offwhite)] p-2.5 md:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-[color:var(--ink)]/40 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-[color:var(--khaki-soft)] p-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            <Logo onClick={() => setOpen(false)} />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="rounded-full border border-[color:var(--forest)]/20 p-2.5"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="mt-14 flex flex-col gap-5">
            {NAV.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                label={item.label}
                exact={item.exact}
                onClick={() => setOpen(false)}
                className="font-display text-xl font-medium tracking-[-0.01em] text-[color:var(--forest)]"
              />
            ))}
          </nav>
          <div className="mt-auto pt-10">
            <div className="mb-6 hairline" />
            <PillButton href="/contact" label="Book Now" size="md" fullWidth />
          </div>
        </aside>
      </div>
    </>
  );
}
