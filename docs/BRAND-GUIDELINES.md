# Bonnar & Co — Brand Guidelines

A working reference for anyone designing or writing for Bonnar & Co. The
goal in one line: **premium, understated, capable, discreet, approachable,
human.** When two brand traits pull in different directions, resolve in
favour of restraint — this is a quiet, capable brand, not a loud one.

## 1. Verbal identity

- **Public brand:** Bonnar & Co
- **Legal name:** Bonnar & Co Pty Ltd (use in copyright lines, legal pages,
  and formal contexts only — not in headlines or nav)
- **Language:** Australian English (organise not organize, enquiry not
  inquiry, mobile not cell phone, etc.)
- **Voice:** Plain, warm, precise. Short sentences over long ones. Say the
  practical thing before the aspirational thing. Avoid hype words (best,
  revolutionary, world-class, game-changing), avoid corporate filler
  (synergy, leverage as a verb, solutions-oriented), avoid exclamation
  marks.
- **Discretion is a design constraint, not just a tone.** Bonnar & Co
  supports operators across a range of industries, some of which rely on
  privacy to function safely. Public copy stays at the level of "sole
  traders, independent contractors and small business operators" and
  never names, implies or narrows in on a specific client industry or
  vertical — on this site or in any future content. This protects clients
  and is core to the brand promise, not an omission to "fix" later.
- **Never invent:** company age/years in business, client counts, revenue
  or financial results, awards, qualifications, staff numbers, office
  locations, partnerships, or guarantees/SLAs. If a fact isn't confirmed,
  it stays out of copy and goes in `/CONFIG-CHECKLIST.md` instead.

## 2. Colour

Warm ink and paper as the base, brass as the signature accent, harbour as
a cooler counterpoint for variety in dark sections. Clay is a rare, human
accent — used sparingly (a tag, a small icon), never as a primary colour.

| Token | Hex | Use |
|---|---|---|
| `ink` | `#1B1A17` | Primary text, dark section backgrounds |
| `ink-soft` | `#33312B` | Secondary/body text on paper |
| `paper` | `#FBF9F4` | Primary background |
| `paper-dim` | `#F3EEE3` | Subtle section/card background |
| `sand` | `#EFE8D8` | Alternate section background |
| `stone` | `#655F53` | Muted text (meets AA on paper) |
| `stone-light` | `#B9AF9B` | Borders/dividers only — not text |
| `brass` | `#8A6A34` | Primary accent, links, buttons (AA on paper) |
| `brass-light` | `#C9A968` | Decorative accent on dark backgrounds |
| `brass-dark` | `#6E5327` | Hover/active state |
| `harbour` | `#26404B` | Secondary dark section background |
| `harbour-light` | `#3F5F6C` | Accents on harbour sections |
| `clay` | `#A8593B` | Rare human accent (small tags only) |

Rule of thumb: one accent colour doing the work per screen. Don't combine
brass and clay in the same section.

## 3. Typography

- **Display / headings — Fraunces** (variable serif). Loaded via
  `next/font/google` as `--font-fraunces`. Weights in use: 400, 500, 600;
  styles: normal + italic. The italic weight is reserved for the "&"
  in the logo lockup and occasional emphasis — don't set full sentences
  in italic Fraunces, it reads as decorative rather than legible at
  paragraph length.
- **Body / UI — Inter**. Loaded as `--font-inter`. Default weight 400,
  medium (500)/semibold (600) for UI emphasis and labels.
- Headings are set in Fraunces Medium (500) by default; use 600 sparingly
  for the largest hero statements only.

## 4. Logo

The wordmark is the primary identity — "Bonnar & Co" set in Fraunces
Medium, with the ampersand in Fraunces Medium Italic and brass. On the
live site this renders as real text (`src/components/Logo.tsx`), which
keeps it crisp, accessible and translatable rather than a flattened
image.

A standalone monogram (the ampersand alone, in a circle) exists for
contexts that need a compact mark — favicon, social avatars, watermarks.
It is **not** used in the site header/footer; the wordmark carries the
identity there. This is a deliberate restraint choice in line with
"understated."

### Asset files — `public/brand/logo/`

| File | Use |
|---|---|
| `favicon.svg` | Browser tab icon (wired in `app/layout.tsx`) |
| `monogram-paper-on-ink.svg` | Primary mark — dark circle, paper glyph |
| `monogram-ink-on-paper.svg` | Mark on light/white backgrounds |
| `monogram-brass-on-ink.svg` | Decorative/premium variant (merchandise, stationery) |
| `wordmark-ink.svg` | Full lockup for light backgrounds |
| `wordmark-paper.svg` | Full lockup for dark backgrounds |

All six are self-contained vector files with the required Fraunces glyphs
embedded as base64 (subsetted to just the letters used, a few KB each) —
they open correctly in any browser, design tool or document without the
font needing to be installed separately. Minimum clear space around any
mark: roughly half the mark's own height. Don't recolour the marks outside
the palette above, don't add drop shadows or outlines, don't stretch
non-uniformly.

If you need a raster export (PNG/ICO) at a specific size, rasterise these
SVGs at the required resolution — don't recreate the mark by hand, and
don't screenshot it off the live site.

All embedded fonts above — and the ones behind the social preview image
below — are fully static instances (a fixed weight and optical size,
`opsz` pinned to `144` for the display character used across the wordmark
and monogram). This matters if you ever regenerate them: Google Fonts
will happily serve Fraunces as a variable file if you leave an axis as a
range, and browsers render that fine, but tools like `next/og`/Satori
(and some older design/PDF tooling) can't parse variable-font tables at
all. Pin every axis (e.g. `family=Fraunces:opsz,wght@144,600`) before
converting or subsetting.

### Social preview image

`src/app/opengraph-image.tsx` generates the `og:image` / Twitter card
image at request time from the same wordmark treatment (Next.js wires it
into every page's metadata automatically — no per-page setup needed). It
reads static Fraunces TTFs from `src/assets/fonts/`, converted from the
same pinned, non-variable font files described above.

## 5. Layout & tone of imagery

No stock photography of people. Given the discretion requirement above,
generic "stock people at work" imagery risks looking mismatched or, worse,
implying a specific client industry. Instead:

- Generous whitespace, editorial type-led layouts.
- Colour and abstract geometric devices (circles, thin rules, gradients)
  rather than photography.
- If photography is introduced later, keep it abstract/architectural
  (light, texture, skyline) — never identifiable people, never anything
  that signals a specific client vertical.

## 6. Accessibility baseline

- Body text colour combinations are chosen to clear WCAG AA (4.5:1) —
  see the contrast check script referenced in the repo's README before
  introducing new text/background colour pairings.
- All interactive elements use the shared `.focus-ring` utility for a
  visible keyboard focus state.
- Semantic heading order and skip-to-content link are already wired in
  the root layout — keep them when adding new pages.
