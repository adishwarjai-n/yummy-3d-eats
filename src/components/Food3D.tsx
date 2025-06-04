
import { useEffect, useRef } from 'react';

const Food3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set up the 3D perspective for front-view revolving plates
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-96 flex items-center justify-center perspective-1000">
      {/* 3D Revolving Food Plates */}
      <div className="relative w-80 h-80">
        {/* Pizza Plate */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-32 h-32 preserve-3d animate-revolve-slow">
          <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-full shadow-2xl flex items-center justify-center border-4 border-gray-200 transform-style-preserve-3d">
            <div className="text-5xl animate-float">🍕</div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-full transform rotateX-15"></div>
          </div>
        </div>
        
        {/* Burger Plate */}
        <div className="absolute top-1/4 right-8 w-28 h-28 preserve-3d animate-revolve-medium" style={{ animationDelay: '0.8s' }}>
          <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-full shadow-2xl flex items-center justify-center border-4 border-gray-200 transform-style-preserve-3d">
            <div className="text-4xl animate-float" style={{ animationDelay: '0.3s' }}>🍔</div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-full transform rotateX-15"></div>
          </div>
        </div>
        
        {/* Taco Plate */}
        <div className="absolute bottom-1/4 right-12 w-24 h-24 preserve-3d animate-revolve-fast" style={{ animationDelay: '1.6s' }}>
          <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-full shadow-2xl flex items-center justify-center border-4 border-gray-200 transform-style-preserve-3d">
            <div className="text-3xl animate-float" style={{ animationDelay: '0.6s' }}>🌮</div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-full transform rotateX-15"></div>
          </div>
        </div>
        
        {/* Sushi Plate */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 w-28 h-28 preserve-3d animate-revolve-medium" style={{ animationDelay: '2.4s' }}>
          <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-full shadow-2xl flex items-center justify-center border-4 border-gray-200 transform-style-preserve-3d">
            <div className="text-4xl animate-float" style={{ animationDelay: '0.9s' }}>🍣</div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-full transform rotateX-15"></div>
          </div>
        </div>
        
        {/* Pasta Plate */}
        <div className="absolute top-1/4 left-8 w-28 h-28 preserve-3d animate-revolve-slow" style={{ animationDelay: '3.2s' }}>
          <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-full shadow-2xl flex items-center justify-center border-4 border-gray-200 transform-style-preserve-3d">
            <div className="text-4xl animate-float" style={{ animationDelay: '1.2s' }}>🍝</div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-full transform rotateX-15"></div>
          </div>
        </div>
        
        {/* Ice Cream Plate */}
        <div className="absolute bottom-1/4 left-12 w-24 h-24 preserve-3d animate-revolve-fast" style={{ animationDelay: '4s' }}>
          <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-100 rounded-full shadow-2xl flex items-center justify-center border-4 border-gray-200 transform-style-preserve-3d">
            <div className="text-3xl animate-float" style={{ animationDelay: '1.5s' }}>🍦</div>
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-full transform rotateX-15"></div>
          </div>
        </div>

        {/* Central Chef's Special Plate */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 preserve-3d animate-revolve-slow">
          <div className="relative w-full h-full bg-gradient-to-br from-white to-gray-50 rounded-full shadow-2xl flex items-center justify-center border-4 border-orange-200 transform-style-preserve-3d">
            <div className="text-6xl animate-float" style={{ animationDelay: '1.8s' }}>🍽️</div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-100/30 via-white/20 to-transparent rounded-full transform rotateX-15"></div>
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-200 to-red-200 rounded-full blur-xl opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Ambient Lighting Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full animate-float opacity-40"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Food3D;
