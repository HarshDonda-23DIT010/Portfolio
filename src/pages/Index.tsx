import { useState } from 'react';
import Loader from '@/components/Loader';
import DockNavigation from '@/components/DockNavigation';
import InteractiveHero from '@/components/InteractiveHero';
import AboutSection from '@/components/AboutSection';
import EducationSection from '@/components/EducationSection';
import WorkExperienceSection from '@/components/WorkExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      {/* Preloader */}
      <Loader onComplete={handleLoadingComplete} />
      
      {/* Main Content */}
      <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Dock Navigation */}
        <DockNavigation />
        
        {/* Main Sections */}
        <main>
          <InteractiveHero />
          <AboutSection />
          <EducationSection />
          <WorkExperienceSection />
          <SkillsSection />
          <ProjectsSection />
          <AchievementsSection />
          <ContactSection />
        </main>
        
    
      </div>
    </>
  );
};

export default Index;
