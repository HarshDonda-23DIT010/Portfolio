import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center py-20 pb-32 lg:pb-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
        <div className="space-y-8 md:space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Get In <span className="text-glow bg-gradient-neon bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-neon rounded-full mx-auto"></div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Let's connect and explore opportunities to collaborate on innovative projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-6 md:space-y-8">
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold">Let's Start a Conversation</h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  I'm always excited to discuss new projects, innovative ideas, or opportunities to be part of 
                  your vision. Whether you have a project in mind or just want to connect, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 glass-card rounded-xl hover-card group cursor-pointer" onClick={() => window.open('mailto:dondaharsh04@gmail.com', '_blank')}>
                  <div className="w-12 h-12 rounded-xl bg-neon-cyan/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={20} className="text-neon-cyan" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">Drop me a line for project discussions or collaborations</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass-card rounded-xl hover-card group cursor-pointer" onClick={() => window.open('https://github.com/HarshDonda-23DIT010', '_blank')}>
                  <div className="w-12 h-12 rounded-xl bg-neon-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github size={20} className="text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="font-semibold">GitHub</h4>
                    <p className="text-muted-foreground">Explore my open-source projects and code repositories</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass-card rounded-xl hover-card group cursor-pointer" onClick={() => window.open('https://linkedin.com/in/harsh-donda-b6a9612a7', '_blank')}>
                  <div className="w-12 h-12 rounded-xl bg-neon-green/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin size={20} className="text-neon-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <p className="text-muted-foreground">Connect professionally and view my career journey</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass-card rounded-xl hover-card group cursor-pointer" onClick={() => window.open('https://leetcode.com/u/dondaharsh04/', '_blank')}>
                  <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Code size={20} className="text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold">LeetCode</h4>
                    <p className="text-muted-foreground">Check out my algorithmic problem-solving skills and progress</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass-card rounded-xl hover-card group">
                  <div className="w-12 h-12 rounded-xl bg-neon-pink/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin size={20} className="text-neon-pink" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-muted-foreground">Based in Gujarat, India - Open to remote opportunities</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <TooltipProvider>
                <div className="flex flex-wrap gap-3 md:gap-4 pt-4 justify-center lg:justify-start">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-10 h-10 md:w-12 md:h-12 p-0 neon-glow hover:scale-110 transition-transform"
                        onClick={() => window.open('mailto:dondaharsh04@gmail.com', '_blank')}
                      >
                        <Mail size={16} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Email</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-10 h-10 md:w-12 md:h-12 p-0 neon-glow hover:scale-110 transition-transform"
                        onClick={() => window.open('https://github.com/HarshDonda-23DIT010', '_blank')}
                      >
                        <Github size={16} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-10 h-10 md:w-12 md:h-12 p-0 neon-glow hover:scale-110 transition-transform"
                        onClick={() => window.open('https://linkedin.com/in/harsh-donda-b6a9612a7', '_blank')}
                      >
                        <Linkedin size={16} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-10 h-10 md:w-12 md:h-12 p-0 neon-glow hover:scale-110 transition-transform"
                        onClick={() => window.open('https://leetcode.com/u/dondaharsh04/', '_blank')}
                      >
                        <Code size={16} />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>LeetCode</p>
                    </TooltipContent>
                  </Tooltip>
                </div>
              </TooltipProvider>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-secondary/50 border-border/50 focus:border-neon-cyan"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-secondary/50 border-border/50 focus:border-neon-cyan"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="bg-secondary/50 border-border/50 focus:border-neon-cyan min-h-[120px]"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full neon-glow bg-gradient-neon hover:shadow-glow text-primary-foreground"
                >
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

       
        </div>
      </div>
    </section>
  );
};

export default ContactSection;