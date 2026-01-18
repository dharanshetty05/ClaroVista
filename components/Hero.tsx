"use client"

import { motion } from "framer-motion"

const industries = [
  "Cafés & Restaurants",
  "Professional Portfolios",
  "Real Estate Brands",
  "Clinics & Wellness Practices",
  "Boutique Hotels & Homestays",
  "E-commerce Brands",
  "Financial Advisors",
  "Gyms & Fitness Studios",
  "Photographers",
  "Salons & Studios",
  "Business Coaches",
]

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <section id="hero" className="bg-[#fefbf8] min-h-screen flex items-center">
      <div className="mx-auto max-w-[1440px] px-6 xl:pl-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-12 sm:gap-16"
        >
          {/* TEXT */}
          <div className="text-center lg:text-left">
            {/* HEADLINE */}
            <h1
              className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-bold tracking-tight leading-[1.08]
                text-[#26201b]
              "
            >
              <span
                className="block lg:whitespace-nowrap"
                style={{
                  textShadow:
                    "0 0 22px rgba(38,32,27,0.16), 0 0 44px rgba(38,32,27,0.08)",
                }}
              >
                Revenue-focused conversion websites
              </span>

              <span
                className="block lg:whitespace-nowrap text-[#ff751f]"
                style={{
                  textShadow:
                    "0 0 34px rgba(255,117,31,0.38), 0 0 68px rgba(255,117,31,0.26)",
                }}
              >
                for growing businesses
              </span>
            </h1>

            {/* SUBHEADLINE */}
            <p className="mt-6 sm:mt-8 mx-auto lg:mx-0 max-w-xl sm:max-w-2xl text-lg sm:text-xl md:text-2xl text-[#26201b]">
              We craft high-performance websites that turn visitors into enquiries, customers, and revenue.
            </p>

            {/* CTAs */}
            <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start">
              {/* Primary CTA */}
              <button
                onClick={() => scrollToSection("contact")}
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  px-10 py-4
                  text-base sm:text-lg font-medium text-black
                  bg-gradient-to-r from-[#ff751f] to-[#ff9a4d]
                  shadow-[0_0_24px_rgba(255,117,31,0.45)]
                  transition hover:shadow-[0_0_36px_rgba(255,117,31,0.6)]
                "
              >
                Book a call
              </button>

              {/* Secondary CTA */}
              <button
                onClick={() => scrollToSection("projects")}
                className="
                  inline-flex items-center gap-2
                  text-base sm:text-lg font-medium
                  text-[#26201b]
                  transition hover:opacity-70
                "
              >
                Explore our work
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>

          {/* SLIDER */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#fefbf8] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#fefbf8] to-transparent z-10" />
            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
              className="flex gap-10 sm:gap-16 whitespace-nowrap"
            >
              {[...industries, ...industries].map((item, i) => (
                <span
                  key={i}
                  className="
                    text-sm sm:text-base
                    uppercase tracking-[0.18em]
                    font-medium
                    text-[#26201b]/80
                  "
                  style={{
                    textShadow: "0 0 12px rgba(255,117,31,0.12)",
                  }}
                >
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
