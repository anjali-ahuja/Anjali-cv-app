'use client';

import { useEffect, useState, useMemo } from 'react';

interface FloatingSparkle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  rotation: number;
  color: string;
  speed: number;
  direction: number;
  createdAt: number;
}

const FloatingSparkles = () => {
  const [sparkles, setSparkles] = useState<FloatingSparkle[]>([]);

  const colors = useMemo(() => [
    'var(--primary-purple)',
    'var(--accent-aqua)', 
    'var(--soft-peach)',
    'var(--lime-green)',
    'var(--pink)',
    'var(--coral)'
  ], []);

  useEffect(() => {
    let animationFrameId: number;

    // Initialize sparkles
    const initializeSparkles = () => {
      const initialSparkles: FloatingSparkle[] = [];
      const maxSparkles = 23; // Reduced by 10% (26 * 0.9 = 23.4, rounded to 23)
      
      for (let i = 0; i < maxSparkles; i++) {
        initialSparkles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          opacity: 0.3 + Math.random() * 0.4, // Subtle opacity
          scale: 0.39 + Math.random() * 0.52, // 30% larger (0.3*1.3=0.39, 0.4*1.3=0.52)
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
          speed: 0.225 + Math.random() * 0.45, // 50% slower (0.45*0.5=0.225, 0.9*0.5=0.45)
          direction: Math.random() * Math.PI * 2, // Random direction
          createdAt: Date.now()
        });
      }
      
      setSparkles(initialSparkles);
    };

    const animate = () => {
      setSparkles(prev => {
        return prev.map(sparkle => {
          const now = Date.now();
          const age = now - sparkle.createdAt;
          
          // Reset sparkle if it goes off screen or after a long time
          if (sparkle.x < -50 || sparkle.x > window.innerWidth + 50 || 
              sparkle.y < -50 || sparkle.y > window.innerHeight + 50 ||
              age > 30000) { // 30 seconds lifetime
            
            return {
              ...sparkle,
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0.3 + Math.random() * 0.4,
              scale: 0.39 + Math.random() * 0.52,
              rotation: Math.random() * 360,
              color: colors[Math.floor(Math.random() * colors.length)],
              speed: 0.225 + Math.random() * 0.45,
              direction: Math.random() * Math.PI * 2,
              createdAt: now
            };
          }
          
          // Gentle floating movement
          const newX = sparkle.x + Math.cos(sparkle.direction) * sparkle.speed;
          const newY = sparkle.y + Math.sin(sparkle.direction) * sparkle.speed;
          
          // Subtle rotation
          const newRotation = sparkle.rotation + 0.1; // 50% slower rotation
          
          return {
            ...sparkle,
            x: newX,
            y: newY,
            rotation: newRotation
          };
        });
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle window resize
    const handleResize = () => {
      setSparkles(prev => 
        prev.map(sparkle => ({
          ...sparkle,
          x: Math.min(sparkle.x, window.innerWidth),
          y: Math.min(sparkle.y, window.innerHeight)
        }))
      );
    };

    initializeSparkles();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [colors]);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute"
          style={{
            left: sparkle.x - 6,
            top: sparkle.y - 6,
            opacity: sparkle.opacity,
            transform: `scale(${sparkle.scale}) rotate(${sparkle.rotation}deg)`,
            transition: 'none'
          }}
        >
          {/* Pixel art star/sparkle */}
          <div
            className="w-3 h-3 cursor-trail-sparkle"
            style={{
              background: sparkle.color,
              clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingSparkles; 