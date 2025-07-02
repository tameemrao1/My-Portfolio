
import React, { useEffect, useState } from 'react';

const CursorFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
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

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [role="button"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const handleMouseOut = () => {
      setIsVisible(false);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    document.addEventListener('mouseleave', handleMouseOut);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('mouseleave', handleMouseOut);
    };
  }, [isTouchDevice]);

  // Don't render cursor follower on touch devices
  if (isTouchDevice) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-200 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovering ? 'scale-150' : 'scale-100'}`}
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          width: '8px',
          height: '8px',
          backgroundColor: '#E5C07B',
          borderRadius: '50%',
          mixBlendMode: 'difference',
        }}
      />
      
      {/* Outer ring */}
      <div
        className={`fixed pointer-events-none z-[9998] transition-all duration-300 ease-out ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovering ? 'scale-200' : 'scale-100'}`}
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          width: '32px',
          height: '32px',
          border: '1px solid rgba(229, 192, 123, 0.3)',
          borderRadius: '50%',
        }}
      />
    </>
  );
};

export default CursorFollower;
