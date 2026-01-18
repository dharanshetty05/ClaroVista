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
    default: "ClaroVista Digital — Conversion-Focused Websites",
    template: "%s | ClaroVista Digital",
  },
  description:
    "Revenue-focused conversion websites for growing businesses. Clear structure, strong CTAs, real outcomes.",
  metadataBase: new URL("https://clarovistadigital.com"),
  openGraph: {
    title: "ClaroVista Digital",
    description:
      "We design and build high-performance websites that guide visitors, drive action, and grow revenue.",
    url: "https://clarovistadigital.com",
    siteName: "ClaroVista Digital",
    locale: "en_US",
    type: "website",
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
