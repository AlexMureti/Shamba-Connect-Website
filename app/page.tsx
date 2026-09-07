import { EditorialHero } from "@/Shamba-Connect-Website/components/home/editorial-hero"
import { LatestFromShamba } from "@/Shamba-Connect-Website/components/home/latest-from-shamba"
import { FeaturedProducts } from "@/Shamba-Connect-Website/components/home/featured-products"
import { InTheField } from "@/Shamba-Connect-Website/components/home/in-the-field"
import { WhatWeDoSnapshot } from "@/Shamba-Connect-Website/components/home/what-we-do-snapshot"
import { Recognition } from "@/Shamba-Connect-Website/components/home/recognition"
import { SocialProofCredibility } from "@/Shamba-Connect-Website/components/home/social-proof-credibility"
import { CommunityCTA } from "@/Shamba-Connect-Website/components/home/community-cta"
import { VideoShowcase } from "@/Shamba-Connect-Website/components/home/video-showcase"
import { InstagramFeed } from "@/Shamba-Connect-Website/components/home/instagram-feed"
import { NewsTicker } from "@/Shamba-Connect-Website/components/news-ticker"

export default function HomePage() {
  return (
    <>
      <NewsTicker />
      <EditorialHero />
      <VideoShowcase />
      <Recognition />
      <SocialProofCredibility />
      <WhatWeDoSnapshot />
      <FeaturedProducts />
      <InTheField />
      <LatestFromShamba />
      <InstagramFeed />
      <CommunityCTA />
    </>
  )
}
