import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      {/* Background with Brand Colors */}
      <div className="absolute inset-0 green-gradient-bg z-0" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/10 -skew-x-12 translate-x-1/3 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[3rem] text-center space-y-10 shadow-2xl">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-secondary text-white text-sm font-black uppercase tracking-[0.3em] shadow-xl shadow-secondary/20">
            Get Started Today
          </div>
          
          <h2 className="bold-heading text-4xl md:text-7xl text-white">
            Ready to <span className="text-secondary">Transform</span> Your Space?
          </h2>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Join thousands of Kenyans building a sustainable future. Our experts are ready to guide you from seed to harvest.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-12 py-10 text-xl font-black rounded-2xl shadow-2xl shadow-secondary/30 transition-all duration-300 hover:-translate-y-2">
              <Link href="/book-consultation">
                Book Free Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-12 py-10 text-xl font-black rounded-2xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2">
              <Link href="/contact">
                Contact Our Team
              </Link>
            </Button>
          </div>
          
          <div className="pt-10 flex flex-wrap justify-center gap-8 text-white/60 font-bold uppercase tracking-widest text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              Expert Guidance
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              Sustainable Solutions
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-secondary rounded-full" />
              100% Organic
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
