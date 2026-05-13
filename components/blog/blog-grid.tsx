"use client"

import { useEffect, useState, useMemo } from "react"
import { useSearchParams } from "next/navigation"
import Image from "next/image"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Shamba-Connect-Website/components/ui/card"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useBlogStore } from "@/Shamba-Connect-Website/lib/blog-store"

export function BlogGrid() {
  const allPosts = useBlogStore((state) => state.posts)
  const searchParams = useSearchParams()
  const [mounted, setMounted] = useState(false)

  const selectedCategory = searchParams.get("category") || "all"
  const searchQuery = searchParams.get("search") || ""

  const posts = useMemo(() => {
    let publishedPosts = allPosts.filter((p) => p.published)
    
    // Filter by category
    if (selectedCategory !== "all") {
      publishedPosts = publishedPosts.filter((p) => p.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory)
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      publishedPosts = publishedPosts.filter((p) => 
        p.title.toLowerCase().includes(query) ||
        p.excerpt.toLowerCase().includes(query) ||
        p.content.toLowerCase().includes(query)
      )
    }
    
    return publishedPosts
  }, [allPosts, selectedCategory, searchQuery])

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="py-20 bg-background" />
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {posts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              {searchQuery
                ? `No posts found matching "${searchQuery}". Try a different search term.`
                : selectedCategory === "all" 
                ? "No blog posts published yet." 
                : `No posts found in this category. Try selecting a different category.`}
            </p>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {posts.length} post{posts.length !== 1 ? "s" : ""}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow flex flex-col">
                  <div className="relative w-full h-48">
                    <Image
                      src={post.featuredImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <CardHeader className="flex-grow">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="text-primary font-medium">{post.category}</span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardFooter className="flex-col items-start gap-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground w-full">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button asChild variant="ghost" className="group -ml-4">
                      <Link href={`/blog/${post.slug}`}>
                        Read Article
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
