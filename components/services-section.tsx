import Image from "next/image"
import { Building2, Route, Landmark } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Apartment Green-Scales",
    description:
      "Vertical gardens, rooftop terraces, and communal green spaces that transform residential complexes into urban oases.",
    image: "/images/service-apartment.jpg",
    imageAlt: "Modern apartment with vertical green wall garden",
  },
  {
    icon: Route,
    title: "Highway Aesthetics",
    description:
      "Median strips, roadside corridors, and interchange landscaping that elevate the visual identity of infrastructure.",
    image: "/images/service-highway.jpg",
    imageAlt: "Beautifully landscaped highway corridor",
  },
  {
    icon: Landmark,
    title: "Corporate Sanctuaries",
    description:
      "Zen courtyards, sculptural landscapes, and biophilic design that cultivate employee well-being and brand prestige.",
    image: "/images/service-corporate.jpg",
    imageAlt: "Luxurious corporate courtyard with zen garden",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-cream">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage mb-4">
            What We Do
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest text-balance">
            Crafting Nature at Every Scale
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="group relative flex-1 overflow-hidden rounded-3xl min-h-[420px]"
              >
                {/* Background image */}
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />

                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-forest/30 group-hover:bg-forest/20 transition-colors duration-500" />

                <div className="relative h-full flex flex-col justify-end p-8">
                  <div className="backdrop-blur-md bg-cream/15 border border-cream/20 rounded-2xl p-6">
                    <div className="mb-4 inline-flex items-center justify-center rounded-full bg-cream/20 p-3">
                      <Icon className="h-6 w-6 text-cream" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-cream mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-cream/80">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
