import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Calendar, ExternalLink } from "lucide-react";

export const PublicationsSection = () => {
  const headerRef = useScrollAnimation();
  const cardRef = useScrollAnimation();

  return (
    <section id="publications" className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="fade-in text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Research <span className="text-primary">Publications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-blue mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Contributing to the academic community through research and innovation
          </p>
        </div>

        {/* Publication Card */}
        <div ref={cardRef} className="scale-in animation-delay-300 max-w-4xl mx-auto">
            <Card className="card-interactive p-8 group">
              <CardContent className="p-0">
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent-blue rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      Health Buddy: AI-Powered Health Monitoring System
                    </h3>
                    
                    <div className="space-y-4">
                      {/* Publication Details */}
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center">
                          <span className="font-medium text-primary">Journal:</span>
                          <span className="ml-2">IJPREMS (International Journal of Production Research, Engineering & Management Systems)</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center">
                          <span className="font-medium text-primary">Volume:</span>
                          <span className="ml-2">Vol-05, Issue-01</span>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span className="font-medium text-primary">Date of Publication:</span>
                          <span className="ml-2">09/01/2025</span>
                        </div>
                      </div>

                      {/* Abstract */}
                      <div className="bg-muted/50 rounded-lg p-4">
                        <h4 className="font-semibold text-foreground mb-2">Abstract</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          This research presents Health Buddy, an innovative AI-powered health monitoring system that leverages 
                          machine learning algorithms to provide personalized health insights and recommendations. The system 
                          demonstrates significant potential in preventive healthcare by analyzing user health patterns, 
                          predicting potential health risks, and providing timely interventions. The implementation showcases 
                          the practical application of artificial intelligence in healthcare technology.
                        </p>
                      </div>

                      {/* Keywords */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Artificial Intelligence",
                            "Health Monitoring",
                            "Machine Learning",
                            "Healthcare Technology",
                            "Predictive Analytics",
                            "Mobile Health"
                          ].map((keyword, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-4">
                        <Button className="btn-outline group/btn">
                          <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
                          View Publication
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};