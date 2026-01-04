export function TeamStructure() {
  const roles = [
    {
      title: "Founder & CEO",
      description: "Strategic leadership and business development",
    },
    {
      title: "Agricultural Specialists",
      description: "Expert guidance on farming techniques and garden design",
    },
    {
      title: "Training Coordinators",
      description: "Educational program development and facilitation",
    },
    {
      title: "Installation Team",
      description: "Professional garden setup and implementation",
    },
    {
      title: "Customer Support",
      description: "Ongoing client assistance and consultation",
    },
    {
      title: "Supply Chain",
      description: "Sourcing quality inputs and maintaining inventory",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A dedicated team of agricultural professionals, trainers, and support staff committed to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold text-foreground mb-2">{role.title}</h3>
              <p className="text-muted-foreground">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
