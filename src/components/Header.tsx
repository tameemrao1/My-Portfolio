
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navigationItems = [
    { id: 'hero', label: 'Home', description: '	Start here' },
    { id: 'about', label: 'About', description: 'Who I am. ' },
    { id: 'services', label: 'Services', description: 'What I offer' },
    { id: 'portfolio', label: 'Portfolio', description: 'My Featured Projects' },
    { id: 'testimonials', label: 'Testimonials', description: 'What others say about me' },
    { id: 'contact', label: 'Contact', description: 'Get in touch' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Calculate scroll progress
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(Math.min(currentProgress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-true-black/80 backdrop-blur-xl border-b border-space-gray/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => handleNavClick('hero')}
            >
              <img 
                src="/favicon.png" 
                alt="Tameem Logo" 
                className="w-10 h-10 rounded-lg transition-transform duration-200 group-hover:scale-105"
              />
              <span className="font-clash text-xl font-bold text-soft-light group-hover:text-elegant-gold transition-colors duration-200">
                Tameem
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="text-sm font-medium text-muted-silver hover:text-soft-light transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-elegant-gold transition-all duration-200 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button 
                onClick={() => handleNavClick('contact')}
                className="bg-elegant-gold hover:bg-elegant-gold/90 text-true-black font-medium px-6 py-2 rounded-full text-sm transition-all duration-200"
              >
                Let's Talk
              </button>
            </div>

            {/* Mobile Menu Button with Scroll Indicator */}
            <div className="md:hidden relative">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="relative p-3 rounded-full transition-all duration-300 hover:bg-space-gray/20 group"
                aria-label="Toggle mobile menu"
              >
                {/* Scroll Progress Ring */}
                <svg 
                  className="absolute inset-0 w-full h-full transform -rotate-90 opacity-70" 
                  viewBox="0 0 48 48"
                >
                  {/* Background Ring */}
                  <circle
                    cx="24"
                    cy="24"
                    r="16"
                    fill="transparent"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="2"
                  />
                  {/* Progress Ring */}
                  <circle
                    cx="24"
                    cy="24"
                    r="16"
                    fill="transparent"
                    stroke="#E5C07B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 16}`}
                    strokeDashoffset={`${2 * Math.PI * 16 - (scrollProgress / 100) * 2 * Math.PI * 16}`}
                    className="transition-all duration-300 ease-out"
                  />
                </svg>
                
                {/* Menu Icon */}
                <div className="relative z-10 text-soft-light group-hover:text-elegant-gold transition-colors duration-200">
                  {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </div>
              </button>

              {/* Scroll Progress Percentage */}
              {/* <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                <span className="text-xs text-muted-silver/60 font-medium">
                  {Math.round(scrollProgress)}%
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-true-black/60 backdrop-blur-md z-40 transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-space-gray/95 backdrop-blur-2xl z-50 transform transition-all duration-500 ease-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-space-gray/30">
          <div className="flex items-center space-x-3">
            <img 
              src="/favicon.png" 
              alt="Tameem Logo" 
              className="w-6 h-6 rounded"
            />
            <span className="font-clash text-lg font-semibold text-soft-light">Menu</span>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 rounded-full hover:bg-space-gray/40 transition-colors duration-200"
          >
            <X size={20} className="text-muted-silver hover:text-soft-light" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="p-6 space-y-2">
          {navigationItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full group text-left p-4 rounded-2xl transition-all duration-300 hover:bg-space-gray/40 hover:scale-[1.02] ${
                isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${index * 80}ms` : '0ms'
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-soft-light font-medium text-lg group-hover:text-elegant-gold transition-colors duration-200">
                    {item.label}
                  </div>
                  <div className="text-muted-silver text-sm mt-1 group-hover:text-soft-light/70 transition-colors duration-200">
                    {item.description}
                  </div>
                </div>
                <div className="w-1.5 h-1.5 bg-muted-silver/40 rounded-full group-hover:bg-elegant-gold transition-colors duration-200"></div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-space-gray/30">
          <button 
            onClick={() => handleNavClick('contact')}
            className={`w-full bg-elegant-gold hover:bg-elegant-gold/90 text-true-black font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
              isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ 
              transitionDelay: isMobileMenuOpen ? '400ms' : '0ms'
            }}
          >
            Let's Work Together
          </button>
          
          {/* Scroll Progress Bar */}
          <div className="mt-4 h-1 bg-space-gray/40 rounded-full overflow-hidden">
            <div 
              className="h-full bg-elegant-gold transition-all duration-300 ease-out"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
