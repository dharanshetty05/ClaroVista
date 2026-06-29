"use client"

import { motion } from "framer-motion"
import { ExternalLink, ArrowRight } from "lucide-react"

// ─── Project data ─────────────────────────────────────────────────────────────
const projects = [
  {
    title: "Palmstone Anjuna Retreat",
    industry: "Boutique hospitality",
    gap: "Broad messaging and scattered page flow meant the booking intent was never clear.",
    changed: "Focused the headline, simplified the flow, and made the booking action the single obvious next step.",
    image: "/projects/palmstone.png",
    url: "http://palmstone-anjuna.vercel.app/",
  },
  {
    title: "The BrewStory Cafe",
    industry: "Food & beverage",
    gap: "Brand story was present but buried — key details and next steps couldn't be found quickly.",
    changed: "Sharpened the headline, restructured information hierarchy, and surfaced next-step actions at the right moments.",
    image: "/projects/brewstory.png",
    url: "https://brewstory-cafe.vercel.app/",
  },
  {
    title: "The Spice Table",
    industry: "Restaurant",
    gap: "Visually polished but structurally weak — visitors couldn't navigate toward a reservation.",
    changed: "Reordered key sections and clarified the reservation path so the next step is always visible.",
    image: "/projects/spicetable.png",
    url: "https://spice-table-website.vercel.app/",
  },
  {
    title: "FitCoach",
    industry: "Health & wellness",
    gap: "Offer positioning was vague — visitors had to work too hard to understand who the service was for.",
    changed: "Repositioned the offer for immediate clarity, restructured for quick scanning, and strengthened the main CTA.",
    image: "/projects/fitcoach.png",
    url: "https://fitcoach-sable.vercel.app/",
  },
  {
    title: "Aura Beauty Lounge",
    industry: "Beauty & wellness",
    gap: "Cluttered service presentation diluted booking intent across the page.",
    changed: "Simplified service blocks and made the booking path the first obvious action on every scroll depth.",
    image: "/projects/aura-beauty-lounge.png",
    url: "https://aura-beauty-lounge.vercel.app/",
  },
  {
    title: "ClaroVista Digital",
    industry: "Conversion consultancy",
    gap: "Positioning needed sharper language and stronger decision guidance for service-business owners.",
    changed: "Refined copy hierarchy, added trust at decision points, and strengthened the low-friction audit CTA.",
    image: "/projects/clarovista-digital.png",
    url: "https://clarovistadigital.com",
  },
]

// ─── Animation helper ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Projects() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="projects" className="bg-[#fefbf8] py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12 xl:px-20">

        {/* ── HEADER ── */}
        <motion.div {...fadeUp(0)} className="max-w-[680px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#e86a1c]" aria-hidden />
            <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#e86a1c]">
              Client results
            </p>
          </div>

          <h2 className="
            mt-6
            text-3xl sm:text-4xl lg:text-[50px]
            font-bold leading-[1.08] tracking-tight
            text-[#1a1410]
          ">
            What changes when the
            <span className="text-[#e86a1c]"> conversion gaps are fixed.</span>
          </h2>

          <p className="mt-6 text-lg sm:text-[19px] leading-relaxed text-[#26201b]/65">
            Each project below started with a site that looked professional
            but was quietly losing enquiries. Here's what we found and what changed.
          </p>
        </motion.div>

        {/* ── PROJECT GRID ── */}
        <div className="mt-14 sm:mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, industry, gap, changed, image, url }, i) => (
            <motion.article
              key={title}
              {...fadeUp(0.06 + i * 0.07)}
              className="
                group flex flex-col
                rounded-2xl bg-white
                ring-1 ring-[#26201b]/8
                hover:ring-[#e86a1c]/30
                hover:shadow-[0_8px_40px_rgba(38,32,27,0.08)]
                transition-all duration-300
                overflow-hidden
              "
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-[#f3ede6]">
                <img
                  src={image}
                  alt={`${title} website`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                {/* Industry tag — overlaid on image */}
                <span className="
                  absolute bottom-3 left-3
                  px-2.5 py-1
                  rounded-full
                  text-[11px] font-semibold uppercase tracking-[0.14em]
                  bg-[#1a1410]/70 text-white
                  backdrop-blur-sm
                ">
                  {industry}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6 gap-5">
                <h3 className="text-[17px] font-semibold text-[#1a1410] leading-snug">
                  {title}
                </h3>

                {/* Gap */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#26201b]/40 mb-1.5">
                    The gap
                  </p>
                  <p className="text-[14px] leading-relaxed text-[#26201b]/65">
                    {gap}
                  </p>
                </div>

                {/* What changed */}
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#e86a1c] mb-1.5">
                    What changed
                  </p>
                  <p className="text-[14px] leading-relaxed text-[#26201b]/75">
                    {changed}
                  </p>
                </div>

                {/* Live site link — pushed to bottom */}
                <div className="mt-auto pt-1">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-1.5
                      text-[13px] font-medium
                      text-[#26201b]/45
                      hover:text-[#e86a1c]
                      transition-colors duration-200
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#e86a1c]
                      focus-visible:ring-offset-2
                      rounded-sm
                    "
                  >
                    View live site
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ── CLOSING CTA ── */}
        <motion.div
          {...fadeUp(0.22)}
          className="
            mt-16 sm:mt-20
            flex flex-col sm:flex-row
            items-start sm:items-center
            justify-between
            gap-7
            border-t border-[#26201b]/10
            pt-12
          "
        >
          <div>
            <p className="
              text-[21px] sm:text-[25px]
              font-semibold leading-snug tracking-tight
              text-[#1a1410]
              max-w-[400px]
            ">
              Want to see what's costing your site enquiries?
            </p>
            <p className="mt-2 text-[15px] text-[#26201b]/55">
              We'll identify it in a free audit — no commitment required.
            </p>
          </div>

          <button
            onClick={() => scrollTo("contact")}
            className="
              group shrink-0
              inline-flex items-center gap-3
              rounded-full px-8 py-4
              text-[15px] font-semibold
              text-white bg-[#e86a1c]
              shadow-[0_4px_24px_rgba(232,106,28,0.24)]
              hover:bg-[#d45e14]
              hover:shadow-[0_6px_28px_rgba(232,106,28,0.36)]
              transition-all duration-200
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#e86a1c]
              focus-visible:ring-offset-2
            "
          >
            Get a free audit
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </button>
        </motion.div>

      </div>
    </section>
  )
}