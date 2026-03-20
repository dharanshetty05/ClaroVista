"use client"

import { motion } from "framer-motion"

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-[#fefbf8] py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-wide text-[#26201b]/60">
            How We work
          </p>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#26201b]">
            You don’t need a fancy website. You need one that makes people take action.
          </h2>
          <p className="mt-6 text-[#6f6761] max-w-2xl">
            Clarity comes first. If visitors can’t quickly figure out what you
            do and what to do next, they leave. We build pages that make that
            decision feel simple.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl bg-white ring-1 ring-[#26201b]/10 p-6"
          >
            <h3 className="text-lg font-semibold text-[#26201b]">Why clarity matters</h3>
            <p className="mt-3 text-sm text-[#6f6761] leading-relaxed">
              Visitors make decisions quickly. If your message is unclear, they leave.
              We structure pages so people understand your offer in seconds.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
            className="rounded-2xl bg-white ring-1 ring-[#26201b]/10 p-6"
          >
            <h3 className="text-lg font-semibold text-[#26201b]">How we approach projects</h3>
            <p className="mt-3 text-sm text-[#6f6761] leading-relaxed">
              We start with structure and decision flow, then design and build. That
              keeps the site focused on enquiries and bookings, not visual noise.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.16 }}
            className="rounded-2xl bg-white ring-1 ring-[#26201b]/10 p-6"
          >
            <h3 className="text-lg font-semibold text-[#26201b]">What to expect</h3>
            <p className="mt-3 text-sm text-[#6f6761] leading-relaxed">
              Fast timelines, direct updates, and clear decisions. You always know what
              is happening, what is included, and what comes next.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
