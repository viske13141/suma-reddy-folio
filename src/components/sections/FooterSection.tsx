import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Heart } from "lucide-react";

export const FooterSection = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:ssumasuma50@gmail.com";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+919705463333";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/munnangi-suma-reddy-024734269/", "_blank");
  };

  const handleGitHubClick = () => {
    window.open("https://github.com/SumaReddyMunnangi", "_blank");
  };

  return (
    <footer id="contact" className="py-20 section-gradient border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-blue mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's connect and explore opportunities to collaborate on innovative projects
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <Card className="card-interactive p-6 group cursor-pointer" onClick={handleEmailClick}>
            <CardContent className="p-0 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Email
              </h3>
              <p className="text-muted-foreground">ssumasuma50@gmail.com</p>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="card-interactive p-6 group cursor-pointer" onClick={handlePhoneClick}>
            <CardContent className="p-0 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-red rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Mobile
              </h3>
              <p className="text-muted-foreground">+91 9705463333</p>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="card-interactive p-6 group">
            <CardContent className="p-0 text-center">
              <div className="w-12 h-12 bg-gradient-to-br from-accent-red to-success rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                Location
              </h3>
              <p className="text-muted-foreground">Guntur, Andhra Pradesh, India</p>
            </CardContent>
          </Card>
        </div>

        {/* Social Links */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-6">Connect With Me</h3>
          <div className="flex justify-center space-x-4">
            <Button onClick={handleLinkedInClick} className="btn-outline group">
              <Linkedin className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              LinkedIn
            </Button>
            <Button onClick={handleGitHubClick} className="btn-outline group">
              <Github className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              GitHub
            </Button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground">
                © 2025 Munnangi Suma Reddy. All rights reserved.
              </p>
            </div>
            <div className="flex items-center text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-accent-red" />
              <span>and technology</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};