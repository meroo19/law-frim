import { useEffect, useRef, useState } from "react";

const stats = [
  { number: "500+", label: "Cases Won" },
  { number: "25+", label: "Years Experience" },
  { number: "50+", label: "Expert Attorneys" },
  { number: "98%", label: "Success Rate" },
];

const areas = [
  "Mergers & Acquisitions",
  "Corporate Governance",
  "Securities Law",
  "Intellectual Property",
  "Employment Law",
  "Tax Planning",
  "Real Estate",
  "International Trade",
];

const Expertise = () => {
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
    <section id="expertise" ref={sectionRef} className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-dark via-background to-navy-medium opacity-40" />
      
      <div className="container relative z-10 px-6 md:px-12 mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our <span className="text-primary">Expertise</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Proven results across diverse legal disciplines
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-1000 hover:scale-110 cursor-default ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${index * 80}ms`,
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 transition-all duration-500 hover:scale-110">
                {stat.number}
              </div>
              <div className="text-muted-foreground transition-colors duration-300 hover:text-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Practice Areas */}
        <div className="max-w-4xl mx-auto">
          <h3 className={`text-2xl md:text-3xl font-semibold text-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Practice Areas
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {areas.map((area, index) => (
              <div
                key={area}
                className={`p-4 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-700 hover:scale-105 hover:shadow-lg ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
                style={{ 
                  transitionDelay: `${400 + index * 60}ms`,
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary transition-transform duration-500 hover:scale-150" />
                  <span className="text-foreground transition-colors duration-300 hover:text-primary">{area}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
