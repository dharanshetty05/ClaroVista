"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"

const projects = [
  {
    title: "Palmstone Anjuna Retreat",
    description:
      "A premium homestay website designed to showcase ambience, location, and stay experience with a calm, conversion-focused layout.",
    image: "/projects/palmstone.png",
    visit: "http://palmstone-anjuna.vercel.app/",
  },
  {
    title: "The BrewStory Cafe",
    description:
      "A cafe website focused on storytelling, menu discovery, and local brand presence with a warm, approachable visual tone.",
    image: "/projects/brewstory.png",
    visit: "https://brewstory-cafe.vercel.app/",
  },
  {
    title: "The Spice Table",
    description:
      "A restaurant showcase site built around menu clarity, atmosphere, and an inviting dine-in experience.",
    image: "/projects/spicetable.png",
    visit: "https://spice-table-website.vercel.app/",
  },
  {
    title: "FitCoach",
    description:
      "A fitness coaching platform with personalized workout plans, clean UI, and structured progression.",
    image: "/projects/fitcoach.png",
    visit: "https://fitcoach-sable.vercel.app/",
  },
  {
    title: "Aura Beauty Lounge",
    description:
      "A modern beauty lounge website designed to highlight services, build trust, and make bookings feel simple through a clean, elegant layout.",
    image: "/projects/aura-beauty-lounge.png",
    visit: "https://aura-beauty-lounge.vercel.app/",
  },

]

export default function Projects() {
  const [page, setPage] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      if (w >= 1024) setCardsPerView(3)
      else if (w >= 640) setCardsPerView(2)
      else setCardsPerView(1)
    }

    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const totalPages = Math.ceil(projects.length / cardsPerView)

  const clamp = (n: number) =>
    Math.max(0, Math.min(n, totalPages - 1))

  return (
    <section id="projects" className="bg-[#fefbf8] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-wide text-[#26201b]/60">
            Selected work
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-[#26201b]">
            See how strategy turns{" "}
            <span className="text-[#ff751f]">websites into results</span>
          </h2>
        </motion.div>

        {/* Mobile hint */}
        <p className="mt-6 text-sm text-[#26201b]/60 text-center sm:hidden">
          Swipe to see our work →
        </p>

        {/* Carousel */}
        <div className="relative mt-12 sm:mt-16 overflow-hidden">
          <motion.div
            className="flex gap-8 cursor-grab active:cursor-grabbing"
            animate={{ x: `-${page * 100}%` }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) setPage(clamp(page + 1))
              if (info.offset.x > 80) setPage(clamp(page - 1))
            }}
          >
            {projects.map((project, i) => (
              <motion.article
                key={i}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="
                  min-w-full sm:min-w-[48%] lg:min-w-[32%]
                  rounded-2xl
                  bg-white
                  ring-1 ring-[#26201b]/10
                  hover:ring-[#ff751f]/40
                  transition overflow-hidden
                "
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.04]"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-medium text-[#26201b]">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm text-[#6f6761]">
                    {project.description}
                  </p>

                  <a
                    href={project.visit}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#ff751f] hover:underline"
                  >
                    View live site <ExternalLink size={14} />
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* Desktop arrows */}
          <button
  onClick={() => setPage(clamp(page - 1))}
  className="
    hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2
    h-10 w-10 items-center justify-center rounded-full
    bg-white
    ring-1 ring-[#26201b]/20
    shadow-sm
    transition hover:shadow-md
  "
>
  <ChevronLeft className="h-5 w-5 text-[#26201b]" />
</button>

<button
  onClick={() => setPage(clamp(page + 1))}
  className="
    hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2
    h-10 w-10 items-center justify-center rounded-full
    bg-white
    ring-1 ring-[#26201b]/20
    shadow-sm
    transition hover:shadow-md
  "
>
  <ChevronRight className="h-5 w-5 text-[#26201b]" />
</button>

        </div>

        {/* Page dots */}
        <div className="mt-8 flex justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`h-2 rounded-full transition-all ${
                page === i
                  ? "w-8 bg-[#ff751f]"
                  : "w-2 bg-[#26201b]/30 hover:bg-[#26201b]/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
