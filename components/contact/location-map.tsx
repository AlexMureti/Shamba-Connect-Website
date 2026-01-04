export function LocationMap() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Visit Our Location</h2>
          <p className="text-lg text-muted-foreground">Serving Nairobi and surrounding areas</p>
        </div>
        <div className="bg-muted rounded-lg overflow-hidden h-[500px] shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036207924!2d36.70730744863279!3d-1.3028617509994282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Shamba Connect Location - Nairobi, Kenya"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
