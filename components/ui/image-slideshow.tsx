"use client"

import * as React from "react"
import { cn } from "@/Shamba-Connect-Website/lib/utils"

type Slide = {
    src: string
    alt: string
}

type ImageSlideshowProps = {
    slides: Slide[]
    className?: string
    imageClassName?: string
    intervalMs?: number
    initialIndex?: number
    showArrows?: boolean
    showDots?: boolean
}

export function ImageSlideshow({
    slides,
    className,
    imageClassName,
    intervalMs = 5000,
    initialIndex = 0,
    showArrows = true,
    showDots = true,
}: ImageSlideshowProps) {
    const safeInitialIndex = Math.min(Math.max(initialIndex, 0), Math.max(slides.length - 1, 0))
    const [index, setIndex] = React.useState(safeInitialIndex)
    const [isPaused, setIsPaused] = React.useState(false)

    const hasMultiple = slides.length > 1

    const goTo = React.useCallback(
        (next: number) => {
            if (!slides.length) return
            const wrapped = (next + slides.length) % slides.length
            setIndex(wrapped)
        },
        [slides.length]
    )

    const next = React.useCallback(() => goTo(index + 1), [goTo, index])
    const prev = React.useCallback(() => goTo(index - 1), [goTo, index])

    const prefersReducedMotion = React.useMemo(() => {
        if (typeof window === "undefined") return false
        return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false
    }, [])

    // Autoplay with pause on hover/focus (disabled for reduced motion)
    React.useEffect(() => {
        if (!hasMultiple) return
        if (prefersReducedMotion) return
        if (isPaused) return
        if (intervalMs <= 0) return

        const id = window.setInterval(() => {
            // use functional update to avoid stale closure
            setIndex((i) => (i + 1) % slides.length)
        }, intervalMs)

        return () => window.clearInterval(id)
    }, [hasMultiple, intervalMs, isPaused, slides.length])

    // Keyboard controls
    const onKeyDown = (e: React.KeyboardEvent) => {
        if (!hasMultiple) return

        if (e.key === "ArrowLeft") {
            e.preventDefault()
            prev()
        }
        if (e.key === "ArrowRight") {
            e.preventDefault()
            next()
        }
    }

    if (!slides.length) return null

    return (
        <div
            className={cn(
                "relative overflow-hidden rounded-lg",
                "ring-1 ring-border",
                "bg-muted/20",
                className
            )}
            role="region"
            aria-roledescription="carousel"
            aria-label="Image slideshow"
            tabIndex={0}
            onKeyDown={onKeyDown}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
        >
            {/* Slides (fade transition) */}
            <div className={cn("relative w-full", imageClassName)}>
                {slides.map((slide, i) => {
                    const active = i === index
                    return (
                        <div
                            key={`${slide.src}-${i}`}
                            className={cn(
                                "absolute inset-0 transition-opacity duration-700 ease-in-out",
                                active ? "opacity-100" : "opacity-0"
                            )}
                            aria-hidden={!active}
                        >
                            <img
                                src={slide.src}
                                alt={slide.alt}
                                className={cn("w-full h-full object-cover bg-muted")}
                                loading={active ? "eager" : "lazy"}
                                decoding="async"
                                onError={(e) => {
                                    // Helps debug missing assets in dev without crashing the UI
                                    // eslint-disable-next-line no-console
                                    console.error("Slideshow image failed to load:", slide.src)
                                        ; (e.currentTarget as HTMLImageElement).style.visibility = "hidden"
                                }}
                            />
                            {/* subtle gradient for readability if overlaid in future */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                        </div>
                    )
                })}
            </div>

            {/* Arrows */}
            {showArrows && hasMultiple ? (
                <>
                    <button
                        type="button"
                        onClick={prev}
                        className={cn(
                            "absolute left-2 top-1/2 -translate-y-1/2",
                            "h-9 w-9 rounded-full",
                            "bg-background/80 backdrop-blur",
                            "border border-border shadow-sm",
                            "flex items-center justify-center",
                            "hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        )}
                        aria-label="Previous slide"
                    >
                        <span aria-hidden className="text-lg leading-none">
                            ‹
                        </span>
                    </button>
                    <button
                        type="button"
                        onClick={next}
                        className={cn(
                            "absolute right-2 top-1/2 -translate-y-1/2",
                            "h-9 w-9 rounded-full",
                            "bg-background/80 backdrop-blur",
                            "border border-border shadow-sm",
                            "flex items-center justify-center",
                            "hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        )}
                        aria-label="Next slide"
                    >
                        <span aria-hidden className="text-lg leading-none">
                            ›
                        </span>
                    </button>
                </>
            ) : null}

            {/* Dots */}
            {showDots && hasMultiple ? (
                <div className="absolute bottom-2 left-0 right-0 flex items-center justify-center gap-2">
                    {slides.map((_, i) => {
                        const active = i === index
                        return (
                            <button
                                key={i}
                                type="button"
                                onClick={() => goTo(i)}
                                className={cn(
                                    "h-2.5 w-2.5 rounded-full",
                                    "transition-all",
                                    active ? "bg-white shadow" : "bg-white/60 hover:bg-white/80"
                                )}
                                aria-label={`Go to slide ${i + 1}`}
                                aria-current={active}
                            />
                        )
                    })}
                </div>
            ) : null}

            {/* SR-only live region for slide announcement */}
            <div className="sr-only" aria-live="polite">
                Showing slide {index + 1} of {slides.length}
            </div>
        </div>
    )
}
