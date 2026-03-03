import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-forest text-cream/80">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:max-w-sm">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/logo-icon.png"
                alt="PreRnaGroup logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="font-serif text-2xl font-semibold text-cream tracking-tight">
                Pre<span className="font-bold">R</span>na<span className="font-bold">G</span>roup
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-cream/60">
              Professional landscaping, gardening, and maintenance services.
              Transforming spaces with expert garden design, green wall
              installation, and comprehensive maintenance support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-[0.15em] text-sage mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              <Link
                href="/#portfolio"
                className="text-sm text-cream/60 hover:text-cream transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/#services"
                className="text-sm text-cream/60 hover:text-cream transition-colors"
              >
                Services
              </Link>
              <Link
                href="/#journey"
                className="text-sm text-cream/60 hover:text-cream transition-colors"
              >
                Our Process
              </Link>
              <Link
                href="/work"
                className="text-sm text-cream/60 hover:text-cream transition-colors"
              >
                Our Work
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium uppercase tracking-[0.15em] text-sage mb-4">
              Reach Out
            </h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-sage" strokeWidth={1.5} />
                <span className="text-sm text-cream/60">+91 9023547111</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-sage" strokeWidth={1.5} />
                <span className="text-sm text-cream/60">+91 9028997996</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-sage" strokeWidth={1.5} />
                <span className="text-sm text-cream/60">
                  prerna45garden@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-sage" strokeWidth={1.5} />
                <span className="text-sm text-cream/60">
                  Taloja, Navi Mumbai, Maharashtra
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-cream/10 text-center">
          <p className="text-xs text-cream/40">
            {"Pre"}<span className="font-bold">{"R"}</span>{"na"}<span className="font-bold">{"G"}</span>{"roup. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
