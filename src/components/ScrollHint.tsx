"use client";
import React, { useEffect, useState } from "react";

const HORIZONTAL_WIGGLE = [0, 6, 0, -6, 0];
const VERTICAL_WIGGLE = [0, 4, 0, -4, 0];

const ScrollHint = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const [wiggleStep, setWiggleStep] = useState(0);

  useEffect(() => {
    // Find the main scrollable container
    const main = document.querySelector("main");
    if (!main) return;
    
    const update = () => {
      // Desktop horizontal scroll detection
      setCanScrollLeft(main.scrollLeft > 2);
      setCanScrollRight(main.scrollLeft + main.clientWidth < main.scrollWidth - 2);
      
      // Mobile vertical scroll detection
      const isMobile = window.innerWidth < 768; // md breakpoint
      if (isMobile) {
        setCanScrollUp(window.scrollY > 2);
        setCanScrollDown(window.scrollY + window.innerHeight < document.documentElement.scrollHeight - 2);
      }
    };
    
    update();
    main.addEventListener("scroll", update);
    window.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      main.removeEventListener("scroll", update);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setWiggleStep((prev) => (prev + 1) % HORIZONTAL_WIGGLE.length);
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Desktop horizontal scroll hint */}
      <div className="hidden md:flex fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
        <div className="flex items-center select-none">
          {canScrollLeft && (
            <span
              style={{
                display: "inline-block",
                transform: `translateX(${HORIZONTAL_WIGGLE[wiggleStep]}px)`,
                transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                marginRight: '0.5rem',
                color: 'var(--lime-green)',
              }}
              className="text-lg"
              aria-hidden
            >
              ←
            </span>
          )}
          <span className="text-xs font-light mx-2" style={{ color: 'var(--lime-green)' }}>Scroll</span>
          {canScrollRight && (
            <span
              style={{
                display: "inline-block",
                transform: `translateX(${HORIZONTAL_WIGGLE.map((v) => -v)[wiggleStep]}px)`,
                transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                marginLeft: '0.5rem',
                color: 'var(--lime-green)',
              }}
              className="text-lg"
              aria-hidden
            >
              →
            </span>
          )}
        </div>
      </div>

      {/* Mobile vertical scroll hint */}
      <div className="md:hidden fixed right-2 top-1/2 transform -translate-y-1/2 z-40 pointer-events-none">
        <div className="flex flex-col items-center select-none">
          {canScrollUp && (
            <span
              style={{
                display: "inline-block",
                transform: `translateY(${VERTICAL_WIGGLE[wiggleStep]}px)`,
                transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                marginBottom: '0.125rem',
                color: 'var(--lime-green)',
                opacity: 0.7,
              }}
              className="text-sm"
              aria-hidden
            >
              ↑
            </span>
          )}
          <span className="text-xs font-light my-0.5" style={{ color: 'var(--lime-green)', opacity: 0.6 }}>Scroll</span>
          {canScrollDown && (
            <span
              style={{
                display: "inline-block",
                transform: `translateY(${VERTICAL_WIGGLE.map((v) => -v)[wiggleStep]}px)`,
                transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                marginTop: '0.125rem',
                color: 'var(--lime-green)',
                opacity: 0.7,
              }}
              className="text-sm"
              aria-hidden
            >
              ↓
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default ScrollHint; 