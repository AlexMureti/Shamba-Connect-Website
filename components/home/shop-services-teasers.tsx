import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Calendar } from "lucide-react"

export function ShopServicesTeasers() {
  return (
    <section className="py-10 md:py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Featured Product */}
          <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-md transition-all group">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/garden-supplies-organic-inputs.jpg"
                alt="Premium Garden Starter Kit"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">Premium Garden Starter Kit</h3>
                <p className="text-sm text-muted-foreground">
                  Everything you need to start your kitchen garden journey. Includes seeds, tools, organic soil, and
                  planting guide.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">KSh 4,500</span>
                <Button asChild size="sm">
                  <Link href="/shop">
                    <ShoppingCart className="mr-2" size={16} />
                    Explore Shop
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Service */}
          <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary hover:shadow-md transition-all group">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="/professional-kitchen-garden-installation-setup-wit.jpg"
                alt="Garden Consultation Service"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 space-y-4">
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-foreground mb-2">
                  Professional Garden Consultation
                </h3>
                <p className="text-sm text-muted-foreground">
                  One-on-one consultation with our experts to design and plan your perfect kitchen garden or rabbit
                  farming setup.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-primary">From KSh 2,000</span>
                <Button asChild size="sm" variant="outline">
                  <Link href="/book-consultation">
                    <Calendar className="mr-2" size={16} />
                    Book Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
