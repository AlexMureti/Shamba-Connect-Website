import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Navbar } from "@/Shamba-Connect-Website/components/navbar"
import { Footer } from "@/Shamba-Connect-Website/components/footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://shambaconnect.co.ke"),
  title: "Shamba Connect | Urban Agriculture, Rabbit Farming & Kitchen Gardens Kenya",
  description:
    "Kenya's #1 urban agriculture platform. Professional kitchen garden installations, premium rabbit farming supplies, organic seedlings, and expert agricultural training for food security.",
  keywords: [
    "urban agriculture Kenya",
    "kitchen garden installation Nairobi",
    "commercial rabbit farming Kenya",
    "organic farming solutions",
    "rabbit meat suppliers Kenya",
    "vertical garden kits",
    "urban farming training",
    "sustainable agriculture Kenya",
    "home gardening Nairobi",
    "Shamba Connect",
    "food security Kenya",
    "rabbit breeder Kenya",
  ],
  openGraph: {
    title: "Shamba Connect | Transform Your Urban Space into a Productive Garden",
    description: "Join 5,000+ Kenyans growing their own organic food. Professional installations, premium rabbit farming, and expert training.",
    url: "https://shambaconnect.co.ke",
    type: "website",
    images: [
      {
        url: "/mercy-munene-founder-with-rabbit.jpg",
        width: 1200,
        height: 630,
        alt: "Mercy Munene - Founder of Shamba Connect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shamba Connect - Urban Agriculture & Rabbit Farming Kenya",
    description: "Transform your urban space into a productive organic garden. Professional installations & training.",
    images: ["/mercy-munene-founder-with-rabbit.jpg"],
  },
  alternates: {
    canonical: "https://shambaconnect.co.ke",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#53CE30",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
