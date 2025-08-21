"use client";
import React, { useEffect, useRef, useState } from "react";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface SectionTitleProps {
  text: string;
  as?: HeadingTag;
  className?: string;
  showCursor?: boolean;
  typingIntervalMs?: number;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  text,
  as = "h2",
  className,
  showCursor = true,
  typingIntervalMs = 90,
}) => {
  const innerRef = useRef<HTMLSpanElement | null>(null);
  const [displayedText, setDisplayedText] = useState<string>("");
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (hasStarted) return;

    const checkIfInCenter = () => {
      if (!innerRef.current) return;
      
      const rect = innerRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      
      // Trigger when the element is partially visible and approaching the center
      const isInCenter = 
        rect.left < windowWidth * 0.9 && 
        rect.right > windowWidth * 0.1;
      
      if (isInCenter && !hasStarted) {
        setHasStarted(true);
        let currentIndex = 0;
        const intervalId = window.setInterval(() => {
          setDisplayedText(text.slice(0, currentIndex + 1));
          currentIndex += 1;
          if (currentIndex >= text.length) {
            window.clearInterval(intervalId);
          }
        }, typingIntervalMs);

        return () => window.clearInterval(intervalId);
      }
    };

    // Check immediately
    checkIfInCenter();
    
    // Find the main element that handles horizontal scrolling
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.addEventListener('scroll', checkIfInCenter);
    }
    
    // Also listen to window scroll for mobile
    window.addEventListener('scroll', checkIfInCenter);
    window.addEventListener('resize', checkIfInCenter);
    
    return () => {
      if (mainElement) {
        mainElement.removeEventListener('scroll', checkIfInCenter);
      }
      window.removeEventListener('scroll', checkIfInCenter);
      window.removeEventListener('resize', checkIfInCenter);
    };
  }, [text, typingIntervalMs, hasStarted]);

  const Tag = (as ?? "h2") as unknown as React.ElementType;

  return React.createElement(
    Tag,
    { className },
    <span 
      ref={innerRef} 
      style={{ minHeight: "2rem", display: "inline-block" }}
      className="hover:scale-105 hover:text-opacity-80 transition-all duration-300 ease-in-out cursor-pointer"
    >
      {displayedText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default SectionTitle; 