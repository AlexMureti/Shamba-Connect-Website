import Link from "next/link"
import { getCategories } from "@/Shamba-Connect-Website/lib/posts"

/**
 * Server component. The filters used to be onClick buttons calling router.push,
 * so a crawler saw five inert <button> elements and could not reach a single
 * filtered view. They are links now: real URLs, real hrefs, real crawl paths.
 *
 * Categories and counts are derived from the posts, so a new post in a new
 * category shows up here without anyone remembering to edit a hardcoded list --
 * which is how the old list ended up offering a "Success Stories" tab whose
 * slug had to be re-derived back into a display name to match anything.
 */
export function BlogCategories({ active = "all" }: { active?: string }) {
  const tabs = [
    { slug: "all", label: "All Posts", count: null as number | null },
    ...getCategories().map((c) => ({
      slug: c.name.toLowerCase().replace(/\s+/g, "-"),
      label: c.name,
      count: c.count,
    })),
  ]

  return (
    <nav
      aria-label="Filter posts by category"
      className="py-8 bg-card border-y border-border sticky top-20 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ul className="flex flex-wrap gap-3 justify-center">
          {tabs.map((tab) => {
            const isActive = tab.slug === active
            return (
              <li key={tab.slug}>
                <Link
                  href={tab.slug === "all" ? "/blog" : `/blog?category=${tab.slug}`}
                  aria-current={isActive ? "page" : undefined}
                  className={
                    "inline-flex h-9 items-center rounded-md px-4 text-sm font-medium transition-colors " +
                    (isActive
                      ? "bg-primary text-primary-foreground"
                      : "border border-input bg-background hover:bg-accent hover:text-accent-foreground")
                  }
                >
                  {tab.label}
                  {tab.count != null && (
                    <span className={"ml-2 tabular-nums " + (isActive ? "opacity-70" : "text-muted-foreground")}>
                      {tab.count}
                    </span>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
