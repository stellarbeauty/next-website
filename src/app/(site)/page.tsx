import type { Metadata } from "next";
import Image from "next/image";
import {
  Scissors,
  Sparkles,
  Brush,
  Wind,
  Droplets,
  Flower2,
  Leaf,
  ArrowRight,
  Star,
  Quote,
  BadgeCheck,
  Hand,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PillButton } from "@/components/PillButton";
import heroImg from "@/assets/hero-salon.jpg";

export const metadata: Metadata = {
  title: "Stellar Beauty — Modern Hair & Beauty Salon",
  description:
    "Stellar Beauty is Port Coquitlam's modern hair salon — precision cuts, balayage, foils, perms, keratin, makeup, threading and waxing. Book today.",
  openGraph: {
    title: "Stellar Beauty — Modern Hair & Beauty Salon",
    description:
      "Precision cuts, balayage, foils, perms, keratin, makeup, threading and waxing in Port Coquitlam, BC.",
    images: [{ url: "/images/hero-salon.jpg", width: 960, height: 1280 }],
  },
};

const SERVICES = [
  {
    icon: Scissors,
    title: "Haircuts",
    body: "Precision cuts for women, men and kids — from classic restyles to soft, lived-in shapes.",
    featured: true,
  },
  { icon: Wind, title: "Hair Styling", body: "Blow-dries, sets and updos for events, weddings and everyday elegance." },
  {
    icon: Droplets,
    title: "Perms & Colours",
    body: "Roots, full colour, perms and spiral perms — lifted with care and consultation.",
  },
  {
    icon: Sparkles,
    title: "Full Head Foils",
    body: "Hand-placed foils for dimensional light and shade — partial, half head and full head.",
  },
  {
    icon: Flower2,
    title: "Hair Treatment",
    body: "Keratin smoothing, hair botox and deep conditioning that restore shine from within.",
  },
  { icon: Brush, title: "Makeup", body: "Soft daytime to editorial — application built around your features." },
  { icon: Leaf, title: "Threading & Waxing", body: "Face and brow threading and waxing — clean lines, calm hands, no rush." },
  { icon: Hand, title: "Nail Services", body: "On-site nail technician — manicures, pedicures, gel and considered nail art." },
];

const SectionMarker = ({ n, label }: { n: string; label: string }) => (
  <div className="flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--forest)]">
    <span>— {n}</span>
    <span className="h-px w-8 bg-[color:var(--forest)]/30" />
    <span>{label}</span>
  </div>
);

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  service: string;
  since: string;
  rating: number;
};

const Stars = ({ n = 5 }: { n?: number }) => (
  <div className="flex gap-0.5" aria-label={`${n} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-3.5 w-3.5 ${i < n ? "fill-[color:var(--forest)] text-[color:var(--forest)]" : "text-[color:var(--rule-color)]"}`}
        strokeWidth={1.25}
      />
    ))}
  </div>
);

