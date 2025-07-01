
import React, { useEffect, useRef } from 'react';
import { Code2, Database, Globe, Smartphone, Server, Zap, Layers, GitBranch } from 'lucide-react';

const TechStackSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const techStack = [
    { name: 'Next.js', experience: '3+ years', icon: Globe, color: 'from-blue-500 to-cyan-500' },
    { name: 'TypeScript', experience: '2+ years', icon: Code2, color: 'from-blue-600 to-indigo-600' },
    { name: 'Tailwind CSS', experience: '3+ years', icon: Layers, color: 'from-cyan-500 to-teal-500' },
    { name: 'Firebase', experience: '2+ years', icon: Zap, color: 'from-orange-500 to-red-500' },
    { name: 'Supabase', experience: '1+ years', icon: Database, color: 'from-green-500 to-emerald-500' },
    { name: 'React', experience: '3+ years', icon: Smartphone, color: 'from-blue-400 to-blue-600' },
    { name: 'Node.js', experience: '2+ years', icon: Server, color: 'from-green-600 to-lime-600' },
    { name: 'PostgreSQL', experience: '2+ years', icon: GitBranch, color: 'from-purple-500 to-pink-500' },
  ];

  // Duplicate for infinite scroll
  const duplicatedTech = [...techStack, ...techStack];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.tech-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('sand-revealed');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id='stack' className="py-20 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-elegant-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-royal-indigo/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="section-padding relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-space-gray/50 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-elegant-gold rounded-full animate-pulse" />
              <span className="text-sm font-medium text-elegant-gold tracking-wide font-geist">TECHNOLOGY STACK</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-clash font-bold text-white mb-6 tracking-tight">
              Tools I Master
            </h2>
            <p className="text-lg text-soft-light/80 font-geist max-w-2xl mx-auto">
              Technologies and frameworks I use daily to create exceptional digital experiences
            </p>
          </div>

          {/* Infinite Horizontal Scroll with Sand Animation */}
          <div className="relative overflow-hidden">
            <div className="flex gap-8 tech-scroll">
              {duplicatedTech.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={`${tech.name}-${index}`}
                    className="tech-card flex-shrink-0 bg-space-gray/30 backdrop-blur-sm rounded-2xl p-8 hover:bg-space-gray/50 transition-all duration-500 cursor-pointer group min-w-[200px] border border-space-gray/20 sand-reveal relative"
                  >
                    {/* 3D Icon Container */}
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.color} p-4 mx-auto transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <Icon size={32} className="text-white" />
                      </div>
                      
                      {/* Floating particles around icon */}
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-elegant-gold/60 rounded-full floating-particle" />
                      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-royal-indigo/60 rounded-full floating-particle" style={{ animationDelay: '1s' }} />
                    </div>

                    <div className="text-center relative z-10">
                      <h3 className="text-soft-light font-clash font-semibold mb-2 group-hover:text-elegant-gold transition-colors text-lg">
                        {tech.name}
                      </h3>
                      <p className="text-sm text-muted-silver font-geist">
                        {tech.experience}
                      </p>
                    </div>

                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-elegant-gold/0 to-royal-indigo/0 group-hover:from-elegant-gold/10 group-hover:to-royal-indigo/10 transition-all duration-300" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-space-gray/20 backdrop-blur-sm px-8 py-4 rounded-2xl border border-space-gray/20">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`w-8 h-8 rounded-full bg-gradient-to-br from-elegant-gold to-royal-indigo floating-particle`} style={{ animationDelay: `${i * 0.5}s` }} />
                ))}
              </div>
              <span className="text-soft-light font-geist font-medium">Always learning, always growing</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .sand-revealed::before {
          animation: sandFlow 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TechStackSection;
