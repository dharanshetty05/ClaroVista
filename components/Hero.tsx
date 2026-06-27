"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle2 } from "lucide-react"

const stats = [
  { value: "3.2×", label: "Average enquiry lift within 60 days" },
  { value: "94%", label: "Of audited sites have at least one critical gap" },
  { value: "11 days", label: "Median time from audit to first fix deployed" },
]

// ─── Objection killers ───────────────────────────────────────────────────────
const trustLines = [
  "No redesign required",
  "Free audit, no commitment",
  "Results in weeks, not months",
]

// ─── Animation variants ──────────────────────────────────────────────────────
import type { Variants } from "framer-motion";

const fadeUp = (delay = 0): Variants => ({
  initial: { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      delay,
    },
  },
});

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section
      id="hero"
      className="relative bg-[#fefbf8] min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Subtle background texture (non-distracting) ── */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 72% 55% at 65% 40%, rgba(232,106,28,0.055) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] w-full px-6 lg:px-12 xl:px-20 py-24 lg:py-0">
        <div className="flex flex-col gap-12 lg:gap-14">

          {/* ── EYEBROW ── */}
          <motion.div {...fadeUp(0)} className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#e86a1c]" aria-hidden />
            <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#e86a1c]">
              Conversion optimisation for service businesses
            </p>
          </motion.div>

          {/* ── HEADLINE + SUB ── */}
          <div className="max-w-[1060px]">
            <motion.h1
              {...fadeUp(0.08)}
              className="
                text-[42px] sm:text-5xl md:text-6xl lg:text-[70px]
                font-bold tracking-tight leading-[1.04]
                text-[#1a1410]
              "
            >
              Your website is getting visitors.
              <br />
              <span className="text-[#e86a1c]">Most of them leave without enquiring.</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="
                mt-7
                text-lg sm:text-xl md:text-[22px]
                leading-relaxed
                text-[#26201b]/75
                max-w-[620px]
              "
            >
              ClaroVista identifies exactly where your website loses enquiries — and
              fixes it. No guesswork. No full redesign. Just the specific changes that
              move visitors from browsing to booking.
            </motion.p>
          </div>

          {/* ── PROOF STAT BAR ── */}
          <motion.div
            {...fadeUp(0.24)}
            className="
              flex flex-col sm:flex-row
              gap-8 sm:gap-0
              sm:divide-x sm:divide-[#26201b]/12
            "
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="sm:pr-12 last:pr-0 sm:pl-12 first:pl-0">
                <p className="text-3xl sm:text-4xl font-bold text-[#1a1410] tracking-tight">
                  {value}
                </p>
                <p className="mt-1.5 text-sm text-[#26201b]/60 leading-snug max-w-[180px]">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* ── CTA ROW ── */}
          <motion.div
            {...fadeUp(0.32)}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
          >
            {/* PRIMARY */}
            <button
              onClick={() => scrollTo("contact")}
              className="
                group
                inline-flex items-center gap-3
                rounded-full
                px-9 py-4
                text-base sm:text-[17px] font-semibold
                text-white
                bg-[#e86a1c]
                shadow-[0_6px_28px_rgba(232,106,28,0.28)]
                transition-all duration-300
                hover:bg-[#d45e14]
                hover:shadow-[0_8px_32px_rgba(232,106,28,0.38)]
                hover:scale-[1.015]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#e86a1c]
                focus-visible:ring-offset-2
              "
            >
              Get your free site audit
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* SECONDARY */}
            <button
              onClick={() => scrollTo("projects")}
              className="
                inline-flex items-center gap-2
                text-base sm:text-[17px] font-medium
                text-[#26201b]
                underline underline-offset-4 decoration-[#26201b]/30
                transition-all duration-200
                hover:decoration-[#26201b]/70
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#26201b]
                focus-visible:ring-offset-2
                rounded-sm
              "
            >
              See client results
            </button>
          </motion.div>

          {/* ── TRUST / OBJECTION KILLERS ── */}
          <motion.div
            {...fadeUp(0.4)}
            className="flex flex-wrap gap-x-8 gap-y-3"
          >
            {trustLines.map((line) => (
              <span
                key={line}
                className="inline-flex items-center gap-2 text-sm text-[#26201b]/60"
              >
                <CheckCircle2 size={15} className="text-[#e86a1c] shrink-0" />
                {line}
              </span>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}