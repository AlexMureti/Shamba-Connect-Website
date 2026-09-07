import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  GardenIcon,
  LeafIcon,
  SeedlingIcon,
  RabbitIcon,
  TrainingIcon,
  StorefrontIcon,
} from "@/Shamba-Connect-Website/components/icons/farm-icons"

export function WhatWeDoSnapshot() {
  const services = [
    {
      Icon: GardenIcon,
      title: "Kitchen Garden Installation",
      description: "Custom designs for urban spaces",
      href: "/services#kitchen-gardens",
    },
    {
      Icon: LeafIcon,
      title: "Foodscaping & Landscaping",
      description: "Aesthetic food-producing landscapes",
      href: "/services",
    },
    {
      Icon: SeedlingIcon,
      title: "Quality Seedlings",
      description: "Organic vegetable & herb seedlings",
      href: "/shop#seedlings",
    },
    {
      Icon: RabbitIcon,
      title: "Rabbit Farming Solutions",
      description: "Hutches, breeding stock & training",
      href: "/services#rabbit-farming",
    },
    {
      Icon: TrainingIcon,
      title: "Professional Training",
      description: "Hands-on agriculture workshops",
      href: "/services#training",
    },
    {
      Icon: StorefrontIcon,
      title: "Farm Input Retail",
      description: "Tools, seeds, fertilizers & supplies",
      href: "/shop",
    },
  ]

  return (
    <section className="section-y bg-muted/40 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="space-y-4 mb-12 md:mb-16 max-w-2xl">
          <h2 className="text-headline text-foreground">
            Everything you need to grow
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ Icon, title, description, href }) => (
            <Link
              key={title}
              href={href}
              className="group flex items-start gap-4 p-6 bg-card rounded-2xl border border-border shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="p-3 bg-primary/10 rounded-xl flex-shrink-0 transition-colors duration-300 group-hover:bg-primary">
                <Icon className="h-7 w-7 text-primary transition-colors duration-300 group-hover:text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1 text-foreground transition-colors group-hover:text-primary">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-primary font-semibold text-sm opacity-0 -translate-x-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