const Avatar = ({ name, tone = "forest" }: { name: string; tone?: "forest" | "khaki" }) => {
  const initials = name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
  const cls =
    tone === "forest"
      ? "bg-[color:var(--forest)] text-[color:var(--khaki-soft)]"
      : "bg-[color:var(--khaki)] text-[color:var(--forest)]";
  return (
    <span
      className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-xs font-medium tracking-[0.04em] ${cls}`}
    >
      {initials}
    </span>
  );
};

const Byline = ({ t, tone = "forest" }: { t: Testimonial; tone?: "forest" | "khaki" }) => (
  <div className="flex items-center gap-3">
    <Avatar name={t.name} tone={tone} />
    <div className="min-w-0">
      <p className="truncate text-sm font-medium text-[color:var(--forest)]">{t.name}</p>
      <p className="truncate text-[11px] text-[color:var(--muted-foreground)]">
        {t.role} · {t.company}
      </p>
    </div>
  </div>
);

const FeaturedCard = ({ t }: { t: Testimonial }) => (
  <figure className="group relative lg:col-span-7 flex flex-col justify-between overflow-hidden rounded-2xl border border-[color:var(--rule-color)] bg-[color:var(--khaki-soft)] p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--forest)]/30 md:p-12">
    <Quote
      className="pointer-events-none absolute right-6 top-6 h-14 w-14 text-[color:var(--forest)]/8 md:right-10 md:top-10 md:h-20 md:w-20"
      strokeWidth={1}
    />
    <div>
      <div className="flex items-center gap-3">
        <Stars n={t.rating} />
        <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
          Featured · {t.service}
        </span>
      </div>
      <blockquote className="mt-8 font-display text-xl font-medium leading-[1.25] tracking-[-0.015em] text-[color:var(--forest)] md:text-2xl lg:text-3xl">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
    </div>
    <figcaption className="mt-10 flex items-center justify-between gap-4 border-t border-[color:var(--forest)]/10 pt-6">
      <Byline t={t} />
      <span className="hidden text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)] sm:inline">
        Client since {t.since}
      </span>
    </figcaption>
  </figure>
);

const MiniCard = ({ t, muted = false }: { t: Testimonial; muted?: boolean }) => (
  <figure
    className={`group flex h-full flex-col justify-between rounded-2xl border border-[color:var(--rule-color)] p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--forest)]/30 md:p-7 ${
      muted ? "bg-[color:var(--khaki-soft)]/60" : "bg-background"
    }`}
  >
    <div>
      <Stars n={t.rating} />
      <blockquote className="mt-5 font-display text-base leading-[1.4] text-[color:var(--forest)] md:text-lg">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
    </div>
    <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-[color:var(--forest)]/10 pt-5">
      <Byline t={t} tone={muted ? "khaki" : "forest"} />
      <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
        {t.service}
      </span>
    </figcaption>
  </figure>
);

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Stellar is the only place I've left feeling more like myself, not less. The space alone is worth the visit — the cut sealed it.",
    name: "Amelia Rourke",
    role: "Editor",
    company: "North & Cedar Mag.",
    service: "Cut & Style",
    since: "2019",
    rating: 5,
  },
  {
    quote:
      "The balayage is the best I've ever had. Subtle, sun-kissed and grown out beautifully over three months — no harsh regrowth line in sight.",
    name: "Priya Shah",
    role: "Architect",
    company: "Studio Maren",
    service: "Balayage & Foils",
    since: "2021",
    rating: 5,
  },
  {
    quote: "Calm, considered and incredibly skilled. My keratin treatment transformed my hair completely.",
    name: "Jordan Mei",
    role: "Creative Director",
    company: "Field Notes",
    service: "Keratin",
    since: "2022",
    rating: 5,
  },
  {
    quote: "A men's cut that actually listens. Sharp, modern, and finished in under an hour.",
    name: "Daniel Kovac",
    role: "Founder",
    company: "Kovac & Co.",
    service: "Men's Cut",
    since: "2020",
    rating: 5,
  },
  {
    quote:
      "The team made my wedding morning effortless — hair and makeup that lasted from ceremony to last dance.",
    name: "Sophie Laurent",
    role: "Bride",
    company: "PoCo, BC",
    service: "Bridal",
    since: "2023",
    rating: 5,
  },
  {
    quote: "Honest colour consultation — they talked me out of going too light and I'm so glad they did.",
    name: "Hannah Bell",
    role: "Photographer",
    company: "Bell Studio",
    service: "Colour",
    since: "2022",
    rating: 5,
  },
];

const BRANDS = ["Davines", "Olaplex", "Kérastase", "Wella", "Schwarzkopf", "Moroccanoil"];

const FAQS = [
  {
    q: "Where is Stellar Beauty located?",
    a: "We are at 3040A Flint St, Port Coquitlam, BC V3B 4H4 — a short drive from Coquitlam Centre with on-street parking nearby.",
  },
  {
    q: "What are your opening hours?",
    a: "Open Tuesday through Saturday by appointment. Call (604) 944-4207 to book a time that works for you.",
  },
  {
    q: "Do you offer balayage and full head foils?",
    a: "Yes — we specialise in hand-placed foils (partial, half-head and full-head) along with balayage and dimensional colour. Every colour appointment begins with a consultation.",
  },
  {
    q: "Do you cut men's, women's and children's hair?",
    a: "Absolutely. We provide precision haircuts for women, men, seniors and kids, plus beard trims and full beard shaves.",
  },
  {
    q: "Do I need an appointment, or do you accept walk-ins?",
    a: "We work primarily by appointment to give every guest a focused, unhurried experience. Walk-ins are welcomed when our schedule allows.",
  },
  {
    q: "What hair treatments do you offer?",
    a: "Keratin smoothing, hair botox, perms, spiral perms and deep conditioning — paired with honest advice about what will best suit your hair.",
  },
];

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Stellar Beauty Services",
  itemListElement: [
    { name: "Haircuts", price: "26" },
    { name: "Hair Styling", price: "25" },
    { name: "Perms & Colours", price: "45" },
    { name: "Full Head Foils", price: "250" },
    { name: "Hair Treatment", price: "50" },
    { name: "Makeup", price: "65" },
    { name: "Threading & Waxing", price: "15" },
  ].map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: s.name,
      provider: { "@type": "HairSalon", name: "Stellar Beauty" },
      areaServed: "Port Coquitlam, BC",
      offers: { "@type": "Offer", priceCurrency: "CAD", price: s.price },
    },
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      q: "Where is Stellar Beauty located?",
      a: "Stellar Beauty is located at 3040A Flint St, Port Coquitlam, BC V3B 4H4, Canada.",
    },
    {
      q: "What are your opening hours?",
      a: "We are open Tuesday through Saturday by appointment. Please call (604) 944-4207 to book.",
    },
    {
      q: "Do you offer balayage and full head foils?",
      a: "Yes. We specialise in hand-placed foils — partial, half-head and full-head — as well as balayage and dimensional colour.",
    },
    {
      q: "Do you cut men's, women's and children's hair?",
      a: "Yes. We provide precision haircuts for women, men, seniors and kids, including beard trims and shaves.",
    },
    {
      q: "Do I need an appointment, or do you accept walk-ins?",
      a: "We work primarily by appointment to give every guest a focused, unhurried experience. Walk-ins are welcomed when our schedule allows.",
    },
    {
      q: "What hair treatments do you offer?",
      a: "Keratin smoothing, hair botox, perms, spiral perms and deep conditioning treatments — paired with consultation to match your hair.",
    },
  ].map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="relative w-full overflow-hidden bg-[color:var(--khaki-soft)]">
        <div className="container-page grid min-h-[78vh] grid-cols-1 items-start gap-10 pt-16 pb-20 md:pt-20 md:pb-24 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <SectionMarker n="01 / 05" label="Stellar Beauty" />
            <h1 className="mt-10 font-display text-3xl font-medium leading-[1.08] tracking-[-0.02em] text-[color:var(--forest)] md:text-4xl lg:text-5xl">
              Beauty, built with quiet precision.
            </h1>
            <p className="mt-6 measure text-base leading-relaxed text-[color:var(--muted-foreground)] md:text-md">
              Considered cuts, colour and skin care from a small, focused team — Port Coquitlam&apos;s premier
              destination for an unforgettable beauty experience.
            </p>
            <div className="mt-8">
              <PillButton href="/services-and-pricing" label="Explore Services" size="md" variant="ghost" />
            </div>
            <p className="mt-14 text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
              Port Coquitlam, BC · Est. 2018
            </p>
          </div>

          <div className="lg:col-span-5 lg:mt-16">
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-[0_30px_60px_-30px_rgba(22,44,36,0.35)]">
              <Image
                src={heroImg}
                alt="Stellar Beauty salon interior in Port Coquitlam — natural light, sage green accents and warm khaki millwork"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-24 md:py-32">
        <SectionMarker n="02 / 05" label="Philosophy" />
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="font-display text-2xl font-medium leading-[1.1] tracking-[-0.02em] text-[color:var(--forest)] md:text-3xl lg:text-4xl">
              Two decades of craft, quietly refined into a salon you&apos;ll return to.
            </h2>
            <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
              Led by Minoo · Owner & Senior Stylist
            </p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-base leading-relaxed text-[color:var(--forest)]/85 md:text-md">
              Formerly known as <em className="not-italic font-medium text-[color:var(--forest)]">Parkside Beauty Parlour</em>
              , Stellar Beauty has evolved under the ownership of{" "}
              <span className="font-medium text-[color:var(--forest)]">Minoo</span> — a beauty industry professional
              with more than twenty years of hands-on experience.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[color:var(--muted-foreground)]">
              Through her expertise, attention to detail and a quiet commitment to exceptional service, she has built a
              talented team of stylists, colourists and beauty specialists. Together they deliver results that hold up to
              the mirror — and an experience guests look forward to returning to.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[color:var(--muted-foreground)]">
              The salon itself is designed like a piece of architecture: calm, intentional and generous in light — a
              setting matched to the standard of the work.
            </p>

            <dl className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 border-t border-[color:var(--rule-color)] pt-8 sm:grid-cols-3">
              {[
                { k: "20+", v: "Years of experience" },
                { k: "4", v: "Pro team members" },
                { k: "3,000+", v: "Happy clients" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-2xl font-medium tracking-[-0.01em] text-[color:var(--forest)] md:text-3xl">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-[11px] uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--rule-color)] bg-background py-24 md:py-32">
        <div className="container-page">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <SectionMarker n="03 / 05" label="Voices" />
              <h2 className="mt-4 font-display text-2xl font-medium leading-[1.1] tracking-[-0.015em] text-[color:var(--forest)] md:text-3xl lg:text-4xl">
                Trusted by guests who notice the details.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-[color:var(--muted-foreground)]">
                A small selection of unedited words from people who&apos;ve sat in our chair — across cut, colour,
                bridal and treatment.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[color:var(--forest)]">
                <div className="flex items-center gap-2">
                  <div className="flex" aria-hidden>
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-[color:var(--forest)] text-[color:var(--forest)]"
                        strokeWidth={1.25}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">4.9</span>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                    287 Google reviews
                  </span>
                </div>
                <span className="hidden h-3 w-px bg-[color:var(--rule-color)] lg:inline-block" />
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                  <BadgeCheck className="h-3.5 w-3.5 text-[color:var(--forest)]" strokeWidth={1.5} />
                  Verified clients
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-6">
            <FeaturedCard t={TESTIMONIALS[0]} />
            <div className="grid gap-5 lg:col-span-5 lg:gap-6">
              {TESTIMONIALS.slice(1, 3).map((t) => (
                <MiniCard key={t.name} t={t} />
              ))}
            </div>
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 md:mt-6 lg:grid-cols-3 lg:gap-6">
            {TESTIMONIALS.slice(3).map((t, i) => (
              <MiniCard key={t.name} t={t} muted={i === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--rule-color)] bg-background">
        <div className="container-page py-24 md:py-32">
          <div className="min-w-0">
            <SectionMarker n="04 / 05" label="Services" />
            <h2 className="mt-4 max-w-xl font-display text-2xl font-medium leading-[1.1] tracking-[-0.015em] md:text-3xl">
              A focused, modern offering.
            </h2>
          </div>
          <div className="mt-14 grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-3 md:grid-cols-3 md:auto-rows-[200px]">
            {SERVICES.map((s) => {
              const featured = s.featured;
              return (
                <article
                  key={s.title}
                  className={`group relative flex flex-col justify-between rounded-2xl bg-[color:var(--khaki-soft)] p-6 transition-colors hover:bg-[color:var(--khaki)] md:p-7 ${featured ? "md:row-span-2 md:col-span-1" : ""}`}
                >
                  <s.icon className="h-5 w-5 text-[color:var(--forest)]" strokeWidth={1.25} />
                  <div>
                    <h3
                      className={`font-display font-medium tracking-[-0.01em] ${featured ? "text-2xl md:text-3xl" : "text-lg"}`}
                    >
                      {s.title}
                    </h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed text-[color:var(--muted-foreground)] ${featured ? "max-w-xs" : "line-clamp-2"}`}
                    >
                      {s.body}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[color:var(--rule-color)] bg-[color:var(--khaki-soft)]/40">
        <div className="container-page py-20 md:py-24">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionMarker n="05 / 05" label="Brands we trust" />
            <p className="text-sm text-[color:var(--muted-foreground)] md:max-w-xs md:text-right">
              Professional-grade products selected for performance, integrity and the health of your hair.
            </p>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[color:var(--rule-color)] bg-[color:var(--rule-color)] sm:grid-cols-3 lg:grid-cols-6">
            {BRANDS.map((brand) => (
              <li
                key={brand}
                className="flex h-24 items-center justify-center bg-background px-6 transition-colors hover:bg-[color:var(--khaki-soft)] md:h-28"
              >
                <span className="font-display text-lg font-medium tracking-[-0.01em] text-[color:var(--forest)]/70 md:text-xl">
                  {brand}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionMarker n="—" label="FAQ" />
            <h2 className="mt-4 font-display text-2xl font-medium leading-[1.1] tracking-[-0.015em] md:text-3xl">
              Questions, answered.
            </h2>
            <p className="mt-4 max-w-sm text-sm text-[color:var(--muted-foreground)]">
              Everything you need to know before booking your first visit to Stellar Beauty in Port Coquitlam.
            </p>
          </div>
          <div className="md:col-span-8">
            <Accordion type="single" collapsible className="border-t border-[color:var(--rule-color)]">
              {FAQS.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-[color:var(--rule-color)]">
                  <AccordionTrigger className="py-6 text-left font-display text-lg font-medium tracking-[-0.01em] text-[color:var(--forest)] hover:no-underline md:text-xl">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-[color:var(--muted-foreground)]">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--khaki-soft)]">
        <div className="container-page grid gap-6 py-12 md:grid-cols-4 md:items-center md:py-14">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
              Visit
            </p>
            <p className="mt-1 text-sm text-[color:var(--forest)]">3040A Flint St, Port Coquitlam</p>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
              Hours
            </p>
            <p className="mt-1 text-sm text-[color:var(--forest)]">Tue – Sat · By appointment</p>
          </div>
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
              Call
            </p>
            <a
              href="tel:+16049444207"
              className="mt-1 inline-flex items-center gap-2 text-sm text-[color:var(--forest)] hover:underline"
            >
              (604) 944-4207 <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="md:justify-self-end">
            <PillButton href="/contact" label="Book Now" size="md" />
          </div>
        </div>
      </section>
    </>
  );
}
