import { User, Brain, Code } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6 ml-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                About <span className="text-glow bg-gradient-neon bg-clip-text text-transparent">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-neon rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Passionate about the intersection of <span className="text-neon-cyan font-semibold">Artificial Intelligence</span>, 
                <span className="text-neon-purple font-semibold"> Machine Learning</span>, and 
                <span className="text-neon-green font-semibold"> Web Development</span>. 
                I'm constantly exploring new technologies and pushing the boundaries of what's possible in the digital realm.
              </p>
              
              <p>
                Currently pursuing my <span className="text-foreground font-semibold">B.Tech in Information Technology</span> at 
                <span className="text-neon-cyan font-semibold"> Charusat University (DEPSTAR)</span>, where I'm in my 2nd year. 
                My journey combines theoretical knowledge with hands-on experience in building innovative solutions.
              </p>

              <p>
                I believe in learning by doing and have worked on diverse projects ranging from 
                AI-powered healthcare applications to full-stack web platforms. My goal is to create 
                technology that makes a meaningful impact on people's lives.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-cyan">15+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple">2</div>
                <div className="text-sm text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 hover-card">
              {/* Placeholder for profile photo */}
              <div className="w-full h-96 bg-gradient-card rounded-2xl flex items-center justify-center border border-border/50">
                <div className="text-center space-y-4">
                  <User size={64} className="text-neon-cyan mx-auto" />
                  <p className="text-muted-foreground">Professional Photo</p>
                </div>
              </div>
              
              {/* Floating icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-neon-cyan/20 rounded-full flex items-center justify-center">
                <Code size={20} className="text-neon-cyan" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center">
                <Brain size={20} className="text-neon-purple" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;