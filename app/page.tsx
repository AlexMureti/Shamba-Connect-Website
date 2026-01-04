import { EditorialHero } from "@/Shamba-Connect-Website/components/home/editorial-hero"
import { LatestFromShamba } from "@/Shamba-Connect-Website/components/home/latest-from-shamba"
import { FeaturedProducts } from "@/Shamba-Connect-Website/components/home/featured-products"
import { InTheField } from "@/Shamba-Connect-Website/components/home/in-the-field"
import { WhatWeDoSnapshot } from "@/Shamba-Connect-Website/components/home/what-we-do-snapshot"
import { SocialProofCredibility } from "@/Shamba-Connect-Website/components/home/social-proof-credibility"
import { CommunityCTA } from "@/Shamba-Connect-Website/components/home/community-cta"

export default function HomePage() {
  return (
    <>
      <EditorialHero />
      <LatestFromShamba />
      <FeaturedProducts />
      <InTheField />
      <WhatWeDoSnapshot />
      <SocialProofCredibility />
      <CommunityCTA />
    </>
  )
}
