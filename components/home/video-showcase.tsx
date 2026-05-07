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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">See Us in Action</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Watch how our team is making a difference in urban agriculture and food security across Kenya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {videos.map((video) => (
            <div key={video.id} className="group space-y-4">
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 md:w-20 md:h-20 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform duration-300 group-hover:scale-110"
                  >
                    <Play size={32} fill="currentColor" className="ml-1" />
                  </a>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-serif text-xl md:text-2xl font-semibold group-hover:text-primary transition-colors">
                  {video.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {video.description}
                </p>
                <Button variant="link" className="p-0 h-auto text-primary font-semibold" asChild>
                  <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                    Watch on YouTube <ExternalLink size={14} className="ml-1" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
