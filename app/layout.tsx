import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Conversion-Focused Websites for Growing Businesses | ClaroVista Digital",
    template: "%s | ClaroVista Digital",
  },
  description:
    "We design conversion-focused websites that turn visitors into enquiries and customers. Clear structure, strong CTAs, real outcomes.",

  metadataBase: new URL("https://clarovista.vercel.app"),

  openGraph: {
    title: "ClaroVista Digital — Conversion-Focused Websites",
    description:
      "High-performance websites designed to guide visitors, drive action, and support business growth.",
    url: "https://clarovista.vercel.app",
    siteName: "ClaroVista Digital",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClaroVista Digital — Conversion-Focused Websites",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "ClaroVista Digital — Conversion-Focused Websites",
    description:
      "We design websites that prioritize clarity, conversion, and real business outcomes.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          bg-[#fefbf8]
          text-[#26201b]
        `}
      >
        {children}
      </body>
    </html>
  )
}
