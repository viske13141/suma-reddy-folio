import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Database, Cpu, Monitor, BookOpen } from "lucide-react";

const skillsData = [
  {
    category: "Programming",
    icon: Code,
    color: "from-primary to-accent-blue",
    skills: ["C", "Python", "Java", "JavaScript", "HTML", "CSS"]
  },
  {
    category: "Web Development",
    icon: Globe,
    color: "from-accent-blue to-accent-red",
    skills: ["React", "Node.js", "HTML5", "CSS3", "Responsive Design", "REST APIs"]
  },
  {
    category: "Databases",
    icon: Database,
    color: "from-accent-red to-primary",
    skills: ["MySQL", "MongoDB", "SQL", "Database Design", "Query Optimization"]
  },
  {
    category: "Hardware & Boards",
    icon: Cpu,
    color: "from-primary to-success",
    skills: ["Arduino", "Raspberry Pi", "ESP32", "Sensors", "IoT", "Embedded Systems"]
  },
  {
    category: "Operating Systems",
    icon: Monitor,
    color: "from-success to-accent-blue",
    skills: ["Windows", "Linux", "Ubuntu", "Command Line", "Shell Scripting"]
  },
  {
    category: "Courses & AI/ML",
    icon: BookOpen,
    color: "from-accent-blue to-accent-red",
    skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "TensorFlow", "OpenCV"]
  }
];

export const SkillsSection = () => {
  const elementRef = useScrollAnimation();

  return (
    <section id="skills" className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={elementRef} className="fade-in">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-blue mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive toolkit for building innovative solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((skillCategory, index) => (
              <Card key={index} className="card-interactive p-6 group">
                <CardContent className="p-0">
                  {/* Header */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${skillCategory.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <skillCategory.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{skillCategory.category}</h3>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-6">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Problem Solving",
                "Algorithm Design",
                "Software Architecture",
                "Version Control (Git)",
                "Agile Methodology",
                "Technical Documentation",
                "Code Review",
                "Testing & Debugging"
              ].map((competency, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-primary to-accent-blue text-white rounded-full text-sm font-medium hover:shadow-medium transition-all duration-300 cursor-default"
                >
                  {competency}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};