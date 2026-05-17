import { Suspense } from "react"
import { BlogHero } from "@/Shamba-Connect-Website/components/blog/blog-hero"
import { BlogCategories } from "@/Shamba-Connect-Website/components/blog/blog-categories"
import { BlogGrid } from "@/Shamba-Connect-Website/components/blog/blog-grid"

export const dynamic = "force-dynamic"

export const metadata = {
  title: "Blog - Shamba Connect",
  description: "Expert tips, guides, and insights on urban agriculture, organic farming, and food security in Kenya.",
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <Suspense fallback={<div className="py-8 bg-card border-y border-border" />}>
        <BlogCategories />
      </Suspense>
      <Suspense fallback={<div className="py-20 bg-background" />}>
        <BlogGrid />
      </Suspense>
    </>
  )
}
