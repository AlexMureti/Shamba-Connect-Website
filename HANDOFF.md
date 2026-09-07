# Shamba Connect — handoff

**Worked:** 2026-09-06 night → 2026-09-07
**Branch:** `fix/impact-counters-2026-09-06`, 2 commits ahead of `main`, clean tree
**Nothing pushed. Nothing deployed.** Production is untouched.

---

## The one that matters

**Your live site was telling every visitor you had reached nobody.**

`https://www.shambaconnect.co.ke/` served this in its HTML, under the heading
**"Measured in harvests, not promises"**:

    Households Reached   0 +
    Gardens Installed    0 +
    Training Sessions    0 +
    Business Clients     0 +

The data was never wrong — `social-proof-credibility.tsx` has held 500 / 300 /
50 / 20 all along. `CountUp` initialised its state to `0` and only reached the
real figure once an IntersectionObserver fired at a 0.4 threshold. So the truth
existed **only after JavaScript ran, and only if that threshold was crossed.**
Google, link previews, a slow phone, or a block taller than the viewport all
read zero.

**Fixed:** the number is correct at rest. The count-up still runs, but only when
the block starts off-screen, so it animates on scroll and never blanks a figure
already on screen. Reduced-motion skips it; the rAF is cancelled on unmount.

Verified in the built HTML — `500+ 300+ 50+ 20+` — and in the running app,
caught mid-animation at `462+ 277+ 45+ 18+`.

**Still yours to settle:** `components/about/founder-story.tsx` says
**"2000+ Gardens Installed"** while the impact block says **300**. The same site
states both. I did not pick one — they are your numbers.

---

## Canonical host — every sitemap URL was a redirect

`shambaconnect.co.ke` returns **308** → `www.shambaconnect.co.ke` returns **200**.
But `metadataBase`, the canonical link, `og:url` and **all 13 sitemap entries**
were hardcoded to the apex.

So every sitemap URL redirected, and every page declared a canonical pointing at
a URL that redirects away from the page serving it. On a site whose whole job is
inbound leads, that is the crawler resolving an ambiguity on every page.

The origin now lives once in **`lib/site.ts`**. Twelve hardcoded copies gone.
If the host ever changes so the apex serves directly, that constant is the only
edit.

Verified from the running app: sitemap, canonical, `og:url` and the robots.txt
`Sitemap:` line all read `www.shambaconnect.co.ke`.

---

## Scaffold residue

Measured with `/preflight`, then **verified by hand before deleting** — flagged
files had 0 inbound references while `components/ui/button.tsx` had 37, so the
check can actually bark.

| | |
|---|---|
| dead files deleted | **28** (3,857 lines) |
| packages removed | **30**, in two waves |
| declared packages | **66 → 36** |
| `package.json` name | `my-v0-project` → `shamba-connect-website` |

The second wave existed because the first created it: deleting the dead
`components/ui/*` orphaned the Radix packages only they imported.

**Deliberately NOT removed**, though a naive zero-imports scan flags every one:
`react-dom`, `@types/node`, `@types/react`, `@types/react-dom`, `eslint`,
`eslint-config-next`, `@eslint/*`. Nothing imports a type package or a runtime
peer — **removing them would have broken the build.** `autoprefixer` and
`tailwindcss-animate` *were* genuinely dead: Tailwind v4 prefixes internally, and
`globals.css` imports `tw-animate-css`, not the v3 package.

---

## Found, recorded, not fixed

1. **`npm install` fails for anyone who clones this.** The repo declares
   `eslint@^8.57.1` while `eslint-config-next@16.2.6` requires `eslint >= 9`, so
   npm exits ERESOLVE. I used `--legacy-peer-deps`. The real fix is migrating
   `.eslintrc.json` to flat config and bumping eslint — not a 2am change.
2. **`"lint": "echo \"(lint disabled)\""`** — the lint script is a no-op stub.
3. **`next.config.mjs` sets `typescript.ignoreBuildErrors: true`.** A green build
   proves nothing about types here. I ran `tsc --noEmit` directly: **0 errors.**
   The flag is a landmine for the next error, not an active problem.
4. **`/admin/blog` and `/admin/blog/new` return 200 in production, unauthenticated.**
   I over-flagged this at first and then checked: there are **no API routes, no
   server actions, no fetch calls** — posts come from a hardcoded Zustand store
   in `lib/blog-store.ts`. **Nothing can be written through it, and `robots.txt`
   already has `Disallow: /admin`.** So it is a non-functional shell, not a
   breach. Low severity. Worth deleting or gating when you next touch it, because
   a prospect who guesses the URL sees an admin panel with fake view counts.

---

## Verified

- `tsc --noEmit` — **0 errors**
- `next build` — green, **17 static pages**
- **All 13 routes return 200**; an unknown path still 404s, so the check distinguishes
- Horizontal overflow: **0px**

