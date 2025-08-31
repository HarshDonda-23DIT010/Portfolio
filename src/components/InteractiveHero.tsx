import { useState, useEffect, useRef } from 'react';
import { useSpring, animated, useTrail } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { Download, Code2, Sparkles, Terminal, Zap, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Prism from '@/blocks/Backgrounds/Prism/Prism';
import resume from '@/assets/resume_harsh-donda.pdf';

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
    >
      {/* Galaxy Background */}
      <div className="absolute inset-0 z-0">
        <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
          <Prism
            animationType="rotate"
            timeScale={0.4}
            height={3}
            baseWidth={window.innerWidth < 768 ? 3.5 : 5.5}
            scale={window.innerWidth < 768 ? 2.5 : 4}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={0.4}
          />
        </div>
      </div>

      {/* Subtle gradient overlay to ensure text readability */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/40 z-5"></div> */}

      <div ref={ref} className="container mx-auto px-4 md:px-6 text-center z-10 md:ml-20 relative">

        {/* Floating background shapes with light blue theme */}
        {backgroundShapes.map((style, i) => (
          <animated.div
            key={i}
            style={{
              ...style,
              left: `${20 + (i * 15)}%`,
              top: `${10 + (i * 12)}%`,
              transform: `${style.transform} translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            }}
            className={`absolute ${i % 3 === 0 ? 'w-16 h-16 md:w-32 md:h-32 bg-sky-400/20 hover:bg-sky-300/30' :
              i % 3 === 1 ? 'w-12 h-12 md:w-24 md:h-24 bg-blue-400/15 hover:bg-blue-300/25' :
                'w-8 h-8 md:w-16 md:h-16 bg-cyan-400/25 hover:bg-cyan-300/35'
              } rounded-full blur-xl transition-all duration-500 cursor-pointer`}
          />
        ))}

        {/* Main content */}
        <div className="space-y-8 relative z-10">
          {/* Animated name with light blue theme */}
          <animated.div style={nameAnimation} className="space-y-4">
            

            <h1
              className="text-4xl md:text-5xl lg:text-8xl font-bold relative group cursor-pointer"
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`
              }}
            >
              <span
                className="bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent 
                           hover:from-sky-300 hover:via-blue-400 hover:to-cyan-300
                           transition-all duration-500 drop-shadow-2xl group-hover:drop-shadow-[0_0_30px_rgb(56_189_248)]"
                style={{
                  textShadow: `0 0 ${10 + mousePosition.x * 0.1}px rgba(56, 189, 248, 0.5), 0 0 ${20 + mousePosition.y * 0.1}px rgba(34, 211, 238, 0.3)`
                }}
              >
                Harsh Donda
              </span>
            </h1>
          </animated.div>

          {/* Dynamic role with light blue theme */}
          <div className="h-16 md:h-20 flex items-center justify-center relative">
            <p className="text-lg md:text-xl lg:text-3xl text-sky-100 relative z-10 font-medium">
              <span className="inline-flex items-center gap-2">
                <Zap className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 animate-pulse transition-colors duration-300 hover:text-cyan-300" />
                <span className="bg-gradient-to-r from-sky-300 to-cyan-300 bg-clip-text text-transparent">
                  {text}
                </span>
                <span className="animate-pulse text-sky-400">|</span>
              </span>
            </p>
          </div>

          <div className="pt-6 md:pt-8 max-w-2xl md:max-w-3xl mx-auto text-center space-y-3 md:space-y-4">
            <p className="text-base md:text-lg lg:text-xl text-sky-100/90 leading-relaxed px-4">
              I'm <span className="text-sky-300 font-semibold">Harsh Donda</span>,
              a full-stack developer and ML enthusiast passionate about creating
              <span className="text-sky-300 font-semibold"> innovative solutions </span>
              through web technologies and AI.
            </p>

            <p className="text-sm md:text-base lg:text-lg text-sky-200/80 leading-relaxed px-4">
              I specialize in the MERN stack, machine learning, and building apps
              that solve real-world problems.
            </p>
          </div>


          {/* Enhanced Interactive CTA Section */}
          <div className="pt-8 md:pt-12 flex flex-col items-center space-y-6 md:space-y-8 pb-20 lg:pb-8">
            {/* Primary CTA Button with light blue theme */}
            <animated.div style={buttonAnimation} className="relative group">
              <Button
                className="group relative overflow-hidden bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-500 
                          text-white font-bold px-8 md:px-16 py-4 md:py-8 text-lg md:text-xl rounded-xl md:rounded-2xl
                          border-2 border-sky-400/30 hover:border-sky-300/60 transition-all duration-500 
                          shadow-2xl hover:shadow-[0_20px_60px_rgba(56,189,248,0.4)]
                          transform-gpu hover:scale-105 active:scale-95"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = resume;
                  link.download = 'Harsh_Donda_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                style={{
                  transform: `${buttonAnimation.transform} translateX(${mousePosition.x * 0.02}px) translateY(${mousePosition.y * 0.02}px)`,
                  boxShadow: `0 0 ${20 + mousePosition.x * 0.1}px rgba(56, 189, 248, 0.6), ${buttonAnimation.boxShadow}`
                }}
              >
                {/* Enhanced shimmer effect with light blue */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-200/30 to-transparent 
                               opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-300"></div>

                {/* Enhanced button background effect with light blue */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/80 via-sky-400/80 to-blue-400/80 opacity-0 
                               group-hover:opacity-100 transition-all duration-500 rounded-2xl blur-sm"></div>

                {/* Enhanced glow effect with light blue */}
                <div className="absolute -inset-2 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 
                               group-hover:opacity-75 blur-xl transition-all duration-500 rounded-2xl"></div>

                <span className="relative z-10 flex items-center gap-2 md:gap-4">
                  <div className="relative">
                    <Download
                      className="w-5 h-5 md:w-6 md:h-6 group-hover:animate-bounce transition-transform duration-300 text-white"
                      style={{
                        filter: `drop-shadow(0 0 ${3 + mousePosition.x * 0.05}px rgba(255, 255, 255, 0.8))`
                      }}
                    />
                    {/* Enhanced Icon glow with light blue */}
                    <div className="absolute inset-0 w-5 h-5 md:w-6 md:h-6 opacity-0 group-hover:opacity-100 
                                   bg-sky-300/60 blur-md rounded-full transition-opacity duration-300"></div>
                  </div>

                  <span
                    className="tracking-wide text-white font-bold"
                    style={{
                      textShadow: `0 0 ${5 + mousePosition.y * 0.03}px rgba(255, 255, 255, 0.5)`
                    }}
                  >Download Resume</span>

                  <div className="relative hidden md:block">
                    <Sparkles
                      className="w-5 h-5 group-hover:animate-spin transition-transform duration-300 text-white"
                      style={{
                        filter: `drop-shadow(0 0 ${3 + mousePosition.y * 0.05}px rgba(255, 255, 255, 0.8))`
                      }}
                    />
                    {/* Enhanced Icon glow with light blue */}
                    <div className="absolute inset-0 w-5 h-5 opacity-0 group-hover:opacity-100 
                                   bg-cyan-300/60 blur-md rounded-full transition-opacity duration-300"></div>
                  </div>
                </span>

                {/* Enhanced Ripple effect with light blue */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400/40 to-cyan-400/40 
                                 scale-0 group-hover:scale-100 transition-transform duration-700 
                                 rounded-full blur-xl"></div>
                </div>
              </Button>

            </animated.div>

          </div>

        </div>

        {/* Enhanced Interactive orbs with light blue theme */}
        <div
          className="absolute w-32 h-32 bg-gradient-to-r from-sky-400/30 to-cyan-400/30 rounded-full blur-xl transition-all duration-300"
          style={{
            left: `${mousePosition.x * 0.1}%`,
            top: `${mousePosition.y * 0.1}%`,
            transform: `scale(${1 + mousePosition.x * 0.002}) rotate(${mousePosition.x * 0.5}deg)`,
            boxShadow: `0 0 ${20 + mousePosition.x * 0.1}px rgba(56, 189, 248, 0.4)`
          }}
        />
        <div
          className="absolute w-24 h-24 bg-gradient-to-r from-blue-400/25 to-sky-400/25 rounded-full blur-lg transition-all duration-300"
          style={{
            right: `${(100 - mousePosition.x) * 0.15}%`,
            bottom: `${(100 - mousePosition.y) * 0.15}%`,
            transform: `scale(${1 + mousePosition.y * 0.003}) rotate(${-mousePosition.y * 0.3}deg)`,
            boxShadow: `0 0 ${15 + mousePosition.y * 0.08}px rgba(96, 165, 250, 0.3)`
          }}
        />
      </div>
    </section>
  );
};

export default InteractiveHero;