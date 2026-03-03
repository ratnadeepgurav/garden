"use client"

import { useState } from "react"
import { Phone, Mail, MapPin, Send } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-3xl bg-card border border-border/50 p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage/20 mb-6">
          <Send className="h-7 w-7 text-forest" strokeWidth={1.5} />
        </div>
        <h3 className="font-serif text-2xl font-semibold text-forest mb-3">
          Thank You!
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
          We have received your request. A member of our team will reach out
          within 24 hours to schedule your site audit.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Form */}
      <div className="flex-1 rounded-3xl bg-card border border-border/50 p-8 lg:p-10">
        <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-forest mb-2">
          Request a Green Audit
        </h3>
        <p className="text-sm text-muted-foreground mb-8">
          Tell us about your space and we will craft a bespoke proposal.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="name"
              className="text-sm font-medium text-foreground"
            >
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="John Doe"
              className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-sage/50 transition-shadow"
            />
          </div>

          {/* Site Type */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="siteType"
              className="text-sm font-medium text-foreground"
            >
              Site Type
            </label>
            <select
              id="siteType"
              name="siteType"
              required
              className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-sage/50 transition-shadow appearance-none"
            >
              <option value="">Select a site type</option>
              <option value="apartment">Apartment Complex</option>
              <option value="roadside">Roadside / Highway</option>
              <option value="corporate">Corporate / Commercial</option>
              <option value="private">Private Garden</option>
            </select>
          </div>

          {/* Site Location */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="location"
              className="text-sm font-medium text-foreground"
            >
              Site Location / City
            </label>
            <input
              id="location"
              name="location"
              type="text"
              required
              placeholder="Mumbai, Maharashtra"
              className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-sage/50 transition-shadow"
            />
          </div>

          {/* Approximate Area */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="area"
              className="text-sm font-medium text-foreground"
            >
              Approximate Area (Sq. Ft.)
            </label>
            <input
              id="area"
              name="area"
              type="number"
              min="0"
              placeholder="5000"
              className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-sage/50 transition-shadow"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Message / Special Requirements
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your vision for the space..."
              className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-sage/50 transition-shadow resize-none"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-terracotta px-8 py-4 text-base font-medium text-cream transition-colors hover:bg-terracotta/90"
          >
            Get a Professional Quote
          </button>
        </form>
      </div>

      {/* Contact Sidebar */}
      <div className="lg:w-80 flex flex-col gap-6">
        <div className="rounded-3xl bg-card border border-border/50 p-8">
          <h4 className="text-sm font-medium uppercase tracking-[0.15em] text-sage mb-6">
            Contact Us Directly
          </h4>
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-sage/15">
                <Phone className="h-4 w-4 text-forest" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Phone Numbers</p>
                <p className="text-sm font-medium text-foreground">
                  +91 9023547111
                </p>
                <p className="text-sm font-medium text-foreground">
                  +91 9028997996
                </p>
                <p className="text-sm font-medium text-foreground">
                  +91 9873443656
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-sage/15">
                <Mail className="h-4 w-4 text-forest" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                <p className="text-sm font-medium text-foreground break-all">
                  prerna45garden@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-sage/15">
                <MapPin className="h-4 w-4 text-forest" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Office Location</p>
                <p className="text-sm font-medium text-foreground">
                  Prerna's Kalante
                </p>
                <p className="text-xs text-muted-foreground">
                  Shilphata Taloja Road,
                </p>
                <p className="text-xs text-muted-foreground">
                  Uttarshiv Gaon, Bhandarli MHADA Colony
                </p>
                <p className="text-xs text-muted-foreground">
                  Building 6B, Room 214, Navi Mumbai
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="rounded-3xl overflow-hidden border border-border/50 w-full h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.407991749525!2d73.11845948262335!3d19.133610203982144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7eac2c1215f29%3A0x6f75580a0453ad8b!2sTaloja%20Bypass%20Phata%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1772525064546!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  )
}
