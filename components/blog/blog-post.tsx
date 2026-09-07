import { Calendar, User, Clock } from "lucide-react"
import Image from "next/image"
import { isoDate, type Post } from "@/Shamba-Connect-Website/lib/posts"
import { PostBody } from "./post-body"
import { ShareButton } from "./share-button"

/**
 * Server component. No "use client", so the headline, the byline and the whole
 * body are in the HTML Google receives.
 *
 * Two things from the old client version are deliberately gone:
 *
 *  - The view counter. It read and incremented localStorage, so the number was
 *    private to one browser and reset on every clear. "245 views" was a figure
 *    no visitor's action had ever contributed to. Read time replaces it: it is
 *    derived from the post and true for everyone.
 *  - The inline markdown renderer, which handled only "## " and "**". PostBody
 *    handles the h2/h3, bold and list syntax the posts actually contain.
 */
export function BlogPost({ post }: { post: Post }) {
  return (
    <article className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-semibold text-primary">{post.category}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User size={16} aria-hidden="true" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} aria-hidden="true" />
                <time dateTime={isoDate(post.date)}>{post.date}</time>
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} aria-hidden="true" />
                {post.readTime}
              </span>
              <ShareButton title={post.title} excerpt={post.excerpt} />
            </div>
          </div>

          <div className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden">
            <Image
              src={post.featuredImage || "/placeholder.svg"}
              alt={post.title}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>

          <p className="text-lg leading-relaxed text-muted-foreground max-w-[68ch]">{post.excerpt}</p>
          <PostBody content={post.content} />
        </div>
      </div>
    </article>
  )
}
