import { Search, Palette, Hammer, Sprout } from "lucide-react";

const processSteps = [
  {
    id: 1,
    title: "Consultation",
    description: "We begin by understanding your vision, site conditions, and aspirations. Our team conducts a thorough analysis of your space.",
    icon: Search,
    color: "#1B4332"
  },
  {
    id: 2,
    title: "Design",
    description: "Custom landscape architecture tailored to your needs. We create detailed plans that blend aesthetics with functionality.",
    icon: Palette,
    color: "#A3B18A"
  },
  {
    id: 3,
    title: "Execution",
    description: "Professional installation with meticulous attention to detail. Our skilled team brings the design to life with precision.",
    icon: Hammer,
    color: "#BC6C25"
  },
  {
    id: 4,
    title: "Perpetual Maintenance",
    description: "Ongoing care to ensure your landscape thrives. We provide seasonal maintenance and long-term stewardship.",
    icon: Sprout,
    color: "#1B4332"
  }
];

export function Process() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#A3B18A]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#1B4332]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <h2 
            className="text-5xl md:text-6xl lg:text-7xl text-[#1B4332] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
          >
            The Journey
          </h2>
          <p 
            className="text-xl text-[#1B4332]/70 max-w-3xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            From concept to completion, we guide you through every phase with expertise and care
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vine-style connector line */}
          <svg 
            className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 hidden lg:block" 
            style={{ zIndex: 0 }}
          >
            <defs>
              <linearGradient id="vineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1B4332" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#A3B18A" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1B4332" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            <path 
              d="M 1 0 Q 1 100, 1 200 Q 1 300, 1 400 Q 1 500, 1 600 Q 1 700, 1 800 Q 1 900, 1 1000"
              stroke="url(#vineGradient)" 
              strokeWidth="3" 
              fill="none"
              strokeDasharray="8,8"
            />
            {/* Decorative leaves along the vine */}
            <circle cx="1" cy="25%" r="4" fill="#A3B18A" opacity="0.6" />
            <circle cx="1" cy="50%" r="4" fill="#A3B18A" opacity="0.6" />
            <circle cx="1" cy="75%" r="4" fill="#A3B18A" opacity="0.6" />
          </svg>

          {/* Process Steps */}
          <div className="space-y-16 lg:space-y-24">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={step.id}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right lg:pr-16' : 'lg:text-left lg:pl-16'}`}>
                    <div className="inline-block">
                      <div className="bg-[#F2E8CF] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                        <h3 
                          className="text-3xl md:text-4xl text-[#1B4332] mb-4"
                          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                        >
                          {step.title}
                        </h3>
                        <p 
                          className="text-lg text-[#1B4332]/70 max-w-md"
                          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="relative z-10">
                    <div 
                      className="w-24 h-24 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 hover:scale-110"
                      style={{ backgroundColor: step.color }}
                    >
                      <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                    </div>
                    {/* Decorative ring */}
                    <div 
                      className="absolute inset-0 rounded-full animate-ping opacity-20"
                      style={{ backgroundColor: step.color }}
                    />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
