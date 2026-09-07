"use client"

import { useState } from "react"
import { Share2, Check } from "lucide-react"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"

/**
 * The only interactive part of a blog post, split out so the article itself can
 * be a server component. Previously the whole page was "use client", which is
 * why every post shipped to Google as an empty shell.
 *
 * The old version used alert() on the clipboard fallback. This shows the result
 * in the button instead -- an alert is a modal interruption for a courtesy action.
 */
export function ShareButton({ title, excerpt }: { title: string; excerpt: string }) {
  const [copied, setCopied] = useState(false)

  const share = async () => {
    const url = window.location.href
    if (navigator.share) {
      // A cancelled share sheet rejects; that is the user declining, not a fault.
      try {
        await navigator.share({ title, text: excerpt, url })
      } catch {
        /* dismissed */
      }
      return
    }
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked (insecure context or denied permission) */
    }
  }

  return (
    <Button variant="ghost" size="sm" onClick={share} aria-live="polite">
      {copied ? <Check size={16} className="mr-2" /> : <Share2 size={16} className="mr-2" />}
      {copied ? "Link copied" : "Share"}
    </Button>
  )
}
