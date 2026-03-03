import { MessageSquare, PenTool, Hammer, Sprout } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    description:
      "We begin with an in-depth site visit and discussion to understand your vision, the terrain, and the potential of the space.",
  },
  {
    icon: PenTool,
    title: "Design",
    description:
      "Our landscape architects craft a bespoke blueprint that harmonizes your goals with the natural ecology of the site.",
  },
  {
    icon: Hammer,
    title: "Execution",
    description:
      "Our specialized crew brings the design to life with precision planting, hardscaping, and irrigation installation.",
  },
  {
    icon: Sprout,
    title: "Perpetual Maintenance",
    description:
      "We nurture your landscape for the long haul with seasonal care, pruning, and adaptive maintenance programs.",
  },
]

export function JourneySection() {
  return (
    <section id="journey" className="relative py-24 lg:py-32 bg-sand/50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sage mb-4">
            Our Process
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest text-balance">
            The Journey from Vision to Verdure
          </h2>
        </div>

        <div className="mx-auto max-w-2xl">
          <div className="relative">
            {/* Vine-style connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-px lg:left-10">
              <svg
                className="h-full w-6 -ml-3"
                viewBox="0 0 24 800"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M12,0 C12,50 20,80 12,120 C4,160 20,200 12,240 C4,280 20,320 12,360 C4,400 20,440 12,480 C4,520 20,560 12,600 C4,640 20,680 12,720 C4,760 12,780 12,800"
                  stroke="#A3B18A"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
                {/* Small leaves along the vine */}
                <circle cx="16" cy="120" r="3" fill="#A3B18A" opacity="0.5" />
                <circle cx="8" cy="280" r="3" fill="#A3B18A" opacity="0.5" />
                <circle cx="16" cy="440" r="3" fill="#A3B18A" opacity="0.5" />
                <circle cx="8" cy="600" r="3" fill="#A3B18A" opacity="0.5" />
              </svg>
            </div>

            <div className="flex flex-col gap-12">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div
                    key={step.title}
                    className="relative flex items-start gap-6 lg:gap-8"
                  >
                    {/* Step circle */}
                    <div className="relative z-10 flex-shrink-0 flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-cream border-2 border-sage/40">
                      <Icon
                        className="h-6 w-6 lg:h-7 lg:w-7 text-forest"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Content card */}
                    <div className="flex-1 bg-cream rounded-2xl p-6 lg:p-8 border border-border/50">
                      <span className="text-xs font-medium uppercase tracking-[0.15em] text-sage mb-1 block">
                        {"Step "}
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-serif text-xl lg:text-2xl font-semibold text-forest mb-2">
                        {step.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
