import Link from "next/link";
import { Instagram, Star } from "lucide-react";
import { AddressLink } from "@/components/AddressLink";

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--forest)] text-[color:var(--khaki)]">
      <div className="container-page pt-20 pb-8 md:pt-24 md:pb-10">
        <Link
          href="/"
          className="block font-display text-5xl font-medium leading-[0.95] tracking-[-0.025em] text-[color:var(--khaki-soft)] md:text-7xl"
        >
          STELLAR<span className="text-[color:var(--khaki)]">.</span>
        </Link>
        <p className="mt-5 max-w-sm text-sm leading-relaxed text-[color:var(--khaki)]/75">
          The premier hair salon in Port Coquitlam, BC — precision cuts, balayage, foils, keratin and makeup, crafted with intention.
        </p>

        <div className="mt-14 h-px w-full bg-[color:color-mix(in_oklab,var(--khaki)_18%,transparent)]" />

        <div className="grid gap-10 py-12 sm:grid-cols-2 md:py-14 lg:grid-cols-4 lg:gap-14">
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--khaki)]">Visit</p>
            <AddressLink
              address="3040A Flint St, Port Coquitlam, BC V3B 4H4"
              className="block text-sm leading-relaxed text-white underline-offset-4 transition-colors hover:text-[color:var(--khaki-soft)] hover:underline"
            >
              <span className="block">3040A Flint St</span>
              <span className="block">Port Coquitlam, BC V3B 4H4</span>
            </AddressLink>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--khaki)]">Hours</p>
            <p className="text-sm leading-relaxed text-white">Mon · 11 – 15</p>
            <p className="text-sm leading-relaxed text-white">Tue – Fri · 10 – 18</p>
            <p className="text-sm leading-relaxed text-white">Sat · 10 – 17</p>
            <p className="text-sm leading-relaxed text-white/60">Sun · Closed</p>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--khaki)]">Contact</p>
            <a
              href="mailto:hello@stellarbeauty.ca"
              className="block text-sm leading-relaxed text-white transition-colors hover:text-[color:var(--khaki-soft)]"
            >
              hello@stellarbeauty.ca
            </a>
            <a
              href="tel:+16049444207"
              className="block text-sm leading-relaxed text-white transition-colors hover:text-[color:var(--khaki-soft)]"
            >
              (604) 944-4207
            </a>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--khaki)]">Follow</p>
            <a
              href="#"
              aria-label="Instagram"
              className="mt-1 inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-[color:var(--khaki-soft)]"
            >
              <Instagram className="h-3.5 w-3.5" strokeWidth={1.5} /> Instagram
            </a>
            <a
              href="#"
              aria-label="Google reviews"
              className="mt-2 inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-[color:var(--khaki-soft)]"
            >
              <Star className="h-3.5 w-3.5" strokeWidth={1.5} /> Google Reviews
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-[color:color-mix(in_oklab,var(--khaki)_18%,transparent)]" />

        <div className="flex flex-col gap-3 pt-6 text-xs text-[color:var(--khaki)]/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Stellar Beauty · Port Coquitlam, BC</p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-[color:var(--khaki-soft)]">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-[color:var(--khaki-soft)]">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
