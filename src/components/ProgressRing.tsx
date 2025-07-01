
import React, { useState, useEffect } from 'react';

interface ProgressRingProps {
  onNavigate: (section: string) => void;
}

const ProgressRing: React.FC<ProgressRingProps> = ({ onNavigate }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  const sections = [
    { id: 'hero', label: 'Home', angle: 0 },
    { id: 'about', label: 'About', angle: 72 },
    { id: 'skills', label: 'Skills', angle: 144 },
    { id: 'projects', label: 'Projects', angle: 216 },
    { id: 'contact', label: 'Contact', angle: 288 },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(currentProgress);

      // Determine active section
      const sectionElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
      <div className="relative w-20 h-20">
        {/* Background Circle */}
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="2"
          />
          
          {/* Progress Circle */}
          <circle
            cx="40"
            cy="40"
            r={radius}
            fill="transparent"
            stroke="#007AFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-300 ease-out"
          />
        </svg>

        {/* Section Dots */}
        {sections.map((section) => {
          const angle = (section.angle - 90) * (Math.PI / 180); // Convert to radians and adjust for rotation
          const x = 40 + (radius + 8) * Math.cos(angle);
          const y = 40 + (radius + 8) * Math.sin(angle);
          
          return (
            <button
              key={section.id}
              onClick={() => onNavigate(section.id)}
              className={`absolute w-3 h-3 rounded-full transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 group ${
                activeSection === section.id 
                  ? 'bg-apple-blue scale-125' 
                  : 'bg-white/30 hover:bg-white/50 hover:scale-110'
              }`}
              style={{ left: `${x}px`, top: `${y}px` }}
              title={section.label}
            >
              <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                x > 40 ? '-translate-x-full -ml-3' : 'translate-x-full ml-3'
              }`}>
                <div className="glass-effect px-2 py-1 rounded text-xs text-white whitespace-nowrap">
                  {section.label}
                </div>
              </div>
            </button>
          );
        })}

        {/* Center Progress Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium text-apple-white/70">
            {Math.round(scrollProgress)}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProgressRing;
