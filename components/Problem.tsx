"use client"

import { motion } from "framer-motion"
import {
  EyeOff,
  ShieldAlert,
  MousePointerClick,
} from "lucide-react"

const problems = [
  {
    icon: EyeOff,
    title: "Visitors can’t quickly understand the business",
    description:
      "If the first few seconds feel unclear, people hesitate instead of exploring further.",
  },
  {
    icon: ShieldAlert,
    title: "Important trust signals are missing",
    description:
      "Visitors look for reassurance before reaching out. Missing details create uncertainty.",
  },
  {
    icon: MousePointerClick,
    title: "Taking the next step feels unclear",
    description:
      "Even interested visitors leave when the path to enquire feels confusing or effort-heavy.",
  },
]

export default function Problem() {
  return (
    <section
      id="problem"
      className="bg-[#fefbf8] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <p
            className="
              text-sm
              uppercase
              tracking-[0.18em]
              text-[#26201b]/55
              font-medium
            "
          >
            Why visitors leave
          </p>

          <h2
            className="
              mt-5
              text-3xl sm:text-4xl lg:text-5xl
              font-bold
              leading-[1.12]
              tracking-tight
              text-[#26201b]
              max-w-4xl
            "
          >
            Most websites don’t lose visitors immediately.
            <span className="block text-[#e86a1c]">
              They lose confidence gradually.
            </span>
          </h2>

          <p
            className="
              mt-7
              max-w-3xl
              text-lg sm:text-xl
              leading-relaxed
              text-[#6f6761]
            "
          >
            Small moments of uncertainty add up quickly. When visitors
            struggle to understand your business, trust your expertise,
            or know what to do next, they usually leave quietly.
          </p>
        </motion.div>

        {/* PROBLEM CARDS */}
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="
                rounded-2xl
                bg-white/90
                p-7
                ring-1 ring-[#26201b]/8
                transition-colors duration-300
                hover:ring-[#26201b]/14
              "
            >
              <div className="flex items-start gap-4">
                <div
                  className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-full
                    bg-[#f3e6dd]
                  "
                >
                  <item.icon className="h-5 w-5 text-[#d96a24]" />
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      font-medium
                      leading-snug
                      text-[#26201b]
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      leading-relaxed
                      text-[#6f6761]
                    "
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CLOSING INSIGHT */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.15,
          }}
          className="mt-28 max-w-3xl"
        >
          <p className="text-lg text-[#6f6761]">
            Visitors rarely leave because they aren’t interested.
          </p>

          <p
            className="
              mt-4
              text-2xl sm:text-3xl
              font-medium
              leading-snug
              tracking-tight
              text-[#26201b]
            "
          >
            They leave because deciding feels harder than leaving.
          </p>
        </motion.div>
      </div>
    </section>
  )
}