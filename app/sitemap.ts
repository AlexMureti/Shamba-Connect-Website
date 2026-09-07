import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site"
import { getAllPosts } from "@/Shamba-Connect-Website/lib/posts"

/**
 * Derived, not retyped.
 *
 * The previous version carried its own hardcoded copy of the post list with a
 * comment saying "same as in blog-store". It was not: it listed six posts and
 * the site had seven, so transforming-urban-spaces-sustainable-gardens was
 * never submitted to Google. Reading getAllPosts() means a new post appears in
 * the sitemap the moment it is published, and an unpublished one cannot leak in.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, changeFrequency: "daily" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.9, changeFrequency: "daily" },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" },
    { path: "/shop", priority: 0.8, changeFrequency: "weekly" },
    { path: "/book-consultation", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" },
  ]

  return [
    ...pages.map((p) => ({
      url: `${SITE_URL}${p.path}`,
      lastModified: now,
      changeFrequency: p.changeFrequency,
      priority: p.priority,
    })),
    ...getAllPosts().map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ]
}
