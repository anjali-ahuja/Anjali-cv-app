'use client';

import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
  rotation: number;
  color: string;
  createdAt: number;
}

const CursorTrail = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const colors = [
    'var(--primary-purple)',
    'var(--accent-aqua)', 
    'var(--soft-peach)',
    'var(--lime-green)',
    'var(--pink)',
    'var(--coral)'
  ];

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Add new sparkle every few frames
      const currentTime = Date.now();
      if (currentTime - lastTime > 24) { // Add sparkle every 24ms (increased frequency by 40% + 25% more)
        const newSparkle: Sparkle = {
          id: currentTime + Math.random(),
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          scale: 0.91 + Math.random() * 0.91, // Increased scale by 40% + 30% more
          rotation: Math.random() * 360,
          color: colors[Math.floor(Math.random() * colors.length)],
          createdAt: currentTime
        };
        
        setSparkles(prev => [...prev, newSparkle]);
        lastTime = currentTime;
      }
    };

    const animate = () => {
      setSparkles(prev => {
        const now = Date.now();
        return prev
          .map(sparkle => {
            const age = now - sparkle.createdAt;
            const maxAge = 1400; // 1.4 seconds lifetime (increased by 40%)
            
            if (age > maxAge) return null;
            
            const progress = age / maxAge;
            return {
              ...sparkle,
              opacity: 1 - progress,
              scale: sparkle.scale * (1 - progress * 0.5),
              y: sparkle.y - progress * 28, // Float upward (increased by 40%)
              x: sparkle.x + (Math.random() - 0.5) * 2.8 // Slight horizontal drift (increased by 40%)
            };
          })
          .filter(Boolean) as Sparkle[];
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
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

export default CursorTrail; 