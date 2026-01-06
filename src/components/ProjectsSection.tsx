import { useState } from 'react';
import { ExternalLink, Github, Award, Zap, Brain, Code2, Database, Smartphone, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import sp1 from '../assets/Project img/sp1.jpg';
import sp2 from '../assets/Project img/sp2.jpg';
import sp3 from '../assets/Project img/sp.jpg';
import dep1 from '../assets/Project img/dep1.jpg';
import dep2 from '../assets/Project img/dep2.jpg';
import dep3 from '../assets/Project img/dep3.jpg';
import vc1 from '../assets/Project img/vc1.jpg';
import vc2 from '../assets/Project img/vc2.jpg';
import vc3 from '../assets/Project img/vc3.jpg';
import vc4 from '../assets/Project img/vc4.jpg';
import e1 from '../assets/Project img/e-1.png';
import e2 from '../assets/Project img/e-2.png';
import e3 from '../assets/Project img/e-3.png';
import e4 from '../assets/Project img/e-4.png';
import e5 from '../assets/Project img/e-5.png';
import e6 from '../assets/Project img/e-6.png';
import e7 from '../assets/Project img/e-7.png';
import lms1 from '../assets/Project img/lms1.png';
import lms2 from '../assets/Project img/lms2.png';
import lms3 from '../assets/Project img/lms3.png';  
import lms4 from '../assets/Project img/lms4.png';  

const projects = [
  {
    id: 1,
    title: 'Spoural Management Platform',
    subtitle: 'Role-based System',
    description: 'Comprehensive MERN stack platform for student sports registration, scheduling, and approvals.',
    fullDescription: 'A role-based web application for managing university-level cultural and sports events. The system supports four user roles: Student, Student Coordinator, Faculty, and Admin. Students can register, view events, apply for participation, track application status, and access practice or final performance schedules. Student Coordinators manage student applications, approve or reject participants, and propose practice schedules to Faculty. Faculty can review selected students, download participant lists, and approve practice schedules. Admins have full control to add faculty/coordinators, and publish or update final schedules. This platform streamlines the entire event management process, ensuring clear communication and efficient coordination across all roles.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    icon: Zap,
    color: 'blue-400',
    features: ['Role-based Access', 'Event Scheduling', 'Registration System', 'Admin Dashboard', 'Real-time Notifications' , 'Faculty Management' , 'Coordinator Management'],
    images: [
      sp1, sp2, sp3
    ],
    githubUrl: 'https://github.com/vinitsaspara/Spoural_managment_system',
  },
  {
    id: 2,
    title: 'E-learning Platform',
    subtitle: 'Course Marketplace',
    description: 'Full-featured learning platform with course buying/selling, payment integration, and progress tracking.',
    fullDescription: 'A modern e-learning marketplace that connects instructors and students. Features include secure payment integration, interactive video lectures, progress tracking, and role-based dashboards. Built with MERN stack and integrated with Stripe for seamless payments.',
    technologies: ['MERN Stack', 'RTK Query', 'Stripe', 'Cloudinary'],
    icon: Code2,
    color: 'cyan-400',
    features: ['Course Marketplace', 'Payment Integration', 'Progress Tracking', 'Interactive Learning'],
    images: [
      lms1, lms2, lms3,lms4
    ],
    githubUrl: 'https://github.com/HarshDonda-23DIT010/LMS-Project',
  },
  {
    id: 3,
    title: 'DEPSTAR College Website',
    subtitle: 'Internship Project',
    description: 'Official college website featuring faculty profiles, lab information, departments, and student resources.',
    fullDescription: 'Official institutional website developed during internship for DEPSTAR (Devang Patel Institute of Advance Technology and Research). It includes sections for faculty profiles, research labs, department showcases, student corner, placement information, and academic gallery. Built with a modern responsive UI for accessibility across devices.',
    technologies: ['React.js', 'tailwindcss', 'Responsive Design'],
    icon: Database,
    color: 'indigo-400',
    features: ['Faculty Profiles', 'Department Info', 'Lab Details', 'Student Portal'],
    images: [
      dep1, dep2, dep3
    ],
    liveUrl: 'https://depstar.charusat.ac.in'
  },
  {
    id: 4,
    title: 'Exam Portal',
    subtitle: 'Educational System',
    description: 'Role-based examination system with separate dashboards for Admin, Faculty, and Students.',
    fullDescription: 'Comprehensive examination management system for colleges with Admin, Head Faculty, Department Faculty, and Student roles. Features include subject and faculty assignment, student management, eligibility checking, exam creation, result processing, and analytics dashboards.',
    technologies: ['PERN Stack', 'Role Management', 'Real-time Updates'],
    icon: Award,
    color: 'emerald-400',
    features: ['Multi-role System', 'Exam Management', 'Result Processing', 'Security Features'],
    images: [
      e1, e2, e3, e4, e5, e6, e7
    ],
    githubUrl: 'https://github.com/HarshDonda-23DIT010/Examination-portel',
  },
  {
    id: 5,
    title: 'Vaccicare',
    subtitle: 'Oddo X MSU Hackathon Project',
    description: 'vaccination tracking app with intelligent baby care tips and health monitoring.',
    fullDescription: 'VacciCare is an innovative healthcare solution developed during the Oddo X MSU Hackathon by Team EUREKA. It addresses one of the most critical challenges faced by new parents and healthcare providers — tracking child vaccinations and ensuring timely immunization. With a rising number of missed or delayed vaccinations, VacciCare offers a smart, reliable, and user-friendly system that ensures children stay on track with their vaccination schedules while also providing intelligent baby care insights.',
    technologies: ['Flutter', 'Supabase', 'Full Stack Web'],
    icon: Smartphone,
    color: 'sky-400',
    features: ['Vaccination Tracking', 'AI Baby Care Tips', 'Health Analytics', 'Real-time Monitoring'],
    images: [
      vc1, vc2, vc3, vc4
    ],
    githubUrl: 'https://github.com/HarshDonda-23DIT010/Vaccicare',
  }
];



const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [imageSliderOpen, setImageSliderOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedImages, setSelectedImages] = useState([]);

  const openImageSlider = (images, startIndex = 0) => {
    setSelectedImages(images);
    setCurrentImageIndex(startIndex);
    setImageSliderOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % selectedImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + selectedImages.length) % selectedImages.length);
  };

  return (
    <section id="projects" className="min-h-screen py-12 md:py-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="space-y-8 md:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              My <span className="text-glow bg-gradient-neon bg-clip-text text-transparent">Projects</span>
            </h2>
            <div className="w-16 md:w-20 h-1 bg-gradient-neon rounded-full mx-auto"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcase of innovative solutions and technical implementations
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div key={index} className="group cursor-pointer">
                  <div 
                    className="glass-card rounded-2xl overflow-hidden hover-card h-full transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Project Image */}
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img 
                        src={project.images[0]} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      {/* Image overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      
                      {/* Image count indicator */}
                      <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-black/50 backdrop-blur-sm rounded-full px-2 py-1 text-xs text-white flex items-center gap-1">
                        <Eye size={10} className="md:w-3 md:h-3" />
                        {project.images.length}
                      </div>

                     

                      {/* View Images Button */}
                      <button
                        className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-sky-400/20 backdrop-blur-sm border border-sky-400/30 rounded-lg px-2 md:px-3 py-1 text-xs text-sky-100 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-sky-400/30"
                        onClick={(e) => {
                          e.stopPropagation();
                          openImageSlider(project.images);
                        }}
                      >
                        View Gallery
                      </button>
                    </div>

                    {/* Project Content */}
                    <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-${project.color}/20 border border-${project.color}/30 flex items-center justify-center`}>
                            <Icon size={16} className={`md:w-5 md:h-5 text-${project.color}`} />
                          </div>
                          <div>
                            <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-sky-100 transition-colors">{project.title}</h3>
                            <p className="text-xs md:text-sm text-sky-400 font-medium">{project.subtitle}</p>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-xs md:text-sm leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="bg-slate-800/50 text-sky-100 border border-sky-400/20 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="bg-slate-700/50 text-sky-200 text-xs">
                            +{project.technologies.length - 3} more
                          </Badge>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        { project.githubUrl && (<Button 
                          size="sm" 
                          variant="outline" 
                          className={`${project.liveUrl ? 'flex-1' : 'w-full'} bg-slate-800/50 border-sky-400/30 text-sky-100 hover:bg-sky-400/20 hover:border-sky-400/50`}
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.githubUrl, '_blank');
                          }}
                        >
                          <Github size={14} className="mr-2" />
                          Code
                        </Button>)}
                        {project.liveUrl && (
                          <Button 
                            size="sm" 
                            className="flex-1 bg-gradient-to-r from-sky-400 to-blue-400 hover:from-sky-500 hover:to-blue-500 text-white border-0"
                            onClick={(e) => {
                              e.stopPropagation();
                              window.open(project.liveUrl, '_blank');
                            }}
                          >
                            <ExternalLink size={14} className="mr-2" />
                            Live
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Project Detail Dialog */}
          <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
            <DialogContent className="max-w-4xl h-[85vh] p-0 glass-card border border-sky-400/20 overflow-hidden flex flex-col">
              {selectedProject && (
                <>
                  {/* Sticky Header */}
                  <div className="flex-shrink-0 bg-slate-900/95 backdrop-blur-sm border-b border-sky-400/20 p-6">
                    <DialogHeader>
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-${selectedProject.color}/20 border border-${selectedProject.color}/30 flex items-center justify-center`}>
                          <selectedProject.icon size={24} className={`text-${selectedProject.color}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <DialogTitle className="text-2xl font-bold text-foreground">{selectedProject.title}</DialogTitle>
                            {selectedProject.status === 'in-progress' && (
                              <span className="bg-orange-500/20 border border-orange-500/30 text-orange-400 px-2 py-1 rounded-full text-xs font-medium">
                                🚧 In Development
                              </span>
                            )}
                          </div>
                          <p className="text-sky-400 font-medium">{selectedProject.subtitle}</p>
                        </div>
                      </div>
                    </DialogHeader>
                  </div>

                  {/* Scrollable Content */}
                  <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-6 min-h-0">
                    {/* Project Images */}
                    <div className="grid grid-cols-3 gap-4">
                      {selectedProject.images.map((image, index) => (
                        <div key={index} className="relative group cursor-pointer rounded-lg overflow-hidden">
                          <img 
                            src={image} 
                            alt={`${selectedProject.title} ${index + 1}`}
                            className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                            onClick={() => openImageSlider(selectedProject.images, index)}
                          />
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">About This Project</h3>
                      <p className="text-muted-foreground leading-relaxed">{selectedProject.fullDescription}</p>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Technologies Used</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <Badge key={index} className="bg-slate-800/50 text-sky-100 border border-sky-400/30">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-foreground">Key Features</h3>
                      <div className="grid grid-cols-2 gap-3">
                        {selectedProject.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-slate-800/30 rounded-lg border border-sky-400/20">
                            <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4 pb-2">
                      <Button 
                        className={`${selectedProject.liveUrl ? 'flex-1' : 'w-full'} bg-slate-800/50 border border-sky-400/30 text-sky-100 hover:bg-sky-400/20`}
                        variant="outline"
                        onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                      >
                        <Github className="mr-2" size={16} />
                        View Source Code
                      </Button>
                      {selectedProject.liveUrl && (
                        <Button 
                          className="flex-1 bg-gradient-to-r from-sky-400 to-blue-400 hover:from-sky-500 hover:to-blue-500"
                          onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                        >
                          <ExternalLink className="mr-2" size={16} />
                          View Live Demo
                        </Button>
                      )}
                    </div>
                  </div>
                </>
              )}
            </DialogContent>
          </Dialog>

          {/* Image Slider Dialog */}
          <Dialog open={imageSliderOpen} onOpenChange={setImageSliderOpen}>
            <DialogContent className="max-w-4xl p-0 border-0 bg-transparent">
              <div className="relative">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                  onClick={() => setImageSliderOpen(false)}
                >
                  <X size={20} />
                </button>

                {/* Navigation Buttons */}
                {selectedImages.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      onClick={prevImage}
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-40 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
                      onClick={nextImage}
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Main Image */}
                <div className="relative rounded-lg overflow-hidden">
                  <img 
                    src={selectedImages[currentImageIndex]} 
                    alt={`Slide ${currentImageIndex + 1}`}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </div>

                {/* Image Counter */}
                {selectedImages.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1 text-white text-sm">
                    {currentImageIndex + 1} / {selectedImages.length}
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>

          
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;