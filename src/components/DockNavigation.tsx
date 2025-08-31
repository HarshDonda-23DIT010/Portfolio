import { useState, useEffect } from 'react';
import { Home, User, GraduationCap, Code, FolderOpen, Heart, Mail } from 'lucide-react';

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'education', icon: GraduationCap, label: 'Education' },
  { id: 'skills', icon: Code, label: 'Skills' },
  { id: 'projects', icon: FolderOpen, label: 'Projects' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

const DockNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navigation - Left Side */}
      <nav className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="dock-nav rounded-2xl p-3 space-y-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <div key={item.id} className="relative group">
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`dock-item w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'active text-primary-foreground' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  }`}
                >
                  <Icon size={20} />
                </button>
                
                {/* Tooltip */}
                <div className="absolute left-16 top-1/2 transform -translate-y-1/2 bg-card border border-border rounded-lg px-3 py-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  {item.label}
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-card border-l border-b border-border rotate-45"></div>
                </div>
              </div>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation - Bottom */}
      <nav className="fixed bottom-4 left-4 right-4 z-40 lg:hidden">
        <div className="dock-nav rounded-2xl p-2 mx-auto max-w-md">
          <div className="flex justify-between items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <div key={item.id} className="flex-1 relative group">
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`dock-item w-full h-12 rounded-xl flex flex-col items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? 'active text-primary-foreground' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    <Icon size={18} />
                    <span className={`text-xs mt-1 transition-opacity duration-200 ${
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