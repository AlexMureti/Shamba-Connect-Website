import { Card, CardContent } from "@/Shamba-Connect-Website/components/ui/card"
import { Quote, TrendingUp } from "lucide-react"

export function SuccessStories() {
  const stories = [
    {
      name: "Jane Wanjiru",
      role: "Urban Mother, Nairobi",
      image: "/before-and-after-comparison-of-balcony-transformat.jpg",
      quote:
        "My balcony went from empty to feeding my family fresh vegetables every week. The savings on groceries have been incredible!",
      impact: "Saves KSh 8,000/month on vegetables",
      beforeAfter: true,
    },
    {
      name: "David Kimani",
      role: "School Principal, Kiambu",
      image: "/school-garden-transformation-students-learning-har.jpg",
      quote:
        "Our students now learn agriculture hands-on. We even supply vegetables to the school kitchen and sell the surplus.",
      impact: "300+ students benefit daily",
      beforeAfter: true,
    },
    {
      name: "Mary Akinyi",
      role: "Rabbit Farmer, Kakamega",
      image: "/successful-rabbit-farming-unit-clean-modern-setup-.jpg",
      quote:
        "Starting my rabbit unit has transformed my income. I now supply meat to local hotels and manure to gardeners.",
      impact: "Monthly income: KSh 45,000",
      beforeAfter: false,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Real Results</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Before & After Success Stories</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            See how Shamba Connect has transformed lives across Kenya through urban agriculture
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={story.image || "/placeholder.svg"}
                  alt={`Success story: ${story.name}'s garden transformation`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {story.beforeAfter && (
                  <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                    BEFORE & AFTER
                  </div>
                )}
              </div>
              <CardContent className="pt-6">
                <Quote className="text-primary/20 w-8 h-8 mb-3" />
                <p className="text-foreground/90 italic mb-4 leading-relaxed">"{story.quote}"</p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {story.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{story.name}</p>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-primary/5 px-3 py-2 rounded-lg">
                  <TrendingUp className="text-primary w-4 h-4" />
                  <p className="text-sm font-semibold text-primary">{story.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
