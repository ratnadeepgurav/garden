import { Leaf } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden">
      {/* Left Side - Content */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 lg:py-32 bg-[#F2E8CF]">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-12 h-12 rounded-full bg-[#1B4332] flex items-center justify-center">
            <Leaf className="w-7 h-7 text-[#A3B18A]" />
          </div>
          <span className="text-xl text-[#1B4332]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>
            NatureCraft Landscapes
          </span>
        </div>

        {/* Main Heading */}
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-[#1B4332] mb-8 leading-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
        >
          Transforming Urban Concrete into Living Ecosystems
        </h1>

        {/* Subheading */}
        <p 
          className="text-lg md:text-xl text-[#1B4332]/70 mb-12 max-w-2xl leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          Premium landscaping solutions that breathe life into metropolitan spaces. 
          Where architectural vision meets botanical artistry.
        </p>

        {/* CTA Button */}
        <button 
          className="px-10 py-5 bg-[#BC6C25] text-white rounded-full hover:bg-[#BC6C25]/90 transition-all duration-300 self-start shadow-lg hover:shadow-xl"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
        >
          Explore Our Work
        </button>

        {/* Decorative organic shape */}
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#A3B18A]/20 rounded-full blur-3xl -z-10" />
      </div>

      {/* Right Side - Image with organic mask */}
      <div className="flex-1 relative flex items-center justify-center p-8 lg:p-16 bg-[#F2E8CF]">
        <div className="relative w-full h-full min-h-[500px] lg:min-h-[600px]">
          {/* Organic shaped image container */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{
              borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
              boxShadow: "0 25px 50px -12px rgba(27, 67, 50, 0.25)"
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1597345994837-11924f19b2ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFydCUyMHNoYXBlZCUyMGxhd24lMjBnYXJkZW4lMjBhZXJpYWx8ZW58MXx8fHwxNzcxNTEwMTgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Heart-shaped lawn aerial view"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating decorative elements */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#1B4332]/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#A3B18A]/20 rounded-full blur-2xl" />
        </div>
      </div>
    </section>
  );
}
