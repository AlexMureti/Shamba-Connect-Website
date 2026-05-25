"use client"

import { useState, useEffect } from "react"
import { Instagram, ExternalLink, Play } from "lucide-react"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"

interface InstagramPost {
  id: string
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM"
  media_url: string
  permalink: string
  caption?: string
  thumbnail_url?: string
}

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)

  // Mock data for initial professional look while waiting for token
  const mockPosts: InstagramPost[] = [
    {
      id: "1",
      media_type: "VIDEO",
      media_url: "/mercy-munene-founder-with-rabbit.jpg", // Using existing image as placeholder
      permalink: "https://www.instagram.com/shamba_connect/",
      caption: "Transforming urban spaces into productive organic gardens. #ShambaConnect #UrbanFarming",
      thumbnail_url: "/mercy-munene-founder-with-rabbit.jpg"
    },
    {
      id: "2",
      media_type: "IMAGE",
      media_url: "/mercy-munene-founder-with-rabbit.jpg",
      permalink: "https://www.instagram.com/shamba_connect/",
      caption: "Our premium rabbit breeder stock is ready for the new season! #RabbitFarming #KenyaAgriculture",
    },
    {
      id: "3",
      media_type: "VIDEO",
      media_url: "/mercy-munene-founder-with-rabbit.jpg",
      permalink: "https://www.instagram.com/shamba_connect/",
      caption: "Training the next generation of urban farmers in Nairobi. #AgriTech #SustainableLiving",
      thumbnail_url: "/mercy-munene-founder-with-rabbit.jpg"
    },
    {
      id: "4",
      media_type: "IMAGE",
      media_url: "/mercy-munene-founder-with-rabbit.jpg",
      permalink: "https://www.instagram.com/shamba_connect/",
      caption: "Fresh organic harvest from one of our vertical garden installations. #EatHealthy #KitchenGarden",
    }
  ]

  useEffect(() => {
    // In a real implementation, we would fetch from an API route that handles the long-lived token
    // For now, we'll use the mock data to show the "News Room" design
    const timer = setTimeout(() => {
      setPosts(mockPosts)
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-pink-600 text-xs font-bold uppercase tracking-wider mb-4">
              <Instagram size={14} />
              Live from Instagram
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              The Shamba Connect Feed
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Follow our daily journey in urban agriculture and sustainable farming through our latest videos and updates.
            </p>
          </div>
          <Button asChild variant="outline" className="group">
            <a href="https://www.instagram.com/shamba_connect/" target="_blank" rel="noopener noreferrer">
              Follow @shamba_connect
              <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {loading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="aspect-square bg-muted animate-pulse rounded-xl" />
            ))
          ) : (
            posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-xl bg-black shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={post.thumbnail_url || post.media_url}
                  alt={post.caption || "Instagram post"}
                  className="h-full w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                
                {post.media_type === "VIDEO" && (
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full text-white">
                    <Play size={16} fill="currentColor" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-white text-sm line-clamp-3 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-2 text-pink-400 font-bold text-xs uppercase tracking-widest">
                    <Instagram size={14} />
                    View on Instagram
                  </div>
                </div>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
