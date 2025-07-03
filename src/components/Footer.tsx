
import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-true-black border-t border-space-gray/20 py-8">
      <div className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Logo */}
            <div className="flex items-center space-x-3 group">
              <img 
                src="/favicon.png" 
                alt="Tameem Logo" 
                className="w-8 h-8 rounded-lg transition-transform duration-200 group-hover:scale-105"
              />
              <span className="text-soft-light font-semibold group-hover:text-elegant-gold transition-colors duration-200">Tameem</span>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-muted-silver text-sm">
                © {currentYear} Tameem Rao. All rights reserved.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/tameemrao1" 
                className="text-muted-silver hover:text-elegant-gold transition-colors duration-300 p-2"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href="https://www.linkedin.com/in/tameemrao" 
                className="text-muted-silver hover:text-elegant-gold transition-colors duration-300 p-2"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              {/* <a 
                href="#" 
                className="text-muted-silver hover:text-elegant-gold transition-colors duration-300 p-2"
                aria-label="X (Twitter)"
              >
                <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a> */}
              <a 
                href="#" 
                className="text-muted-silver hover:text-elegant-gold transition-colors duration-300 p-2"
                aria-label="Fiverr"
              >
                <div className="w-[18px] h-[18px] bg-green-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">f</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
