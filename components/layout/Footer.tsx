"use client"

import { ArrowUpRight } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#26201b] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Brand */}
          <div className="max-w-sm">
            <p className="text-xl font-semibold text-white">
              ClaroVista<span className="text-orange-400">.</span>
            </p>

            <p className="mt-3 text-sm text-[#cfc6be] leading-relaxed">
              We design and build conversion-focused websites from scratch
              for businesses that want their website to make money.
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Navigate
              </p>
              <a
                href="#projects"
                className="text-[#cfc6be] hover:text-white transition"
              >
                Work
              </a>
              <a
                href="#contact"
                className="text-[#cfc6be] hover:text-white transition"
              >
                Contact
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Get in touch
              </p>
              <a
                href="mailto:hello@clarovistadigital.com"
                className="text-[#cfc6be] hover:text-white transition"
              >
                Email
              </a>
              <a
                href="https://wa.me/XXXXXXXXXX"
                className="text-[#cfc6be] hover:text-white transition"
              >
                WhatsApp
              </a>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Next step
              </p>
              <a
                href="#contact"
                className="
                  inline-flex items-center gap-2
                  text-orange-400 hover:text-orange-300
                  transition
                "
              >
                Book a call
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} ClaroVista Digital</p>
          <p>Built with clarity. Designed to convert.</p>
        </div>
      </div>
    </footer>
  )
}
