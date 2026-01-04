"use client"

import Link from "next/link"
import { Card, CardContent } from "@/Shamba-Connect-Website/components/ui/card"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"
import { useBlogStore } from "@/Shamba-Connect-Website/lib/blog-store"

export function LatestBlogInsights() {
  const posts = useBlogStore((state) => state.posts)
  const publishedPosts = posts.filter((post) => post.published).slice(0, 5)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest Insights</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedPosts.map((post, index) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="group h-full hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 hover:border-primary">
                <div className="relative h-[240px] overflow-hidden">
                  <img
                    src={post.featuredImage || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                    <span className="text-primary font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                      Read More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" variant="outline" className="text-lg bg-transparent">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
