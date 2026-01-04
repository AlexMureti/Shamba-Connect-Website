import { EditorialHero } from "@/components/home/editorial-hero"
import { LatestFromShamba } from "@/components/home/latest-from-shamba"
import { FeaturedProducts } from "@/components/home/featured-products"
import { InTheField } from "@/components/home/in-the-field"
import { WhatWeDoSnapshot } from "@/components/home/what-we-do-snapshot"
import { SocialProofCredibility } from "@/components/home/social-proof-credibility"
import { CommunityCTA } from "@/components/home/community-cta"

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
