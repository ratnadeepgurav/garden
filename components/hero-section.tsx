import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream pt-20">
      <div className="mx-auto max-w-7xl w-full px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text content */}
          <div className="flex-1 flex flex-col gap-8 text-center lg:text-left">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage">
              Premium Urban Landscaping
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight text-forest text-balance">
              Transforming Urban Concrete into Living Ecosystems
            </h1>
            <p className="max-w-lg mx-auto lg:mx-0 text-base leading-relaxed text-muted-foreground">
              We craft bespoke green spaces that breathe life into cityscapes.
              From apartment complexes to highway corridors, every project is a
              canvas for nature.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link
                href="/work#contact"
                className="inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-3.5 text-base font-medium text-cream transition-colors hover:bg-terracotta/90"
              >
                Request a Site Audit
              </Link>
              <Link
                href="/#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-forest/20 px-8 py-3.5 text-base font-medium text-forest transition-colors hover:bg-forest/5"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* Right: Organic image mask */}
          <div className="flex-1 relative w-full min-h-[400px] lg:min-h-[520px]">
            {/* Decorative organic blob behind image */}
            <div className="absolute inset-0 -m-8 flex items-center justify-center">
              <svg
                viewBox="0 0 500 500"
                className="w-full h-full text-sage/20"
                fill="currentColor"
              >
                <path d="M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99.5,367Q40,327,35,256.5Q30,186,86,124Q142,62,220,49Q298,36,362,85.5Q426,135,447,217.5Q468,300,440.5,320.5Z" />
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="relative w-full max-w-lg h-full max-h-[520px] overflow-hidden"
                style={{
                  borderRadius: "60% 40% 55% 45% / 55% 60% 40% 45%",
                }}
              >
                <Image
                  src="/images/hero-heart-lawn.jpg"
                  alt="Aerial view of a heart-shaped lawn, NatureCraft's signature landscaping project"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative leaf shapes */}
      <svg
        className="absolute bottom-0 left-0 right-0 text-sand/50"
        viewBox="0 0 1440 120"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L0,120Z" />
      </svg>
    </section>
  )
}
