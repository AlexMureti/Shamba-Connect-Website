import { Users, Sprout, Award, Building2 } from "lucide-react"

export function SocialProofCredibility() {
  const metrics = [
    { icon: Users, value: "500+", label: "Households Reached" },
    { icon: Sprout, value: "300+", label: "Gardens Installed" },
    { icon: Award, value: "50+", label: "Training Sessions" },
    { icon: Building2, value: "20+", label: "Business Clients" },
  ]

  return (
    <section className="bg-white border-b border-border relative overflow-hidden">
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="group p-10 bg-slate-50 rounded-[2.5rem] text-center hover:bg-primary transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl md:text-6xl font-black text-primary mb-4 group-hover:text-white transition-colors">500+</div>
            <div className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-white/80 transition-colors">Households Reached</div>
          </div>
          
          <div className="group p-10 orange-gradient-bg rounded-[2.5rem] text-center shadow-2xl shadow-secondary/20 hover:-translate-y-2 transition-all duration-500">
            <div className="text-5xl md:text-6xl font-black text-white mb-4">300+</div>
            <div className="text-sm font-black uppercase tracking-[0.2em] text-white/80">Gardens Installed</div>
          </div>

          <div className="group p-10 bg-slate-50 rounded-[2.5rem] text-center hover:bg-primary transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl md:text-6xl font-black text-primary mb-4 group-hover:text-white transition-colors">50+</div>
            <div className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-white/80 transition-colors">Training Sessions</div>
          </div>

          <div className="group p-10 bg-slate-900 rounded-[2.5rem] text-center hover:bg-secondary transition-all duration-500 hover:-translate-y-2">
            <div className="text-5xl md:text-6xl font-black text-white mb-4 transition-colors">20+</div>
            <div className="text-sm font-black uppercase tracking-[0.2em] text-white/60 group-hover:text-white/80 transition-colors">Business Clients</div>
          </div>
        </div>
      </div>
    </section>
  )
}
