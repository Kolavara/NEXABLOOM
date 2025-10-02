import { useEffect, useRef } from "react";
import { Check } from "lucide-react";

export function PricingSection() {
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

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pricingPlans = [
    {
      name: "Starter Partnership",
      description: "Ideal for early-stage entrepreneurs",
      equity: "10-20%",
      commitment: "one-time setup",
      features: [
        "AI-powered operations setup",
        "Automated customer support integration",
        "Basic business management tools",
        "Founder's onboarding and training"
      ],
      buttonText: "Apply Now",
      buttonVariant: "secondary" as const,
      testId: "pricing-starter"
    },
    {
      name: "Growth Accelerator",
      description: "Perfect for scaling existing ideas",
      equity: "20-35%",
      commitment: "setup & ongoing support",
      features: [
        "Full AI automation across departments",
        "Advanced analytics & reporting",
        "Custom AI integrations (sales, HR, etc.)",
        "Ongoing AI system optimization",
        "Bi-weekly strategic check-ins"
      ],
      buttonText: "Get Started",
      buttonVariant: "primary" as const,
      isPopular: true,
      testId: "pricing-growth"
    },
    {
      name: "Enterprise Launchpad",
      description: "For high-potential complex ideas",
      equity: "35-50%",
      commitment: "full partnership",
      features: [
        "End-to-end AI company setup",
        "Bespoke AI development for unique business needs",
        "Full operational and technical management",
        "Continuous improvement and scaling support",
        "Dedicated AI & human advisory team"
      ],
      buttonText: "Request Consultation",
      buttonVariant: "secondary" as const,
      testId: "pricing-enterprise"
    }
  ];

  return (
    <section id="pricing" ref={sectionRef} className="py-32 bg-card/30" data-testid="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 fade-in-section">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6" data-testid="pricing-title">
            Partnership Models
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="pricing-subtitle">
            Choose the partnership level that matches your vision and needs
          </p>
        </div>
        
        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card-hover rounded-2xl p-8 relative fade-in-section ${
                plan.isPopular 
                  ? 'bg-card border-2 border-primary' 
                  : 'bg-card border border-border'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={plan.testId}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-foreground">{plan.equity}</span>
                  <span className="text-muted-foreground">equity</span>
                </div>
                <p className="text-sm text-muted-foreground">{plan.commitment}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-foreground text-sm uppercase tracking-wide">What's Included</h4>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button
                onClick={scrollToContact}
                className={`block w-full py-3 px-6 text-center rounded-lg transition-all font-semibold ${
                  plan.buttonVariant === 'primary'
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border'
                }`}
                data-testid={`pricing-button-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
