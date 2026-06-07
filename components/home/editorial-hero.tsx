"use client"

import Link from "next/link"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { ArrowRight, Sprout, Rabbit, GraduationCap } from "lucide-react"
import { ImageSlideshow } from "@/Shamba-Connect-Website/components/ui/image-slideshow"

export function EditorialHero() {
  const slides = [
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
      src: "/slideshow/Screenshot from 2026-01-04 14-10-07.png",
      alt: "Shamba Connect slideshow image 7",
    },
    {
      src: "/slideshow/Screenshot from 2026-01-04 14-12-44.png",
      alt: "Shamba Connect slideshow image 8",
    },
  ]

  const pillars = [
    {
      href: "/services#rabbit-farming",
      icon: Rabbit,
      title: "Rabbit Farming",
      copy: "Premium meat, breeding stock, and expert training for sustainable protein.",
    },
    {
      href: "/services#kitchen-gardens",
      icon: Sprout,
      title: "Kitchen Gardens",
      copy: "Professional vertical garden installations for any urban space or balcony.",
    },
    {
      href: "/services#training",
      icon: GraduationCap,
      title: "Training & Consultancy",
      copy: "Expert-led workshops and hands-on guidance for modern farming success.",
    },
  ]

  return (
    <section className="relative bg-white overflow-hidden">
      {/* Quiet atmospheric wash — barely-there, lets the content breathe */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(60rem 40rem at 85% -10%, color-mix(in oklab, var(--secondary) 8%, transparent), transparent 70%)",
        }}
      />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 space-y-7 animate-fade-in">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-secondary" />
              <span className="text-secondary font-semibold uppercase tracking-[0.22em] text-xs">
                Growing Kenya since 2018
              </span>
            </div>

            <h1 className="text-display font-serif font-bold text-balance text-foreground">
              Urban agriculture &amp; rabbit farming,{" "}
              <span className="text-secondary">done properly</span>.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed measure">
              Premium rabbit breeding and professional vertical gardens that turn
              any space into a working source of food — designed, installed, and
              taught by people who farm for a living.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
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
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/5 px-7 py-6 text-base transition-colors duration-200"
              >
                <Link href="/services">Explore our solutions</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Imagery */}
          <div className="lg:col-span-5 relative animate-slide-up">
            <ImageSlideshow
              slides={slides}
              intervalMs={5000}
              className="rounded-3xl shadow-[0_30px_70px_-25px_rgba(18,18,18,0.45)] ring-1 ring-black/5"
              imageClassName="h-72 sm:h-80 md:h-96 lg:h-[520px]"
            />
            {/* Floating credibility marker */}
            <div className="absolute -bottom-5 -left-5 bg-white/95 backdrop-blur-sm px-5 py-4 rounded-2xl shadow-xl ring-1 ring-black/5 z-20 hidden md:flex items-center gap-3">
              <div className="w-11 h-11 orange-gradient-bg rounded-xl flex items-center justify-center text-white shrink-0">
                <Sprout size={22} />
              </div>
              <div>
                <div className="text-lg font-bold text-foreground leading-tight">100% organic</div>
                <div className="text-sm text-muted-foreground">methods, start to harvest</div>
              </div>
            </div>
          </div>
        </div>

        {/* Service pillars */}
        <div
          className="grid sm:grid-cols-3 gap-5 mt-20 md:mt-28 animate-slide-up"
          style={{ animationDelay: "0.15s" }}
        >
          {pillars.map(({ href, icon: Icon, title, copy }) => (
            <Link
              key={href}
              href={href}
              className="group p-7 bg-card rounded-2xl ring-1 ring-border/70 hover:ring-secondary/50 hover:shadow-lg transition-all duration-200"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center transition-colors duration-200 group-hover:bg-secondary">
                  <Icon size={26} className="text-secondary transition-colors duration-200 group-hover:text-white" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-secondary transition-colors duration-200">
                    {title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{copy}</p>
                </div>
                <div className="flex items-center gap-1.5 text-secondary font-semibold text-sm pt-1">
                  Learn more
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
