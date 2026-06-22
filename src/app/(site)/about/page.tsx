import type { Metadata } from "next";
import Image from "next/image";
import { Instagram, Star } from "lucide-react";
import portrait from "@/assets/about-portrait.jpg";

export const metadata: Metadata = {
  title: "About",
  description:
    "Our philosophy: modern beauty practiced with calm precision and a deep commitment to craft.",
  openGraph: {
    title: "About — Stellar Beauty",
    description:
      "Our philosophy: modern beauty practiced with calm precision and a deep commitment to craft.",
  },
};

export default function AboutPage() {
  return (
    <>
      <section className="container-page pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--forest)]">About</p>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
            — Est. 2018, Port Coquitlam
          </p>
        </div>
        <h1 className="mt-8 max-w-3xl font-display text-3xl font-medium leading-[1.1] tracking-[-0.02em] text-[color:var(--forest)] md:text-5xl">
          We believe modern beauty is quiet, considered and deeply personal.
        </h1>
        <a
          href="https://www.google.com/search?q=Stellar+Beauty+Port+Coquitlam"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="4.9 star rating from 287 Google reviews"
          className="mt-10 inline-flex items-center gap-4 rounded-full border border-[color:var(--rule-color)] bg-white/60 px-5 py-2.5 backdrop-blur transition-colors hover:border-[color:var(--forest)]/30"
        >
          <span className="flex items-center gap-0.5" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3.5 w-3.5 fill-[color:var(--forest)] text-[color:var(--forest)]" />
            ))}
          </span>
          <span className="text-sm text-[color:var(--forest)]">
            <span className="font-medium">4.9</span>
            <span className="mx-2 text-[color:var(--muted-foreground)]">·</span>
            <span>287 Google reviews</span>
          </span>
        </a>
        <div className="mt-16 hairline" />
      </section>

      <section className="overflow-hidden pb-20 md:pb-28">
        <div className="container-page grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5 md:-ml-8 lg:-ml-12">
            <Image
              src={portrait}
              alt="Stellar Beauty stylist working with a client in the Port Coquitlam salon — natural daylight, warm khaki interior"
              width={1200}
              height={1500}
              className="aspect-[4/5] w-full rounded-2xl object-cover shadow-[0_30px_60px_-30px_rgba(22,44,36,0.3)]"
            />
          </div>
          <div className="md:col-span-6 md:col-start-7 md:pt-10">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--forest)]">Philosophy</p>
            <h2 className="mt-3 font-display text-xl font-medium leading-[1.15] tracking-[-0.015em] md:text-2xl">
              A studio built around the person in the chair.
            </h2>
            <div className="measure mt-6 space-y-4 text-base leading-relaxed text-[color:var(--muted-foreground)]">
              <p>
                Stellar Beauty began with a simple idea: that a salon could feel like a piece of architecture — open,
                generous, made of light and quiet rather than noise.
              </p>
              <p>
                Every detail of the space, from the soft khaki walls to the deep green accents, is chosen to slow the
                room down. Our team works with the same discipline: listening first, recommending honestly, and refusing
                to rush the work.
              </p>
              <p>We&apos;re proudly small. That is how we keep the craft high and the experience unmistakably yours.</p>
            </div>

            <div className="mt-10 hairline" />
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {[
                ["Est.", "2018"],
                ["Location", "Port Coquitlam"],
                ["Team", "4 stylists"],
                ["Studio", "700 sq ft, north-facing"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-3">
                  <dt className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                    {k}
                  </dt>
                  <dd className="text-[color:var(--forest)]">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--khaki-soft)]">
        <div className="container-page py-20 md:py-24">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--forest)]">Values</p>
          <div className="mt-10 hairline" />
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              { n: "01", t: "Craft", b: "Continual training and a relentless attention to the small things." },
              { n: "02", t: "Care", b: "Clean formulas, calm rooms, no rushed appointments." },
              { n: "03", t: "Clarity", b: "Honest pricing, honest advice, honest results." },
            ].map((v, i) => (
              <div
                key={v.n}
                className={`flex flex-col gap-3 py-10 md:py-14 ${i > 0 ? "border-t border-[color:var(--forest)]/10 md:border-t-0 md:border-l md:pl-10" : "md:pr-10"}`}
              >
                <p className="font-display text-3xl font-light tracking-[-0.01em] text-[color:var(--forest)]">{v.n}</p>
                <h3 className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--forest)]">
                  {v.t}
                </h3>
                <p className="text-sm leading-relaxed text-[color:var(--muted-foreground)]">{v.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24 md:py-32">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--forest)]">
            Meet the Team
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
            — Four stylists, one studio
          </p>
        </div>
        <h2 className="mt-6 max-w-2xl font-display text-2xl font-medium leading-[1.15] tracking-[-0.015em] text-[color:var(--forest)] md:text-3xl">
          Quietly skilled, generously attentive.
        </h2>
        <div className="mt-12 hairline" />
        <ul className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Amelia Rourke", role: "Founder · Creative Director", ig: "amelia.stellar", seed: "amelia-rourke" },
            { name: "Priya Shah", role: "Senior Colourist", ig: "priya.colour", seed: "priya-shah" },
            { name: "Jordan Mei", role: "Senior Stylist", ig: "jordan.mei.hair", seed: "jordan-mei" },
            { name: "Daniel Kovac", role: "Stylist · Barbering", ig: null, seed: "daniel-kovac" },
          ].map((m) => (
            <li key={m.name} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-[color:var(--khaki-soft)]">
                <Image
                  src={`https://picsum.photos/seed/${m.seed}/800/1000`}
                  alt={`${m.name}, ${m.role} at Stellar Beauty in Port Coquitlam`}
                  width={800}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:grayscale-0"
                />
                {m.ig && (
                  <a
                    href={`https://instagram.com/${m.ig}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${m.name} on Instagram`}
                    className="pointer-events-none absolute inset-x-4 bottom-4 flex translate-y-3 items-center justify-between rounded-full border border-white/30 bg-[color:var(--forest)]/85 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--khaki-soft)] opacity-0 backdrop-blur transition-all duration-500 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <span className="truncate">@{m.ig}</span>
                    <Instagram className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  </a>
                )}
              </div>
              <div className="mt-5">
                <h3 className="font-display text-lg font-medium tracking-[-0.01em] text-[color:var(--forest)]">
                  {m.name}
                </h3>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
                  {m.role}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-[color:var(--rule-color)] bg-white">
        <div className="container-page py-24 md:py-32">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--forest)]">Gallery</p>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
              — Inside the studio
            </p>
          </div>
          <h2 className="mt-6 max-w-2xl font-display text-2xl font-medium leading-[1.15] tracking-[-0.015em] text-[color:var(--forest)] md:text-3xl">
            Light, texture, and the quiet rituals of the chair.
          </h2>
          <div className="mt-12 hairline" />
          <div className="mt-12 columns-2 gap-4 md:columns-3 md:gap-6 lg:columns-4">
            {[
              { seed: "studio-01", h: 900, alt: "North-facing window light across the styling stations" },
              { seed: "studio-02", h: 1200, alt: "Hand applying balayage colour to long hair" },
              { seed: "studio-03", h: 700, alt: "Detail of brass fittings and warm khaki cabinetry" },
              { seed: "studio-04", h: 1100, alt: "Stylist finishing a soft, lived-in cut" },
              { seed: "studio-05", h: 850, alt: "Apothecary shelf of professional hair products" },
              { seed: "studio-06", h: 1300, alt: "Quiet washing station with linen towels" },
              { seed: "studio-07", h: 950, alt: "Mirror reflection of a fresh colour transformation" },
              { seed: "studio-08", h: 1000, alt: "Bouquet of dried botanicals on the reception counter" },
              { seed: "studio-09", h: 750, alt: "Detail of scissors and combs on a marble tray" },
            ].map((g) => (
              <figure
                key={g.seed}
                className="mb-4 break-inside-avoid overflow-hidden rounded-xl bg-[color:var(--khaki-soft)] md:mb-6"
              >
                <Image
                  src={`https://picsum.photos/seed/${g.seed}/800/${g.h}`}
                  alt={`Stellar Beauty studio — ${g.alt}`}
                  width={800}
                  height={g.h}
                  className="w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
