"use client"

import { MapPin, Calendar } from "lucide-react"

const fieldActivities = [
  {
    id: 1,
    title: "Utawala Rooftop Garden",
    description: "Installed last week",
    location: "Nairobi",
    image: "/professional-kitchen-garden-installation-setup-wit.jpg",
    date: "Dec 2024",
  },
  {
    id: 2,
    title: "School Training Session",
    description: "Teaching sustainable farming",
    location: "Ruai",
    image: "/agricultural-training-session-hands-on-learning-w.jpg",
    date: "Dec 2024",
  },
  {
    id: 3,
    title: "Commercial Rabbit Farm Setup",
    description: "50-cage installation",
    location: "Machakos",
    image: "/modern-rabbit-farming-unit-with-proper-housing-an.jpg",
    date: "Nov 2024",
  },
  {
    id: 4,
    title: "Community Garden Launch",
    description: "Estate-wide project",
    location: "Kitengela",
    image: "/happy-kenyan-family-harvesting-vegetables-from-bac.jpg",
    date: "Nov 2024",
  },
]

export function InTheField() {
  return (
    <section className="bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <h2 className="font-serif text-xl md:text-2xl font-semibold mb-4">In the Field</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {fieldActivities.map((activity) => (
            <div
              key={activity.id}
              className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-sm mb-1 leading-tight">{activity.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">{activity.description}</p>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <MapPin size={12} />
                    {activity.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {activity.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
