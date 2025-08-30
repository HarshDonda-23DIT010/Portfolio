import { useEffect, useState } from 'react';

const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      const newPosition = { x: e.clientX, y: e.clientY };
      setMousePosition(newPosition);
      
      // Add to trail
      setTrail(prev => {
        const newTrail = [...prev, { ...newPosition, id: Date.now() }];
        return newTrail.slice(-8); // Keep only last 8 trail points
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners for interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .hover-card, .dock-item');
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        className={`fixed pointer-events-none z-[9999] transition-all duration-200 ${
          isHovering ? 'scale-150' : 'scale-100'
        }`}
        style={{
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      >
        <div className="w-5 h-5 bg-neon-cyan/30 rounded-full border border-neon-cyan/50 animate-pulse">
          <div className="w-1 h-1 bg-neon-cyan rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      {/* Cursor Trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-[9998]"
          style={{
            left: point.x - 2,
            top: point.y - 2,
            opacity: (index + 1) / trail.length * 0.6,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div 
            className="bg-neon-purple/40 rounded-full transition-all duration-300"
            style={{
              width: `${2 + index * 0.5}px`,
              height: `${2 + index * 0.5}px`,
            }}
          ></div>
        </div>
      ))}

      {/* Outer Ring */}
      <div
        className={`fixed pointer-events-none z-[9997] transition-all duration-500 ${
          isHovering ? 'scale-200 opacity-60' : 'scale-100 opacity-30'
        }`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          transform: `translate(-50%, -50%) scale(${isHovering ? 2 : 1})`,
        }}
      >
        <div className="w-10 h-10 border border-neon-cyan/20 rounded-full animate-spin" style={{ animationDuration: '3s' }}></div>
      </div>
    </>
  );
};

export default CursorEffect;