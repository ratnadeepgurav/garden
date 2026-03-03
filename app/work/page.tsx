import { Navbar } from "@/components/navbar"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Work & Contact | Prerna's Kalante",
  description:
    "Explore our portfolio of professional landscaping and gardening projects. Request a consultation for your space.",
}

export default function WorkPage() {
  return (
    <main>
      <Navbar />

      {/* Portfolio Section */}
      <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 bg-cream">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage mb-4">
              Our Portfolio
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest text-balance">
              Every Project Tells a Story
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              From heart-shaped lawns to highway corridors, explore the
              landscapes we have crafted across India.
            </p>
          </div>

          <PortfolioGrid />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-24 bg-sand/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest text-balance">
              {"Let's Grow Something Beautiful"}
            </h2>
          </div>

          <ContactForm />
        </div>
      </section>

      <Footer />
    </main>
  )
}
