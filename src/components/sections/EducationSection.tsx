import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

const educationData = [
  {
    level: "B.Tech, CSE (AI & ML)",
    institution: "Presidency University, Bengaluru",
    period: "2021 – 2025",
    grade: "CGPA: 7.13",
    icon: GraduationCap,
    color: "from-primary to-accent-blue"
  },
  {
    level: "Intermediate (MPC)",
    institution: "Narayana Junior College, Guntur",
    period: "2019 – 2021",
    grade: "73%",
    icon: Award,
    color: "from-accent-blue to-accent-red"
  },
  {
    level: "10th Class",
    institution: "Oxford H S, Guntur",
    period: "2018 – 2019",
    grade: "82.65%",
    icon: Award,
    color: "from-accent-red to-primary"
  }
];

export const EducationSection = () => {
  const elementRef = useScrollAnimation();

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={elementRef} className="fade-in">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Educational <span className="text-primary">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-blue mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Academic milestones that shaped my foundation in technology
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent-blue to-accent-red rounded-full opacity-20"></div>

            <div className="space-y-12">
              {educationData.map((education, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full ${index % 2 === 0 ? 'lg:w-5/12 lg:pr-8' : 'lg:w-5/12 lg:pl-8'}`}>
                    <Card className="card-interactive p-6 relative">
                      <CardContent className="p-0">
                        {/* Timeline Dot */}
                        <div className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-r from-primary to-accent-blue rounded-full border-4 border-background z-10 hidden lg:block"
                             style={{
                               [index % 2 === 0 ? 'right' : 'left']: '-26px'
                             }}>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0">
                            <div className={`w-12 h-12 bg-gradient-to-br ${education.color} rounded-full flex items-center justify-center`}>
                              <education.icon className="w-6 h-6 text-white" />
                            </div>
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-foreground mb-2">{education.level}</h3>
                            <p className="text-lg text-primary font-medium mb-2">{education.institution}</p>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                              <div className="flex items-center text-muted-foreground">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>{education.period}</span>
                              </div>
                              <div className="flex items-center">
                                <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm font-medium">
                                  {education.grade}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};