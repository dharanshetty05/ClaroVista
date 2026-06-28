"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ArrowRight } from "lucide-react"

// ─── Navigation links ─────────────────────────────────────────────────────────
const navLinks = [
  { label: "Why sites lose enquiries", id: "problem" },
  { label: "How it works", id: "process" },
  { label: "Results", id: "projects" },
]

const CTA_LABEL = "Get a free audit"
const CTA_ID = "contact"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // ── Scroll detection ──────────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // ── Lock body scroll when mobile menu open ────────────────────────────────
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
    setOpen(false)
  }

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 z-50 w-full
          transition-all duration-300
          ${scrolled
            ? "bg-[#fefbf8]/92 backdrop-blur-md border-b border-[#26201b]/10 shadow-[0_1px_24px_rgba(38,32,27,0.06)]"
            : "bg-[#fefbf8]/70 backdrop-blur-sm border-b border-transparent"
          }
        `}
      >
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12 xl:px-20">
          <div className="flex h-[68px] items-center justify-between gap-8">

            {/* ── LOGO ── */}
            <button
              onClick={() => scrollTo("hero")}
              className="
                shrink-0 text-[17px] font-bold tracking-tight text-[#1a1410]
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#e86a1c] focus-visible:ring-offset-2 rounded-sm
              "
              aria-label="ClaroVista — back to top"
            >
              Claro<span className="text-[#e86a1c]">Vista</span>
            </button>

            {/* ── DESKTOP NAV ── */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
              {navLinks.map(({ label, id }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="
                    text-[14px] font-medium text-[#26201b]/60
                    hover:text-[#26201b]
                    transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-[#e86a1c] focus-visible:ring-offset-2 rounded-sm
                  "
                >
                  {label}
                </button>
              ))}
            </nav>

            {/* ── DESKTOP CTA ── */}
            <button
              onClick={() => scrollTo(CTA_ID)}
              className={`
                hidden md:inline-flex items-center gap-2 shrink-0
                rounded-full px-5 py-2.5
                text-[14px] font-semibold
                transition-all duration-300
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#e86a1c] focus-visible:ring-offset-2
                ${scrolled
                  ? "bg-[#e86a1c] text-white shadow-[0_4px_20px_rgba(232,106,28,0.25)] hover:bg-[#d45e14] hover:shadow-[0_4px_24px_rgba(232,106,28,0.38)]"
                  : "bg-[#e86a1c]/10 text-[#e86a1c] hover:bg-[#e86a1c]/16"
                }
              `}
            >
              {CTA_LABEL}
              <ArrowRight size={14} className="shrink-0" />
            </button>

            {/* ── MOBILE TOGGLE ── */}
            <button
              onClick={() => setOpen(!open)}
              className="
                md:hidden p-1.5 -mr-1.5 rounded-md
                text-[#26201b]
                transition-colors hover:bg-[#26201b]/6
                focus-visible:outline-none focus-visible:ring-2
                focus-visible:ring-[#e86a1c]
              "
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-[#1a1410]/30 backdrop-blur-sm md:hidden"
              aria-hidden
              onClick={() => setOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="
                fixed top-[68px] left-0 right-0 z-50
                bg-[#fefbf8]
                border-b border-[#26201b]/10
                shadow-[0_8px_40px_rgba(26,20,16,0.12)]
                md:hidden
              "
            >
              <nav
                className="flex flex-col px-6 pt-5 pb-7 gap-1"
                aria-label="Mobile navigation"
              >
                {navLinks.map(({ label, id }, i) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.2 }}
                    onClick={() => scrollTo(id)}
                    className="
                      text-left text-[16px] font-medium text-[#26201b]
                      py-3.5 border-b border-[#26201b]/8
                      hover:text-[#e86a1c] transition-colors duration-150
                      focus-visible:outline-none focus-visible:text-[#e86a1c]
                    "
                  >
                    {label}
                  </motion.button>
                ))}

                {/* Mobile CTA */}
                <motion.button
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.05 + 0.04, duration: 0.22 }}
                  onClick={() => scrollTo(CTA_ID)}
                  className="
                    mt-5 w-full inline-flex items-center justify-center gap-2
                    rounded-full px-6 py-3.5
                    text-[15px] font-semibold text-white
                    bg-[#e86a1c]
                    shadow-[0_4px_24px_rgba(232,106,28,0.28)]
                    hover:bg-[#d45e14] transition-colors duration-200
                    focus-visible:outline-none focus-visible:ring-2
                    focus-visible:ring-[#e86a1c] focus-visible:ring-offset-2
                  "
                >
                  {CTA_LABEL}
                  <ArrowRight size={16} />
                </motion.button>

                {/* Trust micro-line */}
                <p className="mt-3 text-center text-[13px] text-[#26201b]/45">
                  Free. No commitment. Results in weeks.
                </p>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}