import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Get in <span className="text-primary">Touch</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Ready to discuss your legal needs? Contact our team today.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`space-y-8 transition-all duration-1200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}>
            <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-500">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-500 hover:bg-primary/20 hover:scale-110">
                <Mail className="w-6 h-6 text-primary transition-transform duration-500 hover:rotate-12" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 transition-colors duration-300 hover:text-primary">Email</h3>
                <p className="text-muted-foreground transition-colors duration-300 hover:text-foreground">contact@premierlegal.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-500">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-500 hover:bg-primary/20 hover:scale-110">
                <Phone className="w-6 h-6 text-primary transition-transform duration-500 hover:rotate-12" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 transition-colors duration-300 hover:text-primary">Phone</h3>
                <p className="text-muted-foreground transition-colors duration-300 hover:text-foreground">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 hover:translate-x-2 transition-transform duration-500">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 transition-all duration-500 hover:bg-primary/20 hover:scale-110">
                <MapPin className="w-6 h-6 text-primary transition-transform duration-500 hover:rotate-12" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 transition-colors duration-300 hover:text-primary">Office</h3>
                <p className="text-muted-foreground transition-colors duration-300 hover:text-foreground">
                  123 Corporate Plaza, Suite 500<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <form className={`space-y-6 transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}>
            <div className="grid md:grid-cols-2 gap-4">
              <Input placeholder="First Name" className="bg-card border-border" />
              <Input placeholder="Last Name" className="bg-card border-border" />
            </div>
            
            <Input type="email" placeholder="Email Address" className="bg-card border-border" />
            
            <Input placeholder="Company" className="bg-card border-border" />
            
            <Textarea 
              placeholder="Tell us about your legal needs" 
              className="bg-card border-border min-h-[150px]"
            />
            
            <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground transition-all duration-500 hover:scale-105 hover:shadow-xl shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              Send Message
            </Button>
          </form>
        </div>
      </div>
      
      {/* Footer */}
      <div className="container px-6 md:px-12 mx-auto mt-20 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Premier Legal Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
