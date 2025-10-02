import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { LogoCarousel } from "@/components/logo-carousel";
import { ServicesSection } from "@/components/services-section";
import { PricingSection } from "@/components/pricing-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Home() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <LogoCarousel />
      
      {/* About Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto text-center fade-in-section">
          <p className="text-muted-foreground uppercase tracking-wider mb-6">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            NexaBloom empowers innovators to launch real companies, seamlessly operated by <span className="gradient-text">advanced AI</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            We partner with visionaries to turn great ideas into thriving, automated businesses. From concept to execution, we handle the complexity while you focus on innovation.
          </p>
        </div>
      </section>
      
      <ServicesSection />
      <PricingSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">NexaBloom</h3>
              <p className="text-muted-foreground">
                Transforming innovative ideas into thriving AI-driven businesses.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><button onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-foreground transition-colors">AI Company Creation</button></li>
                <li><button onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-foreground transition-colors">AI Integration</button></li>
                <li><button onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-foreground transition-colors">Partnership Models</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><button onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-foreground transition-colors">Case Studies</button></li>
                <li><button onClick={() => document.querySelector("#pricing")?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-foreground transition-colors">Pricing</button></li>
                <li><button onClick={scrollToContact} className="hover:text-foreground transition-colors">Contact</button></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 NexaBloom. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
