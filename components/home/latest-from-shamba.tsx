"use client"

import { useEffect, useState, useMemo } from "react"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { useBlogStore } from "@/Shamba-Connect-Website/lib/blog-store"

export function LatestFromShamba() {
  const allPosts = useBlogStore((state) => state.posts)
  const [mounted, setMounted] = useState(false)

  const posts = useMemo(() => allPosts.filter((p) => p.published).slice(0, 4), [allPosts])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="bg-muted/30 border-b border-border h-64" />
  }

  const featuredPost = posts[0]
  const sidebarPosts = posts.slice(1, 4)

  if (!featuredPost) return null

  return (
    <section className="bg-muted/30 border-b border-border">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-serif text-xl md:text-2xl font-semibold">Latest from Shamba Connect</h2>
          <Link href="/blog" className="text-sm text-primary hover:underline flex items-center gap-1">
            All Articles
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Featured Article - Large */}
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all">
              <div className="aspect-video overflow-hidden">
                <img
                  src={featuredPost.featuredImage || "/placeholder.svg"}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded">{featuredPost.category}</span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {featuredPost.readTime}
                  </span>
                </div>
                <h3 className="font-serif text-lg md:text-xl font-semibold mb-2 group-hover:text-primary transition-colors leading-tight">
                  {featuredPost.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 leading-snug">{featuredPost.excerpt}</p>
              </div>
            </div>
          </Link>

          {/* Sidebar Headlines - Compact */}
          <div className="space-y-3">
            {sidebarPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block bg-card border border-border rounded-lg p-4 hover:shadow-md hover:border-primary transition-all"
              >
                <div className="flex gap-4">
                  <div className="w-24 h-20 flex-shrink-0 rounded overflow-hidden">
                    <img
                      src={post.featuredImage || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                      <span className="px-1.5 py-0.5 bg-primary/10 text-primary rounded text-[10px]">
                        {post.category}
                      </span>
                      <span className="text-[10px]">{post.readTime}</span>
                    </div>
                    <h4 className="font-semibold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
