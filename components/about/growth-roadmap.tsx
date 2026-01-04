import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Circle, Target } from "lucide-react"

export function GrowthRoadmap() {
  const milestones = [
    {
      year: "2017",
      title: "The Beginning",
      description: "Mercy's personal health journey sparks the vision",
      status: "completed",
    },
    {
      year: "2018",
      title: "Shamba Connect Founded",
      description: "Official launch of the social enterprise",
      status: "completed",
    },
    {
      year: "2020",
      title: "Scaling Impact",
      description: "Reached 500+ gardens and expanded to schools",
      status: "completed",
    },
    {
      year: "2023",
      title: "Major Milestone",
      description: "2000+ gardens installed, 5000+ individuals trained",
      status: "completed",
    },
    {
      year: "2025",
      title: "Current Growth",
      description: "Expanding rabbit farming program and corporate partnerships",
      status: "current",
    },
    {
      year: "2028",
      title: "Vision 2028",
      description: "10,000 gardens across Kenya, regional expansion",
      status: "future",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Growth Roadmap</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A journey of transformation from personal health challenges to national impact
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/20 transform -translate-x-1/2 hidden lg:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <Card
                    className={`${
                      milestone.status === "current"
                        ? "bg-primary text-primary-foreground shadow-2xl"
                        : "bg-card shadow-lg hover:shadow-xl transition-shadow"
                    }`}
                  >
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-3 mb-3">
                        {milestone.status === "completed" && <CheckCircle2 className="text-primary w-6 h-6" />}
                        {milestone.status === "current" && <Target className="w-6 h-6" />}
                        {milestone.status === "future" && <Circle className="text-muted-foreground w-6 h-6" />}
                        <p
                          className={`text-2xl font-bold ${
                            milestone.status === "current" ? "text-primary-foreground" : "text-primary"
                          }`}
                        >
                          {milestone.year}
                        </p>
                      </div>
                      <h3
                        className={`text-xl font-semibold mb-2 ${
                          milestone.status === "current" ? "text-primary-foreground" : "text-foreground"
                        }`}
                      >
                        {milestone.title}
                      </h3>
                      <p
                        className={`leading-relaxed ${
                          milestone.status === "current" ? "text-primary-foreground/90" : "text-muted-foreground"
                        }`}
                      >
                        {milestone.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden lg:block w-6 h-6 bg-card border-4 border-primary rounded-full z-10"></div>
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
