import { useRef } from "react";
import { Check } from "lucide-react";
import { motion, useInView } from "framer-motion";

export function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-100px" });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="pricing" ref={sectionRef} className="py-32 bg-card/30" data-testid="pricing-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6" data-testid="pricing-title">
            Partnership Models
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="pricing-subtitle">
            Choose the partnership level that matches your vision and needs
          </p>
        </motion.div>
        
        {/* Pricing Cards Grid */}
        <motion.div 
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl p-8 relative ${
                plan.isPopular 
                  ? 'bg-card border-2 border-primary' 
                  : 'bg-card border border-border'
              }`}
              variants={cardVariants}
              whileHover={{ 
                y: -4,
                borderColor: plan.isPopular ? "hsl(var(--primary))" : "hsl(var(--accent))",
                transition: { duration: 0.3 }
              }}
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
              
              <motion.button
                onClick={scrollToContact}
                className={`block w-full py-3 px-6 text-center rounded-lg transition-all font-semibold ${
                  plan.buttonVariant === 'primary'
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-testid={`pricing-button-${plan.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
