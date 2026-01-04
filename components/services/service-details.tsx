import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

export function ServiceDetails() {
  const services = [
    {
      id: "kitchen-gardens",
      title: "Kitchen Garden Installation",
      image: "/professional-kitchen-garden-installation-setup-wit.jpg",
      description:
        "Transform your available space into a productive organic garden. Our professional team handles everything from site assessment to installation and ongoing support.",
      whoItsFor: ["Homeowners", "Schools and educational institutions", "Corporate offices", "Residential estates"],
      benefits: [
        "Fresh organic vegetables and herbs year-round",
        "Reduced grocery bills and food costs",
        "Educational opportunities for children",
        "Improved nutrition and health",
        "Environmental benefits and carbon reduction",
      ],
    },
    {
      id: "landscaping",
      title: "Landscape-cum-Foodscape Design",
      image: "/beautiful-foodscape-landscape-design-combining-aes.jpg",
      description:
        "Create beautiful outdoor spaces that are both aesthetically pleasing and productive. We design landscapes that grow food while maintaining visual appeal.",
      whoItsFor: ["Luxury homes", "Hotels and resorts", "Corporate campuses", "Community centers"],
      benefits: [
        "Dual-purpose spaces: beauty and food production",
        "Professional landscape architecture",
        "Sustainable and low-maintenance designs",
        "Increased property value",
        "Conversation-starting unique features",
      ],
    },
    {
      id: "seedlings",
      title: "Seedling Propagation",
      image: "/organic-vegetable-seedlings-in-propagation-trays.jpg",
      description:
        "Access high-quality organic seedlings grown in our nursery. We supply healthy, disease-free seedlings ready for transplanting.",
      whoItsFor: ["Home gardeners", "Commercial farmers", "Schools", "Community projects"],
      benefits: [
        "Certified organic seedlings",
        "Wide variety of vegetables and herbs",
        "Healthy, robust plants with high survival rates",
        "Expert growing advice included",
        "Delivery available across Nairobi",
      ],
    },
    {
      id: "rabbit-farming",
      title: "Rabbit Unit Setup & Management",
      image: "/healthy-rabbits-in-modern-farming-setup-with-hutch.jpg",
      description:
        "Establish a sustainable rabbit farming operation with our comprehensive setup and training services. Rabbits provide healthy protein and require minimal space.",
      whoItsFor: ["Individual families", "Schools", "Community groups", "Small-scale farmers"],
      benefits: [
        "Sustainable protein source for families",
        "Low space and resource requirements",
        "Fast breeding and growth cycles",
        "Multiple income streams (meat, breeding stock)",
        "Complete training and ongoing support",
      ],
    },
    {
      id: "training",
      title: "Training & Consultancy",
      image: "/training-workshop-agriculture.jpg",
      description:
        "Expert-led training programs tailored to your needs. From beginner gardening to advanced farming techniques, we equip you with practical knowledge.",
      whoItsFor: ["Individuals", "Schools", "NGOs", "Corporate CSR programs", "Government agencies"],
      benefits: [
        "Customized training programs",
        "Practical, hands-on learning",
        "Experienced agricultural trainers",
        "Certificates of completion",
        "Post-training support and consultation",
      ],
    },
    {
      id: "retail",
      title: "Retail of Inputs",
      image: "/garden-supplies-organic-inputs.jpg",
      description:
        "One-stop shop for all your urban farming needs. We stock quality organic inputs, tools, and supplies carefully selected for urban agriculture.",
      whoItsFor: ["Home gardeners", "Schools", "Farming groups", "Anyone starting or maintaining a garden"],
      benefits: [
        "Quality-verified organic inputs",
        "Expert product recommendations",
        "Competitive pricing",
        "Convenient delivery options",
        "Ongoing customer support",
      ],
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {services.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            className={`scroll-mt-24 ${index !== 0 ? "pt-20 mt-20 border-t border-border" : ""}`}
          >
            <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
              <div className="relative h-80 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">{service.title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Who It's For</h3>
                  <ul className="space-y-2">
                    {service.whoItsFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Benefits</h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={20} />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4">
                <Button asChild size="lg">
                  <Link href="/book-consultation">Book Consultation for {service.title}</Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
