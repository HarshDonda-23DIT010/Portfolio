import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Charusat University (DEPSTAR)',
    period: '2023 – Present',
    location: 'Charusat, Gujarat',
    description: 'Currently in 2nd year, focusing on advanced programming, data structures, AI/ML fundamentals, and software engineering principles.',
    status: 'current'
  },
  {
    degree: 'Higher Secondary (Science Stream)',
    institution: 'High School',
    period: '2021 – 2023',
    location: 'Gujarat, India',
    description: 'Completed with Science stream focusing on Mathematics, Physics, and Chemistry, laying the foundation for engineering studies.',
    status: 'completed'
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6 ml-20">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              My <span className="text-glow bg-gradient-neon bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-neon rounded-full mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic journey shaping my technical foundation and passion for innovation
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-green"></div>

            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-6 w-4 h-4 rounded-full ${
                    edu.status === 'current' ? 'bg-neon-cyan shadow-neon-cyan' : 'bg-neon-purple shadow-neon-purple'
                  } border-4 border-background`}></div>

                  {/* Education card */}
                  <div className="ml-20">
                    <div className="glass-card rounded-2xl p-8 hover-card">
                      <div className="space-y-4">
                        {/* Header */}
                        <div className="flex items-start justify-between">
                          <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                            <p className="text-xl text-neon-cyan font-semibold">{edu.institution}</p>
                          </div>
                          {edu.status === 'current' && (
                            <span className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-sm font-medium rounded-full">
                              Current
                            </span>
                          )}
                        </div>

                        {/* Details */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-neon-purple" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={16} className="text-neon-green" />
                            {edu.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievement highlight */}
          <div className="text-center mt-16">
            <div className="glass-card rounded-2xl p-6 max-w-md mx-auto">
              <GraduationCap size={48} className="text-neon-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Academic Focus</h3>
              <p className="text-muted-foreground">
                Specialized in AI/ML, Web Development, and Data Science with hands-on project experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;