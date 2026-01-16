"use client"

import { motion } from "framer-motion"
import { EyeOff, HelpCircle, MousePointerClick } from "lucide-react"

const problems = [
  {
    icon: EyeOff,
    title: "Unclear first impression",
    description:
      "Visitors don’t instantly understand what you offer or why it matters to them.",
  },
  {
    icon: HelpCircle,
    title: "Too many unanswered questions",
    description:
      "Pricing, process, credibility, next steps — all left to guesswork.",
  },
  {
    icon: MousePointerClick,
    title: "No clear action to take",
    description:
      "People scroll, hesitate, and leave without ever engaging.",
  },
]

export default function Problem() {
  return (
    <section id="problem" className="bg-[#fefbf8] py-24 sm:py-32">
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
            The problem
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#26201b] leading-snug">
            Traffic isn’t the issue.{" "}
            <span className="text-[#ff751f]">Clarity is.</span>
          </h2>
        </motion.div>

        {/* Problem cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.1,
                type: "spring",
                stiffness: 180,
                damping: 20,
              }}
              className="
                group
                rounded-2xl
                bg-white
                p-6
                ring-1 ring-[#26201b]/10
                transition
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff751f]/10">
                  <item.icon className="h-5 w-5 text-[#ff751f] transition group-hover:scale-105" />
                </div>

                <h3 className="text-lg font-medium text-[#26201b]">
                  {item.title}
                </h3>
              </div>

              <p className="mt-4 text-[#6f6761]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing insight */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-20 max-w-2xl"
        >
          <p className="text-lg text-[#6f6761]">
            Most visitors don’t leave because they aren’t interested.
          </p>

          <p className="mt-3 text-xl font-medium text-[#26201b]">
            They leave because deciding feels harder than it should.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
