import { Users, Sprout, Award, Building2 } from "lucide-react"

export function SocialProofCredibility() {
  const metrics = [
    { icon: Users, value: "500+", label: "Households Reached" },
    { icon: Sprout, value: "300+", label: "Gardens Installed" },
    { icon: Award, value: "50+", label: "Training Sessions" },
    { icon: Building2, value: "20+", label: "Business Clients" },
  ]

  return (
    <section className="py-10 md:py-14 bg-white border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Founder info */}
          <div className="space-y-4">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground">Built on Experience & Trust</h2>
            <div className="space-y-3">
              <p className="text-base text-foreground leading-relaxed">
                <strong>Founded by Mercy Munene</strong>, Shamba Connect emerged from personal experience with
                health challenges and a passion for safe, home-grown food.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                From starting a small backyard garden in 2017 to serving hundreds of urban farmers across Kenya, we've
                built our reputation through practical solutions and genuine care for our community's food security.
              </p>
            </div>
          </div>

          {/* Right: Impact metrics */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="p-5 bg-primary/5 rounded-lg border border-primary/20 text-center">
                <metric.icon className="text-primary mx-auto mb-2" size={28} />
                <div className="font-serif text-3xl text-foreground mb-1">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
