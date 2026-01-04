import { Card, CardContent, CardHeader, CardTitle } from "@/Shamba-Connect-Website/components/ui/card"
import { Mail, Phone, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-4">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Email</p>
              <a
                href="mailto:info@shambaconnect.co.ke"
                className="text-muted-foreground hover:text-primary transition-colors underline"
              >
                info@shambaconnect.co.ke
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Phone</p>
              <a
                href="tel:+254700000000"
                className="text-muted-foreground hover:text-primary transition-colors underline"
              >
                +254 700 000 000
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Location</p>
              <p className="text-muted-foreground">Nairobi, Kenya</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="text-primary" size={24} />
            </div>
            <div>
              <p className="font-semibold text-foreground mb-1">Business Hours</p>
              <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground">Saturday: 9:00 AM - 4:00 PM</p>
              <p className="text-muted-foreground">Sunday: Closed</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="shadow-lg bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <CardContent className="pt-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <MessageCircle size={24} />
            </div>
            <div>
              <p className="font-bold">Chat on WhatsApp</p>
              <p className="text-sm opacity-90">Get instant responses</p>
            </div>
          </div>
          <Button asChild className="w-full bg-white text-primary hover:bg-white/90">
            <a
              href="https://wa.me/254700000000?text=Hello%20Shamba%20Connect!%20I'm%20interested%20in%20learning%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2" size={20} />
              Start WhatsApp Chat
            </a>
          </Button>
        </CardContent>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle>Follow Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Follow us on Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="#"
              className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Connect on LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
