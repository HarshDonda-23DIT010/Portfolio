import { Award, Trophy, Medal, Star, ExternalLink } from 'lucide-react';

const achievements = [
  {
    title: 'Hackathon Winner',
    organization: 'Tech Fest 2024',
    date: 'March 2024',
    description: 'First place in web development category for building an innovative AI-powered solution.',
    icon: Trophy,
    color: 'yellow'
  },
  {
    title: 'Best Project Award',
    organization: 'University Tech Expo',
    date: 'December 2023',
    description: 'Recognized for outstanding project implementation in Machine Learning domain.',
    icon: Award,
    color: 'blue'
  },
  {
    title: 'Competitive Programming',
    organization: 'LeetCode',
    date: 'Ongoing',
    description: 'Solved 500+ problems across various difficulty levels, maintaining a consistent solving streak.',
    icon: Star,
    color: 'green'
  }
];

const certifications = [
  {
    title: 'Full Stack Web Development',
    issuer: 'Coursera',
    date: 'August 2024',
    credentialId: 'ABC123XYZ',
    link: 'https://coursera.org',
    skills: ['React', 'Node.js', 'MongoDB', 'Express']
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'DeepLearning.AI',
    date: 'June 2024',
    credentialId: 'ML456DEF',
    link: 'https://deeplearning.ai',
    skills: ['Python', 'TensorFlow', 'Neural Networks']
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'May 2024',
    credentialId: 'AWS789GHI',
    link: 'https://aws.amazon.com',
    skills: ['Cloud Computing', 'AWS Services', 'Infrastructure']
  },
  {
    title: 'Data Structures & Algorithms',
    issuer: 'Udemy',
    date: 'March 2024',
    credentialId: 'DSA012JKL',
    link: 'https://udemy.com',
    skills: ['C++', 'Problem Solving', 'Algorithms']
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="min-h-screen flex items-center py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="space-y-12 md:space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Achievements & <span className="text-glow bg-gradient-neon bg-clip-text text-transparent">Certifications</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-neon rounded-full mx-auto"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Recognition, awards, and professional certifications earned along my journey
            </p>
          </div>

          {/* Achievements Section */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center">
              <Medal className="inline-block w-6 h-6 md:w-8 md:h-8 mr-2 text-yellow-400" />
              Achievements
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                const colorClasses = {
                  yellow: 'text-yellow-400 bg-yellow-400/20 border-yellow-400/30',
                  blue: 'text-blue-400 bg-blue-400/20 border-blue-400/30',
                  green: 'text-green-400 bg-green-400/20 border-green-400/30'
                };
                
                return (
                  <div key={index} className="glass-card rounded-2xl p-4 md:p-6 hover-card group">
                    <div className="space-y-3 md:space-y-4">
                      {/* Icon */}
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl ${colorClasses[achievement.color as keyof typeof colorClasses]} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={24} className="md:w-7 md:h-7" />
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h4 className="text-base md:text-lg font-bold text-foreground group-hover:text-sky-100 transition-colors duration-300">
                          {achievement.title}
                        </h4>
                        <p className="text-xs md:text-sm text-muted-foreground font-medium">
                          {achievement.organization}
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                          {achievement.date}
                        </p>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="space-y-6 md:space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold text-center">
              <Award className="inline-block w-6 h-6 md:w-8 md:h-8 mr-2 text-cyan-400" />
              Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
              {certifications.map((cert, index) => (
                <div key={index} className="glass-card rounded-2xl p-4 md:p-6 hover-card group">
                  <div className="space-y-3 md:space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <h4 className="text-base md:text-lg font-bold text-foreground group-hover:text-cyan-300 transition-colors duration-300">
                          {cert.title}
                        </h4>
                        <p className="text-sm md:text-base text-cyan-400 font-semibold">
                          {cert.issuer}
                        </p>
                      </div>
                      <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        <ExternalLink size={18} className="md:w-5 md:h-5" />
                      </a>
                    </div>

                    {/* Details */}
                    <div className="space-y-2">
                      <p className="text-xs md:text-sm text-muted-foreground">
                        <span className="font-medium">Date:</span> {cert.date}
                      </p>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        <span className="font-medium">Credential ID:</span> {cert.credentialId}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-2 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-full border border-cyan-400/20 hover:bg-cyan-400/20 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
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

export default AchievementsSection;
