# Vite → Next.js transfer notes

Reference source: `vite/ui-improvements/` (UI/UX improvements branch)

## Intentionally NOT ported
- **Header** (`SiteHeader.tsx`) — keep existing Next.js version
- **Buttons** — keep `PillButton`; do not import shadcn `Button`
- **Data folder architecture** — keep inline arrays in page files (`reviews.ts`, `faqs.ts`, `services.ts`, `pricing.ts` are reference only)
- **shadcn/ui components** — only `accordion` is used

## Ported / shared config
- `src/lib/links.ts` — booking (Fresha), social URLs, phone, Google rating (4.8 / 135)
- `src/components/RatingBadge.tsx` — partial-star Google rating badge
- `globals.css` utilities: `section-y`, `transition-flow`, `label-quiet`, `hairline`, motion tokens

## Section spacing (Vite values)
Use `py-16 md:py-20 lg:py-24` (4rem / 5rem / 6rem) — NOT old `py-24 md:py-32`

## Hover behaviors (easy to miss)
- **Service cards**: `hover:bg-[color:var(--khaki-soft)]/50` (lighter), NOT `hover:bg-[color:var(--khaki)]` (darker)
- **Mini testimonial cards**: `hover:bg-[color:var(--khaki-soft)]/50` + `hover:border-[color:var(--forest)]/20`, no translate-y
- **Featured testimonial**: `transition-flow hover:border-[color:var(--forest)]/20`, no translate-y, no Quote icon

## Contact page
- No email
- Plain address (no AddressLink)
- Phone with icon
- CTA: **Book Online** → `LINKS.booking` (Fresha), via PillButton `external`

## Footer
- Columns: Address · Hours · Phone · Follow (Instagram, Facebook, Google Reviews)
- No email

## Home page structure
- FAQ section before Brands
- No bottom "visit band" section
- Brands: Schwarzkopf, Olaplex, Redken, Wella, Moroccanoil, Chi

## Commits
- `95db88c` — Initial Next.js port
- `f3b8186` — Partial UI improvements transfer
- `1ee50f6` — Polish: hover states, section spacing, testimonial layout, contact CTA, TRANSFER-NOTES

## Polish pass (completed)
- Home service cards: `hover:bg-[color:var(--khaki-soft)]/50`
- Testimonials: service label above quote, no Quote icon / "Client since", mini cards khaki hover
- Section padding: explicit `py-16 md:py-20 lg:py-24` on home sections (replaces broken `section-y` usage)
- `globals.css`: fixed `@utility section-y` nested media queries for future use
- Contact: **Book Online** → Fresha via PillButton `external`
