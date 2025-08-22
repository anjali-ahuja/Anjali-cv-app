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

    const startAnimation = () => {
      if (hasStarted) return;
      
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
    };

    // Use Intersection Observer for better performance and reliability
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            startAnimation();
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
        rootMargin: '0px 0px -20% 0px' // Trigger slightly before the element is fully in view
      }
    );

    if (innerRef.current) {
      observer.observe(innerRef.current);
    }

    return () => {
      if (innerRef.current) {
        observer.unobserve(innerRef.current);
      }
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