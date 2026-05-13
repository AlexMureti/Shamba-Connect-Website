import type { MetadataRoute } from "next"
import { useBlogStore } from "@/Shamba-Connect-Website/lib/blog-store"

export default function sitemap(): MetadataRoute.Sitemap {
  // Get all published blog posts from the store
  const store = useBlogStore.getState()
  const publishedPosts = store.posts.filter((post) => post.published)

  // Create sitemap entries for blog posts
  const blogEntries = publishedPosts.map((post) => ({
    url: `https://shambaconnect.co.ke/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  // Main site pages
  const mainPages: MetadataRoute.Sitemap = [
    {
      url: "https://shambaconnect.co.ke",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: "https://shambaconnect.co.ke/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://shambaconnect.co.ke/services",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://shambaconnect.co.ke/shop",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://shambaconnect.co.ke/blog",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://shambaconnect.co.ke/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://shambaconnect.co.ke/book-consultation",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]

  return [...mainPages, ...blogEntries]
}
