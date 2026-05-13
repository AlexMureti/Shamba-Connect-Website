"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/Shamba-Connect-Website/components/ui/input"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import { X, Search } from "lucide-react"

export function BlogSearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState("")
  const [mounted, setMounted] = useState(false)

  // Initialize search query from URL on mount
  useEffect(() => {
    const query = searchParams.get("search") || ""
    setSearchQuery(query)
    setMounted(true)
  }, [searchParams])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (searchQuery.trim()) {
      // Update URL with search query
      router.push(`/blog?search=${encodeURIComponent(searchQuery.trim())}`)
    } else {
      // Clear search
      router.push("/blog")
    }
  }

  const handleClear = () => {
    setSearchQuery("")
    router.push("/blog")
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return <div className="w-full h-10" />
  }

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className="relative flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
          <Input
            type="text"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-10"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={handleClear}
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
