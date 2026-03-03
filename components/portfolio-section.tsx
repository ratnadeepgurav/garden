import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    src: "/images/hero-heart-lawn.jpg",
    alt: "Aerial heart-shaped lawn, signature landscaping project",
    label: "Signature Heart Lawn",
    location: "Mumbai Metropolitan",
    tall: true,
  },
  {
    src: "/images/portfolio-pruning.jpg",
    alt: "Professional worker pruning ornamental trees",
    label: "Artistic Topiary",
    location: "Pune Urban District",
    tall: false,
  },
  {
    src: "/images/portfolio-road.jpg",
    alt: "Manicured road median dividers with lush landscaping",
    label: "Highway Aesthetics",
    location: "NH-48 Corridor",
    tall: false,
  },
  {
    src: "/images/portfolio-topiary.jpg",
    alt: "Sculpted topiary garden with geometric shapes",
    label: "Artistic Topiary & Aerial Landscapes",
    location: "Corporate Park",
    tall: true,
  },
  {
    src: "/images/portfolio-detail.jpg",
    alt: "Close-up of perfectly mowed lawn with crisp edges",
    label: "Precision Detailing",
    location: "Private Estate",
    tall: false,
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="relative bg-sand/50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage mb-4">
            Our Impact
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest text-balance">
            Landscapes That Speak Volumes
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          {projects.map((project) => (
            <div
              key={project.label}
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
                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest/80 via-forest/40 to-transparent p-6 pt-16 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-sm font-medium text-sand/80">
                    {project.location}
                  </p>
                  <p className="text-lg font-serif font-semibold text-cream">
                    {project.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-full border border-forest/20 px-8 py-3.5 text-base font-medium text-forest transition-colors hover:bg-forest/5"
          >
            View Full Portfolio
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
