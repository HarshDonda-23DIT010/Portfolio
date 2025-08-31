import { useState, useEffect } from 'react';

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('button, a, input, textarea, [role="button"], .cursor-pointer');
      setIsHovering(!!isInteractive);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot - follows exactly */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        <div 
          className={`w-2 h-2 rounded-full transition-all duration-200 ${
            isHovering 
              ? 'bg-sky-300 scale-150' 
              : 'bg-sky-400 scale-100'
          }`}
        />
      </div>

      {/* Smooth trailing circle */}
      <div
        className={`fixed pointer-events-none z-40 transition-all duration-300 ease-out ${
          isVisible ? 'opacity-60' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: 'translate3d(0, 0, 0)',
        }}
      >
        <div 
          className={`w-8 h-8 rounded-full border transition-all duration-300 ${
            isHovering 
              ? 'border-sky-300/70 bg-sky-300/10 scale-125' 
              : 'border-sky-400/50 bg-sky-400/5 scale-100'
          }`}
        />
      </div>
    </>
  );
};

export default CursorFollower;
