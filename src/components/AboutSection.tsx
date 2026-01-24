import { User, Brain, Code } from 'lucide-react';
import ProfileCard from '@/blocks/Components/ProfileCard/ProfileCard';
import profile from '../assets/profile.jpg'
import profile1 from '../assets/profile-1.png'

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16 md:py-20 relative">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center lg:ml-20">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-10 w-full max-w-3xl">
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                About <span className="text-glow bg-gradient-neon bg-clip-text text-transparent">Me</span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-200 rounded-full mx-auto lg:mx-0"></div>
            </div>

            <div className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                Passionate about the intersection of <span className="text-gray-300 font-semibold">Artificial Intelligence</span>,
                <span className="text-gray-400 font-semibold"> Machine Learning</span>, and
                <span className="text-gray-300 font-semibold"> Full-Stack Development</span>.
                I'm constantly exploring new technologies and pushing the boundaries of what's possible in the digital realm.
              </p>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                Currently pursuing my <span className="text-foreground font-semibold">B.Tech in Information Technology</span> at
                <span className="text-gray-300 font-semibold"> Charusat University (DEPSTAR)</span>, where I'm in my 3rd year.
                My journey combines theoretical knowledge with hands-on experience in building innovative solutions using the MERN stack.
              </p>

           
              {/* Skills Tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4 pt-4 md:pt-6">
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-300 bg-gray-400/10 px-2.5 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-gray-400/20 hover:bg-gray-400/20 transition-all duration-300">
                  <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  <span className="font-medium text-xs sm:text-sm md:text-base">Full-Stack Developer</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400 bg-gray-500/10 px-2.5 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-gray-500/20 hover:bg-gray-500/20 transition-all duration-300">
                  <Brain className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  <span className="font-medium text-xs sm:text-sm md:text-base">AI/ML Enthusiast</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 text-gray-300 bg-gray-400/10 px-2.5 sm:px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-gray-400/20 hover:bg-gray-400/20 transition-all duration-300">
                  <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  <span className="font-medium text-xs sm:text-sm md:text-base">Problem Solver</span>
                </div>
              </div>
            </div>

          </div>

          {/* Enhanced Profile Card Container */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="relative group w-full max-w-[280px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-none lg:ml-20">
              {/* Glowing background effect */}
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-gray-400/12 via-gray-300/12 to-gray-500/12 rounded-3xl blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>

              <ProfileCard
                // Avatar and Visual
                avatarUrl={profile}
                miniAvatarUrl={profile}
                iconUrl="https://images.unsplash.com/photo-1614851099511-773084f6911d?w=200&h=200&fit=crop&auto=format"
                grainUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&auto=format"

                // Personal Information
                name="Harsh Donda"
                title="MERN Stack Developer | AIML Enthusiast"
                titleColor="linear-gradient(to bottom, #b0b0c0, #909090)"
                handle="harshdonda"
                status="Available for Projects"
                contactText="Let's Connect"

                // // Styling and Effects
                showBehindGradient={true}
                behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), hsla(220,10%,70%,var(--card-opacity)) 4%, hsla(220,10%,75%,calc(var(--card-opacity)*0.75)) 10%, hsla(220,10%,65%,calc(var(--card-opacity)*0.5)) 50%, hsla(220,10%,60%,0) 100%), radial-gradient(35% 52% at 55% 20%, #b0b0c0 0%, #30303000 100%), radial-gradient(100% 100% at 50% 50%, #a0a0b0ff 1%, #30303000 76%), conic-gradient(from 124deg at 50% 50%, #b5b5c5ff 0%, #a0a0b0ff 40%, #a0a0b0ff 60%, #b5b5c5ff 100%)"
                innerGradient="linear-gradient(145deg, #3a3a4a44 0%, #50506044 100%)"

                // // Interactive Features
                enableTilt={true}
                enableMobileTilt={true}
                mobileTiltSensitivity={3}

                // User Interface
                showUserInfo={true}
                className="w-full h-[22rem] sm:h-[24rem] md:h-[26rem] lg:w-96 lg:h-[28rem] relative z-10"

                // Callback
                onContactClick={() => {
                  // Scroll to contact section or open email
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = 'mailto:harsh.donda@example.com';
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;