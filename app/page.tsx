import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { PastProjectsSection } from "@/components/past-projects-section"
import { ServicesSection } from "@/components/services-section"
import { JourneySection } from "@/components/journey-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <PastProjectsSection />
      <ServicesSection />
      <JourneySection />
      <CtaSection />
      <Footer />
    </main>
  )
}
