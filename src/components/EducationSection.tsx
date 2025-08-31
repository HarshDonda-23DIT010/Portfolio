import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const educationData = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Charusat University of Science and Technology (DEPSTAR)',
    period: '2022 – Present',
    location: 'Charusat, India',
    description: 'Currently in 3rd year, focusing on Competitive programming, data structures, AI/ML fundamentals, and software engineering principles.',
    status: 'current'
  },
  {
    degree: 'Higher Secondary (Science Stream)',
    institution: 'P P Savani Vidhya Bhavan',
    period: '2020 – 2022',
    location: 'Gujarat, India',
    description: 'Completed with Science stream focusing on Mathematics, Physics, and Chemistry, laying the foundation for engineering studies.',
    status: 'completed'
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen flex items-center py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 lg:ml-20">
        <div className="space-y-8 md:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              My <span className="text-glow bg-gradient-neon bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-neon rounded-full mx-auto"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Academic journey shaping my technical foundation and passion for innovation
            </p>
          </div>

          {/* Education Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400 via-blue-400 to-cyan-400"></div>

            <div className="space-y-8 md:space-y-12">
              {educationData.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-2 md:left-6 w-4 h-4 rounded-full ${
                    edu.status === 'current' ? 'bg-sky-400 shadow-lg shadow-sky-400/50' : 'bg-blue-400 shadow-lg shadow-blue-400/50'
                  } border-4 border-background`}></div>

                  {/* Education card */}
                  <div className="ml-12 md:ml-20">
                    <div className="glass-card rounded-2xl p-4 md:p-8 hover-card">
                      <div className="space-y-3 md:space-y-4">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                          <div className="space-y-2">
                            <h3 className="text-lg md:text-2xl font-bold text-foreground">{edu.degree}</h3>
                            <p className="text-base md:text-xl text-sky-400 font-semibold">{edu.institution}</p>
                          </div>
                          {edu.status === 'current' && (
                            <span className="px-3 py-1 bg-sky-400/20 text-sky-400 text-xs md:text-sm font-medium rounded-full border border-sky-400/30 w-fit">
                              Current
                            </span>
                          )}
                        </div>

                        {/* Details */}
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs md:text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-blue-400 md:w-4 md:h-4" />
                            {edu.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-cyan-400 md:w-4 md:h-4" />
                            {edu.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;