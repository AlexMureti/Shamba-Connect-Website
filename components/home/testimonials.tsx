import { Card, CardContent } from "@/Shamba-Connect-Website/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Shamba Connect transformed our school compound into a productive learning garden. Our students now understand where their food comes from and eat healthier meals.",
      author: "Principal Mary Wanjiku",
      role: "Nairobi Primary School",
    },
    {
      quote:
        "The kitchen garden has been life-changing for our family. We save money on groceries and enjoy fresh organic vegetables every day. Mercy's team was professional and supportive throughout.",
      author: "James Omondi",
      role: "Homeowner, Karen",
    },
    {
      quote:
        "As an NGO focused on nutrition, partnering with Shamba Connect has been invaluable. Their training programs have empowered hundreds of mothers in our community to grow their own food.",
      author: "Dr. Susan Kimani",
      role: "Community Health Organization",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Trusted by homeowners, schools, and organizations across Kenya
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background">
              <CardContent className="pt-6">
                <Quote className="text-primary mb-4" size={32} />
                <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
