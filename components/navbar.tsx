"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-border/50">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-icon.png"
            alt="PreRnaGroup logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="font-serif text-xl font-semibold text-forest tracking-tight">
            Pre<span className="font-bold">R</span>na<span className="font-bold">G</span>roup
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#portfolio"
            className="text-sm text-muted-foreground hover:text-forest transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/#past-projects"
            className="text-sm text-muted-foreground hover:text-forest transition-colors"
          >
            Past Projects
          </Link>
          <Link
            href="/#services"
            className="text-sm text-muted-foreground hover:text-forest transition-colors"
          >
            Services
          </Link>
          <Link
            href="/#journey"
            className="text-sm text-muted-foreground hover:text-forest transition-colors"
          >
            Our Process
          </Link>
          <Link
            href="/work"
            className="text-sm text-muted-foreground hover:text-forest transition-colors"
          >
            Our Work
          </Link>
          <Link
            href="/work#contact"
            className="inline-flex items-center justify-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90"
          >
            Request Audit
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-forest"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream/95 backdrop-blur-md border-b border-border/50 px-6 pb-6">
          <div className="flex flex-col gap-4">
            <Link
              href="/#portfolio"
              className="text-sm text-muted-foreground hover:text-forest transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/#past-projects"
              className="text-sm text-muted-foreground hover:text-forest transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Past Projects
            </Link>
            <Link
              href="/#services"
              className="text-sm text-muted-foreground hover:text-forest transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#journey"
              className="text-sm text-muted-foreground hover:text-forest transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Our Process
            </Link>
            <Link
              href="/work"
              className="text-sm text-muted-foreground hover:text-forest transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              Our Work
            </Link>
            <Link
              href="/work#contact"
              className="inline-flex items-center justify-center rounded-full bg-terracotta px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-terracotta/90"
              onClick={() => setMobileOpen(false)}
            >
              Request Audit
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
