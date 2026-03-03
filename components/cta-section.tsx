import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="relative py-32 lg:py-40 overflow-hidden">
      {/* Nature texture background */}
      <Image
        src="/images/nature-texture.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-forest/85" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage mb-6">
          Start Your Transformation
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-cream text-balance leading-tight mb-6">
          Ready to Bring Nature Into Your World?
        </h2>
        <p className="text-base leading-relaxed text-cream/70 mb-10 max-w-xl mx-auto">
          Every great landscape starts with a conversation. Let us visit your
          site and envision what nature can do for your space.
        </p>
        <Link
          href="/work#contact"
          className="inline-flex items-center gap-2 rounded-full bg-terracotta px-10 py-4 text-lg font-medium text-cream transition-all hover:bg-terracotta/90 hover:scale-105"
        >
          Request a Site Audit
          <ArrowUpRight className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
