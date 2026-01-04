import { Card, CardDescription, CardHeader, CardTitle } from "@/Shamba-Connect-Website/components/ui/card"
import { Phone, Video, MapPin } from "lucide-react"

export function ConsultationTypes() {
  const types = [
    {
      icon: Phone,
      title: "Phone Consultation",
      description: "Quick 30-minute call to discuss your project and get initial guidance",
      duration: "30 minutes",
      price: "KES 1,500",
    },
    {
      icon: Video,
      title: "Virtual Consultation",
      description: "Detailed video call with screen sharing to review your space and create a plan",
      duration: "60 minutes",
      price: "KES 3,500",
    },
    {
      icon: MapPin,
      title: "On-Site Visit",
      description: "In-person assessment of your space with detailed recommendations",
      duration: "90 minutes",
      price: "KES 7,500",
      note: "Available in Nairobi and surrounding areas",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Choose Your Consultation Type</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Select the consultation format that works best for you. Pricing is shown per session.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {types.map((type, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <type.icon className="text-primary" size={32} />
                </div>
                <CardTitle>{type.title}</CardTitle>
                <CardDescription>
                  {type.description}
                  <div className="mt-2 text-primary font-semibold">{type.duration}</div>
                  <div className="mt-1 text-foreground font-semibold">{type.price}</div>
                  {type.note && <div className="mt-1 text-xs">{type.note}</div>}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
