"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// ─── Steps ────────────────────────────────────────────────────────────────────
// Rewritten to reflect the audit/fix process, not a web-build workflow.
// Each outcome is what the CLIENT BUSINESS gains — not what ClaroVista does.
const steps = [
  {
    number: "01",
    title: "You share your website",
    outcome: "We start immediately — no long intake forms, no discovery calls before value.",
    detail:
      "Send us your URL and a one-line description of your business. That's all we need to begin the audit.",
  },
  {
    number: "02",
    title: "We audit every conversion point",
    outcome: "Every place a visitor could hesitate, lose confidence, or leave — identified.",
    detail:
      "We review your messaging clarity, trust signals, page flow, and CTA paths against the same framework used across all client sites.",
  },
  {
    number: "03",
    title: "You receive specific findings",
    outcome: "Not a general report — a prioritised list of what's costing you enquiries and why.",
    detail:
      "Each gap is named, explained, and ranked by conversion impact. You know exactly what to fix first for the fastest result.",
  },
  {
    number: "04",
    title: "We fix it — or you do",
    outcome: "Your choice: implement the fixes yourself, or have us do it. Either way, you have the roadmap.",
    detail:
      "Some clients act on the findings independently. Others work with us to implement. The audit is valuable either way.",
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1], delay },
})

export default function HowItWorks() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="process" className="bg-[#fefbf8] py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 xl:px-20">

        {/* ── HEADER ── */}
        <motion.div {...fadeUp(0)} className="max-w-[640px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#e86a1c]" aria-hidden />
            <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#e86a1c]">
              How the audit works
            </p>
          </div>

          <h2 className="
            mt-6
            text-3xl sm:text-4xl lg:text-[50px]
            font-bold leading-[1.08] tracking-tight
            text-[#1a1410]
          ">
            From "something's off"
            <span className="block text-[#e86a1c]">to a specific fix plan.</span>
          </h2>

          <p className="mt-6 text-lg sm:text-[19px] leading-relaxed text-[#26201b]/65">
            The audit process is designed to be fast, low-effort on your end,
            and specific enough to act on — not a generic scorecard.
          </p>
        </motion.div>

        {/* ── STEPS ── */}
        <div className="mt-16 sm:mt-20 grid gap-0 lg:grid-cols-2 lg:gap-x-20">
          {steps.map(({ number, title, outcome, detail }, i) => (
            <motion.div
              key={number}
              {...fadeUp(0.1 + i * 0.09)}
              className={`
                relative flex gap-6
                py-9
                border-b border-[#26201b]/8
                ${i % 2 === 0 ? "lg:border-r lg:border-[#26201b]/8 lg:pr-20" : "lg:pl-0"}
                ${i >= steps.length - 2 ? "lg:border-b-0" : ""}
                ${i === steps.length - 1 ? "border-b-0" : ""}
              `}
            >
              {/* Step number — watermark */}
              <div className="shrink-0 w-14 pt-0.5">
                <span className="
                  block
                  text-[38px] font-black leading-none tracking-tighter
                  text-[#e86a1c]/15
                  select-none
                ">
                  {number}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="
                  text-[18px] sm:text-[20px]
                  font-semibold leading-snug tracking-tight
                  text-[#1a1410]
                ">
                  {title}
                </h3>
                <p className="
                  text-[15px] font-medium leading-relaxed
                  text-[#26201b]
                ">
                  {outcome}
                </p>
                <p className="
                  text-[14px] sm:text-[15px] leading-relaxed
                  text-[#26201b]/55
                ">
                  {detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CLOSING OUTCOME + CTA ── */}
        <motion.div
          {...fadeUp(0.38)}
          className="
            mt-16 sm:mt-20
            flex flex-col sm:flex-row
            items-start sm:items-center
            justify-between
            gap-8
            rounded-2xl
            bg-[#f5ede5]
            px-8 sm:px-10 py-9
          "
        >
          <div className="max-w-[480px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#e86a1c]">
              What you leave with
            </p>
            <p className="
              mt-3
              text-[20px] sm:text-[23px]
              font-semibold leading-snug tracking-tight
              text-[#1a1410]
            ">
              A prioritised action plan — not a vague recommendation. Specific gaps, specific fixes, ranked by impact.
            </p>
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="
              group shrink-0
              inline-flex items-center gap-3
              rounded-full px-7 py-3.5
              text-[15px] font-semibold
              text-white
              bg-[#e86a1c]
              shadow-[0_4px_20px_rgba(232,106,28,0.22)]
              hover:bg-[#d45e14]
              hover:shadow-[0_6px_28px_rgba(232,106,28,0.34)]
              transition-all duration-200
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#e86a1c]
              focus-visible:ring-offset-2
            "
          >
            Start with a free audit
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
        </motion.div>

      </div>
    </section>
  )
}