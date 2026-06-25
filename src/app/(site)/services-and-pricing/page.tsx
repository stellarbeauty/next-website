import type { Metadata } from "next";
import { ArrowIcon } from "@/components/PillButton";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Transparent pricing for haircuts, balayage, foils, perms, keratin, makeup, threading and waxing in Port Coquitlam, BC.",
  openGraph: {
    title: "Services & Pricing — Stellar Beauty",
    description: "A focused offering with transparent pricing — cuts, colour, foils, treatments and more.",
  },
};

const SERVICES: Array<{ id: string; title: string; body: string; from: string; pricingAnchor: string }> = [
  {
    id: "haircuts",
    title: "Haircuts",
    body: "Precision cuts for women, men and kids — from classic restyles to soft, lived-in shapes.",
    from: "from $26",
    pricingAnchor: "women-s-haircut",
  },
  {
    id: "styling",
    title: "Hair Styling",
    body: "Blow-dries, sets and updos for events, weddings and everyday elegance.",
    from: "from $25",
    pricingAnchor: "hair-styling",
  },
  {
    id: "perms-colours",
    title: "Perms & Colours",
    body: "Roots, toner, full colour, perms and spiral perms — lifted with care and consultation.",
    from: "from $45",
    pricingAnchor: "perms-colours",
  },
  {
    id: "foils",
    title: "Full Head Foils",
    body: "Hand-placed foils for dimensional light and shade — partial, half head and full head.",
    from: "from $110",
    pricingAnchor: "highlights",
  },
  {
    id: "treatment",
    title: "Hair Treatment",
    body: "Keratin smoothing, hair botox and deep conditioning that restore shine from within.",
    from: "from $50",
    pricingAnchor: "hair-treatment",
  },
  {
    id: "makeup",
    title: "Makeup",
    body: "Soft daytime to editorial — application built around your features.",
    from: "from $65",
    pricingAnchor: "makeup",
  },
  {
    id: "threading",
    title: "Threading & Waxing",
    body: "Face and brow threading and waxing — clean lines, calm hands, no rush.",
    from: "from $15",
    pricingAnchor: "threading-waxing",
  },
  {
    id: "nails",
    title: "Nail Services",
    body: "Manicures, pedicures, gel and nail art — delivered by our on-site professional nail technician.",
    from: "from $25",
    pricingAnchor: "nail-services",
  },
];

type PriceItem = { name: string; note?: string; price: string };
type PriceGroup = { group: string; items: PriceItem[]; groupNote?: string };

