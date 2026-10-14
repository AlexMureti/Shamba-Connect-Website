# Shamba Connect

Website for Shamba Connect, a Nairobi urban-farming business led by Mercy Munene: kitchen-garden installation, rabbit units, seedlings, organic inputs and training. Visitors browse the catalogue, read the guides and order over WhatsApp.

## Live

https://shambaconnect.co.ke (redirects to www; hosted on Vercel)

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS 4 with shadcn/ui components on Radix primitives
- Zustand for the cart, persisted in the browser
- Content in `content/products.json` (15 products) and `content/posts.json` (7 guides), statically generated
- `app/api/chat` proxies a site assistant to NVIDIA's OpenAI-compatible API; without a key it answers from the catalogue

## Run locally

```
npm install
npm run dev
```

`npm run build` and `npm run lint` are the other scripts. Set `NVIDIA_API_KEY` (for example in `.env.local`) to turn the assistant on; it is optional.

## Status

Live since January 2026, last updated September 2026. Checkout is a prefilled WhatsApp message by design; the contact, consultation, login and register forms have no backend yet, and `/admin/blog` is a client-side shell. The impact figures still differ between pages (see `NUMBERS-TO-CONFIRM.md`).
