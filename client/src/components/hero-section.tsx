import { useEffect, useState } from "react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector("#services");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card pointer-events-none"></div>
      
      {/* Animated grid background */}
      <div 
        className="absolute inset-0 opacity-[0.02]" 
        style={{
          backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className={`transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Tagline with magic effect */}
          <div className="inline-block mb-6">
            <span className="text-sm font-mono text-muted-foreground tracking-widest uppercase" data-testid="hero-tagline">
              AI-Powered Innovation
            </span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight" data-testid="hero-title">
            <span className="text-foreground">Transform Your Ideas</span><br />
            <span className="gradient-text">Into AI-Driven Businesses</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed" data-testid="hero-subtitle">
            We specialize in turning innovative ideas into real, operational companies powered almost entirely by artificial intelligence. From customer support to management, we automate everything.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transform"
              data-testid="hero-cta-primary"
            >
              Submit Your Idea
            </button>
            <button
              onClick={scrollToServices}
              className="px-8 py-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-all font-semibold text-lg border border-border"
              data-testid="hero-cta-secondary"
            >
              Learn How It Works
            </button>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className={`mt-20 transition-all duration-800 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative rounded-2xl overflow-hidden border border-border/40 shadow-2xl" data-testid="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800" 
              alt="AI-driven business automation dashboard" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
