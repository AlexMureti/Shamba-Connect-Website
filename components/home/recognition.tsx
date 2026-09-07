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
 *
 * The alt text used to say "Mercy Munene receiving a trophy". It no longer names
 * who is receiving. The woman accepting the trophy in this frame does not
 * obviously match the Mercy in the hero photograph or the video thumbnail, and
 * identifying a person from a photograph is not something to guess at in an
 * accessibility label that a screen reader will read out as fact. Alex to
 * confirm; if it is her, put the name back.
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
            Seven years, and the receipts to show for it
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            Shamba Connect is led by Mercy Munene — MBA, Kenya Fellow of the African Food
            Fellowship, member of the Association of Women in Agriculture Kenya, and
            co-founder of La Satarah, a GlobalG.A.P-certified herb exporter supplying the
            EU and Middle East.
          </p>
        </div>

        {/* The trophy photograph runs full width.

            It used to sit in the left column of a lg:grid-cols-[1.35fr_1fr]
            grid. Grid items stretch to the row height, the row was as tall as
            the three cards beside it, and the image inside was pinned to
            aspect-[4/3] -- so the photo filled the top, the caption was pinned
            to the bottom of the stretched card, and roughly 650px of empty
            bordered box sat between them.

            Filling that tall box was not the answer either: the source is
            1072x712, a landscape frame, and cropping it to a portrait column
            cuts the President out of one side and Mercy out of the other. A
            wide photograph gets a wide frame.

            The ratio is the source's own 3:2, so nothing is cropped at all.
            2.35:1 looked better in the abstract and cut the handshake in half:
            the President is at 40% of the frame and the recipient at 65%, so
            any narrower crop loses one of them. */}
        <figure className="group relative overflow-hidden rounded-3xl border border-border">
          <div className="relative aspect-[3/2]">
            <Image
              src="/media/shamba-11.webp"
              alt="A trophy being presented by President William Ruto at an Agricultural Society of Kenya show"
              fill
              sizes="(min-width: 1280px) 1216px, 100vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
          <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent p-6 md:p-8">
            <p className="font-serif text-xl leading-snug text-white md:text-3xl">
              Receiving a trophy from President William Ruto
            </p>
            <p className="mt-1 text-sm text-white/75">Agricultural Society of Kenya show</p>
          </figcaption>
        </figure>

        <ul className="mt-6 grid gap-6 sm:grid-cols-3 lg:mt-8 lg:gap-8">
          {supporting.map((item) => (
            <li key={item.src}>
              <figure className="group h-full overflow-hidden rounded-3xl border border-border bg-background">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
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
    </section>
  )
}
