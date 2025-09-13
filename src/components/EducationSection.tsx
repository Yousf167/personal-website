import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <h2 className="section-title text-center fade-in">Education</h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-0 shadow-lg fade-in">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    Helwan University
                  </h3>
                  <Badge variant="secondary" className="w-fit">
                    2023 - Current
                  </Badge>
                </div>
                
                <h4 className="text-xl font-semibold text-primary mb-4">
                  Faculty of Computers and AI - Software Engineering
                </h4>
                
                <p className="text-foreground/90 leading-relaxed">
                  The Software Engineering track focuses on solving real-world problems through 
                  software solutions built on industry-standard principles. We learn how to design 
                  software systems for any type of business, following a clear process from 
                  conceptualization to realization.
                </p>
                
                <p className="text-foreground/90 leading-relaxed mt-4">
                  We're also trained to think critically by identifying problems, uncovering root 
                  causes, and crafting effective solutions. My goal is to become the closest 
                  possible reflection of the ideal software engineer.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;