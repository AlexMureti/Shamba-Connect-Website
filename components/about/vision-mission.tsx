import { Target, Eye, Sparkles } from "lucide-react"

export function VisionMission() {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Sparkles size={16} />
            Our Purpose
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Vision & Mission</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6 group">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-card w-20 h-20 rounded-lg flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/40 transition-colors shadow-lg">
                <Eye className="text-primary" size={40} />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To transform urban and peri-urban spaces across Kenya into productive, sustainable food systems that
                ensure every family has access to safe, organic, and nutritious food.
              </p>
            </div>
          </div>
          <div className="space-y-6 group">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-card w-20 h-20 rounded-lg flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/40 transition-colors shadow-lg">
                <Target className="text-primary" size={40} />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower communities through comprehensive urban agriculture solutions, training, and support systems
                that promote food security, health, environmental sustainability, and economic empowerment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
