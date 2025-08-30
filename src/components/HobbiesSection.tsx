import { Code2, Brain, Gamepad2, BookOpen, Trophy, Lightbulb } from 'lucide-react';

const hobbies = [
  {
    title: 'Competitive Programming',
    description: 'Solving algorithmic problems and participating in coding contests using C++ and DSA.',
    icon: Code2,
    color: 'neon-cyan',
    activities: ['LeetCode Solutions', 'Codeforces Contests', 'Algorithm Design', 'Data Structures']
  },
  {
    title: 'AI/ML Research',
    description: 'Exploring cutting-edge research papers and implementing novel AI/ML algorithms.',
    icon: Brain,
    color: 'neon-purple',
    activities: ['Research Papers', 'Model Implementation', 'Neural Networks', 'Deep Learning']
  },
  {
    title: 'Web Development Experiments',
    description: 'Building innovative web applications and exploring new frameworks and technologies.',
    icon: Lightbulb,
    color: 'neon-green',
    activities: ['New Frameworks', 'UI/UX Design', 'Performance Optimization', 'Open Source']
  },
  {
    title: 'Sports & Fitness',
    description: 'Staying active through various sports and maintaining physical and mental wellness.',
    icon: Trophy,
    color: 'neon-pink',
    activities: ['Cricket', 'Badminton', 'Gym Workouts', 'Team Sports']
  }
];

const HobbiesSection = () => {
  return (
    <section id="hobbies" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6 ml-20">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              My <span className="text-glow bg-gradient-neon bg-clip-text text-transparent">Hobbies</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-neon rounded-full mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Passion projects and activities that fuel my creativity and growth
            </p>
          </div>

          {/* Hobbies Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              return (
                <div key={index} className="glass-card rounded-2xl p-8 hover-card group">
                  <div className="space-y-6">
                    {/* Hobby Header */}
                    <div className="flex items-center gap-4">
                      <div className={`w-16 h-16 rounded-2xl bg-${hobby.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={28} className={`text-${hobby.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{hobby.title}</h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {hobby.description}
                    </p>

                    {/* Activities */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground">What I Do:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {hobby.activities.map((activity, activityIndex) => (
                          <div
                            key={activityIndex}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className={`w-2 h-2 rounded-full bg-${hobby.color}`}></div>
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Learning Philosophy */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="glass-card rounded-2xl p-8 text-center">
              <BookOpen size={48} className="text-neon-cyan mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Learning Philosophy</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                "I believe that every hobby is a learning opportunity. Whether it's solving complex algorithms, 
                exploring AI research, building innovative web apps, or staying physically active - each pursuit 
                contributes to my growth as a developer and as an individual. The intersection of technology and 
                personal interests often leads to the most creative solutions."
              </p>
            </div>
          </div>

          {/* Fun Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'Problems Solved', color: 'neon-cyan' },
              { number: '25+', label: 'Research Papers Read', color: 'neon-purple' },
              { number: '15+', label: 'Side Projects', color: 'neon-green' },
              { number: '3+', label: 'Sports Played', color: 'neon-pink' }
            ].map((stat, index) => (
              <div key={index} className="text-center glass-card rounded-xl p-6">
                <div className={`text-3xl font-bold text-${stat.color} mb-2`}>
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;