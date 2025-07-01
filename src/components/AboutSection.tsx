
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 relative overflow-hidden">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Background Elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-elegant-gold/10 rounded-full animate-pulse" />
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-royal-indigo/10 rounded-full animate-pulse" />
          
          {/* Section Header */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-space-gray/50 px-4 py-2 rounded-full mb-8">
              <div className="w-2 h-2 bg-elegant-gold rounded-full animate-pulse" />
              <span className="text-sm font-medium text-elegant-gold tracking-wide font-geist">ABOUT ME</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-clash font-bold text-white mb-8 tracking-tight leading-[0.9]">
              Crafting Digital
              <span className="block text-gradient">Experiences</span>
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-soft-light/90 leading-relaxed font-geist mb-6">
  I’m a full-stack developer who partners with startups, businesses, and teams to turn ideas into fast, reliable, and scalable digital products — built with both user experience and long-term growth in mind.
</p>

<p className="text-lg text-soft-light/80 leading-relaxed font-geist">
  Whether it’s an AI-Powered SaaS MVP, dashboard, or business website, I build solutions that are lightweight, high-performing, and built to adapt — not just visually polished, but strategically designed to support real outcomes.
</p>




            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
