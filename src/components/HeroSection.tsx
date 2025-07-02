
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [currentTagline, setCurrentTagline] = useState(0);

  const taglines = [
  "AI-Powered SaaS MVPs",
  "SEO-Optimized Business Websites",
  "Real-Time Dashboards & CRMs",
  "High-Converting Landing Pages"
];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [taglines.length]);

  const handleContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePortfolio = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center">

      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-elegant-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-royal-indigo/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-elegant-gold/3 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="relative z-10 section-padding w-full">
        <div className="max-w-6xl mx-auto text-center">

          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 bg-space-gray/30 backdrop-blur-sm px-6 py-3 rounded-full mb-6 mt-6 border border-space-gray/20 hover:border-elegant-gold/30 transition-all duration-300">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50" />
            <span className="text-sm font-medium text-muted-silver font-geist tracking-wide">Available for new projects</span>
          </div>

          {/* Main Heading */}
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-clash font-bold text-soft-light leading-tight mb-8">
              <span className="block">Tameem Rao.</span>
              <span className="block text-2xl md:text-3xl lg:text-3xl font-normal text-muted-silver mt-4 font-geist">
                Full-Stack Developer for Startups & Businesses.
              </span>
            </h1>

          </div>

          {/* Simple Fade Animation for Taglines */}
          <div className="h-14 mb-8 flex items-center justify-center relative overflow-hidden">
            <p
              key={currentTagline}
              className="text-xl md:text-2xl lg:text-3xl text-gradient font-medium font-geist tracking-wide animate-fade-in"
            >
              {taglines[currentTagline]}
            </p>
          </div>

          {/* Value Proposition */}
          <p className="text-lg md:text-xl text-muted-silver leading-relaxed max-w-3xl mx-auto mb-10 font-geist">
    I Help Startups & Businesses Build Fast, Scalable Web Apps.
MVPs, dashboards, and business sites — designed to launch faster, convert better and drive real results.
</p>


          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <button onClick={handlePortfolio} className="premium-button group relative overflow-hidden transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-elegant-gold via-elegant-gold to-elegant-gold" />
              <span className="relative flex items-center gap-3 justify-center font-clash font-semibold">
                View My Work
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>

            <button
              onClick={handleContact}
              className="bg-space-gray/50 hover:bg-space-gray/70 text-soft-light font-semibold px-10 py-4 rounded-xl transition-all duration-300 backdrop-blur-sm border border-space-gray/30 hover:border-elegant-gold/30 transform hover:scale-105 font-clash"
            >
              Let's Talk
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-12 text-muted-silver mb-20">
            {[
              { label: 'Years Experience', value: '2+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Client Satisfaction', value: '100%' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="text-3xl font-bold text-elegant-gold mb-2 font-clash group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm font-geist">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            {[
              // { icon: Fiverr, href: '#' },
              // { icon: Linkedin, href: '#' },
              // { icon: Reddit, href: '#' }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="bg-space-gray/30 hover:bg-space-gray/50 p-4 rounded-xl transition-all duration-300 group backdrop-blur-sm border border-space-gray/20 hover:border-elegant-gold/30 transform hover:scale-110"
                >
                  <Icon size={24} className="text-muted-silver group-hover:text-elegant-gold transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-14 border-2 border-elegant-gold/30 rounded-full flex justify-center relative overflow-hidden">
          <div className="w-2 h-4 bg-elegant-gold rounded-full mt-3 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
