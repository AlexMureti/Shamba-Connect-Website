"use client"

import { Card, CardContent } from "@/Shamba-Connect-Website/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsEnhanced() {
  const testimonials = [
    {
      name: "Grace Wambui",
      location: "Karen, Nairobi",
      image: "/happy-kenyan-family-harvesting-vegetables-from-bac.jpg",
      text: "Shamba Connect has transformed my life! Their guidance helped me start my kitchen garden with confidence. The quality of their supplies is top-notch, and their support is incredible. I've grown enough vegetables to feed my family and sell the surplus!",
      rating: 5,
    },
    {
      name: "James Mwangi",
      location: "Kiambu",
      image: "/organic-garden-with-natural-pest-control-companion.jpg",
      text: "The rabbit farming training was comprehensive and practical. I started with 6 rabbits and now have a thriving business. The team's ongoing support has been invaluable to my success.",
      rating: 5,
    },
    {
      name: "Faith Njeri",
      location: "Westlands",
      image: "/fresh-vegetables-growing-in-nairobi-garden-kale-to.jpg",
      text: "Installing a foodscape in my compound was the best decision ever. It's beautiful, productive, and my children now eat fresh organic vegetables daily. Thank you Shamba Connect!",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