const PRICING: PriceGroup[] = [
  {
    group: "Women's Haircut",
    items: [
      { name: "Women's Haircut Only", price: "$35" },
      { name: "Shampoo / Cut / Blow-dry", note: "Short", price: "$45" },
      { name: "Shampoo / Cut / Blow-dry", note: "Medium", price: "$55" },
      { name: "Shampoo / Cut / Blow-dry", note: "Long", price: "$60" },
      { name: "Bangs Cut", price: "From $10" },
      { name: "Cut & Blow Dry", price: "From $45" },
      { name: "Wash & Haircut", price: "From $45" },
      { name: "Kid's Cut (Girls)", price: "$25" },
    ],
  },
  {
    group: "Men's Haircut",
    items: [
      { name: "Men's Haircut", price: "$26" },
      { name: "Basic Buzzcut", price: "$18" },
      { name: "Men's Haircut (Seniors)", price: "$20" },
      { name: "Beard Trim", price: "$10" },
      { name: "Beard Shave", price: "$30" },
      { name: "Men's Cut & Colour", price: "$60" },
      { name: "Kid's Cut (Boys)", price: "$20" },
    ],
  },
  {
    group: "Hair Styling",
    items: [
      { name: "Blow Dry & Flat Iron", price: "From $35" },
      { name: "Blow Dry & Curling Iron", price: "From $35" },
      { name: "Shampoo Set", price: "$40" },
      { name: "Blow Dry Style", note: "Short", price: "$25" },
      { name: "Blow Dry Style", note: "Medium", price: "From $35" },
      { name: "Blow Dry Style", note: "Long", price: "From $40" },
      { name: "Updos", price: "From $75" },
    ],
  },
  {
    group: "Hair Treatment",
    groupNote: "Consultation Required",
    items: [
      { name: "Keratin Smoothing Treatment", price: "From $250" },
      { name: "Hair Botox", price: "From $250" },
      { name: "Deep Conditioning", price: "$50" },
    ],
  },
  {
    group: "Perms & Colours",
    groupNote: "Consultation Required",
    items: [
      { name: "Perms (Includes Cut)", price: "$120" },
      { name: "Spiral Perms", price: "From $180" },
      { name: "Roots Bleach", price: "From $120" },
      { name: "Balayage", price: "From $300" },
      { name: "Toner", price: "From $45" },
      { name: "Full Color", price: "From $95" },
      { name: "Roots Touch Up", price: "$75" },
      { name: "Cap Streak", price: "From $120" },
    ],
  },
  {
    group: "Highlights",
    groupNote: "Consultation Required",
    items: [
      { name: "Partial Highlights", price: "From $110" },
      { name: "Half Head Highlights", price: "From $150" },
      { name: "Full Head Highlights", price: "From $250" },
    ],
  },
  {
    group: "Threading & Waxing",
    items: [
      { name: "Face Threading", price: "$25" },
      { name: "Eyebrows Threading", price: "$15" },
      { name: "Face & Eyebrows Threading", price: "$35" },
      { name: "Face Waxing", price: "$20" },
      { name: "Eyebrows Waxing", price: "$15" },
      { name: "Face & Eyebrows Waxing", price: "$30" },
    ],
  },
  {
    group: "Makeup",
    items: [
      { name: "Simple Makeup", price: "$65" },
      { name: "Professional Makeup", price: "From $120" },
    ],
  },
  {
    group: "Nail Services",
    groupNote: "On-site nail technician available",
    items: [
      { name: "Classic Manicure", price: "$25" },
      { name: "Gel Manicure", price: "$40" },
      { name: "Classic Pedicure", price: "$45" },
      { name: "Gel Pedicure", price: "$60" },
      { name: "Manicure & Pedicure Combo", price: "From $65" },
      { name: "Gel Removal", price: "$15" },
      { name: "Nail Art", note: "Per nail", price: "From $5" },
    ],
  },
  {
    group: "Other Services",
    items: [
      { name: "Hourly Rate", price: "$65" },
      { name: "Consultation", note: "Free up to 15 minutes", price: "Free" },
    ],
  },
];

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Stellar Beauty — Services & Pricing",
    itemListElement: PRICING.flatMap((g) =>
      g.items.map((it) => ({
        "@type": "Offer",
        name: it.note ? `${g.group} — ${it.name} (${it.note})` : `${g.group} — ${it.name}`,
        priceCurrency: "CAD",
        price: it.price.replace(/[^0-9.]/g, "") || "0",
        priceSpecification: { "@type": "PriceSpecification", priceCurrency: "CAD", price: it.price },
      })),
    ),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="container-page pt-[calc(var(--site-header-height)+3rem)] pb-8 md:pt-[calc(var(--site-header-height)+4rem)] md:pb-10">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--forest)]">
            Services & Pricing
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
            — {SERVICES.length} services
          </p>
        </div>
        <h1 className="mt-8 max-w-3xl font-display text-3xl font-medium leading-[1.1] tracking-[-0.02em] md:text-5xl">
          A small, focused offering — done properly.
        </h1>
        <p className="measure mt-6 text-base leading-relaxed text-[color:var(--muted-foreground)] md:text-md">
          We resist the temptation to do everything. What we offer, we offer well — with consultation, clean technique
          and transparent pricing.
        </p>
      </section>

      <section className="container-page pb-10 md:pb-14">
        <div className="hairline" />
        <ul>
          {SERVICES.map((s, i) => (
            <li key={s.id} className="border-b border-[color:var(--forest)]/10">
              <a
                href={`#${s.pricingAnchor}`}
                className="group grid grid-cols-[auto_1fr_auto] items-baseline gap-5 py-7 transition-flow hover:bg-[color:var(--khaki-soft)]/40 md:gap-10 md:py-9"
              >
                <span className="label-quiet tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <div className="min-w-0">
                  <h3 className="font-display text-lg font-medium tracking-[-0.005em] text-[color:var(--forest)] md:text-xl">
                    {s.title}
                  </h3>
                  <p className="measure mt-2 hidden text-sm leading-relaxed text-[color:var(--muted-foreground)] sm:block">
                    {s.body}
                  </p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-2 text-[11px] font-medium uppercase tracking-[0.14em] text-[color:var(--forest)]">
                  <span className="hidden md:inline">{s.from}</span>
                  <ArrowIcon size="sm" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-[color:var(--khaki-soft)]">
        <div className="container-page py-10 md:py-14">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--forest)]">Pricing</p>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
              CAD · taxes extra
            </p>
          </div>
          <h2 className="mt-8 max-w-3xl font-display text-2xl font-medium leading-[1.1] tracking-[-0.02em] md:text-3xl">
            Clear pricing, no surprises.
          </h2>

          <div className="mt-14 space-y-12">
            {PRICING.map((g) => (
              <div
                key={g.group}
                id={g.group.toLowerCase().replace(/[^a-z]+/g, "-")}
                className="anchor-target grid gap-8 md:grid-cols-12 md:gap-12"
              >
                <div className="md:col-span-3">
                  <h3 className="font-display text-lg font-medium leading-tight tracking-[-0.01em] text-[color:var(--forest)] md:text-xl">
                    {g.group}
                  </h3>
                  {g.groupNote && (
                    <p className="mt-2 text-xs italic text-[color:var(--muted-foreground)]">{g.groupNote}</p>
                  )}
                </div>
                <div className="md:col-span-9">
                  <ul>
                    {g.items.map((it) => (
                      <li
                        key={`${it.name}-${it.note ?? ""}`}
                        className="flex items-baseline justify-between gap-4 border-b border-dotted border-[color:var(--forest)]/20 py-3"
                      >
                        <p className="min-w-0 text-sm text-[color:var(--forest)]">
                          {it.name}
                          {it.note && <span className="text-[color:var(--muted-foreground)]"> · {it.note}</span>}
                        </p>
                        <p className="shrink-0 text-sm font-medium tabular-nums text-[color:var(--forest)]">
                          {it.price}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
