import type { Metadata } from "next"
import { BlogHero } from "@/Shamba-Connect-Website/components/blog/blog-hero"
import { BlogCategories } from "@/Shamba-Connect-Website/components/blog/blog-categories"
import { BlogGrid } from "@/Shamba-Connect-Website/components/blog/blog-grid"
import { filterPosts, getCategories, categorySlug } from "@/Shamba-Connect-Website/lib/posts"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  title: "Urban Farming Knowledge Hub | Shamba Connect Blog",
  description:
    "Practical guides on kitchen gardens, rabbit farming, composting and organic pest control in Kenya — written from work done on real Nairobi plots.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    title: "Urban Farming Knowledge Hub | Shamba Connect",
    description:
      "Practical guides on kitchen gardens, rabbit farming, composting and organic pest control in Kenya.",
  },
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string; search?: string }>
}) {
  const { category, search } = await searchParams

  // An unknown ?category= is treated as no filter rather than as an empty
  // result, so a stale or mistyped link still lands on something readable.
  const known = new Set(getCategories().map((c) => categorySlug(c.name)))
  const active = category && known.has(category) ? category : "all"

  const posts = filterPosts({ category: active, query: search })

  return (
    <>
      <BlogHero query={search} />
      <BlogCategories active={active} />
      <BlogGrid posts={posts} query={search} category={active === "all" ? undefined : active} />
    </>
  )
}
