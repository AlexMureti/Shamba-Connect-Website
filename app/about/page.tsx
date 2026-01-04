import { FounderStory } from "@/components/about/founder-story"
import { VisionMission } from "@/components/about/vision-mission"
import { CoreValues } from "@/components/about/core-values"
import { GrowthRoadmap } from "@/components/about/growth-roadmap"
import { MediaMentions } from "@/components/about/media-mentions"
import { TeamStructure } from "@/components/about/team-structure"

export const metadata = {
  title: "About Us - Shamba Connect",
  description:
    "Learn about Mercy Munene's journey from personal health challenges to founding Kenya's leading urban agriculture social enterprise.",
}

export default function AboutPage() {
  return (
    <>
      <FounderStory />
      <VisionMission />
      <CoreValues />
      <GrowthRoadmap />
      <MediaMentions />
      <TeamStructure />
    </>
  )
}
