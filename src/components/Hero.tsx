import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-navy-medium to-background" />
      
      {/* Animated accent overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(214_95%_50%_/_0.1),transparent_50%)]" />
      
      <div className="container relative z-10 px-6 md:px-12 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground animate-fade-in-up">
            Excellence in
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Corporate Law
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Trusted legal counsel for Fortune 500 companies and industry leaders. 
            We deliver strategic solutions with unmatched expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-500 hover:scale-110 hover:shadow-2xl">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-500 group-hover:translate-x-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-secondary transition-all duration-500 hover:scale-110 hover:shadow-xl">
              Our Expertise
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
