"use client"

import { Play, ExternalLink } from "lucide-react"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"

export function VideoShowcase() {
  const videos = [
    {
      id: "IhvR2SO4FuI",
      title: "Shamba Connect with Safaricom Newsroom",
      description: "Discover how we're transforming urban spaces and improving health through organic kitchen gardens.",
      thumbnail: "https://img.youtube.com/vi/IhvR2SO4FuI/maxresdefault.jpg",
    },
    {
      id: "-mPVvmDCX2k",
      title: "Mercy Munene's Green Mission",
      description: "An in-depth look at our mission to provide healthy food and create healthier cities in Kenya.",
      thumbnail: "https://img.youtube.com/vi/-mPVvmDCX2k/maxresdefault.jpg",
    },
  ]

  return (
    <section className="bg-slate-900 text-white border-b border-border overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-black uppercase tracking-[0.2em] border border-secondary/30">
              <Play size={18} fill="currentColor" />
              Video Showcase
            </div>
            <h2 className="bold-heading text-4xl md:text-6xl">
              Farming in <span className="text-secondary">Action</span>
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed border-l-4 border-secondary pl-6">
              Watch our success stories and expert tutorials to see how we're building a food-secure future.
            </p>
          </div>
          <Button asChild className="bg-white hover:bg-slate-100 text-slate-900 px-10 py-8 text-lg rounded-2xl shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <a href="https://www.youtube.com/@shambaconnect" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 font-bold">
              Visit Our YouTube
              <ExternalLink size={20} />
            </a>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group relative bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-500"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 h-20 orange-gradient-bg text-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl border-4 border-white/20"
                  >
                    <Play size={32} fill="currentColor" />
                  </a>
                </div>
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-black/40 backdrop-blur-md text-white font-bold rounded-full text-xs border border-white/10 uppercase tracking-widest">
                    Success Story
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="bold-heading text-2xl group-hover:text-secondary transition-colors line-clamp-1">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
