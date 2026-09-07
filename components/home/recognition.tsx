import Image from "next/image"

/**
 * Recognition.
 *
 * Every photograph here is Mercy's own, and every caption states only what can
 * be verified. The Nairobi Show dates come off the banner in the photograph
 * itself: "The Agricultural Society of Kenya -- The Nairobi International Trade
 * Fair (Nairobi Show), 29th Sep - 5th Oct 2025, at the Jamhuri Park Showground."
 *
 * The trophy caption names the President on Alex's confirmation. If that is ever
 * in doubt it comes out -- an award claim naming a head of state is not
 * something to leave standing on a guess.
 */

const supporting = [
  {
    src: "/media/shamba-10.webp",
    alt: "Shamba Connect's stand at the Nairobi International Trade Fair 2025",
    caption: "Exhibiting at the Nairobi Show, Jamhuri Park",
    meta: "29 Sep – 5 Oct 2025",
  },
  {
    src: "/media/shamba-09.webp",
    alt: "Mercy Munene leading a farmer training session",
    caption: "Training women farmers in Nairobi",
    meta: "Ongea Dada",
  },
  {
    src: "/media/shamba-21.webp",
    alt: "Mercy Munene with women agripreneurs at a processing facility",
    caption: "With women agripreneurs at a processing plant",
    meta: "International exchange",
  },
]

export function Recognition() {
  return (
    <section className="section-y border-b border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-2xl space-y-4 md:mb-16">
          <h2 className="text-headline text-foreground">
            Seven years, and the <span className="text-secondary">receipts</span> to show for it
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Shamba Connect is led by Mercy Munene — MBA, Kenya Fellow of the African Food
            Fellowship, member of the Association of Women in Agriculture Kenya, and
            co-founder of La Satarah, a GlobalG.A.P-certified herb exporter supplying the
            EU and Middle East.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
          {/* the one that carries the section */}
          <figure className="group relative overflow-hidden rounded-3xl border border-border">
            <div className="relative aspect-[4/3] lg:aspect-[4/3]">
              <Image
                src="/media/shamba-11.webp"
                alt="Mercy Munene receiving a trophy from President William Ruto at an Agricultural Society of Kenya show"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover object-[center_22%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                priority={false}
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent p-6 md:p-8">
              <p className="font-serif text-xl leading-snug text-white md:text-2xl">
                Receiving a trophy from President William Ruto
              </p>
              <p className="mt-1 text-sm text-white/75">Agricultural Society of Kenya show</p>
            </figcaption>
          </figure>

          <ul className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {supporting.map((item) => (
              <li key={item.src}>
                <figure className="group overflow-hidden rounded-3xl border border-border bg-background">
                  <div className="relative aspect-[4/3] lg:aspect-[16/10]">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 640px) 30vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className="p-5">
                    <p className="font-medium leading-snug text-foreground">{item.caption}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.meta}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
