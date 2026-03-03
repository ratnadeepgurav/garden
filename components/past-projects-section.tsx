import Image from "next/image"

const projects = [
  { image: "/images/project1.jpeg" },
  { image: "/images/project2.jpeg" },
  { image: "/images/project3.jpeg" },
  { image: "/images/projectf4.jpeg" },
  { image: "/images/project5.jpeg" },
  { image: "/images/project6.jpeg" },
]

export function PastProjectsSection() {
  return (
    <section id="past-projects" className="py-24 lg:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-terracotta mb-4">
            Our Legacy
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-forest text-balance">
            Past Projects
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            A glimpse into the landscapes we have crafted — each one a testament
            to our commitment to transforming spaces with nature.
          </p>
        </div>

        {/* Responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-[300px] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
            >
              <Image
                src={project.image}
                alt={`PreRnaGroup past project ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Subtle overlay on hover */}
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