## Not verified

- **Nothing was deployed.** Every production statement above is a read of the
  live site; every fix is local and unpushed.
- I did not look at every page with eyes — the browser pane lagged behind scroll
  for much of the session. Route status, DOM values and contrast were read
  programmatically.
- Mobile layout unchecked at any breakpoint.

## Smallest next action

Decide the Gardens Installed number — 300 or 2000 — then push and deploy. The
counter fix is worth nothing until it ships.

---

# Session 2 — 2026-09-07: her real photographs, and the logo

**9 commits on `fix/impact-counters-2026-09-06`. Clean tree. STILL UNPUSHED.**

## The logo — 1.39 MB to 8.4 KB

`shamba-connect-full-logo.png` was **2508×1672, 1358 KB**, rendered at 200×60 in
the navbar with `priority`, so it preloaded on every page. On metered Kenyan
mobile that was the heaviest thing on the site.

`sharp` trimmed **457×326 of transparent padding**, resized to 293×192 (a 64px
slot at 3× DPR), webp q90 with full alpha.

**1358 KB → 8.4 KB. 99.4%. 1.35 MB saved per page load.** Trimming the padding
also makes the mark render **larger in the same box**, because `object-contain`
had been fitting empty margin instead of artwork. Both `Image` tags declared
200×60 against a 1.5:1 asset and were letterboxing it; they now declare 293×192.

**Not used:** `shamba_connect_logo.svg` from Downloads. It is a VTracer
auto-trace — 1254×1254 square, opaque `#FDFDFD` background, no `viewBox` — so it
is the icon mark, not the horizontal wordmark, and would render as a white box.
**If she has a true horizontal SVG, that is worth having.**

## The hero was screenshots

Six PNGs named `Screenshot from 2026-01-04 14-04-47.png` through `14-12-44.png`,
5.0 MB of them, serving as the hero of the business — while **48 real
photographs sat unused in Downloads**.

Several other images carry AI-prompt filenames
(`happy-kenyan-family-harvesting-vegetables-from-bac.jpg`,
`modern-rabbit-farming-unit-with-proper-housing-an.jpg`) — the truncated
descriptive naming of generated stock. **`mercy-munene-founder-with-rabbit.jpg`
is genuinely her**, so not everything was stock.

**`scripts/import-media.mjs`** imports her library to `public/media` as
EXIF-rotated webp capped at 1600px with a manifest:
**11,639 KB → 8,533 KB, 48 photos, 23 landscape / 25 portrait.**

The hero now runs on six of hers: Mercy carrying a harvest, vertical
hydroponics, training young farmers, tiered raised beds, chard in recycled pipe,
and a breeding rabbit. `public/slideshow` deleted once unreferenced.

## What is in her library, and what it unlocks

| | |
|---|---|
| **Mercy portraits** | carrying greens (the hero shot), with a rabbit, speaking at a training, at the International Nairobi Show 4 Oct 2025, at an overseas industrial facility |
| **ECO-GROW Organic Foliar** | a real packaged 5L SKU — the rabbit-urine-to-fertiliser product the press writes about. **Not on the site.** |
| **Rabbit meat** | four appetising cooked dishes. **Not on the site.** |
| **Gardens** | vertical PVC hydroponic, wall pockets, tiered wooden, stone-clad planters, terracotta |
| **Live rabbits** | several breeds, in real hutches |
| **Training** | Mercy with young farmers holding poultry |
| **Spice line** | Mint, Marjoram, Thyme, Cloves, Cinnamon, Hibiscus — **print-ready labels in Downloads, zero web presence** |

## ⚠ Needs Alex before it can be used

**`public/media/shamba-11.webp`** — a trophy presentation at what appears to be a
national agricultural show. The man strongly resembles the President of Kenya.

**I did not caption it and did not put it on the site.** I cannot verify who is
in it, or what it was awarded for. An award claim naming a real person and a real
institution is not something to guess at. **Confirm who and what, and it becomes
the single strongest credibility asset on the page.**

## Research: Mercy's credentials, none of them on her site

MBA in Finance & Strategy (USIU) · Kenya Fellow, **African Food Fellowship** ·
speaker at **AFSF 2025** on taking up leadership space as a young farmer ·
**AWAK** · Rotary · **500+ installations** · Utawala · 7 years climate-smart ·
turns rabbit urine into organic foliar. Press: **Business Daily**, **The
Standard / FarmKenya**, **Safaricom Newsroom**, African Food Changemakers.

Google's E-E-A-T rewards exactly this and the site shows none of it.

## Still the biggest lever, still not done

**The blog lives in `localStorage`.** All 7 posts render as empty shells with a
duplicate `<title>`, and all 7 are in the sitemap. Google cannot read a word of
it. Plan: MDX files in the repo, statically generated. No CMS, no cost, no auth
surface.
