"use client"

import { useEffect, useState } from "react"
import { use } from "react"
import { BlogPost } from "@/Shamba-Connect-Website/components/blog/blog-post"
import { RelatedPosts } from "@/Shamba-Connect-Website/components/blog/related-posts"
import { CommentSection } from "@/Shamba-Connect-Website/components/blog/comment-section"
import { useBlogStore } from "@/lib/blog-store"
import { notFound } from "next/navigation"

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const post = useBlogStore((state) => state.getPostBySlug(slug))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="min-h-screen bg-background" />
  }

  if (!post) {
    notFound()
  }

  return (
    <>
      <BlogPost post={post} />
      <RelatedPosts currentPostId={post.id} category={post.category} />
      <CommentSection />
    </>
  )
}
