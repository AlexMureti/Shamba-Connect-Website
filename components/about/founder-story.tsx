import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import Link from "next/link"
import { Award, Calendar, TrendingUp } from "lucide-react"

export function FounderStory() {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary to-accent rounded-lg blur-xl opacity-20"></div>
            <div className="relative">
              <img
                src="/mercy-munene-founder-with-rabbit.jpg"
                alt="Mercy Munene, Founder and CEO of Shamba Connect"
                className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
              />
              {/* Achievement badges overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-2xl max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">7+ Years</p>
                    <p className="text-sm text-muted-foreground">Leading Impact</p>
                  </div>
                </div>
                <div className="flex gap-4 text-center pt-3 border-t">
                  <div>
                    <p className="text-2xl font-bold text-primary">2K+</p>
                    <p className="text-xs text-muted-foreground">Gardens</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">5K+</p>
                    <p className="text-xs text-muted-foreground">Trained</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-4">
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">Our Story</p>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
                From a Personal Vision to a National Mission
              </h1>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 bg-card border px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">Founded 2018</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-card border px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold">2000+ Gardens Installed</span>
              </div>
            </div>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Shamba Connect was born from a profound personal experience. In 2017, our founder faced serious health challenges
                traced back to food adulteration and contaminated produce. This revelation became the catalyst for a 
                mission to transform how urban families access food.
              </p>
              <p>
                What began as a personal solution in a small urban home quickly evolved into a collective mission. 
                As the benefits of organic, home-grown food became clear, the vision expanded to help others achieve 
                the same food security and health benefits.
              </p>
              <p>
                In 2018, Shamba Connect was established as a social enterprise dedicated to making urban agriculture
                accessible, practical, and sustainable for Kenyan families, schools, and institutions. Today, our 
                team has installed over 2000 gardens and trained more than 5000 individuals in sustainable farming
                practices, building a healthier, more food-secure Kenya.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg">
                <Link href="/book-consultation">Book a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
