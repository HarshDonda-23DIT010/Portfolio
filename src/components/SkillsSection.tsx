import { Code, Database, Brain, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    color: 'neon-cyan',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'SQL']
  },
  {
    title: 'Web Development',
    icon: Database,
    color: 'neon-purple',
    skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Supabase', 'Tailwind CSS', 'shadcn/ui', 'Prisma']
  },
  {
    title: 'AI/ML & Data Science',
    icon: Brain,
    color: 'neon-green',
    skills: ['Scikit-learn', 'TensorFlow Lite', 'Machine Learning', 'Data Preprocessing', 'Statistics']
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'neon-pink',
    skills: ['GitHub', 'Stripe', 'Supabase', 'PostgreSQL' , 'MySQL' ,'MongoDB']
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="space-y-8 md:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              My <span className="text-glow bg-gradient-neon bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-neon rounded-full mx-auto"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="glass-card rounded-2xl p-4 md:p-8 hover-card group">
                  <div className="space-y-4 md:space-y-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-${category.color}/20 flex items-center justify-center group-hover:bg-${category.color}/30 transition-all duration-300`}>
                        <Icon size={20} className={`md:w-6 md:h-6 text-${category.color} group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold group-hover:text-sky-100 transition-colors duration-300">{category.title}</h3>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 gap-2 md:gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="relative group bg-secondary/20 rounded-lg px-2 md:px-3 py-2 text-xs md:text-sm font-medium text-center transition-all duration-300 hover:bg-gradient-to-r hover:from-sky-400/20 hover:to-blue-400/20 hover:border hover:border-sky-400/30 hover:scale-105 hover:shadow-lg hover:shadow-sky-400/25 cursor-pointer overflow-hidden"
                        >
                          {/* Subtle shine effect on hover */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                          
                          <span className="relative z-10 group-hover:text-sky-100 transition-colors duration-300">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;