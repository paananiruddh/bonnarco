# Bonnar & Co — Configuration Checklist

**Internal use only — not linked from the public site.** Everything below
is a real business detail that wasn't confirmed in the design brief, so it
was deliberately left out of the copy rather than guessed. The site is
built to degrade gracefully around each of these (see
`src/lib/site-config.ts` — most are typed `null` until filled in), so
nothing here is blocking the code from working. They're blocking a real
launch.

## Blocking a real launch

- [ ] **Enquiry delivery isn't wired up yet.** The contact form
  (`/contact`) works end to end and validates properly, but without
  `RESEND_API_KEY`, `ENQUIRY_TO_EMAIL` and `RESEND_FROM_EMAIL` set (see
  `.env.example`), submitted enquiries are only best-effort logged to
  `.data/enquiries.log` on the server — **not emailed to anyone.** Either:
  - Sign up for [Resend](https://resend.com) (or similar), verify a
    sending domain, and set the three env vars, or
  - Swap the provider in `src/lib/send-enquiry-notification.ts` for
    whatever Bonnar & Co already uses (SMTP, another ESP, or eventually a
    direct integration with the Arcus Communication System itself).
- [x] **Production domain confirmed:** `bonnarandco.com.au` (owned in
  GoDaddy). Set as the default in `src/lib/site-config.ts`. DNS points it
  at GitHub Pages (A records on `@`, CNAME on `www` →
  `paananiruddh.github.io`) and the `gh-pages` branch carries the `CNAME`
  file GitHub Pages needs to serve it. Confirm in Settings → Pages that
  the custom domain shows as verified and turn on "Enforce HTTPS" once
  the certificate provisions (can take a little while after DNS
  propagates).
- [ ] **Hosting for the real (non-static) site.** GitHub Pages only
  serves static files — no Node server, so no `/api/enquiry`, which means
  the enquiry form can't actually send anywhere from
  `bonnarandco.com.au` as currently deployed. That domain is pointed at
  a **static mirror** (`gh-pages` branch, built via `npm run
  build:pages`) for visual review — the contact page shows a "static
  preview" notice instead of the live form there (see
  `src/app/contact/page.tsx`). Before this domain is the real production
  site, move hosting to a Node-capable host (Vercel is the natural fit —
  zero code changes needed, the default `npm run build` already targets
  it) and point the domain's DNS there instead.

## Should confirm soon

- [ ] ABN (Australian Business Number)
- [ ] Registered business address
- [ ] Public phone number, if Bonnar & Co wants one listed
- [ ] Public enquiry email address, if wanted in addition to the form
- [ ] Social profile URLs (LinkedIn / Instagram / Facebook) — footer
  already renders these conditionally once added to
  `src/lib/site-config.ts` (`socials`)

Once confirmed, add them to `site.contact` / `site.socials` in
`src/lib/site-config.ts` — the footer, and any future structured data,
picks them up automatically.

- [ ] **Legal review of `/privacy` and `/terms`.** Both are complete,
  genuinely usable drafts (Australian Privacy Principles / Australian
  Consumer Law aware), not placeholder text — but they haven't been
  reviewed by a lawyer and should be before relying on them.
- [ ] **Spam Act 2003 compliance for the Arcus Communication System
  itself.** This site's own contact form is low-risk (one-off reply to a
  direct enquiry). But the actual SMS/email enquiry product described on
  `/technology` will need its own consent, sender-identification and
  unsubscribe handling reviewed against the Spam Act — that's a product
  compliance question, not something this marketing site controls.
- [ ] Confirm whether Bonnar & Co is registered for GST — affects whether
  an ABN/GST line belongs in the footer or on invoices.

## Worth deciding, not urgent

- [ ] Analytics. None is implemented. If added later, disclose it in
  `/privacy` (the current copy accurately says no tracking is in place —
  update it if that changes).
- [ ] Spam/bot protection on the enquiry form is currently a honeypot
  field plus a simple in-memory rate limit (5 submissions/minute per IP,
  per server instance — it does not coordinate across multiple instances
  and resets on redeploy). Consider adding Cloudflare Turnstile or
  hCaptcha if the form attracts abuse.
- [ ] Only SVG logo assets were produced (see
  `docs/BRAND-GUIDELINES.md`) — all are self-contained with fonts
  embedded, so they're safe to hand to a printer or another designer as
  they are. If a platform specifically requires PNG/ICO, rasterise from
  these SVGs at the size needed rather than recreating the mark.
- [ ] The description of Arcus on `/brands` and the technology overlap
  noted on `/technology` was paraphrased from arcussvcs.com as it existed
  on 22 September 2026. Re-check it against the live site before launch
  in case it has changed.
- [ ] No additional operating brands or ventures were added beyond Arcus,
  and no subsidiary/registration/ownership structure was implied for it
  — confirm before adding anything new. (A second, previously-listed
  operating brand was removed at the client's request on 24 September
  2026 — every reference to it was taken out of the site and this
  checklist.)
- [ ] No automated test suite (unit or end-to-end) was written — the
  build was verified manually (typecheck, production build, and a live
  browser pass across breakpoints). Worth adding if the site keeps
  growing.

## Where things plug in

| What | Where |
|---|---|
| Contact details, socials, site URL | `src/lib/site-config.ts` |
| Operating brand copy (Arcus) | `src/lib/site-config.ts` + `src/app/brands/page.tsx` |
| Technology product copy | `src/lib/site-config.ts` + `src/app/technology/page.tsx` |
| Enquiry email delivery | `src/lib/send-enquiry-notification.ts` + `.env.local` |
| Brand system reference | `docs/BRAND-GUIDELINES.md` |
