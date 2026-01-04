export function Partners() {
  const partners = [
    { name: "Ministry of Agriculture", logo: "/government-logo-kenya.jpg" },
    { name: "County Government", logo: "/partners/county-logo.png" },
    { name: "NGO Partner 1", logo: "/ngo-organization-logo.jpg" },
    { name: "NGO Partner 2", logo: "/development-organization-logo.jpg" },
    { name: "Corporate Partner", logo: "/corporate-partner-logo.jpg" },
    { name: "Education Partner", logo: "/education-institution-logo.png" },
  ]

  return (
    <section className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Trusted Partners</h2>
          <p className="text-muted-foreground">Working with government, NGOs, and corporate organizations</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <img src={partner.logo || "/placeholder.svg"} alt={partner.name} className="h-16 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
