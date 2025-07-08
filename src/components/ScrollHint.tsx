"use client";
import React, { useEffect, useState } from "react";

const HORIZONTAL_WIGGLE = [0, 6, 0, -6, 0];

const ScrollHint = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [wiggleStep, setWiggleStep] = useState(0);

  useEffect(() => {
    // Find the main scrollable container
    const main = document.querySelector("main");
    if (!main) return;
    const update = () => {
      setCanScrollLeft(main.scrollLeft > 2);
      setCanScrollRight(main.scrollLeft + main.clientWidth < main.scrollWidth - 2);
    };
    update();
    main.addEventListener("scroll", update);
    window.addEventListener("resize", update);
    return () => {
      main.removeEventListener("scroll", update);
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
    <div className="hidden md:flex fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
      <div className="flex items-center select-none">
        {canScrollLeft && (
          <span
            style={{
              display: "inline-block",
              transform: `translateX(${HORIZONTAL_WIGGLE[wiggleStep]}px)`,
              transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
              marginRight: '0.5rem',
            }}
            className="text-gray-300 text-lg"
            aria-hidden
          >
            ←
          </span>
        )}
        <span className="text-gray-400 text-xs font-light mx-2">Scroll</span>
        {canScrollRight && (
          <span
            style={{
              display: "inline-block",
              transform: `translateX(${HORIZONTAL_WIGGLE.map((v) => -v)[wiggleStep]}px)`,
              transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
              marginLeft: '0.5rem',
            }}
            className="text-gray-300 text-lg"
            aria-hidden
          >
            →
          </span>
        )}
      </div>
    </div>
  );
};

export default ScrollHint; 