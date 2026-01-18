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
    <section className="bg-[#fefbf8] py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Lead-in */}
          <p className="text-sm uppercase tracking-wide text-[#26201b]/60">
            Ready when you are
          </p>

          {/* Headline */}
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#26201b] leading-snug">
            Turn your website into a{" "}
            <span className="text-[#ff751f]">revenue-generating asset</span>
          </h2>

          {/* Supporting line */}
          <p className="mt-6 text-lg text-[#6f6761]">
            If your website isn’t actively bringing in enquiries, leads, or
            customers, it’s leaving money on the table. That’s what we fix.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
            {/* Primary */}
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
              Book a call
            </button>

            {/* Secondary */}
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

          {/* Authority micro-line */}
          <p className="mt-6 text-sm text-[#26201b]/60">
            We work with a small number of businesses at a time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
