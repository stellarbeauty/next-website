<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

Single service: a static Next.js 16 (App Router, Turbopack) marketing site for the "Stellar Beauty" salon. No backend, database, or environment variables are required. Package manager is npm (`package-lock.json`).

Standard scripts live in `package.json`:
- Dev server: `npm run dev` (serves on http://localhost:3000; routes `/`, `/about`, `/services-and-pricing`, `/contact`).
- Lint: `npm run lint` (`eslint src`).
- Build: `npm run build`; production preview: `npm run start`.

Notes:
- This is Next.js 16 with breaking changes vs. older versions — consult `node_modules/next/dist/docs/` before changing framework code.
- `next.config.ts` only whitelists remote images from `picsum.photos`; new external image hosts must be added there.
