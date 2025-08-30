import { useEffect, useState } from 'react';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 3000); // Show loader for 3 seconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500 ${
      loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="text-center">
        {/* 3D Rotating Cube */}
        <div className="relative mb-8">
          <div className="loader-cube w-16 h-16 mx-auto">
            <div className="absolute inset-0 bg-gradient-neon rounded-lg shadow-glow"></div>
            <div className="absolute inset-2 bg-background rounded-md"></div>
          </div>
        </div>
        
        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-glow">Loading Portfolio</h2>
          <div className="flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Loader;