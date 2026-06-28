"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

// ─── Problem items ─────────────────────────────────────────────────────────
// Each item: a specific scenario (not a category) + a single sharp consequence
const problems = [
  {
    scenario: "Your value isn't clear in the first 8 seconds",
    consequence:
      "Visitors don't scroll to learn more — they leave and try a competitor who explained themselves faster.",
  },
  {
    scenario: "Trust signals are absent or buried",
    consequence:
      "People want proof before they pick up the phone. Without it, interest stalls and the enquiry never comes.",
  },
  {
    scenario: "The next step requires effort to find",
    consequence:
      "Even motivated visitors won't search for your contact form. Friction at the finish line kills warm leads.",
  },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Problem() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="problem" className="bg-[#fefbf8] py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 xl:px-20">

        {/* ── HEADER ── */}
        <motion.div {...fadeUp(0)} className="max-w-[720px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#e86a1c]" aria-hidden />
            <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#e86a1c]">
              The conversion gap
            </p>
          </div>

          <h2 className="
            mt-6
            text-3xl sm:text-4xl lg:text-[52px]
            font-bold leading-relaxed tracking-tight
            text-[#1a1410]
          ">
            Traffic isn't your problem.
            <span className="block text-[#e86a1c] mt-1">
              Your website is losing the enquiries it should be closing.
            </span>
          </h2>

          <p className="mt-7 text-lg sm:text-[19px] leading-relaxed text-[#26201b]/65 max-w-[580px]">
            Most service businesses have more than enough visitors. The problem
            is the website — it creates hesitation at exactly the moments when
            visitors should be reaching out.
          </p>
        </motion.div>

        {/* ── DIAGNOSTIC LIST ── */}
        <div className="mt-16 sm:mt-20 flex flex-col gap-0">
          {problems.map(({ scenario, consequence }, i) => (
            <motion.div
              key={scenario}
              {...fadeUp(0.1 + i * 0.1)}
              className="
                group
                flex gap-7
                py-9
                border-b border-[#26201b]/8
                first:border-t first:border-[#26201b]/8
              "
            >
              {/* Index marker */}
              <div className="shrink-0 pt-0.5">
                <span className="
                  block w-7 h-7
                  rounded-full
                  text-xs font-bold
                  text-[#e86a1c]
                  bg-[#e86a1c]/10
                  flex items-center justify-center
                  select-none
                ">
                  {i + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-2.5 lg:flex-row lg:gap-16 lg:items-start">
                <h3 className="
                  text-[18px] sm:text-[20px] font-semibold
                  leading-snug tracking-tight
                  text-[#1a1410]
                  lg:w-[340px] lg:shrink-0
                ">
                  {scenario}
                </h3>
                <p className="
                  text-[16px] sm:text-[17px]
                  leading-relaxed
                  text-[#26201b]/60
                  lg:max-w-[440px]
                ">
                  {consequence}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── CLOSING PIVOT ── */}
        <motion.div
          {...fadeUp(0.42)}
          className="
            mt-16 sm:mt-20
            flex flex-col sm:flex-row
            items-start sm:items-center
            justify-between
            gap-8
            rounded-2xl
            bg-[#1a1410]
            px-8 sm:px-10 py-9 sm:py-10
          "
        >
          <div>
            <p className="text-[13px] uppercase tracking-[0.18em] font-semibold text-[#e86a1c]">
              The pattern is consistent
            </p>
            <p className="
              mt-3
              text-[22px] sm:text-[26px]
              font-semibold leading-snug tracking-tight
              text-white
              max-w-[480px]
            ">
              94% of audited sites have at least one of these gaps. Usually more than one.
            </p>
          </div>

          <button
            onClick={() => scrollTo("process")}
            className="
              group shrink-0
              inline-flex items-center gap-3
              rounded-full px-7 py-3.5
              text-[15px] font-semibold
              text-[#1a1410]
              bg-white
              hover:bg-[#f5ede5]
              transition-colors duration-200
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              focus-visible:ring-offset-2
              focus-visible:ring-offset-[#1a1410]
            "
          >
            See how we find them
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