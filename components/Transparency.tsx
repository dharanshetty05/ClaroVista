"use client"

import { motion } from "framer-motion"

export default function Transparency() {
  return (
    <section className="bg-[#fefbf8] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl bg-white ring-1 ring-[#26201b]/10 p-7 sm:p-8"
        >
          <p className="text-sm uppercase tracking-wide text-[#26201b]/60">
            Transparency
          </p>
          <p className="mt-3 text-[#26201b] leading-relaxed">
            ClaroVista is a small, focused studio currently working with a limited
            number of early clients, offering reduced pricing in exchange for
            feedback and case study permission.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
