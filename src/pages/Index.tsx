
import React, { useState } from 'react';
import Header from '@/components/Header';
import SpotlightCursor from '@/components/SpotlightCursor';
import CursorFollower from '@/components/CursorFollower';
// import CommandNavigation from '@/components/CommandNavigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import TechStackSection from '@/components/TechStackSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialSection from '@/components/TestimonialSection';
import Footer from '@/components/Footer';
import Preloader from '@/components/Preloader';
import { ExternalLink } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 100);
  };

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkedInRedirect = () => {
    window.open('https://linkedin.com/in/tameemrao', '_blank', 'noopener,noreferrer');
  };

  const handleFiverrRedirect = () => {
    window.open('https://fiverr.com/yourprofile', '_blank', 'noopener,noreferrer');
  };

  if (isLoading) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-true-black text-soft-light relative overflow-x-hidden">
      
      {/* Site Reveal Animation */}
      <div className={`transition-all duration-1000 ease-out ${showContent ? 'opacity-100 transform-none' : 'opacity-0 transform scale-95'}`}>
        
        {/* Interactive Elements */}
        <Header />
        <SpotlightCursor />
        <CursorFollower />
        {/* <CommandNavigation onNavigate={handleNavigate} /> */}
        
        {/* Main Content - Conversion Optimized Layout */}
        <main className="pt-16">
          {/* Content reveal from center */}
          <div className={`transition-all duration-800 delay-200 ease-out ${showContent ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-8'}`}>
            {/* 1. Hero - Strong First Impression & Clear Value Prop */}
            <HeroSection />

            {/* 4. About - Build Trust & Connection */}
            <AboutSection />
            
            {/* 2. Services - What I Offer (Moved up for conversion) */}
            <ServicesSection />
            
            {/* 3. Portfolio - Social Proof Through Work */}
            <PortfolioSection />
            
            {/* 6. Testimonials - Social Validation */}
            <TestimonialSection />
            
            {/* 7. Contact - Clear Call to Action */}
            <section id="contact" className="py-20 section-padding">
              <div className="max-w-3xl mx-auto text-center">
                <div className="premium-card">
                  <div className="inline-flex items-center gap-2 bg-true-black px-4 py-2 rounded-full mb-6">
                    <div className="w-2 h-2 bg-elegant-gold rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-muted-silver">Ready to Start?</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-5xl font-sf-pro font-bold text-soft-light mb-4">
                    Let's Build Something
                    <span className="block text-gradient">Extraordinary</span>
                  </h2>
                  
                  <p className="text-lg text-muted-silver mb-6 max-w-2xl mx-auto">
                    Transform your ideas into reality. Let's create something that stands out.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={handleLinkedInRedirect}
                      className="premium-button group relative overflow-hidden flex items-center justify-center gap-3"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <span>Connect on LinkedIn</span>
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                    <button 
                      onClick={handleFiverrRedirect}
                      className="bg-space-gray hover:bg-space-gray/80 text-soft-light font-medium px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-3 group"
                    >
                      <div className="w-5 h-5 bg-green-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">f</span>
                      </div>
                      <span>Hire on Fiverr</span>
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Index;
