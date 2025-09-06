import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Code, Database, Image, Brain, CheckCircle } from "lucide-react";

const certificationsData = [
  {
    title: "C Programming",
    issuer: "Infomax",
    icon: Code,
    color: "from-primary to-accent-blue",
    type: "Programming Language"
  },
  {
    title: "Python Programming",
    issuer: "HackerRank",
    icon: Code,
    color: "from-accent-blue to-accent-red",
    type: "Programming Language"
  },
  {
    title: "SQL Database Management",
    issuer: "Professional Certification",
    icon: Database,
    color: "from-accent-red to-primary",
    type: "Database"
  },
  {
    title: "Image Processing with Matlab",
    issuer: "Technical Certification",
    icon: Image,
    color: "from-primary to-success",
    type: "Image Processing"
  },
  {
    title: "Generative AI",
    issuer: "Google SkillUp",
    icon: Brain,
    color: "from-success to-accent-blue",
    type: "Artificial Intelligence"
  }
];

const interpersonalSkills = [
  { skill: "Leadership", description: "Leading teams and projects effectively" },
  { skill: "Teamwork", description: "Collaborating seamlessly with diverse groups" },
  { skill: "Empathy", description: "Understanding and connecting with others" }
];

export const CertificationsSection = () => {
  const headerRef = useScrollAnimation();

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div ref={headerRef} className="fade-in text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Certifications & <span className="text-primary">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent-blue mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Professional certifications and interpersonal skills that enhance technical expertise
          </p>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <CertificationsList />
        </div>

        {/* Interpersonal Skills */}
        <div className="mb-16">
          <InterpersonalSkillsList />
        </div>

        {/* Skills Summary */}
        <SkillsSummary />
      </div>
    </section>
  );
};

const CertificationsList = () => {
  const listHeaderRef = useScrollAnimation();
  
  return (
    <>
      <div ref={listHeaderRef} className="fade-in animation-delay-200">
        <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Professional Certifications</h3>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificationsData.map((cert, index) => {
          const certRef = useScrollAnimation();
          const delayClass = `animation-delay-${(index + 1) * 200}`;
          
          return (
            <div ref={certRef} key={index} className={`scale-in ${delayClass}`}>
              <Card className="card-interactive p-6 group h-full">
                  <CardContent className="p-0">
                    <div className="text-center">
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-br ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <cert.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content */}
                      <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {cert.title}
                      </h4>
                      <p className="text-muted-foreground text-sm mb-2">{cert.issuer}</p>
                      <span className="inline-block px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
                        {cert.type}
                      </span>
                    </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </>
  );
};

const InterpersonalSkillsList = () => {
  const skillsHeaderRef = useScrollAnimation();
  
  return (
    <>
      <div ref={skillsHeaderRef} className="fade-in animation-delay-600">
        <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">Interpersonal Skills</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {interpersonalSkills.map((item, index) => {
          const skillRef = useScrollAnimation();
          const delayClass = `animation-delay-${(index + 4) * 200}`;
          
          return (
            <div ref={skillRef} key={index} className={`scale-in ${delayClass}`}>
              <Card className="card-interactive p-6 group text-center h-full">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-success to-accent-blue rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.skill}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
              </CardContent>
            </Card>
          </div>
        );
      })}
    </div>
  </>
);
};

const SkillsSummary = () => {
  const summaryRef = useScrollAnimation();
  
  return (
    <div ref={summaryRef} className="scale-in animation-delay-1000 text-center">
            <Card className="card-interactive p-8 max-w-4xl mx-auto">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold text-foreground mb-4">Continuous Learning Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  My commitment to professional development is reflected in these certifications, which complement 
                  my academic foundation and practical experience. Combined with strong interpersonal skills, 
                  this creates a well-rounded profile ready to tackle complex technical challenges while 
                  effectively collaborating with diverse teams.
                </p>
                <div className="flex justify-center space-x-8 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">5+</div>
                    <div className="text-sm text-muted-foreground">Certifications</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-blue mb-1">3</div>
                    <div className="text-sm text-muted-foreground">Core Soft Skills</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent-red mb-1">∞</div>
                    <div className="text-sm text-muted-foreground">Learning Mindset</div>
                  </div>
                </div>
              </CardContent>
      </Card>
    </div>
  );
};