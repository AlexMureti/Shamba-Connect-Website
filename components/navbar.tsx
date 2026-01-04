"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/Shamba-Connect-Website/components/ui/button"
import {
  BookOpen,
  Home,
  Info,
  MessageCircle,
  Settings,
  Shield,
  ShoppingCart,
  Users,
} from "lucide-react"
import { usePathname } from "next/navigation"

export function Navbar() {
  // Prevent hydration warnings caused by browser extensions injecting attributes
  // (e.g. Grammarly, password managers) into the server-rendered HTML.
  const [mounted, setMounted] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/shop", label: "Shop" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ]

  const mobileLinks = [
    { href: "/", label: "Home", Icon: Home },
    { href: "/about", label: "About", Icon: Info },
    { href: "/services", label: "Services", Icon: Shield },
    { href: "/shop", label: "Shop", Icon: ShoppingCart },
    { href: "/book-consultation", label: "Consult", Icon: Users },
    { href: "/blog", label: "Blog", Icon: BookOpen },
    { href: "/contact", label: "Contact", Icon: MessageCircle },
  ] as const

  const isActive = (href: string) => {
    if (!mounted) return false
    if (href === "/") return pathname === "/"
    return pathname?.startsWith(href)
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-card border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/shambaconnect.png"
              alt="Shamba Connect"
              width={120}
              height={60}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin/blog"
              className="text-muted-foreground hover:text-primary transition-colors"
              title="Admin Panel"
            >
              <Settings size={20} />
            </Link>
            {/* </CHANGE> */}
            <Button asChild>
              <Link href="/book-consultation">Consult with us</Link>
            </Button>
          </div>

          {/* Mobile: no top navigation (bottom nav is used instead) */}
          <div className="md:hidden" aria-hidden="true" />
        </div>
      </div>

      {/* Mobile Bottom Navigation (floating pill) */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-32px)] max-w-md z-50">
        <div className="rounded-full bg-card/95 backdrop-blur-md shadow-xl border border-border p-2">
          <div className="flex items-center justify-between">
            {mobileLinks.map(({ href, label, Icon }) => {
              const active = isActive(href)
              return (
                <Link
                  key={href}
                  href={href}
                  aria-label={label}
                  className={`flex-1 text-center py-2 rounded-full transition-colors ${active
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary"
                    }`}
                >
                  <Icon className="mx-auto h-5 w-5" />
                  <div className="text-[10px] mt-0.5 leading-none">{label}</div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <a
        href={`https://wa.me/25425684352?text=${encodeURIComponent(
          "Hi Shamba Connect! I'd like to learn more about kitchen gardens / rabbit farming and book a consultation."
        )}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Shamba Connect on WhatsApp"
        className="fixed bottom-24 right-4 md:bottom-6 md:right-6 z-50"
      >
        <span className="relative flex h-14 w-14">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366]/30" />
          <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-xl ring-2 ring-white/60">
            <MessageCircle className="h-7 w-7 text-white" />
          </span>
        </span>
      </a>
    </nav>
  )
}
