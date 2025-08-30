import { useEffect, useState } from 'react';

const ScrollAnimations = ({ children }: { children: React.ReactNode }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Animate elements on scroll
      const elements = document.querySelectorAll('[data-scroll-animate]');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
          element.classList.add('animate-in');
          element.classList.remove('animate-out');
        } else {
          element.classList.add('animate-out');
          element.classList.remove('animate-in');
        }
      });

      // Parallax effects
      const parallaxElements = document.querySelectorAll('[data-parallax]');
      parallaxElements.forEach((element) => {
        const speed = element.getAttribute('data-parallax') || '0.5';
        const yPos = -(scrollY * parseFloat(speed));
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Parallax circles */}
        <div 
          className="absolute top-20 right-20 w-32 h-32 bg-neon-purple/5 rounded-full blur-xl"
          data-parallax="0.2"
        ></div>
        <div 
          className="absolute top-1/3 left-10 w-24 h-24 bg-neon-cyan/5 rounded-full blur-xl"
          data-parallax="0.3"
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-neon-green/5 rounded-full blur-xl"
          data-parallax="0.4"
        ></div>
        
        {/* Floating geometric shapes */}
        <div 
          className="absolute top-1/2 left-1/3 w-4 h-4 border border-neon-cyan/20 rotate-45"
          data-parallax="0.6"
          style={{ transform: `translateY(${-scrollY * 0.6}px) rotate(${scrollY * 0.1}deg)` }}
        ></div>
        <div 
          className="absolute top-2/3 right-1/3 w-6 h-6 border border-neon-purple/20 rounded-full"
          data-parallax="0.5"
          style={{ transform: `translateY(${-scrollY * 0.5}px) scale(${1 + Math.sin(scrollY * 0.001) * 0.2})` }}
        ></div>
      </div>

      {children}
    </div>
  );
};

export default ScrollAnimations;