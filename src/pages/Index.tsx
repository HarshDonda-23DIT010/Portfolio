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
import VideoBackground from '@/components/VideoBackground';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
  };

  const isContentReady = !isLoading && isVideoLoaded;

  return (
    <>
      {/* Video Background */}
      <VideoBackground onVideoLoaded={handleVideoLoaded} />
      
      {/* Preloader */}
      <Loader onComplete={handleLoadingComplete} />
      
      {/* Main Content */}
      <div className={`transition-opacity duration-500 ${isContentReady ? 'opacity-100' : 'opacity-0'}`}>
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
