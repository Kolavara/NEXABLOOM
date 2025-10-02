export function LogoCarousel() {
  const logos = [
    {
      src: "https://244014816.hs-sites-na2.com/hubfs/AI-Generated%20Media/Images/group_logos-logo_one.jpeg",
      alt: "TechStart Inc.",
      name: "TechStart Inc."
    },
    {
      src: "https://244014816.hs-sites-na2.com/hubfs/AI-Generated%20Media/Images/group_logos-logo_two.jpeg",
      alt: "GreenWave Solutions",
      name: "GreenWave Solutions"
    },
    {
      src: "https://244014816.hs-sites-na2.com/hubfs/AI-Generated%20Media/Images/group_logos-logo_three.jpeg",
      alt: "HealthSync AI",
      name: "HealthSync AI"
    },
    {
      src: "https://244014816.hs-sites-na2.com/hubfs/AI-Generated%20Media/Images/group_logos-logo_four.jpeg",
      alt: "EduFlex Systems",
      name: "EduFlex Systems"
    },
    {
      src: "https://244014816.hs-sites-na2.com/hubfs/AI-Generated%20Media/Images/group_logos-logo_five.jpeg",
      alt: "MarketMinds Labs",
      name: "MarketMinds Labs"
    },
    {
      src: "https://244014816.hs-sites-na2.com/hubfs/AI-Generated%20Media/Images/group_logos-logo_six.jpeg",
      alt: "UrbanNest Robotics",
      name: "UrbanNest Robotics"
    }
  ];

  return (
    <section className="py-4 md:py-6 bg-card/50 border-y border-border/40 overflow-hidden" data-testid="logo-carousel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-3xl font-bold text-center text-foreground" data-testid="carousel-title">
          Innovative Companies <span className="text-muted-foreground">Powered by NexaBloom</span>
        </h2>
      </div>
      
      {/* Infinite scrolling carousel */}
      <div className="relative">
        <div className="flex scroll-animation">
          {/* First set of logos */}
          <div className="flex items-center space-x-16 px-8">
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-secondary rounded-xl border border-border/40 hover:border-accent/40 transition-colors"
                data-testid={`logo-${logo.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-32 h-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center space-x-16 px-8">
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center bg-secondary rounded-xl border border-border/40 hover:border-accent/40 transition-colors"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-32 h-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
