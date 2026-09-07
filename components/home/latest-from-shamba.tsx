import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock } from "lucide-react"
import { getAllPosts } from "@/Shamba-Connect-Website/lib/posts"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"

/**
 * Server component. This sits on the homepage -- the most crawled page on the
 * site -- and was rendering a bare 256px grey box on the server, because it read
 * posts from a localStorage-backed store behind a `mounted` gate. Four article
 * headlines and four internal links were invisible to every crawler.
 */
export function LatestFromShamba() {
  const posts = getAllPosts().slice(0, 4)
  const featuredPost = posts[0]
  const sidebarPosts = posts.slice(1, 4)

  if (!featuredPost) return null

  return (
    <section className="bg-muted/40 border-b border-border overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-headline text-foreground">
              From the Shamba
            </h2>
          </div>
          <Button asChild variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-white transition-all duration-300">
            <Link href="/blog" className="flex items-center gap-2">
              Explore All Articles
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Featured Article - Large & Bold */}
          <div className="lg:col-span-7">
            <Link href={`/blog/${featuredPost.slug}`} className="group block h-full">
              <div className="relative h-full bg-card border border-border rounded-3xl overflow-hidden newsroom-card-hover">
                <div className="relative aspect-[16/9] lg:aspect-auto lg:h-[400px] overflow-hidden">
                  <Image
                    src={featuredPost.featuredImage || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 orange-gradient-bg text-white font-bold rounded-full text-xs shadow-lg shadow-secondary/20">
                      {featuredPost.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground font-medium">
                    <span className="flex items-center gap-2">
                      <Clock size={16} className="text-secondary" />
                      {featuredPost.readTime}
                    </span>
                    <span>{featuredPost.date}</span>
                  </div>
                  <h3 className="bold-heading text-2xl md:text-3xl group-hover:text-secondary transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground text-lg line-clamp-2 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="pt-4 flex items-center text-secondary font-bold group-hover:translate-x-2 transition-transform">
                    Read Full Story <ArrowRight size={20} className="ml-2" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Sidebar Headlines - Modern & Compact */}
          <div className="lg:col-span-5 space-y-6">
            {sidebarPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block"
              >
                <div className="flex gap-6 p-4 bg-card border border-border rounded-2xl newsroom-card-hover">
                  <div className="relative w-32 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                    <Image
                      src={post.featuredImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      sizes="128px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-secondary">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-bold">{post.readTime}</span>
                    </div>
                    <h4 className="font-bold text-lg leading-snug group-hover:text-secondary transition-colors line-clamp-2">
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
