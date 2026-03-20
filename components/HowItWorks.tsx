"use client"

import { motion } from "framer-motion"

const steps = [
  {
    step: "01",
    title: "Discovery call (30-45 min)",
    outcome: "We ask the questions most designers skip.",
    description:
      "We talk through what your business does, who your customers are, and what is stopping people from reaching out.",
  },
  {
    step: "02",
    title: "Wireframe + design (3-5 days)",
    outcome: "You see the structure before visuals.",
    description:
      "We map out page flow first so you can see exactly how the site will guide a visitor before a single colour is chosen.",
  },
  {
    step: "03",
    title: "Build + launch (5-7 days)",
    outcome: "Clean development with a clear handover.",
    description:
      "You get the live site plus a handover call so you know exactly what you have and how to update it.",
  },
]

export default function HowItWorks() {
  return (
    <section id="process" className="bg-[#fefbf8] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-wide text-[#26201b]/60">
            How it works
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#26201b] leading-snug">
            A simple 3-step process to get your site live quickly.
          </h2>

          <p className="mt-6 text-[#6f6761] max-w-2xl">
            Clear scope, direct communication, and fast execution from first call to launch.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              className="rounded-2xl border border-[#26201b]/10 bg-white p-8 hover:border-[#ff751f]/40 transition-colors"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#ff751f]">
                Step {step.step}
              </p>

              <h3 className="mt-3 text-xl font-bold text-[#26201b] leading-snug">
                {step.title}
              </h3>

              <p className="mt-4 text-sm font-semibold text-[#26201b]/80">
                {step.outcome}
              </p>

              <p className="mt-2 text-sm text-[#6f6761] leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Reassurance */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center text-sm text-[#26201b]/60"
        >
          No long retainers and no confusing handoffs. Just a clear path to a conversion-focused website.
        </motion.p>
      </div>
    </section>
  )
}
