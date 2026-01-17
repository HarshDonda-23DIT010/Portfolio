import { Briefcase, Calendar, MapPin, ArrowUpRight, ExternalLink, FileText } from 'lucide-react';

const workExperience = [
  {
    role: 'Full Stack Developer Internship',
    company: 'DEPSTAR',
    period: 'May 2025 – June 2025',
    location: 'Remote',
    description: 'Developed a DEPSTAR website for the university using React.js and Node.js.',
    achievements: [
      'Built responsive web applications with React and Node.js',
    ],
    status: 'completed',
    certificateUrl: 'https://drive.google.com/file/d/1o5muEzrWtbk9knJ1X_FZm5YyL9qbVAuJ/view?usp=sharing', // Replace with actual certificate URL
    workUrl: 'https://depstar.charusat.ac.in/' // Replace with actual work/project URL
  },
];

const WorkExperienceSection = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="space-y-8 md:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Work <span className="text-glow bg-gradient-neon bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-neon rounded-full mx-auto"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional journey and hands-on experience in building real-world solutions
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400 via-blue-400 to-cyan-400"></div>

            <div className="space-y-8 md:space-y-12">
              {workExperience.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className={`absolute left-2 md:left-6 w-4 h-4 rounded-full ${
                    exp.status === 'current' ? 'bg-sky-400 shadow-lg shadow-sky-400/50' : 'bg-blue-400 shadow-lg shadow-blue-400/50'
                  } border-4 border-background`}></div>

                  {/* Experience card */}
                  <div className="ml-12 md:ml-20">
                    <div className="glass-card rounded-2xl p-4 md:p-8 hover-card group">
                      <div className="space-y-3 md:space-y-4">
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
                          <div className="space-y-2">
                            <h3 className="text-lg md:text-2xl font-bold text-foreground group-hover:text-blue-300 transition-colors duration-300">
                              {exp.role}
                            </h3>
                            <p className="text-base md:text-xl text-blue-400 font-semibold flex items-center gap-2">
                              {exp.company}
                              <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </p>
                          </div>
                          {exp.status === 'current' && (
                            <span className="px-3 py-1 bg-purple-400/20 text-blue-400 text-xs md:text-sm font-medium rounded-full border border-purple-400/30 w-fit">
                              Current
                            </span>
                          )}
                        </div>

                        {/* Details */}
                        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-xs md:text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-blue-400 md:w-4 md:h-4" />
                            {exp.period}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-blue-400 md:w-4 md:h-4" />
                            {exp.location}
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <h4 className="text-sm md:text-base font-semibold text-foreground">Key Achievements:</h4>
                          <ul className="space-y-1 md:space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                                <span className="text-blue-400 ">•</span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3 pt-2">
                          <a
                            href={exp.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-400/10 text-blue-400 text-sm font-medium rounded-lg border border-blue-400/30 hover:bg-blue-400/20 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-400/25"
                          >
                            <FileText size={16} />
                            View Certificate
                            <ExternalLink size={14} />
                          </a>
                          <a
                            href={exp.workUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-cyan-400/10 text-cyan-400 text-sm font-medium rounded-lg border border-cyan-400/30 hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/25"
                          >
                            <ExternalLink size={16} />
                            Show Work
                          </a>
                        </div>
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

export default WorkExperienceSection;
