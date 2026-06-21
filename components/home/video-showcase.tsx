"use client"

import { useState } from "react"
import { Play, ArrowUpRight } from "lucide-react"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"

const CHANNEL_URL = "https://www.youtube.com/@shambaconnect"

const videos = [
  {
    id: "IhvR2SO4FuI",
    title: "Shamba Connect on Safaricom Newsroom",
    badge: "Our Why",
    blurb: "The story behind the mission — why we build organic kitchen gardens for healthier homes and cities.",
  },
  {
    id: "-mPVvmDCX2k",
    title: "Mercy Munene's Green Mission",
    badge: "Our Mission",
    blurb: "An in-depth look at how we're making home-grown, organic food the norm across Kenya.",
  },
]

function VideoPlayer({
  id,
  title,
  badge,
  eager = false,
}: {
  id: string
  title: string
  badge: string
  eager?: boolean
}) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="relative aspect-video overflow-hidden rounded-2xl bg-black ring-1 ring-white/10">
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label={`Play video: ${title}`}
          className="group absolute inset-0 h-full w-full cursor-pointer"
        >
          <img
            src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
            alt=""
            loading={eager ? "eager" : "lazy"}
            className="h-full w-full object-cover opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
          <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white backdrop-blur-md">
            {badge}
          </span>
          <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-secondary text-white shadow-2xl ring-4 ring-white/15 transition-transform duration-300 group-hover:scale-110">
            <Play size={26} fill="currentColor" className="ml-0.5" />
          </span>
        </button>
      )}
    </div>
  )
}

export function VideoShowcase() {
  const [featured, secondary] = videos

  return (
    <section
      id="watch"
      className="scroll-mt-24 overflow-hidden border-b border-border bg-[#17150f] text-white"
    >
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-5">
            <span className="kicker">
              <span className="rule" />
              Watch &amp; learn
            </span>
            <h2 className="text-headline">
              Start with our <span className="text-secondary">why</span>
            </h2>
            <p className="text-lg leading-relaxed text-white/60">
              See the work, hear the story, and learn the methods — straight from the shamba.
            </p>
          </div>
          <Button
            asChild
            className="rounded-xl bg-white px-7 py-6 text-base text-[#17150f] shadow-xl transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/90"
          >
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-semibold"
            >
              Subscribe on YouTube
              <ArrowUpRight size={18} />
            </a>
          </Button>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-7">
            <VideoPlayer id={featured.id} title={featured.title} badge={featured.badge} eager />
            <div>
              <h3 className="font-serif text-2xl font-bold">{featured.title}</h3>
              <p className="mt-1 leading-relaxed text-white/55">{featured.blurb}</p>
            </div>
          </div>
          <div className="space-y-4 lg:col-span-5">
            <VideoPlayer id={secondary.id} title={secondary.title} badge={secondary.badge} />
            <div>
              <h3 className="font-serif text-xl font-bold">{secondary.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-white/55">{secondary.blurb}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
