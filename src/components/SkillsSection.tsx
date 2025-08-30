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
    skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Supabase', 'Tailwind CSS', 'shadcn/ui']
  },
  {
    title: 'AI/ML & Data Science',
    icon: Brain,
    color: 'neon-green',
    skills: ['Scikit-learn', 'TensorFlow Lite', 'Deep Learning', 'Data Preprocessing', 'KMeans', 'Decision Trees']
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    color: 'neon-pink',
    skills: ['GitHub', 'Vite', 'Docker', 'Cloudinary', 'Stripe', 'Supabase']
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6 ml-20">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              My <span className="text-glow bg-gradient-neon bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-neon rounded-full mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div key={index} className="glass-card rounded-2xl p-8 hover-card">
                  <div className="space-y-6">
                    {/* Category Header */}
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-xl bg-${category.color}/20 flex items-center justify-center`}>
                        <Icon size={24} className={`text-${category.color}`} />
                      </div>
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {category.skills.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="bg-secondary/50 rounded-lg px-3 py-2 text-sm font-medium text-center transition-all duration-300 hover:bg-secondary hover:scale-105"
                        >
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Skill Proficiency Bars */}
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">Proficiency Overview</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { skill: 'Frontend Development', level: 90 },
                { skill: 'Backend Development', level: 85 },
                { skill: 'AI/ML Implementation', level: 75 },
                { skill: 'Database Management', level: 80 },
                { skill: 'Problem Solving', level: 95 },
                { skill: 'Team Collaboration', level: 88 }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-neon-cyan">{item.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-gradient-neon h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${item.level}%` }}
                    ></div>
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

export default SkillsSection;