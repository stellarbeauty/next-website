import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { PillButton } from "@/components/PillButton";
import { PHONE } from "@/lib/links";

export const metadata: Metadata = {
  title: "Contact",
  description: "Visit our Port Coquitlam salon or give us a call — we'll be in touch within a day.",
  openGraph: {
    title: "Contact — Stellar Beauty",
    description: "Visit our Port Coquitlam salon or give us a call — we'll be in touch within a day.",
  },
};

const HOURS: Array<[string, string]> = [
  ["Mon", "11 – 15"],
  ["Tue – Fri", "10 – 18"],
  ["Sat", "10 – 17"],
  ["Sun", "Closed"],
];

const addressClass = "block text-sm leading-relaxed text-[color:var(--forest)]";

const phoneClass =
  "inline-flex min-h-[44px] items-center gap-2 text-base font-medium text-[color:var(--forest)] underline-offset-4 transition-colors hover:underline";

export default function ContactPage() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
        <aside className="order-1 lg:order-2 bg-[color:var(--khaki-soft)] p-8 md:p-10">
          <p className="label-quiet">Contact</p>
          <h1 className="mt-3 font-display text-xl font-medium leading-[1.1] tracking-[-0.015em] text-[color:var(--forest)] md:text-2xl">
            Come find us in Port Coquitlam.
          </h1>

          <div className="mt-8 hairline" />

          <div className="mt-8">
            <p className="label-quiet">Address</p>
            <address className="mt-2 not-italic">
              <span className={addressClass}>3040A Flint St</span>
              <span className={addressClass}>Port Coquitlam, BC V3B 4H4</span>
            </address>
          </div>

          <div className="mt-8 space-y-8">
            <div>
              <p className="label-quiet">Phone</p>
              <a href={PHONE.href} className={`mt-2 ${phoneClass}`} aria-label={`Call ${PHONE.display}`}>
                <Phone className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
                {PHONE.display}
              </a>
            </div>
            <div>
              <p className="label-quiet">Hours</p>
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
            <PillButton href={PHONE.href} label="Call to Book" size="md" fullWidth />
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
