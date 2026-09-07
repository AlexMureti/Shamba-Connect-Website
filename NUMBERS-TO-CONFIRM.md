# Impact numbers that contradict each other

Found 2026-09-07 while adding the assistant. **Nothing here has been changed** —
these are Mercy's figures and only she can say which is right.

The site currently tells three different stories, two of them on the same page:

| Claim | Where it appears | Figure |
|---|---|---|
| Gardens Installed | homepage counter (`components/home/social-proof-credibility.tsx:21`) | **300+** |
| Gardens installed | About roadmap, 2023 (`components/about/growth-roadmap.tsx:27`) | **2000+** |
| Gardens installed | About founder story (`components/about/founder-story.tsx:59`) | **2000+** |
| Gardens | About roadmap, 2020 (`components/about/growth-roadmap.tsx:21`) | **500+** |
| Training Sessions | homepage counter (`social-proof-credibility.tsx:22`) | **50+** |
| Individuals trained | About roadmap, 2023 (`growth-roadmap.tsx:27`) | **5000+** |
| Kenyans trained | news ticker, site-wide (`components/news-ticker.tsx:7`) | **5,000+** |
| Kenyans | OpenGraph description, site-wide (`app/layout.tsx:48`) | **5,000+** |
| Households Reached | homepage counter (`social-proof-credibility.tsx:20`) | **500+** |

## Why it matters

A visitor scrolling the homepage reads **"300+ Gardens Installed"** in the
counter block while the ticker above it says **"5,000+ Kenyans trained in
sustainable farming"**. Then the About page says **2,000+ gardens**. The
OpenGraph description — what shows in a WhatsApp or Facebook link preview —
claims 5,000+.

That is a seven-fold spread on gardens and a hundred-fold spread on training.
Anyone comparing two pages sees it, and the effect is not "big numbers", it is
"these people do not know their own business".

## What needs to happen

Mercy confirms the real figures for:

1. Gardens installed to date
2. People trained to date
3. Households reached to date
4. Training sessions delivered

Then all four surfaces get the same numbers, and the roadmap years are
reconciled with them. Until then the counters and the ticker will keep
contradicting each other in public.
