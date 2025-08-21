'use client';

import { useEffect, useState, useMemo } from 'react';

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
    let lastTime = 0;

    const addSparkle = (x: number, y: number) => {
      const currentTime = Date.now();
      if (currentTime - lastTime > 48) { // Add sparkle every 48ms (50% slower - 24*2=48)
        const newSparkle: Sparkle = {
          id: currentTime + Math.random(),
          x: x,
          y: y,
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

    const handleMouseMove = (e: MouseEvent) => {
      addSparkle(e.clientX, e.clientY);
    };

    const handleTouchMove = (e: TouchEvent) => {
      // Don't prevent default scrolling on mobile
      const touch = e.touches[0];
      if (touch) {
        addSparkle(touch.clientX, touch.clientY);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) {
        addSparkle(touch.clientX, touch.clientY);
      }
    };

    const animate = () => {
      setSparkles(prev => {
        const now = Date.now();
        return prev
          .map(sparkle => {
            const age = now - sparkle.createdAt;
            const maxAge = 2800; // 2.8 seconds lifetime (50% slower - 1400*2=2800)
            
            if (age > maxAge) return null;
            
            const progress = age / maxAge;
            return {
              ...sparkle,
              opacity: 1 - progress,
              scale: sparkle.scale * (1 - progress * 0.5),
              y: sparkle.y - progress * 14, // Float upward (50% slower - 28*0.5=14)
              x: sparkle.x + (Math.random() - 0.5) * 1.4 // Slight horizontal drift (50% slower - 2.8*0.5=1.4)
            };
          })
          .filter(Boolean) as Sparkle[];
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Add event listeners for both mouse and touch
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [colors]);

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