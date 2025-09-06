import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const elementRef = useScrollAnimation();

  const handleEmailClick = () => {
    window.location.href = "mailto:ssumasuma50@gmail.com";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/munnangi-suma-reddy-024734269/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/SumaReddyMunnangi", "_blank");
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-card-hover to-background" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-red/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div ref={elementRef} className="fade-in">
          {/* Profile Image Placeholder */}
          <div className="mx-auto w-32 h-32 mb-8 rounded-full bg-gradient-to-br from-primary to-accent-blue flex items-center justify-center shadow-hero">
            <span className="text-4xl font-bold text-white">MSR</span>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Munnangi{" "}
            <span className="bg-gradient-to-r from-primary to-accent-blue bg-clip-text text-transparent">
              Suma Reddy
            </span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-text-secondary mb-6">
            Computer Science & Engineering Student
            <span className="block text-lg sm:text-xl text-accent-blue">(AI & ML)</span>
          </h2>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate about AI, ML, and building impactful solutions that make a difference in the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button onClick={handleLinkedInClick} className="btn-hero group">
              <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              LinkedIn
            </Button>
            
            <Button onClick={handleGitHubClick} className="btn-outline group">
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              GitHub
            </Button>
            
            <Button onClick={handleEmailClick} className="btn-outline group">
              <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Email
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};