"use client"

import { motion } from "framer-motion"

const steps = [
  {
    step: "01",
    title: "Get clarity first",
    outcome: "We remove confusion before design even begins.",
    description:
      "We get clear on what you offer, who it’s for, and where visitors hesitate before taking action.",
  },
  {
    step: "02",
    title: "Design for action",
    outcome: "Every section answers the right question at the right time.",
    description:
      "Your website is structured to guide visitors logically, not overwhelm them with information.",
  },
  {
    step: "03",
    title: "Build, launch, improve",
    outcome: "A fast, conversion-ready site without unnecessary complexity.",
    description:
      "Clean development, quick launch, and refinements based on real behavior.",
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
            A clear process.{" "}
            <span className="text-[#ff751f]">Built to move fast.</span>
          </h2>

          <p className="mt-6 text-[#6f6761] max-w-xl">
            No bloated workflows or endless revisions. Just a clear, focused path to launch.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 grid gap-10 sm:grid-cols-3">
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
              className="rounded-2xl border border-[#26201b]/10 bg-[#fefbf8] p-8 hover:border-[#ff751f]/40 transition-colors"
            >
              <p className="text-sm font-medium text-[#ff751f]">
                {step.step}
              </p>

              <h3 className="mt-4 text-xl font-medium text-[#26201b]">
                {step.title}
              </h3>

              <p className="mt-3 text-sm font-medium text-[#26201b]/70">
                {step.outcome}
              </p>

              <p className="mt-4 text-[#6f6761]">
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
          className="mt-16 text-center text-sm text-[#26201b]/60"
        >
          No long retainers. No confusing handoffs. Just a clear path to a
          conversion-focused website.
        </motion.p>
      </div>
    </section>
  )
}
