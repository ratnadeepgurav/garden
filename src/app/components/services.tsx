const services = [
  {
    id: 1,
    title: "Apartment Green-Scales",
    description: "Vertical gardens, balcony transformations, and compact green solutions that bring nature to high-rise living.",
    image: "https://images.unsplash.com/photo-1764726201399-ca28bafb2fd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBiYWxjb255JTIwZ2FyZGVuJTIwdmVydGljYWx8ZW58MXx8fHwxNzcxNTEwMTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Vertical Gardens", "Balcony Oases", "Indoor Biomes"]
  },
  {
    id: 2,
    title: "Highway Aesthetics",
    description: "Transforming traffic corridors into living arteries with sustainable plantings that enhance urban beauty and air quality.",
    image: "https://images.unsplash.com/photo-1572982893754-2f23ca358dc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdod2F5JTIwZ3JlZW4lMjBsYW5kc2NhcGluZyUyMG1lZGlhbnxlbnwxfHx8fDE3NzE1MTAxODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Green Medians", "Sound Barriers", "Eco Corridors"]
  },
  {
    id: 3,
    title: "Corporate Sanctuaries",
    description: "Premium workplace landscapes that enhance productivity, wellness, and corporate identity through strategic green design.",
    image: "https://images.unsplash.com/photo-1732604602477-c86f9955316d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBncmVlbiUyMHNwYWNlfGVufDF8fHx8MTc3MTUxMDE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    features: ["Office Gardens", "Wellness Spaces", "Living Walls"]
  }
];

export function Services() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-[#F2E8CF] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1B4332]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A3B18A]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl text-[#1B4332] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            Our Services
          </h2>
          <p 
            className="text-xl text-[#1B4332]/70 max-w-3xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Tailored landscaping solutions for every urban context
          </p>
        </div>

        {/* Services Cards */}
        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-[3rem] h-[400px] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              style={{
                animation: `float ${3 + index * 0.5}s ease-in-out infinite`
              }}
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Glassmorphism Overlay */}
              <div 
                className="absolute inset-0 backdrop-blur-sm bg-white/40 border border-white/50 transition-all duration-500 group-hover:backdrop-blur-md group-hover:bg-white/50"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.4) 0%, rgba(163, 177, 138, 0.3) 100%)"
                }}
              />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center px-12 md:px-16">
                <h3 
                  className="text-4xl md:text-5xl text-[#1B4332] mb-4"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                >
                  {service.title}
                </h3>
                <p 
                  className="text-lg text-[#1B4332]/80 mb-6 max-w-2xl"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {service.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="px-5 py-2 bg-[#1B4332]/20 backdrop-blur-md text-[#1B4332] rounded-full text-sm border border-[#1B4332]/30"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}
