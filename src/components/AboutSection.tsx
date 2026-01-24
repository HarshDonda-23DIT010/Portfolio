import { User, Brain, Code } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16 md:pb-20 relative">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-10 w-full max-w-3xl">
            <div className="space-y-4 md:space-y-6 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                About <span className="text-glow bg-gradient-neon bg-clip-text text-transparent">Me</span>
              </h2>
              <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-200 rounded-full mx-auto"></div>
            </div>

            <div className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed text-center">
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
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 pt-4 md:pt-6">
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

        </div>
      </div>
    </section>
  );
};

export default AboutSection;