import { Mail, Phone, MapPin, Leaf } from "lucide-react";

export function CTAFooter() {
  return (
    <footer className="relative overflow-hidden">
      {/* CTA Section */}
      <section className="relative py-32 px-8 md:px-16 lg:px-24">
        {/* Nature texture background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1762607944881-743f035826d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwdGV4dHVyZSUyMG5hdHVyYWwlMjBtb3NzfGVufDF8fHx8MTc3MTUxMDE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Nature texture"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1B4332]/95 via-[#1B4332]/90 to-[#1B4332]/85" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Ready to Transform Your Space?
          </h2>
          <p 
            className="text-xl md:text-2xl text-[#A3B18A] mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Let us craft a bespoke landscape solution that elevates your urban environment
          </p>
          
          <button 
            className="px-12 py-6 bg-[#BC6C25] text-white rounded-full text-lg hover:bg-[#BC6C25]/90 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
          >
            Request a Site Audit
          </button>

          {/* Contact Info */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-[#A3B18A]">
            <a 
              href="mailto:hello@naturecraft.co"
              className="flex items-center gap-3 hover:text-white transition-colors duration-300"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              <Mail className="w-5 h-5" />
              <span>hello@naturecraft.co</span>
            </a>
            <a 
              href="tel:+15551234567"
              className="flex items-center gap-3 hover:text-white transition-colors duration-300"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              <Phone className="w-5 h-5" />
              <span>+1 (555) 123-4567</span>
            </a>
            <div 
              className="flex items-center gap-3"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              <MapPin className="w-5 h-5" />
              <span>New York, NY</span>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#A3B18A]/20 rounded-full blur-2xl" />
        <div className="absolute top-10 right-10 w-40 h-40 bg-[#BC6C25]/20 rounded-full blur-2xl" />
      </section>

      {/* Footer Bar */}
      <div className="bg-[#1B4332] py-8 px-8 md:px-16 lg:px-24 border-t border-[#A3B18A]/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#A3B18A]/20 flex items-center justify-center">
              <Leaf className="w-6 h-6 text-[#A3B18A]" />
            </div>
            <span 
              className="text-lg text-white"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
            >
              NatureCraft Landscapes
            </span>
          </div>

          {/* Copyright */}
          <p 
            className="text-[#A3B18A] text-sm"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            © 2026 NatureCraft Landscapes. All rights reserved. Cultivating urban beauty since 2010.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a 
              href="#" 
              className="text-[#A3B18A] hover:text-white transition-colors duration-300 text-sm"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Instagram
            </a>
            <span className="text-[#A3B18A]">•</span>
            <a 
              href="#" 
              className="text-[#A3B18A] hover:text-white transition-colors duration-300 text-sm"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              LinkedIn
            </a>
            <span className="text-[#A3B18A]">•</span>
            <a 
              href="#" 
              className="text-[#A3B18A] hover:text-white transition-colors duration-300 text-sm"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
