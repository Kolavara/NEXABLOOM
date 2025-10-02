import { motion, useInView } from "framer-motion";
import { useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    quote: "NexaBloom transformed our concept into a fully automated AI-driven platform in just 3 months. Their expertise in AI integration is unmatched.",
    author: "Sarah Chen",
    role: "Founder",
    company: "TechFlow AI",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 2,
    quote: "The partnership model was perfect for us. We brought the vision, they brought the execution. Now we have a thriving business with minimal operational overhead.",
    author: "Marcus Rodriguez",
    role: "CEO",
    company: "DataSync Solutions",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus"
  },
  {
    id: 3,
    quote: "Working with NexaBloom felt like having an entire tech team at our disposal. They handled everything from AI model training to deployment.",
    author: "Emily Watson",
    role: "Co-Founder",
    company: "InsightAI",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily"
  },
  {
    id: 4,
    quote: "The equity partnership model aligned perfectly with our startup phase. We got world-class AI expertise without upfront capital requirements.",
    author: "David Park",
    role: "Founder & CTO",
    company: "AutomateHub",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
  },
  {
    id: 5,
    quote: "From ideation to launch, NexaBloom was there every step. Their AI solutions are cutting-edge, and the results speak for themselves.",
    author: "Jennifer Liu",
    role: "CEO",
    company: "SmartOps AI",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jennifer"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export function TestimonialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="testimonials" className="py-32 px-6 bg-muted/30" ref={ref}>
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <p className="text-muted-foreground uppercase tracking-wider mb-4">
            Client Success Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="gradient-text">Innovators</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Hear from entrepreneurs who partnered with us to build their AI-driven businesses
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_90%] lg:flex-[0_0_70%] px-4"
                >
                  <motion.div
                    className="bg-card border border-border rounded-xl p-8 md:p-12 mx-auto"
                    whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                    transition={{ duration: 0.3 }}
                    data-testid={`testimonial-card-${testimonial.id}`}
                  >
                    <Quote className="w-12 h-12 text-primary mb-6" />
                    <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-14 h-14 rounded-full border-2 border-primary"
                        data-testid={`avatar-${testimonial.id}`}
                      />
                      <div>
                        <p className="font-semibold text-foreground" data-testid={`author-${testimonial.id}`}>
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role} at {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              data-testid="button-prev-testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
              data-testid="button-next-testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
