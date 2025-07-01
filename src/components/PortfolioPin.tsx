
import React from 'react';
import { ExternalLink } from 'lucide-react';

interface PortfolioPinProps {
  children: React.ReactNode;
  title: string;
  href: string;
  onClick: () => void;
}

const PortfolioPin: React.FC<PortfolioPinProps> = ({ children, title, href, onClick }) => {
  return (
    <div className="group relative">
      {/* Pin Effect */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-8 bg-elegant-gold rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
          <div className="absolute inset-2 bg-true-black rounded-full" />
        </div>
        <div className="w-px h-6 bg-elegant-gold mx-auto" />
      </div>

      {/* Card Container */}
      <div 
        className="relative bg-space-gray/20 backdrop-blur-sm rounded-2xl border border-space-gray/30 overflow-hidden cursor-pointer transform hover:scale-[1.02] hover:-translate-y-2 transition-all duration-300 group-hover:border-elegant-gold/30"
        onClick={onClick}
      >
        {/* Hover Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-elegant-gold/5 via-transparent to-royal-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {children}

        {/* URL Display */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-true-black/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-muted-silver flex items-center gap-1">
            <ExternalLink size={12} />
            <span>{title}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPin;
