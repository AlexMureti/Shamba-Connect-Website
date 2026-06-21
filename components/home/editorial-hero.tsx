"use client"

import Link from "next/link"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { ImageSlideshow } from "@/Shamba-Connect-Website/components/ui/image-slideshow"

export function EditorialHero() {
  const slides = [
    { src: "/slideshow/Screenshot from 2026-01-04 14-04-47.png", alt: "Urban kitchen garden installed by Shamba Connect" },
    { src: "/slideshow/Screenshot from 2026-01-04 14-05-18.png", alt: "Vertical garden on a Nairobi balcony" },
    { src: "/slideshow/Screenshot from 2026-01-04 14-05-52.png", alt: "Healthy rabbits in a Shamba Connect rabbitry" },
    { src: "/slideshow/Screenshot from 2026-01-04 14-07-00.png", alt: "Hands-on farming training session" },
    { src: "/slideshow/Screenshot from 2026-01-04 14-10-07.png", alt: "Fresh organic harvest from a kitchen garden" },
    { src: "/slideshow/Screenshot from 2026-01-04 14-12-44.png", alt: "Family tending their home food garden" },
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
            <span className="kicker">
              <span className="rule" />
              Growing Kenya since 2018
            </span>

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

            {/* Credibility line — replaces the floating badge */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-6 text-sm font-medium text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                100% organic methods
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                Featured on Safaricom Newsroom
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                7+ years on the ground
              </span>
            </div>
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
