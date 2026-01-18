"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#fefbf8]/80 backdrop-blur border-b border-[#26201b]/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-lg font-semibold text-[#26201b]"
          >
            ClaroVista<span className="text-[#ff751f]">.</span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("problem")}
              className="text-sm text-[#26201b]/70 hover:text-[#26201b] transition"
            >
              Why websites fail
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm text-[#26201b]/70 hover:text-[#26201b] transition"
            >
              How we work
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-[#26201b]/70 hover:text-[#26201b] transition"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("why")}
              className="text-sm text-[#26201b]/70 hover:text-[#26201b] transition"
            >
              Why us
            </button>

            {/* Primary CTA */}
            <button
              onClick={() => scrollToSection("contact")}
              className="
                ml-2 inline-flex items-center justify-center
                rounded-full
                px-5 py-2
                text-sm font-medium text-black
                bg-gradient-to-r from-[#ff751f] to-[#ff9a4d]
                shadow-[0_0_18px_rgba(255,117,31,0.45)]
                transition hover:shadow-[0_0_28px_rgba(255,117,31,0.6)]
              "
            >
              Book a call
            </button>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#26201b]"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#26201b]/10 bg-[#fefbf8]">
          <nav className="flex flex-col px-6 py-6 gap-5">
            <button
              onClick={() => {
                scrollToSection("problem")
                setOpen(false)
              }}
              className="text-[#26201b] text-left"
            >
              Why websites fail
            </button>
            <button
              onClick={() => {
                scrollToSection("process")
                setOpen(false)
              }}
              className="text-[#26201b] text-left"
            >
              How we work
            </button>
            <button
              onClick={() => {
                scrollToSection("projects")
                setOpen(false)
              }}
              className="text-[#26201b] text-left"
            >
              Work
            </button>
            <button
              onClick={() => {
                scrollToSection("why")
                setOpen(false)
              }}
              className="text-[#26201b] text-left"
            >
              Why us
            </button>

            {/* Mobile CTA */}
            <button
              onClick={() => {
                scrollToSection("contact")
                setOpen(false)
              }}
              className="
                mt-2 inline-flex justify-center
                rounded-full
                px-5 py-3
                text-black font-medium
                bg-gradient-to-r from-[#ff751f] to-[#ff9a4d]
                shadow-[0_0_20px_rgba(255,117,31,0.45)]
              "
            >
              Book a call
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
