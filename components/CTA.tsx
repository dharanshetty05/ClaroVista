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
    <section className="bg-[#fefbf8] py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm uppercase tracking-wide text-[#26201b]/60">
            Free website review
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#26201b] leading-snug">
            If your website isn’t bringing enquiries, this is exactly what we
            fix. Let’s take a look at yours.
          </h2>

          <p className="mt-6 text-lg text-[#6f6761]">
            Not ready to commit? Send me your website. I’ll share a quick
            3-point review of what might be costing you enquiries or bookings.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
            <button
              onClick={() => scrollToSection("contact")}
              className="
                inline-flex items-center justify-center
                rounded-full
                px-10 py-4
                text-base font-medium text-black
                bg-gradient-to-r from-[#ff751f] to-[#ff9a4d]
                shadow-[0_0_28px_rgba(255,117,31,0.45)]
                transition hover:shadow-[0_0_40px_rgba(255,117,31,0.6)]
              "
            >
              Get a free website review
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="
                inline-flex items-center gap-2
                text-base font-medium
                text-[#26201b]
                transition hover:opacity-70
              "
            >
              View selected work <span aria-hidden>→</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
