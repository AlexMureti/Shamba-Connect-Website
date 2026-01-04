"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/Shamba-Connect-Website/components/ui/carousel"
import { cn } from "@/Shamba-Connect-Website/lib/utils"

type Slide = {
  src: string
  alt: string
}

const DEFAULT_SLIDES: Slide[] = [
  {
    src: "/slideshow/Screenshot from 2026-01-04 14-04-47.png",
    alt: "Shamba Connect slideshow image 1",
  },
  {
    src: "/slideshow/Screenshot from 2026-01-04 14-05-18.png",
    alt: "Shamba Connect slideshow image 2",
  },
  {
    src: "/slideshow/Screenshot from 2026-01-04 14-05-52.png",
    alt: "Shamba Connect slideshow image 3",
  },
  {
    src: "/slideshow/Screenshot from 2026-01-04 14-07-00.png",
    alt: "Shamba Connect slideshow image 4",
  },
  {
    src: "/slideshow/Screenshot from 2026-01-04 14-07-59.png",
    alt: "Shamba Connect slideshow image 5",
  },
  {
    src: "/slideshow/Screenshot from 2026-01-04 14-09-39.png",
    alt: "Shamba Connect slideshow image 6",
  },
  {
    src: "/slideshow/Screenshot from 2026-01-04 14-10-07.png",
    alt: "Shamba Connect slideshow image 7",
  },
  {
    src: "/slideshow/Screenshot from 2026-01-04 14-12-44.png",
    alt: "Shamba Connect slideshow image 8",
  },
]

export function HeroSlideshow({
  className,
  slides = DEFAULT_SLIDES,
  intervalMs = 5000,
}: {
  className?: string
  slides?: Slide[]
  intervalMs?: number
}) {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined)
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const autoplay = React.useMemo(
    () =>
      Autoplay({
        delay: intervalMs,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    [intervalMs],
  )

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap())
    }

    onSelect()
    api.on("select", onSelect)
    api.on("reInit", onSelect)

    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api])

  const scrollTo = (index: number) => {
    api?.scrollTo(index)
    // restart autoplay after user action
    autoplay.reset()
  }

  return (
    <div className={cn("relative h-full w-full", className)}>
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "start" }}
        plugins={[autoplay]}
        className="h-full"
        aria-label="Homepage hero slideshow"
      >
        <CarouselContent className="h-full ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.src} className="pl-0 h-full">
              <div className="relative h-full w-full">
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="h-full w-full object-cover"
                  loading="eager"
                  draggable={false}
                />
                {/* subtle overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            className={cn(
              "h-2.5 w-2.5 rounded-full transition-all",
              idx === selectedIndex
                ? "bg-white shadow ring-2 ring-white/40"
                : "bg-white/50 hover:bg-white/80",
            )}
            onClick={() => scrollTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            aria-current={idx === selectedIndex}
          />
        ))}
      </div>
    </div>
  )
}

