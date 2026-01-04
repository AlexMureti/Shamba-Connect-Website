import { ConsultationHero } from "@/Shamba-Connect-Website/components/consultation/consultation-hero"
import { ConsultationTypes } from "@/Shamba-Connect-Website/components/consultation/consultation-types"
import { ConsultationForm } from "@/Shamba-Connect-Website/components/consultation/consultation-form"

export const metadata = {
  title: "Book Consultation - Shamba Connect",
  description:
    "Book a paid consultation with our agricultural experts. Get personalized advice for your urban farming project.",
}

export default function BookConsultationPage() {
  return (
    <>
      <ConsultationHero />
      <ConsultationTypes />
      <ConsultationForm />
    </>
  )
}
