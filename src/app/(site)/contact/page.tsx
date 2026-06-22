import type { Metadata } from "next";
import { AddressLink } from "@/components/AddressLink";
import { PillButton } from "@/components/PillButton";

export const metadata: Metadata = {
  title: "Contact",
  description: "Visit our Port Coquitlam salon or give us a call — we'll be in touch within a day.",
  openGraph: {
    title: "Contact — Stellar Beauty",
    description: "Visit our Port Coquitlam salon or give us a call — we'll be in touch within a day.",
  },
};

const ADDRESS = "3040A Flint St, Port Coquitlam, BC V3B 4H4";
const HOURS: Array<[string, string]> = [
  ["Mon", "11 – 15"],
  ["Tue – Fri", "10 – 18"],
  ["Sat", "10 – 17"],
  ["Sun", "Closed"],
];

const linkClass =
  "block text-sm leading-relaxed text-[color:var(--forest)] underline-offset-4 transition-colors hover:underline";

const labelClass = "text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]";

export default function ContactPage() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
        <aside className="order-1 lg:order-2 bg-[color:var(--khaki-soft)] p-8 md:p-10">
          <p className={labelClass}>Contact</p>
          <h1 className="mt-3 font-display text-xl font-medium leading-[1.1] tracking-[-0.015em] text-[color:var(--forest)] md:text-2xl">
            Come find us in Port Coquitlam.
          </h1>

          <div className="mt-8 hairline" />

          <div className="mt-8">
            <p className={labelClass}>Salon</p>
            <address className="mt-2 not-italic">
              <AddressLink address={ADDRESS} className={linkClass} ariaLabel="Open address in Google Maps or Apple Maps">
                <span className="block">3040A Flint St</span>
                <span className="block">Port Coquitlam, BC V3B 4H4 →</span>
              </AddressLink>
            </address>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <p className={labelClass}>Phone</p>
              <a href="tel:+16049444207" className={`mt-2 ${linkClass}`} aria-label="Call (604) 944-4207">
                (604) 944-4207
              </a>
              <p className={`${labelClass} mt-6`}>Email</p>
              <a href="mailto:hello@stellarbeauty.ca" className={`mt-2 ${linkClass} break-all`}>
                hello@stellarbeauty.ca
              </a>
            </div>
            <div>
              <p className={labelClass}>Hours</p>
              <dl className="mt-2 space-y-1.5">
                {HOURS.map(([d, h]) => (
                  <div key={d} className="flex items-baseline justify-between gap-3">
                    <dt className="text-sm text-[color:var(--forest)]/70">{d}</dt>
                    <dd className="text-sm text-[color:var(--forest)] tabular-nums">{h}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-10">
            <PillButton href="tel:+16049444207" label="Call to Book" size="md" fullWidth />
          </div>
        </aside>

        <iframe
          title="Stellar Beauty location"
          src="https://www.google.com/maps?q=3040A+Flint+St+Port+Coquitlam+BC+V3B+4H4&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="order-2 lg:order-1 block h-[60vh] min-h-[420px] w-full border-0 lg:h-auto lg:min-h-[620px]"
        />
      </div>
    </section>
  );
}
