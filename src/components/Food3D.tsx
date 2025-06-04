
import { useEffect, useRef } from 'react';

const Food3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple CSS-based 3D animation since we don't have three.js
    // This creates a visual 3D effect using CSS transforms
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-96 flex items-center justify-center">
      {/* 3D Food Items */}
      <div className="relative w-80 h-80">
        {/* Pizza */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-4xl animate-float shadow-2xl">
          🍕
        </div>
        
        {/* Burger */}
        <div className="absolute top-1/4 right-0 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-full flex items-center justify-center text-3xl animate-float shadow-2xl" style={{ animationDelay: '0.5s' }}>
          🍔
        </div>
        
        {/* Taco */}
        <div className="absolute bottom-1/4 right-1/4 w-18 h-18 bg-gradient-to-br from-yellow-400 to-red-400 rounded-full flex items-center justify-center text-2xl animate-float shadow-2xl" style={{ animationDelay: '1s' }}>
          🌮
        </div>
        
        {/* Sushi */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-pink-300 to-red-400 rounded-full flex items-center justify-center text-2xl animate-float shadow-2xl" style={{ animationDelay: '1.5s' }}>
          🍣
        </div>
        
        {/* Pasta */}
        <div className="absolute top-1/4 left-0 w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full flex items-center justify-center text-3xl animate-float shadow-2xl" style={{ animationDelay: '2s' }}>
          🍝
        </div>
        
        {/* Ice Cream */}
        <div className="absolute bottom-1/4 left-1/4 w-18 h-18 bg-gradient-to-br from-pink-200 to-purple-300 rounded-full flex items-center justify-center text-2xl animate-float shadow-2xl" style={{ animationDelay: '2.5s' }}>
          🍦
        </div>

        {/* Central Main Dish */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-5xl animate-spin-slow shadow-2xl">
          🍽️
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-orange-300 rounded-full animate-float opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Food3D;
