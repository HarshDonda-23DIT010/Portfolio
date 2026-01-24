import { useState, useEffect } from 'react';
import { Home, User, GraduationCap, Code, FolderOpen, Briefcase, Award, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'education', icon: GraduationCap, label: 'Education' },
  { id: 'experience', icon: Briefcase, label: 'Experience' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'projects', icon: FolderOpen, label: 'Projects' },
  { id: 'achievements', icon: Award, label: 'Achievements' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

const DockNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showNavbar, setShowNavbar] = useState(true); // Start visible
  const [isOnHeroSection, setIsOnHeroSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      const heroSection = document.getElementById('hero');
      
      // Check if we're still on hero section
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const currentlyOnHero = window.scrollY < heroBottom - 200; // 200px buffer
        setIsOnHeroSection(currentlyOnHero);
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      // Show navbar when cursor is in the left 100px of screen OR when on hero section
      setShowNavbar(isOnHeroSection || e.clientX <= 100);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isOnHeroSection]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation - Left Side with Glass Effect */}
      <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block transition-all duration-300">
        <div className="glass-nav rounded-2xl px-3 py-3 backdrop-blur-xl bg-gradient-to-br from-cyan-500/20 via-blue-500/15 to-sky-500/20 border border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
          <div className="flex flex-col items-center space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <div key={item.id} className="relative group">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-cyan-400/40 text-white shadow-lg shadow-cyan-400/50 scale-110' 
                        : 'text-white/70 hover:text-white hover:bg-cyan-400/20 hover:scale-105'
                    }`}
                  >
                    <Icon size={18} />
                  </button>
                  
                  {/* Tooltip */}
                  <div className="absolute left-14 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-cyan-900/90 to-blue-900/90 backdrop-blur-md rounded-lg px-3 py-2 text-sm font-medium text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap border border-cyan-400/30">
                    {item.label}
                    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-cyan-900/90 border-l border-b border-cyan-400/30 rotate-45"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom Center with Glass Effect */}
      <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 lg:hidden w-[95%] max-w-md">
        <div className="glass-nav rounded-full px-4 py-2 backdrop-blur-xl bg-gradient-to-r from-cyan-500/20 via-blue-500/15 to-sky-500/20 border border-cyan-400/30 shadow-2xl shadow-cyan-500/20">
          <div className="flex justify-between items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <div key={item.id} className="flex-1 relative group">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full h-14 rounded-full flex flex-col items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'bg-cyan-400/40 text-white scale-105 shadow-lg shadow-cyan-400/50' 
                        : 'text-white/70 hover:text-white hover:bg-cyan-400/20'
                    }`}
                  >
                    <Icon size={18} />
                    <span className={`text-[10px] mt-1 transition-opacity duration-200 ${
                      isActive ? 'opacity-100' : 'opacity-70'
                    }`}>
                      {item.label}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default DockNavigation;