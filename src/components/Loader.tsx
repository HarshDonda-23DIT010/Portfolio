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
          setTimeout(() => {
            setLoading(false);
            setTimeout(onComplete, 800);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-800 ${
      loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      {/* 3D Developer Scene */}
      <div className="relative">
        {/* Main 3D Scene Container */}
        <div className="relative w-80 h-80 perspective-1000">
          {/* Desk */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-48 h-24 bg-gradient-to-br from-secondary to-secondary/50 rounded-lg border border-border/50 rotate-x-60 shadow-2xl">
            {/* Desk legs */}
            <div className="absolute -bottom-12 left-4 w-2 h-12 bg-secondary/80 rounded"></div>
            <div className="absolute -bottom-12 right-4 w-2 h-12 bg-secondary/80 rounded"></div>
          </div>
          
          {/* Monitor */}
          <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 -translate-z-4">
            <div className="w-32 h-20 bg-card border-2 border-border rounded-lg overflow-hidden shadow-glow">
              {/* Screen */}
              <div className="w-full h-16 bg-gradient-to-br from-background to-card p-2">
                <div className="grid grid-cols-8 gap-px h-full">
                  {[...Array(32)].map((_, i) => (
                    <div
                      key={i}
                      className={`bg-neon-cyan/20 rounded-sm animate-pulse`}
                      style={{ 
                        animationDelay: `${i * 0.1}s`,
                        animationDuration: `${1 + Math.random()}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              {/* Monitor stand */}
              <div className="w-8 h-3 bg-secondary/80 mx-auto -mt-1 rounded-b"></div>
            </div>
          </div>
          
          {/* Developer Figure */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 translate-x-4">
            {/* Head */}
            <div className="w-8 h-8 bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 rounded-full border border-neon-cyan/50 mb-1 mx-auto animate-pulse"></div>
            {/* Body */}
            <div className="w-12 h-16 bg-gradient-to-b from-secondary to-secondary/70 rounded-lg border border-border/50 mx-auto">
              {/* Arms typing */}
              <div className="absolute top-4 -left-2 w-6 h-2 bg-secondary/80 rounded animate-bounce" style={{ animationDuration: '1s' }}></div>
              <div className="absolute top-4 -right-2 w-6 h-2 bg-secondary/80 rounded animate-bounce" style={{ animationDuration: '1s', animationDelay: '0.5s' }}></div>
            </div>
          </div>
          
          {/* Keyboard */}
          <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 translate-x-2 w-20 h-6 bg-secondary/60 rounded border border-border/30">
            <div className="grid grid-cols-6 gap-px p-1 h-full">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`bg-border/50 rounded-sm ${Math.random() > 0.7 ? 'bg-neon-cyan/30' : ''}`}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Coffee Cup */}
          <div className="absolute bottom-20 right-12 w-4 h-6 bg-gradient-to-b from-secondary to-secondary/80 rounded-b-lg border border-border/50">
            <div className="w-full h-2 bg-neon-purple/20 rounded-t"></div>
            {/* Steam */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-px h-3 bg-muted-foreground/30 animate-pulse"
                  style={{ 
                    marginLeft: `${i * 2}px`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: '2s'
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Floating Code Elements */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-6 h-6 bg-neon-cyan/10 border border-neon-cyan/30 rounded flex items-center justify-center text-xs text-neon-cyan font-mono animate-float"
              style={{
                top: `${20 + i * 15}%`,
                left: `${10 + (i % 2) * 70}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${3 + i}s`
              }}
            >
              {['<>', '{}', '[]', '()', '/>', '</>'][i]}
            </div>
          ))}
        </div>
        
        {/* Loading Text and Progress */}
        <div className="text-center mt-8 space-y-6">
          <h2 className="text-3xl font-bold text-glow">Crafting Portfolio</h2>
          <p className="text-muted-foreground">Building amazing experiences...</p>
          
          {/* Progress Bar */}
          <div className="w-64 mx-auto">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Loading</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
              <div 
                className="h-full bg-gradient-neon transition-all duration-300 ease-out rounded-full"
                style={{ width: `${progress}%` }}
              >
                <div className="h-full w-full bg-white/20 animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Loading Dots */}
          <div className="flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.3}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Background particles */}
      <div className="particles">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
              background: `hsl(${196 + Math.random() * 74}, 100%, 60%)`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;