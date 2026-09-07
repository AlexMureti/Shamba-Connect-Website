"use client"

import { MapPin } from "lucide-react"

const fieldActivities = [
  {
    id: 1,
    title: "Utawala Rooftop Garden",
    description: "Vertical kitchen garden installation",
    location: "Nairobi",
    image: "/media/shamba-30.webp",
  },
  {
    id: 2,
    title: "School Training Session",
    description: "Teaching sustainable farming",
    location: "Ruai",
    image: "/media/shamba-18.webp",
  },
  {
    id: 3,
    title: "Commercial Rabbit Farm Setup",
    description: "50-cage breeding installation",
    location: "Machakos",
    image: "/media/shamba-16.webp",
  },
  {
    id: 4,
    title: "Community Garden Launch",
    description: "Estate-wide food project",
    location: "Kitengela",
    image: "/media/shamba-48.webp",
  },
]

export function InTheField() {
  return (
    <section className="section-y bg-muted/40 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="space-y-4 mb-12 md:mb-14 max-w-2xl">
          <span className="kicker">
            <span className="rule" />
            On the ground
          </span>
          <h2 className="text-headline text-foreground">
            Recent work, <span className="text-secondary">in the field</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {fieldActivities.map((activity) => (
            <div
              key={activity.id}
              className="group bg-card border border-border rounded-2xl overflow-hidden shadow-soft transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-base mb-1 leading-tight text-foreground">{activity.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{activity.description}</p>
                <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <MapPin size={13} className="text-secondary" />
                  {activity.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
