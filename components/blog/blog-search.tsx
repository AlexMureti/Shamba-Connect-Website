"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Input } from "@/Shamba-Connect-Website/components/ui/input"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { X, Search } from "lucide-react"

/**
 * The initial value is passed down from the server page rather than read from
 * useSearchParams inside an effect. That removed the `mounted` gate, which was
 * rendering an empty 40px box on the server and on the first client frame.
 */
export function BlogSearch({ initial = "" }: { initial?: string }) {
  const router = useRouter()
  const [q, setQ] = useState(initial)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(q.trim() ? `/blog?search=${encodeURIComponent(q.trim())}` : "/blog")
  }

  return (
    <form onSubmit={submit} className="w-full" role="search">
      <div className="relative flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} aria-hidden="true" />
          <Input
            type="search"
            name="search"
            aria-label="Search blog posts"
            placeholder="Search blog posts..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="pl-10 pr-10"
          />
          {q && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => {
                setQ("")
                router.push("/blog")
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            >
              <X size={18} />
            </button>
          )}
        </div>
        <Button type="submit" variant="default" size="sm">
          Search
        </Button>
      </div>
    </form>
  )
}
