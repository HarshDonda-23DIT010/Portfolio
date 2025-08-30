import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 border-t border-border/50">
      <div className="container mx-auto px-6 ml-20">
        <div className="text-center space-y-6">
          {/* Main Footer Content */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-glow bg-gradient-neon bg-clip-text text-transparent">
                Harsh Donda
              </span>
            </h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              MERN Stack Developer | AIML Enthusiast | Data Science Learner
            </p>
          </div>

          {/* Copyright */}
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>© 2024 Harsh Donda | Built with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>using MERN + AIML</span>
          </div>

          {/* Back to Top Button */}
          <Button
            onClick={scrollToTop}
            size="sm"
            className="neon-glow bg-gradient-neon hover:shadow-glow text-primary-foreground"
          >
            <ArrowUp size={16} className="mr-2" />
            Back to Top
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;