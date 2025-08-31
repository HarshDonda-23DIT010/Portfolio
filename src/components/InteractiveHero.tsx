import { useState, useEffect, useRef } from 'react';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { Download, Code2, Sparkles, Terminal, Zap, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InteractiveHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [text, setText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ threshold: 0.1 });

  const roles = [
    'MERN Stack Developer',
    'AIML Enthusiast', 
    'Data Science Learner',
    'Problem Solver'
  ];

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove);
      return () => hero.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Typewriter effect
  useEffect(() => {
    const currentText = roles[currentRole];
    let index = 0;
    
    const timer = setInterval(() => {
      setText(currentText.slice(0, index));
      index++;
      
      if (index > currentText.length) {
        clearInterval(timer);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentRole]);

  // Animations
  const nameAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px) scale(1)' : 'translateY(50px) scale(0.8)',
    config: { tension: 280, friction: 60 }
  });

  const buttonAnimation = useSpring({
    transform: isHovered ? 'scale(1.05) rotateX(5deg)' : 'scale(1) rotateX(0deg)',
    boxShadow: isHovered 
      ? '0 20px 40px hsl(var(--neon-cyan) / 0.4)' 
      : '0 10px 20px hsl(var(--neon-cyan) / 0.2)',
    config: { tension: 300, friction: 10 }
  });

  const backgroundShapes = useTrail(6, {
    opacity: inView ? 0.6 : 0,
    transform: inView ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(180deg)',
    config: { tension: 280, friction: 60 },
    delay: 200
  });

  // Floating particles
  const particles = Array.from({ length: 30 }, (_, i) => (
    <div
      key={i}
      className="absolute w-1 h-1 bg-primary/60 rounded-full animate-pulse"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`,
        animationDuration: `${2 + Math.random() * 2}s`
      }}
    />
  ));

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden perspective-1000"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
          hsl(var(--primary) / 0.1) 0%, 
          hsl(var(--background)) 50%)`
      }}
    >
      <div ref={ref} className="container mx-auto px-6 text-center z-10 ml-20 relative">
        
        {/* Floating background shapes */}
        {backgroundShapes.map((style, i) => (
          <animated.div
            key={i}
            style={{
              ...style,
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 12)}%`,
            }}
            className={`absolute ${
              i % 3 === 0 ? 'w-32 h-32 bg-primary/10' : 
              i % 3 === 1 ? 'w-24 h-24 bg-accent/10' :
              'w-16 h-16 bg-secondary/20'
            } rounded-full blur-xl`}
          />
        ))}

        {/* Particles */}
        <div className="absolute inset-0">
          {particles}
        </div>

        {/* Main content */}
        <div className="space-y-8 relative z-10">
          {/* Animated name */}
          <animated.div style={nameAnimation} className="space-y-4">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Code2 className="w-8 h-8 text-primary animate-spin" style={{ animationDuration: '3s' }} />
              <Sparkles className="w-6 h-6 text-accent animate-pulse" />
              <Terminal className="w-8 h-8 text-primary animate-bounce" />
            </div>
            
            <h1 className="text-5xl md:text-8xl font-bold relative group">
              <span 
                className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent 
                           bg-size-200 animate-gradient-shift hover:animate-pulse transition-all duration-300
                           drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_hsl(var(--primary)/0.5)]"
              >
                Harsh Donda
              </span>
              
              {/* Glowing underline */}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 
                              bg-gradient-to-r from-primary to-accent rounded-full 
                              group-hover:w-full transition-all duration-700"></div>
            </h1>
          </animated.div>

          {/* Dynamic role with enhanced effects */}
          <div className="h-20 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent rounded-lg"></div>
            <p className="text-xl md:text-3xl text-muted-foreground relative z-10 font-medium">
              <span className="inline-flex items-center gap-2">
                <Zap className="w-6 h-6 text-accent animate-pulse" />
                {text}
                <span className="animate-pulse text-primary">|</span>
              </span>
            </p>
          </div>

          {/* Interactive CTA button */}
          <div className="pt-8 space-y-6">
            <animated.div style={buttonAnimation}>
              <Button 
                size="lg" 
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent 
                          text-primary-foreground font-semibold px-12 py-6 text-lg rounded-xl
                          border-2 border-transparent hover:border-primary/30 transition-all duration-300"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Button background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 
                               group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <span className="relative z-10 flex items-center gap-3">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                  <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                </span>
              </Button>
            </animated.div>

            {/* Secondary actions */}
            <div className="flex justify-center gap-4">
              <Button variant="outline" size="sm" className="group hover:bg-primary/10 transition-all duration-300">
                <Code2 className="w-4 h-4 mr-2 group-hover:animate-spin" />
                View Projects
              </Button>
              <Button variant="outline" size="sm" className="group hover:bg-accent/10 transition-all duration-300">
                <Terminal className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                Skills
              </Button>
            </div>
          </div>

          {/* Scroll indicator with animation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-muted-foreground">Scroll to explore</span>
              <ArrowDown className="w-6 h-6 text-primary animate-pulse" />
            </div>
          </div>
        </div>

        {/* Interactive orbs */}
        <div 
          className="absolute w-32 h-32 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl"
          style={{
            left: `${mousePosition.x * 0.1}%`,
            top: `${mousePosition.y * 0.1}%`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-24 h-24 bg-gradient-to-r from-accent/15 to-primary/15 rounded-full blur-lg"
          style={{
            right: `${(100 - mousePosition.x) * 0.15}%`,
            bottom: `${(100 - mousePosition.y) * 0.15}%`,
            transition: 'all 0.4s ease-out'
          }}
        />
      </div>
    </section>
  );
};

export default InteractiveHero;