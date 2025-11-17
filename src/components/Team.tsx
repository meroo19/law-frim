import { useEffect, useRef, useState } from "react";

const team = [
  {
    name: "Sarah Mitchell",
    role: "Managing Partner",
    specialty: "Corporate M&A",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    name: "James Crawford",
    role: "Senior Partner",
    specialty: "Litigation",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Partner",
    specialty: "Compliance",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Partner",
    specialty: "International Law",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
];

const Team = () => {
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
    <section id="team" ref={sectionRef} className="py-24 md:py-32 relative">
      <div className="container px-6 md:px-12 mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our <span className="text-primary">Team</span>
          </h2>
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Meet the legal experts who drive our success
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group transition-all duration-1000 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ 
                transitionDelay: `${index * 120}ms`,
                transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
              }}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-square shadow-lg hover:shadow-2xl transition-shadow duration-700">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end p-6">
                  <p className="text-sm text-muted-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{member.specialty}</p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-1 text-foreground transition-colors duration-300 group-hover:text-primary">
                {member.name}
              </h3>
              <p className="text-primary text-sm transition-all duration-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
