"use client"

import Image from "next/image"
import { useState } from "react"

const categories = [
  "All Projects",
  "Apartment Complexes",
  "Roadside Greenery",
  "Maintenance",
] as const

type Category = (typeof categories)[number]

interface Project {
  src: string
  alt: string
  title: string
  location: string
  serviceType: string
  category: Category[]
  tall?: boolean
}

const projects: Project[] = [
  {
    src: "/images/hero-heart-lawn.jpg",
    alt: "Aerial view of a heart-shaped lawn, NatureCraft signature project",
    title: "Signature Heart Lawn",
    location: "Mumbai Metropolitan",
    serviceType: "Landscape Design",
    category: ["All Projects", "Apartment Complexes"],
    tall: true,
  },
  {
    src: "/images/portfolio-pruning.jpg",
    alt: "Professional worker pruning ornamental trees",
    title: "Seasonal Pruning Program",
    location: "Pune Urban District",
    serviceType: "Maintenance",
    category: ["All Projects", "Maintenance"],
  },
  {
    src: "/images/portfolio-road.jpg",
    alt: "Manicured road median dividers with lush landscaping",
    title: "NH-48 Median Beautification",
    location: "NH-48 Corridor",
    serviceType: "Roadside Greenery",
    category: ["All Projects", "Roadside Greenery"],
  },
  {
    src: "/images/portfolio-detail.jpg",
    alt: "Close-up of perfectly mowed lawn with crisp edges",
    title: "Precision Lawn Detailing",
    location: "Private Estate, Lonavala",
    serviceType: "Maintenance",
    category: ["All Projects", "Maintenance"],
  },
  {
    src: "/images/portfolio-topiary.jpg",
    alt: "Sculpted topiary garden with geometric shapes",
    title: "Artistic Topiary Collection",
    location: "Corporate Park, Navi Mumbai",
    serviceType: "Landscape Design",
    category: ["All Projects", "Apartment Complexes"],
    tall: true,
  },
  {
    src: "/images/service-apartment.jpg",
    alt: "Modern apartment with vertical green wall garden",
    title: "Vertical Eden Tower",
    location: "Bandra, Mumbai",
    serviceType: "Apartment Complex",
    category: ["All Projects", "Apartment Complexes"],
  },
  {
    src: "/images/service-highway.jpg",
    alt: "Landscaped highway corridor with flowering median strips",
    title: "Expressway Green Corridor",
    location: "Mumbai-Pune Expressway",
    serviceType: "Roadside Greenery",
    category: ["All Projects", "Roadside Greenery"],
    tall: true,
  },
  {
    src: "/images/service-corporate.jpg",
    alt: "Luxurious corporate courtyard with zen garden elements",
    title: "Zen Corporate Retreat",
    location: "Hinjewadi IT Park, Pune",
    serviceType: "Landscape Design",
    category: ["All Projects", "Apartment Complexes"],
  },
]

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<Category>("All Projects")

  const filtered =
    activeFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.category.includes(activeFilter))

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
              activeFilter === cat
                ? "bg-forest text-cream"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
        {filtered.map((project) => (
          <div
            key={project.title}
            className="break-inside-avoid group relative overflow-hidden rounded-3xl"
          >
            <div
              className={`relative w-full ${project.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
            >
              <Image
                src={project.src}
                alt={project.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Caption overlay - always visible at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/80 via-forest/30 to-transparent p-5 pt-14">
                <p className="text-xs font-medium text-sand/80 mb-0.5">
                  {project.location}
                  {" | "}
                  {project.serviceType}
                </p>
                <p className="text-base font-serif font-semibold text-cream">
                  {project.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
