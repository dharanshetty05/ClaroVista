"use client"

import { motion } from "framer-motion"
import {
  UserCheck,
  Focus,
  Zap,
  Compass,
} from "lucide-react"

const reasons = [
  {
    title: "No middlemen",
    short:
      "You talk directly to the person building your site. No project manager passing notes.",
    icon: UserCheck,
  },
  {
    title: "Clarity first",
    short:
      "Most agencies start designing before they’ve clarified what your visitor is deciding. We do that first.",
    icon: Focus,
  },
  {
    title: "Delivered fast",
    short:
      "Most agencies take 4-6 weeks. We deliver in ~2 weeks.",
    icon: Zap,
  },
  {
    title: "Built for service businesses",
    short:
      "We only build for service businesses, so your pages are structured around the decisions that drive enquiries and bookings.",
    icon: Compass,
  },
]

export default function WhyChoose() {
  return (
    <section id="why" className="bg-[#fefbf8] py-24 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-wide text-[#26201b]/60">
            Why ClaroVista Digital
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#26201b]">
            Why service businesses choose{" "}
            <span className="text-[#ff751f]">ClaroVista</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                whileHover={{ y: -4 }}
                className="
                  relative rounded-2xl
                  bg-white
                  p-7
                  ring-1 ring-[#26201b]/10
                  transition
                "
              >
                {/* Icon */}
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#ff751f]/10 text-[#ff751f]">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-medium text-[#26201b]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-[#6f6761] leading-relaxed">
                  {reason.short}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
