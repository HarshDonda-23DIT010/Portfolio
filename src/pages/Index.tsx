import { useState } from 'react';
import Loader from '@/components/Loader';
import DockNavigation from '@/components/DockNavigation';
import CursorEffect from '@/components/CursorEffect';
import ScrollAnimations from '@/components/ScrollAnimations';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import HobbiesSection from '@/components/HobbiesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Custom Cursor */}
      <CursorEffect />
      
      {/* Preloader */}
      <Loader onComplete={handleLoadingComplete} />
      
      {/* Main Content */}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Dock Navigation */}
        <DockNavigation />
        
        {/* Scroll Animations Wrapper */}
        <ScrollAnimations>
          {/* Main Sections */}
          <main>
            <HeroSection />
            <AboutSection />
            <EducationSection />
            <SkillsSection />
            <ProjectsSection />
            <HobbiesSection />
            <ContactSection />
          </main>
          
          {/* Footer */}
          <Footer />
        </ScrollAnimations>
      </div>
    </>
  );
};

export default Index;
