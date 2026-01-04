"use client"

import { Calendar, User, Share2, Eye } from "lucide-react"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import type { BlogPost as BlogPostType } from "@/Shamba-Connect-Website/lib/blog-store"
import { useEffect } from "react"
import { updateBlogPost } from "@/Shamba-Connect-Website/lib/blog-store"

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
  useEffect(() => {
    // Increment view count when post is viewed
    updateBlogPost(post.id, { views: post.views + 1 })
  }, [post.id])

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Link copied to clipboard!")
    }
  }

  const renderContent = () => {
    return post.content.split("\n").map((paragraph, idx) => {
      if (paragraph.startsWith("## ")) {
        return (
          <h2 key={idx} className="text-2xl font-bold text-foreground mt-8 mb-4">
            {paragraph.replace("## ", "")}
          </h2>
        )
      }
      if (paragraph.startsWith("[Image: ")) {
        const imageUrl = paragraph.match(/\[Image: (.*?)\]/)?.[1]
        return imageUrl ? (
          <img
            key={idx}
            src={imageUrl || "/placeholder.svg"}
            alt="Content"
            className="w-full h-64 object-cover rounded-lg my-6"
          />
        ) : null
      }
      if (paragraph.trim()) {
        return (
          <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
            {paragraph.split("**").map((part, i) =>
              i % 2 === 1 ? (
                <strong key={i} className="font-semibold text-foreground">
                  {part}
                </strong>
              ) : (
                part
              ),
            )}
          </p>
        )
      }
      return null
    })
  }

  return (
    <article className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-primary font-semibold">{post.category}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{post.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye size={16} />
                <span>{post.views} views</span>
              </div>
              <Button variant="ghost" size="sm" onClick={handleShare}>
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
            </div>
          </div>

          <img
            src={post.featuredImage || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />

          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">{post.excerpt}</p>
            {renderContent()}
          </div>
        </div>
      </div>
    </article>
  )
}
