import { useEffect, useState } from 'react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onComplete, 600);
    }, 2500);

    return () => {
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-700 ${
      loading ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
    }`}>

      <div className="relative text-center">
        {/* 3D Cube Loader */}
        <div className="cube-container mb-12">
          <div className="cube">
            {/* Front Face */}
            <div className="cube-face front">
              <div className="face-grid">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="grid-cell"
                    style={{ animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>
            </div>
            
            {/* Back Face */}
            <div className="cube-face back">
              <div className="face-grid">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="grid-cell"
                    style={{ animationDelay: `${i * 0.1 + 0.5}s` }}
                  />
                ))}
              </div>
            </div>
            
            {/* Right Face */}
            <div className="cube-face right">
              <div className="face-grid">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="grid-cell"
                    style={{ animationDelay: `${i * 0.1 + 1}s` }}
                  />
                ))}
              </div>
            </div>
            
            {/* Left Face */}
            <div className="cube-face left">
              <div className="face-grid">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="grid-cell"
                    style={{ animationDelay: `${i * 0.1 + 1.5}s` }}
                  />
                ))}
              </div>
            </div>
            
            {/* Top Face */}
            <div className="cube-face top">
              <div className="face-grid">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="grid-cell"
                    style={{ animationDelay: `${i * 0.1 + 2}s` }}
                  />
                ))}
              </div>
            </div>
            
            {/* Bottom Face */}
            <div className="cube-face bottom">
              <div className="face-grid">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="grid-cell"
                    style={{ animationDelay: `${i * 0.1 + 2.5}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Loading Content */}
        <div className="space-y-6">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-3xl font-bold bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
              Harsh Donda Portfolio
            </span>
          </div>

          
        </div>

        
      </div>
    </div>
  );
};

export default Loader;