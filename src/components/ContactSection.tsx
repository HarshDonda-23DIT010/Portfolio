import { useState } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Code, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const serviceId = 'service_3p4p06a'; 
      const templateId = 'template_wjezegp'; 
      const publicKey = 'oSBwmrhFkZGRR_z_j'; // Get this from Account > General

      const templateParams = {
        name: formData.name,        // Matches {{name}} in your template
        email: formData.email,      // Matches {{email}} in your template
        message: formData.message,  // Matches {{message}} in your template
        title: 'Portfolio Contact', // Matches {{title}} in your template
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try emailing me directly at dondaharsh04@gmail.com');
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
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
              Get In <span className="bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-400 to-gray-200 rounded-full mx-auto"></div>
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
                  <div className="w-12 h-12 rounded-xl bg-gray-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Mail size={20} className="text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base">Email</h4>
                    <p className="text-muted-foreground text-xs md:text-sm">Drop me a line for project discussions or collaborations</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass-card rounded-xl hover-card group cursor-pointer" onClick={() => window.open('https://github.com/HarshDonda-23DIT010', '_blank')}>
                  <div className="w-12 h-12 rounded-xl bg-gray-300/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Github size={20} className="text-gray-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base">GitHub</h4>
                    <p className="text-muted-foreground text-xs md:text-sm">Explore my open-source projects and code repositories</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass-card rounded-xl hover-card group cursor-pointer" onClick={() => window.open('https://linkedin.com/in/harsh-donda-b6a9612a7', '_blank')}>
                  <div className="w-12 h-12 rounded-xl bg-gray-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Linkedin size={20} className="text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base">LinkedIn</h4>
                    <p className="text-muted-foreground text-xs md:text-sm">Connect professionally and view my career journey</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 glass-card rounded-xl hover-card group cursor-pointer" onClick={() => window.open('https://leetcode.com/u/dondaharsh04/', '_blank')}>
                  <div className="w-12 h-12 rounded-xl bg-gray-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Code size={20} className="text-gray-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base">LeetCode</h4>
                    <p className="text-muted-foreground text-xs md:text-sm">Check out my algorithmic problem-solving skills and progress</p>
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
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
                    className="bg-secondary/50 border-border/50 focus:border-gray-400"
                    required
                    disabled={isSubmitting}
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
                    className="bg-secondary/50 border-border/50 focus:border-gray-400"
                    required
                    disabled={isSubmitting}
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
                    className="bg-secondary/50 border-border/50 focus:border-gray-400 min-h-[120px]"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-2 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-sm">
                    <CheckCircle size={16} />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                    <AlertCircle size={16} />
                    <span>{statusMessage}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-400 to-gray-500 hover:from-gray-300 hover:to-gray-400 text-gray-900 font-semibold shadow-lg hover:shadow-xl transition-all"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
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