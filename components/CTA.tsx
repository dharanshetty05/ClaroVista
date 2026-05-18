"use client"

import { motion } from "framer-motion"

export default function CTA() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <section className="bg-[#fefbf8] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* LABEL */}
          <p
            className="
              text-sm
              uppercase
              tracking-[0.18em]
              text-[#26201b]/55
              font-medium
            "
          >
            Let’s talk
          </p>

          {/* HEADLINE */}
          <h2
            className="
              mt-5
              text-3xl sm:text-4xl lg:text-5xl
              font-bold
              leading-[1.12]
              tracking-tight
              text-[#26201b]
            "
          >
            Your website shapes how people
            <span className="block text-[#e86a1c]">
              perceive your business.
            </span>
          </h2>

          {/* SUBTEXT */}
          <p
            className="
              mt-7
              text-lg sm:text-xl
              leading-relaxed
              text-[#6f6761]
            "
          >
            If your website no longer reflects the quality of your business,
            we can talk through what’s working, what’s creating hesitation,
            and what could be improved.
          </p>

          {/* BUTTONS */}
          <div
            className="
              mt-12
              flex flex-col sm:flex-row
              justify-center
              items-center
              gap-5
            "
          >
            {/* PRIMARY CTA */}
            <button
              onClick={() => scrollToSection("contact")}
              className="
                inline-flex items-center justify-center
                rounded-full
                px-10 py-4
                text-base sm:text-lg
                font-medium
                text-[#1f1a16]
                bg-[#f28a45]
                transition-all duration-300
                hover:bg-[#e57d37]
                hover:scale-[1.01]
                shadow-[0_8px_30px_rgba(242,138,69,0.18)]
              "
            >
              Book a call
            </button>

            {/* SECONDARY CTA */}
            <button
              onClick={() => scrollToSection("projects")}
              className="
                inline-flex items-center gap-2
                text-base sm:text-lg
                font-medium
                text-[#26201b]
                transition-opacity duration-300
                hover:opacity-65
              "
            >
              View selected work
              <span aria-hidden>→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}