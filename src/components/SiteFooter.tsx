import Link from "next/link";
import { Facebook, Instagram, Star } from "lucide-react";
import { LINKS, PHONE } from "@/lib/links";

export function SiteFooter() {
  return (
    <footer className="bg-[color:var(--forest)] text-[color:var(--khaki)]">
      <div className="container-page pt-10 pb-4 md:pt-12 md:pb-5">
        <Link
          href="/"
          className="block font-display text-5xl font-medium leading-[0.95] tracking-[-0.025em] text-[color:var(--khaki-soft)] md:text-7xl"
        >
          STELLAR<span className="text-[color:var(--khaki)]">.</span>
        </Link>
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-[color:var(--khaki)]/70">
          Experience the ultimate beauty treatment at Stellar Beauty Salon, the premier destination in Port
          Coquitlam. Our unmatched range of services guarantees an unforgettable experience. Unleash the power of
          beauty and discover the difference with us.
        </p>

        <div className="mt-14 hairline bg-[color:color-mix(in_oklab,var(--khaki)_18%,transparent)]" />

        <div className="grid gap-10 py-6 sm:grid-cols-2 md:py-7 lg:grid-cols-4 lg:gap-14">
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--khaki)]">
              Address
            </p>
            <address className="not-italic">
              <span className="block text-sm leading-relaxed text-white">3040A Flint St</span>
              <span className="block text-sm leading-relaxed text-white">Port Coquitlam, BC V3B 4H4</span>
            </address>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--khaki)]">
              Hours
            </p>
            <p className="text-sm leading-relaxed text-white">Mon · 11 – 15</p>
            <p className="text-sm leading-relaxed text-white">Tue – Fri · 10 – 18</p>
            <p className="text-sm leading-relaxed text-white">Sat · 10 – 17</p>
            <p className="text-sm leading-relaxed text-white/60">Sun · Closed</p>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--khaki)]">
              Phone
            </p>
            <a
              href={PHONE.href}
              className="block text-sm leading-relaxed text-white transition-colors hover:text-[color:var(--khaki-soft)]"
            >
              {PHONE.display}
            </a>
          </div>
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--khaki)]">
              Follow
            </p>
            <div className="flex flex-col gap-2">
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-[color:var(--khaki-soft)]"
              >
                <Instagram className="h-3.5 w-3.5" strokeWidth={1.5} /> Instagram
              </a>
              <a
                href={LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-[color:var(--khaki-soft)]"
              >
                <Facebook className="h-3.5 w-3.5" strokeWidth={1.5} /> Facebook
              </a>
              <a
                href={LINKS.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google reviews"
                className="inline-flex items-center gap-2 text-sm text-white transition-colors hover:text-[color:var(--khaki-soft)]"
              >
                <Star className="h-3.5 w-3.5" strokeWidth={1.5} /> Google Reviews
              </a>
            </div>
          </div>
        </div>

        <div className="hairline bg-[color:color-mix(in_oklab,var(--khaki)_18%,transparent)]" />

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
