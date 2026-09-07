import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Clock, ArrowRight } from "lucide-react"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Shamba-Connect-Website/components/ui/card"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import type { Post } from "@/Shamba-Connect-Website/lib/posts"

/**
 * Server component. Filtering moved to the page, which reads searchParams on the
 * server -- so /blog?category=rabbit-farming now returns the filtered list in the
 * HTML rather than an empty <div> that fills in after hydration.
 */
export function BlogGrid({
  posts,
  query,
  category,
}: {
  posts: Post[]
  query?: string
  category?: string
}) {
  if (posts.length === 0) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <p className="text-lg text-muted-foreground">
            {query
              ? `Nothing matches “${query}”.`
              : category
                ? "No posts in this category yet."
                : "No posts published yet."}
          </p>
          {(query || category) && (
            <Button asChild variant="ghost" className="mt-4">
              <Link href="/blog">Show all articles</Link>
            </Button>
          )}
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-sm text-muted-foreground">
          {posts.length} article{posts.length === 1 ? "" : "s"}
          {query ? ` matching “${query}”` : ""}
        </p>
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
                <p className="mb-2 text-sm font-medium text-primary">{post.category}</p>
                <CardTitle className="text-xl">{post.title}</CardTitle>
                <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-4">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground w-full">
                  <span className="flex items-center gap-1">
                    <User size={14} aria-hidden="true" />
                    {post.author}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} aria-hidden="true" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} aria-hidden="true" />
                    {post.readTime}
                  </span>
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
      </div>
    </section>
  )
}
