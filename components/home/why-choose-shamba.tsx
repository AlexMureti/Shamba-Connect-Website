import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Award, Users, Leaf, TrendingUp, Heart } from "lucide-react"

export function WhyChooseShamba() {
  const reasons = [
    {
      icon: Award,
      title: "10+ Years Experience",
      description: "Proven expertise in urban agriculture and rabbit farming",
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      description: "Trusted by homes, schools, hotels, and institutions",
    },
    {
      icon: Leaf,
      title: "100% Organic Methods",
      description: "Sustainable practices for healthy food production",
    },
    {
      icon: TrendingUp,
      title: "Business Support",
      description: "Turn your passion into a profitable agribusiness",
    },
    {
      icon: CheckCircle2,
      title: "Complete Solutions",
      description: "From setup to training to ongoing maintenance",
    },
    {
      icon: Heart,
      title: "Community Driven",
      description: "Building food security across Kenya",
    },
  ]

  return (
    <section className="py-16 md:py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">Why Choose Shamba Connect?</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner in sustainable urban agriculture and rabbit farming across Kenya
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <Card key={index} className="border-2 hover:border-primary hover:shadow-lg transition-all">
                <CardContent className="p-6 md:p-8">
                  <div className="bg-primary/10 text-primary w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-4 md:mb-5">
                    <Icon className="w-7 h-7 md:w-8 md:h-8" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{reason.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{reason.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
