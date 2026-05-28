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
    <section className="relative bg-white overflow-hidden border-b border-border">
      {/* Bold background accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 -skew-x-12 translate-x-1/4 z-0" />
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7 space-y-8 animate-fade-in">
            <div className="flex items-center gap-3">
              <span className="h-px w-12 bg-secondary" />
              <span className="text-secondary font-bold uppercase tracking-[0.2em] text-sm">Est. 2018</span>
            </div>

            <h1 className="bold-heading text-4xl md:text-6xl lg:text-7xl text-foreground">
              Revolutionizing <span className="text-secondary">Urban Agriculture</span> & Rabbit Farming
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl border-l-4 border-primary pl-6">
              Building a food-secure future through premium rabbit breeding and professional vertical gardens. 
              <span className="text-primary font-bold"> Join 5,000+ Kenyans</span> growing organic today.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8 py-7 text-lg shadow-lg shadow-secondary/20">
                <Link href="/book-consultation">
                  Book Free Consultation
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-7 text-lg">
                <Link href="/services">Our Solutions</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Imagery */}
          <div className="lg:col-span-5 relative animate-slide-up">
            <div className="absolute -inset-4 bg-secondary/10 rounded-2xl -rotate-2 z-0" />
            <div className="relative z-10">
              <ImageSlideshow
                slides={slides}
                intervalMs={5000}
                className="rounded-2xl shadow-2xl border-4 border-white"
                imageClassName="h-72 sm:h-80 md:h-96 lg:h-[500px]"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border border-border">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 orange-gradient-bg rounded-full flex items-center justify-center text-white">
                  <Sprout size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-foreground">100%</div>
                  <div className="text-sm text-muted-foreground font-medium">Organic Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bolder Feature Grid */}
        <div className="grid sm:grid-cols-3 gap-6 mt-16 md:mt-24 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <Link
            href="/services#rabbit-farming"
            className="group p-8 bg-card border-2 border-transparent hover:border-secondary rounded-2xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                <Rabbit size={32} className="text-secondary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                  Rabbit Farming
                </h3>
                <p className="text-muted-foreground leading-relaxed">Premium meat, breeding stock, and expert training for sustainable protein.</p>
              </div>
              <div className="flex items-center text-secondary font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all">
                Learn More <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </Link>

          <Link
            href="/services#kitchen-gardens"
            className="group p-8 bg-card border-2 border-transparent hover:border-secondary rounded-2xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                <Sprout size={32} className="text-secondary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                  Kitchen Gardens
                </h3>
                <p className="text-muted-foreground leading-relaxed">Professional vertical garden installations for any urban space or balcony.</p>
              </div>
              <div className="flex items-center text-secondary font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all">
                Learn More <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </Link>

          <Link
            href="/services#training"
            className="group p-8 bg-card border-2 border-transparent hover:border-secondary rounded-2xl hover:shadow-2xl transition-all duration-500"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-all duration-500">
                <GraduationCap size={32} className="text-secondary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                  Training & Consultancy
                </h3>
                <p className="text-muted-foreground leading-relaxed">Expert-led workshops and professional guidance for modern farming success.</p>
              </div>
              <div className="flex items-center text-secondary font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all">
                Learn More <ArrowRight size={16} className="ml-2" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
