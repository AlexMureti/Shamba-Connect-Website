import { Card, CardContent } from "@/Shamba-Connect-Website/components/ui/card"
import { Newspaper } from "lucide-react"

export function MediaMentions() {
  const mentions = [
    {
      outlet: "Kenya Agriculture Magazine",
      title: "Urban Farming Pioneer: How Shamba Connect is Transforming City Agriculture",
      year: "2023",
    },
    {
      outlet: "Business Daily Africa",
      title: "Social Enterprises Making Impact: Mercy Munene's Food Security Mission",
      year: "2022",
    },
    {
      outlet: "The Standard",
      title: "Growing Solutions: Urban Gardens Address Food Safety Concerns",
      year: "2022",
    },
    {
      outlet: "Nation Media",
      title: "Women in Agriculture: Leading Kenya's Green Revolution",
      year: "2021",
    },
  ]

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Media Coverage</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Recognized by leading media outlets for our impact in urban agriculture
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {mentions.map((mention, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Newspaper className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-primary font-semibold mb-1">
                      {mention.outlet} • {mention.year}
                    </p>
                    <p className="text-foreground font-medium">{mention.title}</p>
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
