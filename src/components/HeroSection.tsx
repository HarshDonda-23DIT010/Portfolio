import { useState, useEffect } from 'react';
import { Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [text, setText] = useState('');
  const fullText = 'MERN Stack Developer | AIML Enthusiast | Data Science Learner';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 15 + 10}s`
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10 ml-20">
        <div className="space-y-8 float-animation" data-scroll-animate>
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold reveal-up">
            <span className="text-glow bg-gradient-neon bg-clip-text text-transparent glow-pulse">
              Harsh Donda
            </span>
          </h1>

          {/* Typing effect for subtitle */}
          <div className="h-16 flex items-center justify-center reveal-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {text}
              <span className="animate-pulse text-neon-cyan">|</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-8 reveal-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="neon-glow bg-gradient-neon hover:shadow-glow text-primary-foreground font-semibold px-8 py-4 text-lg magnetic hover:scale-105"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-neon-cyan" />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-neon-purple/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-neon-cyan/20 rounded-full blur-xl"></div>
      <div className="absolute top-40 left-1/3 w-16 h-16 bg-neon-green/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;