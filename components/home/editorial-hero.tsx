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

  return (
    <section className="bg-white border-b border-border">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Left Column: Editorial Content */}
          <div className="space-y-3 md:space-y-4">
            <div className="space-y-2">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-md">
                Founded & Led by Mercy Munene
              </div>
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-md ml-2">
                Since 2018
              </div>
            </div>

            <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground leading-tight">
              Urban Agriculture & Rabbit Farming Excellence Across Kenya
            </h1>

            <p className="text-sm md:text-base text-muted-foreground leading-snug">
              Premium rabbit meat, breeder stock, and leather tanning paired with kitchen gardens, training, and
              supplies. Mercy Munene leads Shamba Connect's mission to transform food security across Kenya.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 pt-1">
              <Button asChild size="sm" className="w-full sm:w-auto">
                <Link href="/book-consultation">
                  Consult with Mercy
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline" className="w-full sm:w-auto bg-transparent">
                <Link href="/services">Browse All Services</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Imagery */}
          <div className="space-y-3">
            <ImageSlideshow
              slides={slides}
              intervalMs={5000}
              className="border border-border"
              imageClassName="h-56 sm:h-64 md:h-72 lg:h-80"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-3 mt-6 md:mt-8">
          <Link
            href="/services#rabbit-farming"
            className="group p-4 bg-card border border-primary/30 border-2 rounded-lg hover:border-primary hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent/10 rounded-md group-hover:bg-accent/20 transition-colors">
                <Rabbit className="text-accent" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-0.5 group-hover:text-accent transition-colors">
                  Rabbit Farming
                </h3>
                <p className="text-xs text-muted-foreground">Meat • Breeding • Leather</p>
              </div>
            </div>
          </Link>

          <Link
            href="/services#kitchen-gardens"
            className="group p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                <Sprout className="text-primary" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors">
                  Kitchen Gardens
                </h3>
                <p className="text-xs text-muted-foreground">Professional installations</p>
              </div>
            </div>
          </Link>

          <Link
            href="/services#training"
            className="group p-4 bg-card border border-border rounded-lg hover:border-primary hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                <GraduationCap className="text-primary" size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-0.5 group-hover:text-primary transition-colors">
                  Training & Consultancy
                </h3>
                <p className="text-xs text-muted-foreground">Expert-led workshops</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
