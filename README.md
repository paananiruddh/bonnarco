# Bonnar & Co — Website

The public marketing site for Bonnar & Co Pty Ltd, built with Next.js (App
Router), TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # tsc --noEmit
```

## Before deploying

Copy `.env.example` to `.env.local` and fill in real values — most
importantly the enquiry email delivery variables, without which the
contact form accepts submissions but doesn't email anyone. See
[`CONFIG-CHECKLIST.md`](./CONFIG-CHECKLIST.md) for the full list of what's
outstanding before a real launch (business details, legal review, hosting).

The `/api/enquiry` route requires a Node.js server — this app cannot be
deployed as a static export.

## Project structure

```
src/
  app/            App Router pages, layout, API route, sitemap/robots
  components/     Shared UI (Header, Footer, form, cards, primitives)
  lib/            site-config.ts (business facts), fonts, email sending
public/
  brand/logo/     Reusable SVG logo assets (see docs/BRAND-GUIDELINES.md)
docs/
  BRAND-GUIDELINES.md   Colour, type, logo usage, voice and content rules
CONFIG-CHECKLIST.md      Business details still needed before launch
```

## Brand system

See [`docs/BRAND-GUIDELINES.md`](./docs/BRAND-GUIDELINES.md) for colour
tokens, typography, logo usage and voice guidelines. Business facts (name,
contact details, operating brands, technology products) live in one place
— `src/lib/site-config.ts` — so they only need updating once.
