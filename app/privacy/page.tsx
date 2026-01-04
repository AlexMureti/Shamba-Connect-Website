export const metadata = {
  title: "Privacy Policy - Shamba Connect",
  description: "Learn how Shamba Connect collects, uses, and protects your personal information.",
}

export default function PrivacyPage() {
  return (
    <div className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-foreground mb-8">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-muted-foreground">Last updated: January 2024</p>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Shamba Connect, we are committed to protecting your privacy and ensuring the security of your personal
              information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our
              services.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed">
              We collect information that you provide directly to us, including name, email address, phone number, and
              location details when you book consultations, make purchases, or contact us.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information is used to provide our services, communicate with you, improve our offerings, and send
              you relevant updates about urban agriculture and our programs.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at info@shambaconnect.co.ke
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
