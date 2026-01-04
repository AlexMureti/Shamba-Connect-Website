"use client"

import Link from "next/link"
import { useBlogStore } from "@/lib/blog-store"
import { Calendar, Tag, ArrowRight } from "lucide-react"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"

export function LivingBlogPreview() {
  const posts = useBlogStore((state) => state.posts)
  const publishedPosts = posts.filter((post) => post.status === "published").slice(0, 3)

  if (publishedPosts.length === 0) return null

  return (
    <section className="py-10 md:py-14 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground">Latest from Our Blog</h2>
          <Button asChild variant="ghost" size="sm">
            <Link href="/blog">
              View All
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </Button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-card rounded-lg border border-border overflow-hidden hover:border-primary hover:shadow-md transition-all"
            >
              {post.featuredImage && (
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.featuredImage || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Tag size={14} />
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded">{post.category}</span>
                </div>
                <h3 className="font-semibold text-base leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar size={14} />
                  <time>{new Date(post.publishedAt).toLocaleDateString()}</time>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
