"use client"

import { motion } from "framer-motion"

const steps = [
  {
    step: "01",
    title: "Discovery & direction",
    outcome:
      "Understanding the business before designing the website.",
    description:
      "We discuss your business, audience, goals, and where visitors may currently hesitate before reaching out.",
  },
  {
    step: "02",
    title: "Planning & structure",
    outcome:
      "Creating a website flow that feels easy to understand.",
    description:
      "We define the layout, messaging structure, scope, and enquiry flow before moving into visual design.",
  },
  {
    step: "03",
    title: "Design & development",
    outcome:
      "Building a website that feels modern and trustworthy.",
    description:
      "The website is designed and developed responsively with attention to clarity, performance, and visitor confidence.",
  },
  {
    step: "04",
    title: "Launch & support",
    outcome:
      "A smooth launch with guidance after handoff.",
    description:
      "Once the website is live, support is included during the first month for updates, fixes, and questions.",
  },
]

export default function HowItWorks() {
  return (
    <section
      id="process"
      className="bg-[#fefbf8] py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
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
            The process
          </p>

          <h2
            className="
              mt-5
              text-3xl sm:text-[38px]
              font-bold
              leading-[1.15]
              tracking-tight
              text-[#26201b]
            "
          >
            A clear process from first conversation to launch.
          </h2>

          <p
            className="
              mt-6
              max-w-2xl
              text-base sm:text-lg
              leading-relaxed
              text-[#6f6761]
            "
          >
            Every project is planned around your business goals,
            visitor experience, and the actions you want people
            to take.
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
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
                border border-[#26201b]/8
                bg-white/90
                p-7
                transition-colors duration-300
                hover:border-[#26201b]/14
              "
            >
              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.14em]
                  text-[#d96a24]
                "
              >
                Step {step.step}
              </p>

              <h3
                className="
                  mt-4
                  text-lg
                  font-semibold
                  leading-snug
                  text-[#26201b]
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-4
                  text-sm
                  font-medium
                  leading-relaxed
                  text-[#26201b]/80
                "
              >
                {step.outcome}
              </p>

              <p
                className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-[#6f6761]
                "
              >
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* REASSURANCE */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.2,
          }}
          className="
            mt-16
            max-w-2xl
            text-sm
            leading-relaxed
            text-[#26201b]/55
          "
        >
          The goal is to keep the project clear, collaborative,
          and easy to move through from start to finish.
        </motion.p>
      </div>
    </section>
  )
}