import { useEffect, useState } from 'react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setTimeout(onComplete, 600);
      }, 800);
    }, 2500);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-card to-background transition-all duration-700 ${
      loading ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
    }`}>
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-ping"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-ping" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative text-center space-y-8">
        {/* Modern Spinner */}
        <div className="relative w-24 h-24 mx-auto">
          {/* Outer ring */}
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          {/* Animated ring */}
          <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
          {/* Inner glow */}
          <div className="absolute inset-2 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-md"></div>
          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full shadow-lg shadow-primary/50"></div>
        </div>

        {/* Loading Text with Typewriter Effect */}
        <div className="space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Harsh Donda
            </span>
            <div className="w-0.5 h-6 bg-primary animate-pulse"></div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-64 mx-auto space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Loading Portfolio</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Floating dots */}
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-primary/60 rounded-full animate-bounce"
                style={{ 
                  animationDelay: `${i * 0.15}s`,
                  animationDuration: '1s'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;