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
    <section className="py-20 md:py-32 bg-white border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-black uppercase tracking-[0.2em]">
              <Instagram size={18} />
              Social Community
            </div>
            <h2 className="bold-heading text-4xl md:text-6xl text-foreground">
              Follow Our <span className="text-secondary">Green Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed border-l-4 border-primary pl-6">
              Get daily updates, tips, and behind-the-scenes looks at our urban farming projects across Kenya.
            </p>
          </div>
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-white px-10 py-8 text-lg rounded-2xl shadow-xl shadow-secondary/20 transition-all duration-300 hover:-translate-y-1">
            <a href="https://www.instagram.com/shamba_connect/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
              Join Us on Instagram
              <ExternalLink size={20} />
            </a>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="aspect-square bg-muted animate-pulse rounded-3xl" />
            ))
          ) : (
            posts.map((post) => (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-3xl bg-black shadow-xl hover:shadow-[0_30px_60px_rgba(230,126,34,0.3)] transition-all duration-700"
              >
                <img
                  src={post.thumbnail_url || post.media_url}
                  alt={post.caption || "Instagram post"}
                  className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                />
                
                {post.media_type === "VIDEO" && (
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/30">
                    <Play size={20} fill="currentColor" />
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <p className="text-white font-medium text-sm line-clamp-3 mb-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    {post.caption}
                  </p>
                  <div className="flex items-center gap-3 text-white font-black text-xs uppercase tracking-[0.2em]">
                    <Instagram size={16} />
                    View Post
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
