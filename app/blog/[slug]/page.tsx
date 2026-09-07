import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { BlogPost } from "@/Shamba-Connect-Website/components/blog/blog-post"
import { RelatedPosts } from "@/Shamba-Connect-Website/components/blog/related-posts"
import { CommentSection } from "@/Shamba-Connect-Website/components/blog/comment-section"
import { getPostBySlug, getPostSlugs, isoDate } from "@/Shamba-Connect-Website/lib/posts"
import { SITE_URL } from "@/lib/site"

/**
 * This page was "use client". It read the post out of a zustand store backed by
 * localStorage, and rendered an empty div until `mounted` flipped. Three
 * consequences, all live in production until now:
 *
 *  1. Every post served the homepage <title> and an empty <body>. Verified on
 *     2026-09-07: /blog/getting-started-kitchen-garden returned
 *     "Shamba Connect | Urban Agriculture, Rabbit Farming & Kitchen Gardens Kenya".
 *  2. Because notFound() could only run after hydration, *any* slug returned
 *     HTTP 200 -- /blog/anything-at-all was a soft 404. Google treats a site
 *     that answers 200 to every URL as low quality.
 *  3. The seven real posts were in sitemap.xml, so Google was invited to crawl
 *     seven identical blank pages.
 *
 * generateStaticParams pre-renders the seven; dynamicParams = false makes
 * everything else a real 404.
 */
export const dynamicParams = false

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const url = `${SITE_URL}/blog/${post.slug}`
  return {
    title: `${post.title} | Shamba Connect`,
    description: post.excerpt,
    alternates: { canonical: url },
    authors: [{ name: post.author }],
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: isoDate(post.date),
      authors: [post.author],
      images: [{ url: `${SITE_URL}${post.featuredImage}`, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${SITE_URL}${post.featuredImage}`],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  // Article schema. This is what puts a headline, date and image into a Google
  // result instead of a bare blue link.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.featuredImage}`,
    datePublished: isoDate(post.date),
    dateModified: isoDate(post.date),
    articleSection: post.category,
    inLanguage: "en-KE",
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "Shamba Connect",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/shamba-connect-full-logo.webp` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
  }

  return (
    <>
      <script
        type="application/ld+json"
        // Serialised from our own content file, never from user input.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPost post={post} />
      <RelatedPosts slug={post.slug} />
      <CommentSection />
    </>
  )
}
