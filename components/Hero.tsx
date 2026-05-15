"use client"

import { motion } from "framer-motion"

const industries = [
  "Clinics & Wellness Practices",
  "Real Estate Brands",
  "Financial Advisors",
  "Boutique Hotels & Homestays",
  "Interior Design Studios",
  "Restaurants & Cafés",
  "Professional Consultants",
  "Salons & Beauty Studios",
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
    <section
      id="hero"
      className="bg-[#fefbf8] min-h-screen flex items-center"
    >
      <div className="mx-auto max-w-[1440px] w-full px-6 lg:px-12 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-16 sm:gap-20"
        >
          {/* TEXT */}
          <div className="text-center lg:text-left max-w-[980px]">
            {/* POSITIONING LABEL */}
            <p
              className="
                text-sm sm:text-base
                uppercase tracking-[0.18em]
                text-[#26201b]/60
                font-medium
              "
            >
              Websites designed for service businesses
            </p>

            {/* HEADLINE */}
            <h1
              className="
                mt-6
                text-4xl sm:text-5xl md:text-6xl lg:text-[78px]
                font-bold tracking-tight leading-[1.02]
                text-[#26201b]
                max-w-[1100px]
              "
            >
              <span className="block">
                Websites that make your business
              </span>

              <span className="block text-[#e86a1c]">
                feel more trustworthy
              </span>
            </h1>

            {/* SUBHEADLINE */}
            <p
              className="
                mt-8
                max-w-2xl
                text-lg sm:text-xl md:text-2xl
                leading-relaxed
                text-[#26201b]/80
                mx-auto lg:mx-0
              "
            >
              ClaroVista designs modern websites that help visitors understand
              your business, feel confident in your service, and take the next
              step without hesitation.
            </p>

            {/* CTA */}
            <div
              className="
                mt-12 sm:mt-14
                flex flex-col sm:flex-row
                gap-5
                items-center
                justify-center lg:justify-start
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
                Get a free website review
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
          </div>

          {/* INDUSTRY STRIP */}
          <div className="relative overflow-hidden">
            {/* LEFT FADE */}
            <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-[#fefbf8] to-transparent z-10" />

            {/* RIGHT FADE */}
            <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-[#fefbf8] to-transparent z-10" />

            <motion.div
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              }}
              className="flex whitespace-nowrap gap-12 sm:gap-20"
            >
              {[...industries, ...industries].map((item, i) => (
                <span
                  key={i}
                  className="
                    text-sm sm:text-[15px]
                    uppercase
                    tracking-[0.16em]
                    font-medium
                    text-[#26201b]/45
                  "
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