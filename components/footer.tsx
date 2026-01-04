import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <Image
              src="/images/shambaconnect.png"
              alt="Shamba Connect"
              width={120}
              height={60}
              className="h-14 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              Transforming urban agriculture through sustainable farming solutions and empowering communities across
              Kenya.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/book-consultation"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#kitchen-gardens"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kitchen Gardens
                </Link>
              </li>
              <li>
                <Link
                  href="/services#landscaping"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Landscaping
                </Link>
              </li>
              <li>
                <Link
                  href="/services#seedlings"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Seedling Propagation
                </Link>
              </li>
              <li>
                <Link
                  href="/services#rabbit-farming"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Rabbit Farming
                </Link>
              </li>
              <li>
                <Link
                  href="/services#training"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Training & Consultancy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:info@shambaconnect.co.ke" className="hover:text-primary transition-colors">
                  info@shambaconnect.co.ke
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+254700000000" className="hover:text-primary transition-colors">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Shamba Connect. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
