import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/Shamba-Connect-Website/components/ui/card"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { getRelatedPosts } from "@/Shamba-Connect-Website/lib/posts"

/**
 * Server component. These are internal links, which is the whole reason they
 * exist -- as a client component reading localStorage, no crawler ever saw them,
 * so the blog had no internal link graph at all.
 */
export function RelatedPosts({ slug }: { slug: string }) {
  const related = getRelatedPosts(slug, 3)
  if (related.length === 0) return null

  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {related.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48">
                <Image
                  src={post.featuredImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{post.category}</p>
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
