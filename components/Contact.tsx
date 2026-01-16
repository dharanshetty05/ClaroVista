"use client"

import { motion } from "framer-motion"
import { Calendar, Mail, MessageSquare, ArrowRight } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="bg-[#fefbf8] py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-2xl"
        >
          {/* Header */}
          <div className="text-center">
            <p className="text-sm uppercase tracking-widest text-[#26201b]/60">
              Start here
            </p>

            <h2 className="mt-5 text-3xl sm:text-4xl font-bold text-[#26201b] leading-snug">
              Let’s build a website that{" "}
              <span className="text-[#ff751f]">prints money</span>
            </h2>

            <p className="mt-6 text-lg text-[#6f6761]">
              If you want a website built intentionally to attract,
              guide, and convert the right visitors, you’re in the right place.
            </p>
          </div>

          {/* Form */}
          <form className="mt-16 space-y-7">
            <div>
              <label className="block text-sm text-[#26201b]/70">
                Your name
              </label>
              <input
                type="text"
                required
                placeholder="Your full name"
                className="
                  mt-2 w-full rounded-2xl
                  bg-white px-5 py-4
                  text-[#26201b] placeholder-[#6f6761]
                  outline-none
                  ring-1 ring-[#26201b]/20
                  focus:ring-[#ff751f]
                "
              />
            </div>

            <div>
              <label className="block text-sm text-[#26201b]/70">
                Email address
              </label>
              <input
                type="email"
                required
                placeholder="you@business.com"
                className="
                  mt-2 w-full rounded-2xl
                  bg-white px-5 py-4
                  text-[#26201b] placeholder-[#6f6761]
                  outline-none
                  ring-1 ring-[#26201b]/20
                  focus:ring-[#ff751f]
                "
              />
            </div>

            <div>
              <label className="block text-sm text-[#26201b]/70">
                What are you building this website for?
              </label>
              <textarea
                rows={4}
                required
                placeholder="More enquiries, bookings, credibility, sales, or launching properly for the first time"
                className="
                  mt-2 w-full rounded-2xl
                  bg-white px-5 py-4
                  text-[#26201b] placeholder-[#6f6761]
                  outline-none
                  ring-1 ring-[#26201b]/20
                  focus:ring-[#ff751f]
                "
              />
            </div>

            {/* Primary CTA */}
            <button
              type="submit"
              className="
                mt-6 w-full
                inline-flex items-center justify-center gap-3
                rounded-full
                px-10 py-5
                text-base font-medium text-black
                bg-gradient-to-r from-[#ff751f] to-[#ff9a4d]
                shadow-[0_0_28px_rgba(255,117,31,0.45)]
                transition hover:shadow-[0_0_40px_rgba(255,117,31,0.6)]
              "
            >
              <Calendar className="h-5 w-5" />
              Book a call
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Trust cues */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-[#26201b]/70">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#ff751f]" />
              hello@clarovistadigital.com
            </div>

            <div className="hidden sm:block text-[#26201b]/30">•</div>

            <a
              href="https://wa.me/XXXXXXXXXX"
              className="flex items-center gap-2 hover:text-[#26201b] transition"
            >
              <MessageSquare className="h-4 w-4 text-[#ff751f]" />
              WhatsApp available
            </a>
          </div>

          {/* Positioning line */}
          <p className="mt-8 text-xs text-[#26201b]/60 text-center">
            We build from scratch for businesses that want it done right.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
