import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(gridRef, { once: true, margin: "-100px" });

  const projects = [
    {
      image: "https://244014816.hs-sites-na2.com/hs-fs/hubfs/AI-Generated%20Media/Images/group_gallery-image_one.jpeg",
      category: "AI Voice Agents",
      title: "Real-Time Translation Bot",
      description: "AI-powered translation between caller and police operator, translating conversations in almost real-time for emergency situations.",
      tags: ["Customer Support", "NLP"],
      testId: "project-translation-bot"
    },
    {
      image: "https://244014816.hs-sites-na2.com/hs-fs/hubfs/AI-Generated%20Media/Images/group_gallery-image_two.jpeg",
      category: "Content Automation",
      title: "AI Content at Scale",
      description: "Create short form video content at scale with AI-generated scripts, avatars, and voice overs for social media and A/B testing.",
      tags: ["Development", "Automation"],
      testId: "project-content-scale"
    },
    {
      image: "https://244014816.hs-sites-na2.com/hs-fs/hubfs/AI-Generated%20Media/Images/group_gallery-image_three.jpeg",
      category: "Business Intelligence",
      title: "ReportGen AI",
      description: "Business intelligence product handling massive data volumes with optimizations to reduce hallucinations and improve runtime.",
      tags: ["Analytics", "Management"],
      testId: "project-reportgen-ai"
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
    <section id="projects" ref={sectionRef} className="py-32 bg-background" data-testid="projects-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6" data-testid="projects-title">
            We Ship. All the time.
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="projects-subtitle">
            Showcasing our AI-powered projects that transform ideas into reality
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden cursor-pointer group"
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                transition: { duration: 0.3 }
              }}
              data-testid={project.testId}
            >
              <div className="relative h-64 overflow-hidden project-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300"
                />
                <div className="project-overlay">
                  <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-mono text-primary uppercase tracking-widest">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Project Details */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4" data-testid="projects-about-title">
                  Transforming Ideas into <span className="gradient-text">Thriving AI-Driven Businesses</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  At NexaBloom, we specialize in turning innovative ideas into fully operational businesses powered by artificial intelligence. We partner with visionaries who have unique, profitable concepts and provide the AI systems and expertise needed to automate every aspect of their company.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  From customer support and coding to management and daily operations, we handle the complexity while you focus on your vision. In return for our resources and ongoing support, we share in the success, tailoring our involvement and ownership to the level of work required.
                </p>
              </div>
              <div>
                <img
                  src="https://244014816.hs-sites-na2.com/hs-fs/hubfs/AI-Generated%20Media/Images/image.jpeg?width=800&height=600&name=image.jpeg"
                  alt="AI-powered business solutions"
                  className="rounded-2xl shadow-2xl w-full h-auto"
                  data-testid="projects-about-image"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
