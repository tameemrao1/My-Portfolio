
import React, { useState, useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 600);
          }, 300);
          return 100;
        }
        return prev + Math.random() * 3 + 1;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 bg-true-black flex items-center justify-center transition-all duration-600 ${isComplete ? 'opacity-0 pointer-events-none' : ''}`}>
      {/* Minimal animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-elegant-gold/5 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-royal-indigo/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content */}
      <div className="relative text-center space-y-12">
        {/* Elegant Logo */}
        <div className="relative">
          <div className="text-6xl font-clash font-bold text-elegant-gold mb-4">
            T
          </div>
          <div className="text-sm font-geist text-soft-light/60 tracking-[0.3em]">
            TAMEEM RAO
          </div>
        </div>

        {/* Modern Progress Bar */}
        <div className="relative w-64 mx-auto">
          <div className="h-px bg-space-gray/30 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-elegant-gold to-royal-indigo transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 text-xs font-geist text-soft-light/40 tracking-wider">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Minimal loading dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-1 h-1 bg-elegant-gold/60 rounded-full animate-pulse" />
          <div className="w-1 h-1 bg-elegant-gold/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-1 h-1 bg-elegant-gold/60 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
