import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import Link from "next/link"
import { Quote } from "lucide-react"

export function FounderSpotlight() {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-br from-primary to-accent rounded-lg blur opacity-20"></div>
              <img
                src="/professional-portrait-of-mercy-munene-african-woma.jpg"
                alt="Mercy Munene, Founder and CEO of Shamba Connect, in her urban garden"
                className="relative rounded-lg shadow-xl w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl">
                <p className="font-bold text-foreground">Mercy Munene</p>
                <p className="text-sm text-muted-foreground">Founder & CEO</p>
                <p className="text-xs text-primary font-semibold mt-1">7+ Years Leading Urban Agriculture</p>
              </div>
            </div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">Meet Our Founder</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Mercy Munene: From Personal Health Journey to Social Enterprise
              </h2>
              <div className="relative pl-6 border-l-4 border-primary/30 my-6">
                <Quote className="absolute -left-3 -top-2 text-primary/20 w-8 h-8" />
                <p className="text-lg text-foreground/90 italic leading-relaxed">
                  "My health challenges opened my eyes to the dangers of food adulteration. I wanted every family to
                  have access to safe, organic food—right from their homes."
                </p>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Shamba Connect was born from Mercy's personal experience with food-related health challenges. After
                discovering the impact of food adulteration on her health, she embarked on a mission to make organic,
                safe food accessible to urban families.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2018, Mercy has built Shamba Connect into a trusted agri-enterprise, partnering with government
                agencies, NGOs, and corporate organizations to promote urban agriculture and food security across Kenya.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg">
                <Link href="/about">Read Full Story</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
