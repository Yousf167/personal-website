import { Card } from "@/components/ui/card";

const WorkProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Concept & Brief",
      description: "Understanding your brand and audience to create the perfect foundation for your project."
    },
    {
      number: "02", 
      title: "Requirements Gathering",
      description: "Setting budgets, defining deadlines, and creating designs when none are provided."
    },
    {
      number: "03",
      title: "Production", 
      description: "Creating the website with modern technologies and tools that bring your vision to life."
    },
    {
      number: "04",
      title: "Review & Optimization",
      description: "You will review the website and refine it with your own enhancements to ensure it aligns with your vision."
    },
    {
      number: "05",
      title: "Project Delivery",
      description: "Final delivery and hosting if required, ensuring everything is perfect and ready to launch."
    }
  ];

  return (
    <section id="process" className="py-20">
      <div className="container-width section-padding">
        <div className="text-center mb-16 fade-in">
          <h2 className="section-title">How I Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            You will be part of the process every step of the way
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step, index) => (
              <Card 
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {step.number}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12 fade-in">
            <p className="text-lg text-primary font-semibold">
              This workflow ensures quality websites with purpose and personality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkProcessSection;