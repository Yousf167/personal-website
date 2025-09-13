import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center fade-in">About Me</h2>
          
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-0 shadow-lg fade-in">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                Hi! I'm <span className="text-primary font-semibold">Youssef</span>, a Front-end Developer 
                passionate about crafting stunning, impactful websites for businesses and individuals. 
                My portfolio is still taking shape, but every project I work on is built with the same goal: 
                to blend creativity, precision, and a touch of personality into something truly memorable.
              </p>
              
              <p className="text-lg leading-relaxed text-foreground/90">
                Currently pursuing my degree in Software Engineering at Helwan University, I'm dedicated to 
                becoming the closest possible reflection of the ideal software engineer. I believe in solving 
                real-world problems through thoughtful software solutions built on industry-standard principles.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;