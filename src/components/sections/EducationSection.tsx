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
  const headerRef = useScrollAnimation();

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="fade-in text-center mb-16">
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
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent-blue to-accent-red rounded-full opacity-30"></div>

          <div className="space-y-16">
            {educationData.map((education, index) => {
              const isLeft = index % 2 === 0;
              const animationClass = isLeft ? "slide-in-left" : "slide-in-right";
              const delayClass = `animation-delay-${index * 200}`;
              
              return (
                <TimelineItem 
                  key={index} 
                  education={education} 
                  index={index} 
                  isLeft={isLeft}
                  animationClass={animationClass}
                  delayClass={delayClass}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ education, index, isLeft, animationClass, delayClass }) => {
  const itemRef = useScrollAnimation();
  
  return (
    <div 
      ref={itemRef} 
      className={`${animationClass} ${delayClass} relative flex items-center ${
        isLeft ? 'justify-start' : 'justify-end'
      }`}
    >
      {/* Desktop Layout */}
      <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:pr-12' : 'lg:pl-12'} relative`}>
        {/* Timeline Dot */}
        <div 
          className="absolute top-8 w-6 h-6 bg-gradient-to-r from-primary to-accent-blue rounded-full border-4 border-background z-20 hidden lg:block shadow-lg"
          style={{
            [isLeft ? 'right' : 'left']: '-39px'
          }}
        >
          <div className="absolute inset-1 bg-gradient-to-r from-accent-blue to-primary rounded-full animate-pulse"></div>
        </div>
        
        {/* Connection Line to Dot */}
        <div 
          className={`absolute top-8 w-12 h-0.5 bg-gradient-to-r ${
            isLeft ? 'from-primary to-transparent right-0' : 'from-transparent to-primary left-0'
          } hidden lg:block`}
          style={{
            [isLeft ? 'right' : 'left']: '-12px'
          }}
        ></div>

        <Card className="card-interactive p-6 relative group hover:shadow-xl transform hover:-translate-y-2 transition-all duration-500">
          <CardContent className="p-0">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className={`w-14 h-14 bg-gradient-to-br ${education.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <education.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {education.level}
                </h3>
                <p className="text-lg text-primary font-semibold mb-3">{education.institution}</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="font-medium">{education.period}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="px-4 py-2 bg-success/15 text-success rounded-full text-sm font-bold border border-success/20 shadow-sm">
                      {education.grade}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Mobile Timeline Dot */}
      <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-primary to-accent-blue rounded-full border-3 border-background z-10 lg:hidden"></div>
    </div>
  );
};