
import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Large Floating Circles */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute bottom-32 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating Squares */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-blue-400/20 rotate-45 animate-spin" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-purple-400/20 rotate-12 animate-spin" style={{ animationDuration: '6s' }} />
        <div className="absolute top-3/4 left-1/3 w-20 h-20 bg-cyan-400/20 rotate-45 animate-spin" style={{ animationDuration: '10s' }} />
        
        {/* Moving Lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-8 h-full">
            {Array.from({ length: 144 }).map((_, i) => (
              <div 
                key={i} 
                className="border border-blue-500/20 animate-pulse" 
                style={{ 
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: '4s'
                }} 
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20" />
    </div>
  );
};

export default AnimatedBackground;
