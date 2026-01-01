import { User, Brain, Code } from 'lucide-react';
import ProfileCard from '@/blocks/Components/ProfileCard/ProfileCard';
import profile from '../assets/profile.jpg'
import profile1 from '../assets/profile-1.png'

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-12 md:py-20 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center justify-items-center ml-10">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-10 max-w-3xl lg:justify-self-start">
            <div className="space-y-4 md:space-y-6 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                About <span className="text-glow bg-gradient-neon bg-clip-text text-transparent">Me</span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-neon rounded-full mx-auto lg:mx-0"></div>
            </div>

            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-muted-foreground leading-relaxed text-center lg:text-left">
              <p className="text-lg md:text-xl leading-relaxed">
                Passionate about the intersection of <span className="text-sky-400 font-semibold">Artificial Intelligence</span>,
                <span className="text-blue-400 font-semibold"> Machine Learning</span>, and
                <span className="text-cyan-400 font-semibold"> Full-Stack Development</span>.
                I'm constantly exploring new technologies and pushing the boundaries of what's possible in the digital realm.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                Currently pursuing my <span className="text-foreground font-semibold">B.Tech in Information Technology</span> at
                <span className="text-sky-400 font-semibold"> Charusat University (DEPSTAR)</span>, where I'm in my 2nd year.
                My journey combines theoretical knowledge with hands-on experience in building innovative solutions using the MERN stack.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                I believe in learning by doing and have worked on diverse projects ranging from
                AI-powered applications to modern web platforms. My goal is to create
                technology that makes a meaningful impact on people's lives while continuously growing as a developer.
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-4 pt-6">
                <div className="flex items-center gap-2 text-sky-400 bg-sky-400/10 px-3 md:px-4 py-2 rounded-full border border-sky-400/20 hover:bg-sky-400/20 transition-all duration-300">
                  <Code className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-medium text-sm md:text-base">Full-Stack Developer</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400 bg-blue-400/10 px-3 md:px-4 py-2 rounded-full border border-blue-400/20 hover:bg-blue-400/20 transition-all duration-300">
                  <Brain className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-medium text-sm md:text-base">AI/ML Enthusiast</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-400 bg-cyan-400/10 px-3 md:px-4 py-2 rounded-full border border-cyan-400/20 hover:bg-cyan-400/20 transition-all duration-300">
                  <User className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="font-medium text-sm md:text-base">Problem Solver</span>
                </div>
              </div>
            </div>

          </div>

          {/* Enhanced Profile Card Container */}
          <div className="flex justify-center lg:justify-end mr-10 w-full">
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-sky-400/20 via-blue-400/20 to-cyan-400/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>

              <ProfileCard
                // Avatar and Visual
                avatarUrl={profile}
                miniAvatarUrl={profile}
                iconUrl="https://images.unsplash.com/photo-1614851099511-773084f6911d?w=200&h=200&fit=crop&auto=format"
                grainUrl="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&auto=format"

                // Personal Information
                name="Harsh Donda"
                title="MERN Stack Developer | AIML Enthusiast"
                titleColor="linear-gradient(to bottom, #38bdf8, #0ea5e9)"
                handle="harshdonda"
                status="Available for Projects"
                contactText="Let's Connect"

                // // Styling and Effects
                showBehindGradient={true}
                behindGradient="radial-gradient(farthest-side circle at var(--pointer-x) var(--pointer-y), hsla(196,100%,60%,var(--card-opacity)) 4%, hsla(196,50%,80%,calc(var(--card-opacity)*0.75)) 10%, hsla(196,25%,70%,calc(var(--card-opacity)*0.5)) 50%, hsla(196,0%,60%,0) 100%), radial-gradient(35% 52% at 55% 20%, #00d4ff 0%, #073aff00 100%), radial-gradient(100% 100% at 50% 50%, #00c1ffff 1%, #073aff00 76%), conic-gradient(from 124deg at 50% 50%, #37d4ffff 0%, #00c6ffff 40%, #00c6ffff 60%, #37d4ffff 100%)"
                innerGradient="linear-gradient(145deg, #1e3a8a44 0%, #0ea5e944 100%)"

                // // Interactive Features
                enableTilt={true}
                enableMobileTilt={true}
                mobileTiltSensitivity={3}

                // User Interface
                showUserInfo={true}
                className="w-80 md:w-96 h-[24rem] md:h-[28rem] relative z-10"

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