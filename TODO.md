# Shamba Connect — Remodel & Refactor TODO

Working backlog for the website overhaul. Goal: make it read as a real,
professional brand — not a generated template. Cut filler, remove duplicate
code, tighten copy, keep claims honest.

Status keys: `[ ]` todo · `[~]` in progress · `[x]` done

---

## ✅ Recently completed
- [x] Community CTA heading → **"Grow Your Own Food — Ready?"** (was "Ready to Grow Your Own Food Security?") — `components/home/community-cta.tsx`
- [x] Founder story headline → **"From a Personal Vision to a Global Mission"** (was "National Mission") — `components/about/founder-story.tsx`
- [x] Moved the **YouTube / Video Showcase** section up near the top of the home page (now directly under the hero) — `app/page.tsx`
- [x] Safaricom interview badge → **"Our Why"**; Mercy Munene video → **"Our Mission"** (removed generic "Success Story" labels) — `components/home/video-showcase.tsx`
- [x] **De-slop:** deleted 22 unused/duplicate home components (all 3 extra heroes, "what we do" x2, testimonials x2, "why us" x2, and 15 others). `components/home/` is now exactly the 9 components the site uses.
- [x] Reconciled blog data: deleted dead `lib/blog-data.ts` (everything uses `lib/blog-store.ts`).
- [x] Rewrote founder-story body copy to read as a genuinely **global** mission (no longer Kenya-capped), numbers kept honest.
- [x] Verified with `npm run build` — all 16 routes compile clean after the deletions.

### Premium redesign — foundation + home (UI/UX Pro Max pass)
- [x] **Fixed broken fonts:** Playfair Display + Geist were imported but never applied (serif silently fell back to Georgia). Wired via `next/font` `variable` + `@theme` — `app/layout.tsx`, `app/globals.css`.
- [x] **Warm "heritage farm" palette:** replaced cold white/grey tokens with warm paper/stone neutrals; richer dark mode — `app/globals.css`.
- [x] **Design-system utilities:** `.kicker`, `.text-headline`, `.shadow-soft`/`.shadow-premium`, `.section-y`, `.rule`.
- [x] **Killed the v0 "V0" favicon:** all 3 black v0 icons were the search/tab logo. New brand `app/icon.svg` (green+orange sprout). Removed `generator: "v0.app"`. ⚠️ Author a real square PNG/monogram favicon if a specific mark is preferred.
- [x] **Elevated every home section** to the system (consistent eyebrows/headings, warm cards, serif numerals, softer weights): video-showcase, latest-from-shamba, featured-products, in-the-field, what-we-do-snapshot, social-proof, instagram-feed, community-cta.
- [x] Founder-story heading set in the editorial serif system.

---

## 🔥 High priority — "de-slop" the codebase
The biggest professionalism problem is duplicate, AI-generated components that
aren't used by any page. An import audit shows these home components appear
**unused** (not imported by any page). Confirm, then delete:

- [x] Audit + remove unused/duplicate home components — **done** (22 deleted, see "Recently completed").
- [x] Resolve duplicate data sources: `lib/blog-store.ts` vs `lib/blog-data.ts` — **done** (deleted dead `blog-data.ts`).
- [ ] Fix the odd import alias `@/Shamba-Connect-Website/components/...` — the alias embeds the repo folder name. Should be `@/components/...`. Check `tsconfig.json` paths.

## 📄 Landing page — it's too long
- [x] Move YouTube section to the top (done).
- [ ] Decide final section order + trim. Current: Hero → Video → LatestFromShamba → FeaturedProducts → InTheField → WhatWeDoSnapshot → SocialProofCredibility → InstagramFeed → CommunityCTA.
- [ ] Identify redundant sections to cut or merge (e.g. do we need both `SocialProofCredibility` and `InstagramFeed`?).
- [ ] Target: a tight, scannable page that loads the strongest content first.

## ✍️ Copy & content honesty
- [x] Founder story narrative reconciled to a fully **global** mission — `components/about/founder-story.tsx`.
- [ ] Verify hard numbers used across the site (2000+ gardens, 5000+ trained, 7+ years, Founded 2018) are accurate and consistent everywhere.
- [ ] Sweep for generic AI filler phrasing ("transforming spaces", "building a food-secure future", "every step of the way") and rewrite in the founder's real voice.
- [ ] Replace any remaining placeholder content / `placeholder.svg` images with real assets.

## 🎨 Design & polish
- [x] Define a consistent design system (typography scale, color, spacing, utilities) — foundation done, applied to home + founder-story.
- [ ] **Apply the system to the remaining pages:** services, shop, contact, blog, book-consultation, login/register (they still use the old ad-hoc styles).
- [ ] ⚠️ **Stat inconsistency:** home `social-proof` says 300+ gardens / 500+ households, but hero + about say 2000+ gardens / 5000+ trained. Pick the true numbers and make them consistent everywhere.
- [ ] Audit responsive behavior (mobile spacing, hero on small screens).
- [ ] Accessibility pass: image alt text, color contrast, heading hierarchy (note: `founder-story.tsx` uses `<h1>` inside a sub-section — should likely be `<h2>`).

## 🧰 Tech / housekeeping
- [ ] Remove stray screenshot artifacts from repo root (`.shots-*.png`, `.devserver.log`) — add to `.gitignore`.
- [ ] Run a build (`npm run build`) after the component cleanup to catch broken imports.

---
_Last updated: 2026-06-21_
