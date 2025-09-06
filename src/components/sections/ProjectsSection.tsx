import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ExternalLink, Github, Zap, Car, Heart, Wrench } from "lucide-react";

const projectsData = [
  {
    title: "Measurement of Muscle Strength",
    shortDescription: "Arduino-based EMG sensor system for muscle strength analysis",
    fullDescription: "An innovative biomedical project that utilizes Arduino microcontrollers and EMG (Electromyography) sensors to measure and analyze muscle strength in real-time. The system captures electrical activity produced by skeletal muscles, processes the signals, and provides quantitative measurements of muscle strength. This project has applications in rehabilitation, sports science, and medical diagnostics.",
    technologies: ["Arduino", "EMG Sensors", "C++", "Signal Processing", "Data Analysis"],
    icon: Zap,
    color: "from-primary to-accent-blue",
    features: [
      "Real-time EMG signal acquisition",
      "Digital signal processing algorithms",
      "Muscle strength quantification",
      "Data visualization dashboard",
      "Calibration and normalization systems"
    ]
  },
  {
    title: "Charging Station for E-Vehicles",
    shortDescription: "Solar-powered electric vehicle charging infrastructure",
    fullDescription: "A sustainable energy solution that combines solar power technology with electric vehicle charging infrastructure. This project focuses on creating an eco-friendly charging station that harnesses solar energy to power electric vehicles, reducing dependence on grid electricity and promoting clean transportation. The system includes solar panels, battery storage, power management, and user interface components.",
    technologies: ["Solar Panels", "Battery Management", "Power Electronics", "IoT", "Renewable Energy"],
    icon: Zap,
    color: "from-accent-blue to-success",
    features: [
      "Solar energy harvesting system",
      "Battery storage and management",
      "Smart charging algorithms",
      "Energy monitoring dashboard",
      "Grid-tie capability for excess power"
    ]
  },
  {
    title: "Responsive Car Website",
    shortDescription: "Modern, responsive web application for automotive showcase",
    fullDescription: "A comprehensive web development project showcasing modern frontend technologies and responsive design principles. This automotive website features interactive car displays, detailed specifications, comparison tools, and a seamless user experience across all devices. The project demonstrates proficiency in modern web development frameworks and design patterns.",
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Responsive Design", "Bootstrap"],
    icon: Car,
    color: "from-accent-red to-primary",
    features: [
      "Responsive design for all devices",
      "Interactive car gallery",
      "Advanced filtering and search",
      "Performance optimization",
      "Modern UI/UX design patterns"
    ]
  },
  {
    title: "Health Buddy",
    shortDescription: "AI-powered health monitoring and assistance application",
    fullDescription: "An intelligent health management application that leverages artificial intelligence to provide personalized health insights, monitoring, and recommendations. Health Buddy uses machine learning algorithms to analyze user health data, predict potential health issues, and provide actionable recommendations. This project demonstrates the application of AI in healthcare technology.",
    technologies: ["Python", "Machine Learning", "AI", "Healthcare APIs", "Mobile Development", "Data Analytics"],
    icon: Heart,
    color: "from-success to-accent-blue",
    features: [
      "AI-powered health analysis",
      "Personalized recommendations",
      "Health trend monitoring",
      "Emergency alert systems",
      "Integration with wearable devices"
    ]
  }
];

export const ProjectsSection = () => {
  const elementRef = useScrollAnimation();
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={elementRef} className="fade-in">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-blue mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Innovative solutions that demonstrate technical expertise and creative problem-solving
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <Card key={index} className="card-interactive p-6 group">
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-3">
                        {project.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex-1" onClick={() => setSelectedProject(index)}>
                          <Wrench className="w-4 h-4 mr-2" />
                          Read More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="flex items-center space-x-3">
                            <div className={`w-8 h-8 bg-gradient-to-br ${project.color} rounded-full flex items-center justify-center`}>
                              <project.icon className="w-4 h-4 text-white" />
                            </div>
                            <span>{project.title}</span>
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <p className="text-muted-foreground leading-relaxed">
                            {project.fullDescription}
                          </p>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              {project.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                                  <span className="text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};