import { ExternalLink, Github, Award, Smartphone, Globe, GraduationCap, Brain, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Health C',
    subtitle: 'Oddo X Hackathon Winner',
    description: 'AI-powered vaccination tracking app with intelligent baby care tips and health monitoring.',
    technologies: ['Flutter', 'Supabase', 'TensorFlow Lite', 'AI/ML'],
    icon: Smartphone,
    color: 'neon-cyan',
    features: ['Vaccination Tracking', 'AI Baby Care Tips', 'Health Analytics', 'Real-time Monitoring']
  },
  {
    title: 'Sports Management Platform',
    subtitle: 'Role-based System',
    description: 'Comprehensive MERN stack platform for student sports registration, scheduling, and approvals.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    icon: Users,
    color: 'neon-purple',
    features: ['Role-based Access', 'Event Scheduling', 'Registration System', 'Admin Dashboard']
  },
  {
    title: 'E-learning Platform',
    subtitle: 'Course Marketplace',
    description: 'Full-featured learning platform with course buying/selling, payment integration, and progress tracking.',
    technologies: ['MERN Stack', 'RTK Query', 'Stripe', 'Payment Gateway'],
    icon: GraduationCap,
    color: 'neon-green',
    features: ['Course Marketplace', 'Payment Integration', 'Progress Tracking', 'Interactive Learning']
  },
  {
    title: 'DEPSTAR College Website',
    subtitle: 'Internship Project',
    description: 'Official college website featuring faculty profiles, lab information, departments, and student resources.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Responsive Design'],
    icon: Globe,
    color: 'neon-pink',
    features: ['Faculty Profiles', 'Department Info', 'Lab Details', 'Student Portal']
  },
  {
    title: 'Adaptive Study Planner',
    subtitle: 'AI/ML Research Project',
    description: 'Intelligent study schedule generator using machine learning algorithms for personalized learning paths.',
    technologies: ['Python', 'KMeans', 'Decision Trees', 'Scikit-learn'],
    icon: Brain,
    color: 'neon-cyan',
    features: ['AI-driven Planning', 'Personalized Schedules', 'Performance Analytics', 'Adaptive Learning']
  },
  {
    title: 'Exam Portal',
    subtitle: 'Educational System',
    description: 'Role-based examination system with separate dashboards for Admin, Faculty, and Students.',
    technologies: ['MERN Stack', 'Role Management', 'Real-time Updates'],
    icon: Award,
    color: 'neon-purple',
    features: ['Multi-role System', 'Exam Management', 'Result Processing', 'Security Features']
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto px-6 ml-20">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              My <span className="text-glow bg-gradient-neon bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-neon rounded-full mx-auto"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcase of innovative solutions and technical implementations
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div key={index} className="glass-card rounded-2xl p-8 hover-card group">
                  <div className="space-y-6">
                    {/* Project Header */}
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-${project.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon size={24} className={`text-${project.color}`} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <p className={`text-sm text-${project.color} font-medium`}>{project.subtitle}</p>
                        </div>
                      </div>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                          <Github size={16} />
                        </Button>
                        <Button size="sm" variant="outline" className="w-8 h-8 p-0">
                          <ExternalLink size={16} />
                        </Button>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-secondary/50 text-xs font-medium rounded-full border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className={`w-1 h-1 rounded-full bg-${project.color}`}></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-4">Interested in collaborating?</h3>
              <p className="text-muted-foreground mb-6">
                Let's work together on innovative projects that make a difference.
              </p>
              <Button className="neon-glow bg-gradient-neon hover:shadow-glow">
                <Github className="mr-2" size={16} />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;