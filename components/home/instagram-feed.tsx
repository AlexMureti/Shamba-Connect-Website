import Image from "next/image"
import Link from "next/link"
import { Instagram, ExternalLink } from "lucide-react"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"

const INSTAGRAM_URL = "https://www.instagram.com/shamba_connect/"

// Real, distinct photographs from our work — a genuine glimpse of the shamba,
// not a simulated feed. Each links through to our Instagram for the latest updates.
const gallery = [
  {
    src: "/mercy-munene-founder-with-rabbit.jpg",
    label: "Mercy Munene, Founder",
    span: "row-span-2",
  },
  {
    src: "/thriving-urban-rooftop-kitchen-garden-with-fresh-v.jpg",
    label: "Rooftop kitchen garden",
  },
  {
    src: "/healthy-rabbits-in-modern-farming-setup-with-hutch.jpg",
    label: "Our rabbitry",
  },
  {
    src: "/agricultural-training-workshop-kenya.jpg",
    label: "Hands-on training",
    span: "col-span-2",
  },
  {
    src: "/happy-kenyan-family-harvesting-vegetables-from-bac.jpg",
    label: "A family harvest",
  },
]

export function InstagramFeed() {
  return (
    <section className="section-y bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 md:mb-16 gap-8">
          <div className="max-w-2xl space-y-5">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-[0.2em]">
              <Instagram size={16} />
              @shamba_connect
            </div>
            <h2 className="text-headline text-foreground">
              Follow our <span className="text-secondary">green journey</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tips, transformations, and behind-the-scenes from our gardens and
              rabbitries across Kenya — posted as it happens on Instagram.
            </p>
          </div>
          <Button
            asChild
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-base rounded-xl shadow-lg shadow-secondary/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Link
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              Follow us on Instagram
              <ExternalLink size={18} />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
          {gallery.map((item) => (
            <Link
              key={item.src}
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl bg-muted shadow-sm hover:shadow-xl transition-all duration-500 ${item.span ?? ""}`}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between gap-2">
                <span className="text-white font-semibold text-sm drop-shadow-sm">
                  {item.label}
                </span>
                <Instagram
                  size={18}
                  className="text-white/0 group-hover:text-white transition-colors duration-300 shrink-0"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
