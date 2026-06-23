"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { PillButton } from "@/components/PillButton";
import { LINKS } from "@/lib/links";

const NAV = [
  { href: "/", label: "Home", exact: true },
  { href: "/about", label: "About", exact: false },
  { href: "/services-and-pricing", label: "Services", exact: false },
  { href: "/contact", label: "Contact", exact: false },
] as const;

function Logo({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Stellar Beauty home"
      className={`group inline-block font-display text-2xl font-medium leading-[1.08] tracking-[-0.02em] whitespace-nowrap text-[color:var(--forest)] transition-opacity hover:opacity-70 md:text-3xl ${className}`}
    >
      Stellar Beauty<span className="text-[color:var(--khaki)]">.</span>
    </Link>
  );
}

function useIsActive(href: string, exact: boolean) {
  const pathname = usePathname();
  return exact ? pathname === href : pathname.startsWith(href) && href !== "/";
}

const NAV_LINK_TEXT =
  "text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-300";

function NavDot({
  active,
  size = "sm",
}: {
  active: boolean;
  size?: "sm" | "md";
}) {
  const sizeClass = size === "md" ? "h-1.5 w-1.5" : "h-1 w-1";

  return (
    <span
      aria-hidden
      className={`${sizeClass} shrink-0 rounded-full bg-[color:var(--forest)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        active
          ? "scale-100 opacity-100"
          : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50"
      }`}
    />
  );
}
function DesktopNavLink({
  href,
  label,
  exact,
}: {
  href: string;
  label: string;
  exact: boolean;
}) {
  const isActive = useIsActive(href, exact);

  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2.5 py-2 ${NAV_LINK_TEXT} ${
        isActive
          ? "text-[color:var(--forest)]"
          : "text-[color:var(--muted-foreground)] hover:text-[color:var(--forest)]"
      }`}
    >
      <NavDot active={isActive} />
      {label}
    </Link>
  );
}

function MobileNavLink({
  href,
  label,
  exact,
  onClick,
}: {
  href: string;
  label: string;
  exact: boolean;
  onClick?: () => void;
}) {
  const isActive = useIsActive(href, exact);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center gap-4 py-3 font-display text-3xl font-medium leading-none tracking-[-0.02em] transition-colors duration-300 sm:text-4xl ${
        isActive
          ? "text-[color:var(--forest)]"
          : "text-[color:var(--forest)]/40 hover:text-[color:var(--forest)]"
      }`}
    >
      <NavDot active={isActive} size="md" />
      {label}
    </Link>
  );
}

function BookNowButton({ className = "", onClick }: { className?: string; onClick?: () => void }) {
  return (
    <PillButton
      href={LINKS.booking}
      label="Book Now"
      variant="alternative"
      size="sm"
      external
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={className}
    />
  );
}

function InstagramLink({ onClick }: { onClick?: () => void }) {
  return (
    <a
      href={LINKS.instagram}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`${NAV_LINK_TEXT} text-[color:var(--forest)]/40 transition-colors hover:text-[color:var(--forest)]`}
    >
      Instagram
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        data-scrolled={scrolled ? "true" : "false"}
        className="fixed inset-x-0 top-0 z-40 bg-transparent shadow-[0_1px_0_0_var(--rule-color)] transition-all duration-300 data-[scrolled=true]:bg-[color:var(--khaki-soft)]/25 data-[scrolled=true]:backdrop-blur-md"
      >
        <div className="container-page grid h-[var(--site-header-height)] grid-cols-[1fr_auto_1fr] items-center gap-6">
          <Logo className="justify-self-start" />

          <nav className="hidden items-center justify-center gap-8 md:flex">
            {NAV.map((item) => (
              <DesktopNavLink key={item.href} href={item.href} label={item.label} exact={item.exact} />
            ))}
          </nav>

          <div className="col-start-3 flex items-center justify-end gap-6">
            <div className="hidden items-center gap-6 md:flex">
              <span className="h-3 w-px bg-[color:var(--rule-color)]" aria-hidden />
              <BookNowButton />
            </div>
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="p-2 text-[color:var(--forest)] transition-colors hover:opacity-70 md:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-[color:var(--ink)]/30 backdrop-blur-[2px] transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-full flex-col bg-[color:var(--khaki-soft)] px-7 py-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="flex items-center justify-between">
            <Logo className="text-2xl sm:text-3xl" onClick={() => setOpen(false)} />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2 text-[color:var(--forest)] transition-colors hover:opacity-70"
            >
              <X className="h-5 w-5" strokeWidth={1.25} />
            </button>
          </div>

          <div className="mt-6 hairline" />

          <nav className="mt-6 flex flex-col gap-2">
            {NAV.map((item) => (
              <MobileNavLink
                key={item.href}
                href={item.href}
                label={item.label}
                exact={item.exact}
                onClick={() => setOpen(false)}
              />
            ))}
          </nav>

          <div className="mt-auto pt-8">
            <div className="hairline" />
            <div className="mt-6 flex items-center justify-between">
              <BookNowButton onClick={() => setOpen(false)} />
              <InstagramLink onClick={() => setOpen(false)} />
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
