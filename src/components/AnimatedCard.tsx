import { useState, useRef } from 'react';
import { useSpring, animated } from '@react-spring/web';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  rotateIntensity?: number;
}

const AnimatedCard = ({ 
  children, 
  className = "", 
  hoverScale = 1.05,
  rotateIntensity = 10 
}: AnimatedCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    
    setMousePosition({ x, y });
  };

  const cardAnimation = useSpring({
    transform: isHovered 
      ? `scale(${hoverScale}) rotateY(${mousePosition.x * rotateIntensity}deg) rotateX(${-mousePosition.y * rotateIntensity}deg)`
      : 'scale(1) rotateY(0deg) rotateX(0deg)',
    boxShadow: isHovered
      ? '0 25px 50px hsl(var(--primary) / 0.25)'
      : '0 10px 25px hsl(var(--primary) / 0.1)',
    config: { tension: 300, friction: 10 }
  });

  const glowAnimation = useSpring({
    opacity: isHovered ? 1 : 0,
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
    config: { tension: 300, friction: 20 }
  });

  return (
    <div className="perspective-1000">
      <animated.div
        ref={cardRef}
        style={cardAnimation}
        className={`relative transform-gpu ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        {/* Glow effect */}
        <animated.div
          style={glowAnimation}
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur-xl -z-10"
        />
        
        {/* Card content */}
        <div className="relative z-10">
          {children}
        </div>
      </animated.div>
    </div>
  );
};

export default AnimatedCard;