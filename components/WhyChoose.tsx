"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Focus,
  TrendingUp,
  UserCheck,
  Target,
} from "lucide-react"

const reasons = [
  {
    title: "Clarity-first approach",
    short:
      "We reduce confusion and guide decisions instead of piling on unnecessary sections or distractions.",
    long:
      "Most websites try to say everything at once. We focus on what matters most at each stage of a visitor’s decision so they always know where they are, what’s important, and what to do next.",
    icon: Focus,
  },
  {
    title: "Outcome over aesthetics",
    short:
      "Every design choice exists to drive action, not just to look impressive in a screenshot.",
    long:
      "Visual polish is meaningless without intent. Layout, copy, hierarchy, and flow are all designed to support a specific action, whether that’s an enquiry, a booking, or a conversation.",
    icon: TrendingUp,
  },
  {
    title: "Direct collaboration",
    short:
      "You work directly with the person building your website. No hand-offs or layers.",
    long:
      "This keeps communication clear, decisions fast, and outcomes aligned. What you discuss is what gets built, without interpretation gaps or delays.",
    icon: UserCheck,
  },
  {
    title: "Focused, not generic",
    short:
      "We don’t try to do everything. We build conversion-focused websites, and we do them well.",
    long:
      "Instead of stretching across services, we specialise. This allows us to refine our process, patterns, and judgment around what actually converts.",
    icon: Target,
  },
]

export default function WhyChoose() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="why" className="bg-[#fefbf8] py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-wide text-[#26201b]/60">
            Why ClaroVista Digital
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#26201b]">
            Built for businesses that value{" "}
            <span className="text-[#ff751f]">clarity</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="
                  relative rounded-2xl
                  bg-white
                  p-7
                  ring-1 ring-[#26201b]/10
                  transition
                "
              >
                {/* Icon */}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#ff751f]/10 text-[#ff751f]">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-[#26201b]">
                  {reason.title}
                </h3>

                {/* Short description */}
                <p className="mt-3 text-[#6f6761] leading-relaxed">
                  {reason.short}
                </p>

                {/* Learn more */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="mt-4 text-sm font-medium text-[#ff751f] hover:underline"
                >
                  {isOpen ? "Show less" : "Learn more →"}
                </button>

                {/* Expanded content */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="mt-4 text-sm text-[#6f6761] leading-relaxed overflow-hidden"
                    >
                      {reason.long}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
