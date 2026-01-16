"use client"

import { motion } from "framer-motion"

const steps = [
  {
    step: "01",
    title: "Understand the business",
    description:
      "We get clear on what you offer, who it’s for, and where people hesitate before taking action.",
  },
  {
    step: "02",
    title: "Design for decisions",
    description:
      "We structure the website to answer questions in the right order and guide visitors naturally.",
  },
  {
    step: "03",
    title: "Build, launch, refine",
    description:
      "A fast, clean build that’s ready to convert — with no unnecessary complexity.",
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
            <span className="text-[#ff751f]">No unnecessary steps.</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="mt-16 grid gap-12 sm:grid-cols-3">
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
              className="relative"
            >
              {/* Step number */}
              <p className="text-sm font-medium text-[#ff751f]">
                {step.step}
              </p>

              {/* Divider */}
              <div className="mt-4 h-px w-12 bg-[#26201b]/20" />

              <h3 className="mt-6 text-xl font-medium text-[#26201b]">
                {step.title}
              </h3>

              <p className="mt-4 text-[#6f6761]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
