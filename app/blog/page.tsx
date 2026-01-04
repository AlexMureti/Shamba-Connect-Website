import { BlogHero } from "@/components/blog/blog-hero"
import { BlogCategories } from "@/components/blog/blog-categories"
import { BlogGrid } from "@/components/blog/blog-grid"

export const metadata = {
  title: "Blog - Shamba Connect",
  description: "Expert tips, guides, and insights on urban agriculture, organic farming, and food security in Kenya.",
}

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
    </>
  )
}
