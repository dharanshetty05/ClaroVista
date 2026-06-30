"use client"

import { motion } from "framer-motion"
import { ArrowRight, Send, Search, FileCheck2 } from "lucide-react"

// ─── Process steps ─────────────────────────────────────────────────────────
const steps = [
  { icon: Send, label: "Send your website" },
  { icon: Search, label: "We audit every conversion point" },
  { icon: FileCheck2, label: "You get specific findings — free" },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1], delay },
})

export default function CTA() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section className="bg-[#fefbf8] py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 xl:px-20">
        <div className="mx-auto max-w-[680px] text-center">

          {/* ── EYEBROW ── */}
          <motion.div {...fadeUp(0)} className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#e86a1c]" aria-hidden />
            <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#e86a1c]">
              Ready when you are
            </p>
            <span className="h-px w-8 bg-[#e86a1c]" aria-hidden />
          </motion.div>

          {/* ── HEADLINE ── */}
          <motion.h2
            {...fadeUp(0.08)}
            className="
              mt-6
              text-3xl sm:text-4xl lg:text-[52px]
              font-bold leading-[1.08] tracking-tight
              text-[#1a1410]
            "
          >
            Find out what your website is
            <span className="block text-[#e86a1c]">costing you in enquiries.</span>
          </motion.h2>

          {/* ── SUBTEXT ── */}
          <motion.p
            {...fadeUp(0.16)}
            className="mt-6 text-lg sm:text-[19px] leading-relaxed text-[#26201b]/65"
          >
            Send us your site. We'll show you exactly where visitors hesitate
            and leave — with specific, actionable fixes. No sales pitch, no obligation.
          </motion.p>

          {/* ── PROCESS STRIP ── */}
          <motion.div
            {...fadeUp(0.24)}
            className="
              mt-12
              flex flex-col sm:flex-row
              items-stretch sm:items-center
              justify-center
              gap-3 sm:gap-2
            "
          >
            {steps.map(({ icon: Icon, label }, i) => (
              <div key={label} className="flex items-center gap-2">
                <div className="
                  flex items-center gap-2.5
                  rounded-full
                  bg-white
                  ring-1 ring-[#26201b]/8
                  px-4 py-2.5
                ">
                  <Icon size={15} className="text-[#e86a1c] shrink-0" />
                  <span className="text-[13px] font-medium text-[#26201b]/75 whitespace-nowrap">
                    {label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight
                    size={14}
                    className="hidden sm:block text-[#26201b]/25 shrink-0"
                    aria-hidden
                  />
                )}
              </div>
            ))}
          </motion.div>

          {/* ── CTA ── */}
          <motion.div {...fadeUp(0.32)} className="mt-12">
            <button
              onClick={() => scrollTo("contact")}
              className="
                group
                inline-flex items-center gap-3
                rounded-full
                px-11 py-[18px]
                text-base sm:text-lg font-semibold
                text-white
                bg-[#e86a1c]
                shadow-[0_8px_32px_rgba(232,106,28,0.3)]
                transition-all duration-300
                hover:bg-[#d45e14]
                hover:shadow-[0_10px_36px_rgba(232,106,28,0.4)]
                hover:scale-[1.015]
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[#e86a1c]
                focus-visible:ring-offset-2
              "
            >
              Get your free conversion audit
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* Micro-trust line */}
            <p className="mt-5 text-sm text-[#26201b]/45">
              Free · Takes 5 minutes to request · No pressure, no obligation
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}