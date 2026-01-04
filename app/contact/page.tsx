import { ContactHero } from "@/components/contact/contact-hero"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { LocationMap } from "@/components/contact/location-map"

export const metadata = {
  title: "Contact Us - Shamba Connect",
  description:
    "Get in touch with Shamba Connect. We're here to answer your questions about urban agriculture solutions.",
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <ContactForm />
            <ContactInfo />
          </div>
        </div>
      </div>
      <LocationMap />
    </>
  )
}
