import { FounderStory } from "@/Shamba-Connect-Website/components/about/founder-story"
import { VisionMission } from "@/Shamba-Connect-Website/components/about/vision-mission"
import { CoreValues } from "@/Shamba-Connect-Website/components/about/core-values"
import { GrowthRoadmap } from "@/Shamba-Connect-Website/components/about/growth-roadmap"
import { MediaMentions } from "@/Shamba-Connect-Website/components/about/media-mentions"
import { TeamStructure } from "@/Shamba-Connect-Website/components/about/team-structure"

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
