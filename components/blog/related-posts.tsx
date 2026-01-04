"use client"

import { useEffect, useState, useMemo } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useBlogStore } from "@/lib/blog-store"

interface RelatedPostsProps {
  currentPostId: string
  category: string
}

export function RelatedPosts({ currentPostId, category }: RelatedPostsProps) {
  const allPosts = useBlogStore((state) => state.posts)
  const [mounted, setMounted] = useState(false)

  const relatedPosts = useMemo(() => {
    const publishedPosts = allPosts.filter((p) => p.published)

    // Get posts from same category, excluding current post
    let related = publishedPosts.filter((post) => post.id !== currentPostId && post.category === category).slice(0, 3)

    // If not enough posts in same category, fill with other posts
    if (related.length < 3) {
      const others = publishedPosts
        .filter((post) => post.id !== currentPostId && post.category !== category)
        .slice(0, 3 - related.length)
      related = [...related, ...others]
    }

    return related
  }, [allPosts, currentPostId, category])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="py-20 bg-card" />
  }

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src={post.featuredImage || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-lg">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button asChild variant="ghost" className="group -ml-4">
                  <Link href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
