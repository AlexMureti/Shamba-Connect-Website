/**
 * Server-side post source.
 *
 * The blog used to live in lib/blog-store.ts -- a "use client" zustand store
 * reading window.localStorage. The server therefore had nothing to render, and
 * production served /blog and every /blog/[slug] as an empty shell carrying the
 * homepage <title>. All seven URLs are in the sitemap, so Google was crawling
 * seven pages of chrome. This module has no "use client" and no browser API, so
 * the pages statically generate with their content in the HTML.
 */
import posts from "@/Shamba-Connect-Website/content/posts.json"

export interface Post {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  featuredImage: string
  slug: string
  published: boolean
  views: number
  readTime: string
}

const all = posts as Post[]

/** Newest first. `date` is a human string like "Jan 15, 2024". */
function byNewest(a: Post, b: Post) {
  return new Date(b.date).getTime() - new Date(a.date).getTime()
}

export function getAllPosts(): Post[] {
  return all.filter((p) => p.published).sort(byNewest)
}

export function getPostSlugs(): string[] {
  return getAllPosts().map((p) => p.slug)
}

export function getPostBySlug(slug: string): Post | undefined {
  return all.find((p) => p.slug === slug && p.published)
}

export function getCategories(): { name: string; count: number }[] {
  const counts = new Map<string, number>()
  for (const p of getAllPosts()) counts.set(p.category, (counts.get(p.category) ?? 0) + 1)
  return [...counts.entries()].map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count)
}

export function getRelatedPosts(slug: string, limit = 3): Post[] {
  const post = getPostBySlug(slug)
  if (!post) return []
  const sameCategory = getAllPosts().filter((p) => p.slug !== slug && p.category === post.category)
  const rest = getAllPosts().filter((p) => p.slug !== slug && p.category !== post.category)
  return [...sameCategory, ...rest].slice(0, limit)
}

/** Slug form used in ?category= URLs. "Rabbit Farming" -> "rabbit-farming". */
export function categorySlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-")
}

/**
 * Category + search filtering, on the server.
 *
 * This ran in the browser before, inside a useMemo behind a `mounted` gate, so
 * /blog?category=rabbit-farming was served to crawlers as an empty section.
 */
export function filterPosts({ category, query }: { category?: string; query?: string }): Post[] {
  let out = getAllPosts()

  if (category && category !== "all") {
    out = out.filter((p) => categorySlug(p.category) === category)
  }

  if (query?.trim()) {
    const q = query.trim().toLowerCase()
    out = out.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.content.toLowerCase().includes(q),
    )
  }

  return out
}

/**
 * "Jan 15, 2024" -> "2024-01-15".
 *
 * Not `new Date(d).toISOString()`. The human string parses as local midnight, so
 * in Nairobi (UTC+3) toISOString() rolls it back to the 14th at 21:00Z -- which
 * is what the first version of the BlogPosting schema published. Reading the
 * local parts back out matches how the string was parsed, in any timezone,
 * including the UTC build machine.
 */
export function isoDate(human: string): string {
  const d = new Date(human)
  if (Number.isNaN(d.getTime())) return ""
  const pad = (n: number) => String(n).padStart(2, "0")
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`
}
