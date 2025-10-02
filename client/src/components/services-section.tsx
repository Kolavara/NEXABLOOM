import { useRef } from "react";
import { Zap, ServerCog, Handshake } from "lucide-react";
import { motion, useInView } from "framer-motion";

export function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardsRef, { once: true, margin: "-100px" });

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="services" ref={sectionRef} className="py-16 md:py-20 bg-background" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6" data-testid="services-title">
            What We Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="services-subtitle">
            We bring AI, engineering & content expertise to transform your ideas into thriving businesses
          </p>
        </motion.div>
        
        {/* Service Cards Grid */}
        <motion.div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 cursor-pointer"
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                transition: { duration: 0.3 }
              }}
              data-testid={service.testId}
            >
              <motion.div 
                className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
