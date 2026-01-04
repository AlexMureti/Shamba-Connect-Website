export const metadata = {
  title: "Terms of Service - Shamba Connect",
  description: "Read the terms and conditions for using Shamba Connect services.",
}

export default function TermsPage() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-muted-foreground">Last updated: January 2024</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Acceptance of Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using Shamba Connect's services, you accept and agree to be bound by the terms and
              conditions outlined in this agreement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              Shamba Connect provides urban agriculture solutions including garden installation, training, rabbit
              farming systems, and related products and services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">User Responsibilities</h2>
            <p className="text-muted-foreground leading-relaxed">
              Users agree to provide accurate information, maintain the confidentiality of their account credentials,
              and use our services in compliance with applicable laws.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              For questions about these Terms of Service, please contact us at info@shambaconnect.co.ke
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
