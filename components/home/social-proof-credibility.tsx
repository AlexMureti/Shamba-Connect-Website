"use client"

import { useEffect, useRef, useState } from "react"
import type { ComponentType, SVGProps } from "react"
import {
  HouseIcon,
  GardenIcon,
  PeopleIcon,
  StorefrontIcon,
} from "@/Shamba-Connect-Website/components/icons/farm-icons"

type Metric = {
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  value: number
  suffix?: string
  label: string
}

const metrics: Metric[] = [
  { Icon: HouseIcon, value: 500, suffix: "+", label: "Households Reached" },
  { Icon: GardenIcon, value: 300, suffix: "+", label: "Gardens Installed" },
  { Icon: PeopleIcon, value: 50, suffix: "+", label: "Training Sessions" },
  { Icon: StorefrontIcon, value: 20, suffix: "+", label: "Business Clients" },
]

function CountUp({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setN(value)
          return
        }
        const duration = 1500
        const start = performance.now()
        let raf = 0
        const tick = (t: number) => {
          const p = Math.min((t - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setN(Math.round(value * eased))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return (
    <div
      ref={ref}
      className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-2 leading-none tabular-nums"
    >
      {n}
      {suffix}
    </div>
  )
}

export function SocialProofCredibility() {
  return (
    <section className="section-y bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <div className="space-y-4 mb-12 md:mb-16 max-w-2xl">
          <span className="kicker">
            <span className="rule" />
            Our impact
          </span>
          <h2 className="text-headline text-foreground">
            Measured in <span className="text-secondary">harvests</span>, not promises
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {metrics.map(({ Icon, value, suffix, label }) => (
            <div
              key={label}
              className="group p-8 md:p-10 bg-muted/50 rounded-3xl border border-border text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-secondary/40 hover:shadow-soft"
            >
              <div className="w-12 h-12 mx-auto mb-6 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary transition-colors duration-300 group-hover:bg-secondary group-hover:text-white">
                <Icon className="h-6 w-6" />
              </div>
              <CountUp value={value} suffix={suffix} />
              <div className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
