"use client"

import { motion } from "framer-motion"

export default function BrandSlider() {
  return (
    <section className="bg-[#fefbf8] py-20 overflow-hidden">
      <div className="relative">
        {/* Fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fefbf8] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fefbf8] to-transparent z-10" />

        {/* Slider */}
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "linear",
          }}
          className="flex gap-24 whitespace-nowrap"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="
                text-4xl sm:text-5xl md:text-6xl
                font-bold
                tracking-tight
                text-[#26201b]/15
              "
            >
              ClaroVista Digital
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
