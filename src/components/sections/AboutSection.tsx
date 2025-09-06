import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Heart } from "lucide-react";

export const AboutSection = () => {
  const elementRef = useScrollAnimation();

  return (
    <section id="about" className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={elementRef} className="fade-in">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-blue mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Driven by curiosity and passion for technology
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Objective Text */}
            <div className="space-y-6">
              <Card className="card-interactive p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-blue rounded-full flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">My Objective</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        As a dedicated Computer Science & Engineering student specializing in AI & ML, 
                        I am passionate about leveraging cutting-edge technology to solve real-world problems. 
                        My journey in the tech world is driven by curiosity, innovation, and a commitment to 
                        making a positive impact through intelligent solutions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-interactive p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-red to-accent-blue rounded-full flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">Innovation Focus</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        I believe in the power of artificial intelligence and machine learning to transform 
                        industries and improve lives. My projects range from health technology solutions to 
                        sustainable energy systems, always with an emphasis on practical applications.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Skills Highlights */}
            <div className="space-y-6">
              <Card className="card-interactive p-6">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-success to-accent-blue rounded-full flex items-center justify-center">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">What Drives Me</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Beyond technical skills, I bring strong interpersonal abilities including leadership, 
                        teamwork, and empathy. I believe that the best solutions come from understanding 
                        people's needs and collaborating effectively.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">Problem Solving</span>
                        <span className="px-3 py-1 bg-accent-blue/10 text-accent-blue rounded-full text-sm font-medium">Innovation</span>
                        <span className="px-3 py-1 bg-accent-red/10 text-accent-red rounded-full text-sm font-medium">Collaboration</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <Card className="card-interactive p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-primary mb-2">4+</div>
                    <div className="text-sm text-muted-foreground">Years of Study</div>
                  </CardContent>
                </Card>
                <Card className="card-interactive p-6 text-center">
                  <CardContent className="p-0">
                    <div className="text-2xl font-bold text-accent-blue mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};