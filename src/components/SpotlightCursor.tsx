
import React, { useEffect, useState } from 'react';

const SpotlightCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device has touch capability
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        window.matchMedia('(pointer: coarse)').matches ||
        window.matchMedia('(max-width: 1024px)').matches // Also disable on tablets and below
      );
    };

    checkTouchDevice();
    
    // Re-check on resize (for devices that can switch between touch/mouse modes)
    window.addEventListener('resize', checkTouchDevice);

    return () => {
      window.removeEventListener('resize', checkTouchDevice);
    };
  }, []);

  useEffect(() => {
    // Don't add mouse event listeners on touch devices
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isTouchDevice]);

  // Don't render spotlight cursor on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <div
      className="spotlight-cursor"
      style={{
        '--x': `${mousePosition.x}px`,
        '--y': `${mousePosition.y}px`,
        opacity: isVisible ? 1 : 0,
      } as React.CSSProperties}
    />
  );
};

export default SpotlightCursor;
