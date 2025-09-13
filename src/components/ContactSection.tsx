import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "youssef.mohammed.hasan@gmail.com",
      href: "mailto:youssef.mohammed.hasan@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+20 1282185375",
      href: "tel:+201282185375",
      note: "Available on WhatsApp"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "youssef-mohammed52432",
      href: "https://www.linkedin.com/in/youssef-mohammed52432/"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Cairo, Egypt",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container-width section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16 fade-in">
            <h2 className="section-title">Let's Make Something Amazing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm open to collaborations, freelance opportunities, and full-scale company projects.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={20} />
                    </div>
                    <div className="text-left flex-1">
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                          target={contact.href.startsWith('http') ? '_blank' : undefined}
                          rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{contact.value}</p>
                      )}
                      {contact.note && (
                        <p className="text-xs text-muted-foreground mt-1">{contact.note}</p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          
          <div className="fade-in">
            <Button 
              size="lg"
              className="px-8 py-3 text-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => window.open('mailto:youssef.mohammed.hasan@gmail.com', '_blank')}
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;