import { ServicesHero } from "@/Shamba-Connect-Website/components/services/services-hero"
import { ServicesList } from "@/Shamba-Connect-Website/components/services/services-list"
import { ServiceDetails } from "@/Shamba-Connect-Website/components/services/service-details"

export const metadata = {
  title: "Our Services - Shamba Connect",
  description:
    "Professional urban agriculture services including kitchen gardens, rabbit farming, training, landscaping, and agri-inputs.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServiceDetails />
    </>
  )
}
