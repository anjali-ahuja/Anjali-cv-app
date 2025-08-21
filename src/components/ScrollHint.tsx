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
    // Find the main scrollable container - prefer desktop main for horizontal scrolling
    const mains = document.querySelectorAll("main");
    const main = Array.from(mains).find(m => m.classList.contains("md:flex")) || mains[0];
    if (!main) return;
    
    const pickActiveSectionColor = () => {
      const centerX = Math.floor(window.innerWidth / 2);
      const centerY = Math.floor(window.innerHeight / 2);
      const el = document.elementFromPoint(centerX, centerY) as HTMLElement | null;
      let node: HTMLElement | null = el;
      let colorToken: string | null = null;

      while (node) {
        if (node.tagName && node.tagName.toLowerCase() === 'section') {
          const computed = getComputedStyle(node);
          const token = computed.getPropertyValue('--scroll-hint-color').trim();
          if (token) {
            colorToken = token;
            break;
          }
        }
        node = node.parentElement;
      }

      // Fallback to root default if nothing found
      if (!colorToken) {
        colorToken = getComputedStyle(document.documentElement)
          .getPropertyValue('--scroll-hint-color')
          .trim() || '#ffffff';
      }

      // Propagate to :root so the fixed ScrollHint inherits the correct value
      document.documentElement.style.setProperty('--scroll-hint-color', colorToken);
    };

    const update = () => {
      const isMobile = window.innerWidth < 768; // md breakpoint
      
      if (isMobile) {
        // Mobile vertical scroll detection
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight
        );
        
        // Show up arrow if we can scroll up (not at the top)
        setCanScrollUp(scrollTop > 5);
        // Show down arrow if we can scroll down (not at the bottom)
        setCanScrollDown(scrollTop + windowHeight < documentHeight - 5);
        
        // Reset horizontal scroll states on mobile
        setCanScrollLeft(false);
        setCanScrollRight(false);
      } else {
        // Desktop horizontal scroll detection
        setCanScrollLeft(main.scrollLeft > 2);
        setCanScrollRight(main.scrollLeft + main.clientWidth < main.scrollWidth - 2);
        
        // Reset vertical scroll states on desktop
        setCanScrollUp(false);
        setCanScrollDown(false);
      }

      // Update active section color each tick
      pickActiveSectionColor();
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
                color: 'var(--scroll-hint-color)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
              className="text-lg"
              aria-hidden
            >
              ←
            </span>
          )}
          <span className="text-xs font-light mx-2" style={{ color: 'var(--scroll-hint-color)', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Scroll</span>
          {canScrollRight && (
            <span
              style={{
                display: "inline-block",
                transform: `translateX(${HORIZONTAL_WIGGLE.map((v) => -v)[wiggleStep]}px)`,
                transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                marginLeft: '0.5rem',
                color: 'var(--scroll-hint-color)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
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
      <div className="md:hidden fixed right-4 top-1/2 transform -translate-y-1/2 z-40 pointer-events-none">
        <div className="flex flex-col items-center select-none">
          {canScrollUp && (
            <span
              style={{
                display: "inline-block",
                transform: `translateY(${VERTICAL_WIGGLE[wiggleStep]}px)`,
                transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                marginBottom: '0.5rem',
                color: 'var(--scroll-hint-color)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
              className="text-lg"
              aria-hidden
            >
              ↑
            </span>
          )}
          <span className="text-xs font-light my-2" style={{ color: 'var(--scroll-hint-color)', textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>Scroll</span>
          {canScrollDown && (
            <span
              style={{
                display: "inline-block",
                transform: `translateY(${VERTICAL_WIGGLE.map((v) => -v)[wiggleStep]}px)`,
                transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
                marginTop: '0.5rem',
                color: 'var(--scroll-hint-color)',
                textShadow: '0 1px 2px rgba(0,0,0,0.5)'
              }}
              className="text-lg"
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