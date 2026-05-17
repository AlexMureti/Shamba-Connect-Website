import type { MetadataRoute } from "next"

// Default blog posts data (same as in blog-store)
const defaultPosts = [
  {
    slug: "getting-started-kitchen-garden",
    date: "Jan 15, 2024",
    published: true,
  },
  {
    slug: "vegetables-thrive-nairobi",
    date: "Jan 10, 2024",
    published: true,
  },
  {
    slug: "rabbit-farming-101",
    date: "Jan 5, 2024",
    published: true,
  },
  {
    slug: "natural-pest-control-methods",
    date: "Dec 28, 2023",
    published: true,
  },
  {
    slug: "success-story-wanjiru-family",
    date: "Dec 20, 2023",
    published: true,
  },
  {
    slug: "composting-made-easy",
    date: "Dec 15, 2023",
    published: true,
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  // Create sitemap entries for blog posts
  const blogEntries = defaultPosts
    .filter((post) => post.published)
    .map((post) => ({
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
