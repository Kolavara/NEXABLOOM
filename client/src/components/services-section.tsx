import { useEffect, useRef } from "react";
import { Zap, ServerCog, Handshake } from "lucide-react";

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const fadeInElements = sectionRef.current?.querySelectorAll('.fade-in-section');
    fadeInElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "AI-Powered Company Creation",
      description: "Bring us your unique and profitable business idea. NexaBloom will design, launch, and automate your company, using state-of-the-art AI to handle operations like customer support, coding, management, and more.",
      testId: "service-company-creation"
    },
    {
      icon: <ServerCog className="w-8 h-8 text-primary" />,
      title: "Comprehensive AI Integration",
      description: "Our team installs and customizes AI systems that manage the day-to-day work. From automating support channels to streamlining internal processes, we ensure your business runs smoothly with minimal human intervention.",
      testId: "service-ai-integration"
    },
    {
      icon: <Handshake className="w-8 h-8 text-primary" />,
      title: "Shared Success Model",
      description: "NexaBloom invests resources and expertise to build your AI-driven business. In return, we take a fair share of ownership based on our level of involvement—aligning our success directly with yours.",
      testId: "service-shared-success"
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-background" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-section">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6" data-testid="services-title">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-subtitle">
            We bring AI, engineering & content expertise to transform your ideas into thriving businesses
          </p>
        </div>
        
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 project-card-hover cursor-pointer fade-in-section"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={service.testId}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
