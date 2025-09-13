import { Card } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = [
    {
      title: "Design Implementation",
      description: "I excel at implementing website designs and enhancing them with engaging animations and smooth transitions.",
      icon: "🎨"
    },
    {
      title: "Problem Solving",
      description: "I am a competitive programmer with the ability to devise effective solutions for implementing complex and challenging designs.",
      icon: "🧩"
    },
    {
      title: "Constraint Management",
      description: "I can work efficiently within budget and time constraints, often completing tasks well ahead of schedule and at a significantly lower cost than projected.",
      icon: "⚡"
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container-width section-padding">
        <h2 className="section-title text-center fade-in">Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="skill-card group fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center space-y-4">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;