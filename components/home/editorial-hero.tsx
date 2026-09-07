"use client"

import Link from "next/link"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { ImageSlideshow } from "@/Shamba-Connect-Website/components/ui/image-slideshow"

export function EditorialHero() {
  // Mercy's own photographs, imported from her library by scripts/import-media.mjs.
  // These replaced six PNG screenshots -- literally "Screenshot from 2026-01-04
  // 14-04-47.png" -- that were serving as the hero of the business.
  const slides = [
    { src: "/media/shamba-48.webp", alt: "Mercy Munene, founder of Shamba Connect, carrying a fresh harvest of greens" },
    { src: "/media/shamba-12.webp", alt: "Vertical hydroponic pipes growing spinach and chard at a Nairobi site" },
    { src: "/media/shamba-18.webp", alt: "Mercy Munene training young farmers in Nairobi" },
    { src: "/media/shamba-29.webp", alt: "Tiered raised beds built and planted by Shamba Connect" },
    { src: "/media/shamba-24.webp", alt: "Swiss chard growing in a recycled-pipe vertical garden" },
    { src: "/media/shamba-47.webp", alt: "Mercy Munene with a breeding rabbit from the Shamba Connect rabbitry" },
  ]

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Creative ambient color accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute -top-32 right-1/4 h-[36rem] w-[36rem] rounded-full opacity-70"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--secondary) 14%, transparent), transparent)" }}
        />
        <div
          className="absolute -bottom-40 -left-24 h-[34rem] w-[34rem] rounded-full opacity-60"
          style={{ background: "radial-gradient(closest-side, color-mix(in oklab, var(--primary) 12%, transparent), transparent)" }}
        />
      </div>

      {/* Full-height imagery, bleeding to the right edge (desktop) */}
      <div className="absolute inset-y-0 right-0 z-0 hidden w-[46%] lg:block xl:w-[48%]">
        <ImageSlideshow
          slides={slides}
          intervalMs={5000}
          showArrows={false}
          className="h-full rounded-none rounded-l-[2.5rem] border-0 ring-0 shadow-[0_30px_80px_-30px_rgba(18,18,18,0.5)]"
          imageClassName="h-full"
        />
        {/* gentle blend into the page on the left edge of the image */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 py-16 md:py-24 lg:min-h-[42rem] lg:grid-cols-2">
          {/* Editorial content */}
          <div className="max-w-xl space-y-7 animate-fade-in">
            <h1 className="text-display font-serif font-bold text-balance text-foreground">
              Urban agriculture &amp; rabbit farming,{" "}
              <span className="text-secondary">done properly</span>.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Premium rabbit breeding and professional vertical gardens that turn any space into a working
              source of food — designed, installed, and taught by people who farm for a living.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Button
                asChild
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-white px-7 py-6 text-base shadow-lg shadow-secondary/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Link href="/book-consultation">
                  Book a free consultation
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <a
                href="#watch"
                className="group inline-flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-secondary"
              >
                <span className="relative flex h-11 w-11 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-secondary/30 transition group-hover:animate-ping" />
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-white shadow-lg shadow-secondary/25">
                    <Play size={15} fill="currentColor" className="ml-0.5" />
                  </span>
                </span>
                Watch our story
              </a>
            </div>

            {/* Three facts, not three badges.

                This row used to read "100% organic methods / Featured on
                Safaricom Newsroom / 7+ years on the ground", each behind a
                little coloured dot alternating primary and secondary. Two
                problems: "100% organic methods" is a claim nobody can check,
                and "7+ years" is the same fact as the "Growing Kenya since
                2018" eyebrow that used to sit above the headline. Each item
                here is now something a visitor could go and verify. */}
            <dl className="flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-6 text-sm">
              {[
                ["Nairobi", "since 2018"],
                ["Featured", "Safaricom Newsroom"],
                ["Exhibited", "Nairobi Show 2025"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs uppercase tracking-wide text-muted-foreground/70">{label}</dt>
                  <dd className="mt-0.5 font-medium text-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Mobile / tablet imagery */}
          <div className="lg:hidden">
            <ImageSlideshow
              slides={slides}
              intervalMs={5000}
              className="rounded-3xl shadow-xl ring-1 ring-black/5"
              imageClassName="h-72 sm:h-96"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
