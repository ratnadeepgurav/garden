import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const portfolioItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1769690093872-b6909c820a0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGxhbmRzY2FwaW5nJTIwZ3JlZW4lMjByb29mdG9wfGVufDF8fHx8MTc3MTUxMDE4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Green Rooftop Oasis",
    category: "Urban Transformation"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1763483540900-179b42336015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0b3BpYXJ5JTIwc2N1bHB0dXJlfGVufDF8fHx8MTc3MTUxMDE4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Artistic Topiary & Aerial Landscapes",
    category: "Featured Project",
    featured: true
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1760533536490-08a2e3470c9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx6ZW4lMjBnYXJkZW4lMjBzdG9uZXMlMjBwYXRod2F5fGVufDF8fHx8MTc3MTUxMDE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Zen Corporate Garden",
    category: "Contemplative Spaces"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1768720961056-f7a7806239c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBhcnQlMjBpbnN0YWxsYXRpb24lMjB1cmJhbnxlbnwxfHx8fDE3NzE1MTAxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Botanical Art Installation",
    category: "Public Space"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1768278929570-59332555f22d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWNjdWxlbnQlMjBnYXJkZW4lMjBhcnJhbmdlbWVudCUyMGNsb3NlfGVufDF8fHx8MTc3MTUxMDE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Succulent Artistry",
    category: "Micro Landscapes"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1760262645776-633204d88ded?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3VydHlhcmQlMjBsYW5kc2NhcGluZyUyMHdhdGVyfGVufDF8fHx8MTc3MTUxMDE4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Aquatic Courtyard",
    category: "Water Features"
  }
];

export function Portfolio() {
  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-white">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <h2 
          className="text-5xl md:text-6xl lg:text-7xl text-[#1B4332] mb-6"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
        >
          The Impact
        </h2>
        <p 
          className="text-xl text-[#1B4332]/70 max-w-3xl"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          From rooftops to roadways, witness our transformation of urban spaces into thriving green sanctuaries.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="24px">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-500 hover:shadow-2xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/90 via-[#1B4332]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  {item.featured && (
                    <span 
                      className="self-start px-4 py-1 bg-[#BC6C25] text-white rounded-full mb-3 text-sm"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                    >
                      Featured
                    </span>
                  )}
                  <h3 
                    className="text-2xl text-white mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p 
                    className="text-[#A3B18A] text-sm"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>

      {/* Decorative organic shape */}
      <div className="relative max-w-7xl mx-auto mt-16">
        <div className="absolute right-0 w-96 h-96 bg-[#A3B18A]/10 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
}
