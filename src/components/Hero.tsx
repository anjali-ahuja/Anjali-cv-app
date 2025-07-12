"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Hero = () => {
  // Typewriter effect state
  const headline = "Hi, I'm Anjali —";
  const [displayedText, setDisplayedText] = useState("");
  const controls = useAnimation();

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setDisplayedText(headline.slice(0, current + 1));
      current++;
      if (current === headline.length) {
        clearInterval(interval);
        controls.start({ opacity: 1, y: 0 });
      }
    }, 84); // typing speed (slowed by 20%)
    return () => clearInterval(interval);
  }, [headline, controls]);

  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center min-h-screen w-full px-6 md:px-16 lg:px-32 py-8 md:gap-6 lg:gap-10"
      style={{ background: "var(--primary-purple)", color: "var(--soft-peach)" }}
    >
      <div className="w-full md:w-1/2 flex flex-col items-center text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
          <span style={{ minHeight: 48, display: "inline-block", letterSpacing: "0.02em" }}>
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block mt-2"
          >
            a software engineer based in Australia.
          </motion.span>
        </h1>
        <motion.p
          className="text-lg md:text-xl mb-6 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I care about writing clean, reliable code and building systems that genuinely help people.
        </motion.p>
        <motion.div
          className="text-base md:text-lg space-y-4 mb-8 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>
            I started my career in tech consulting at EY, working across Digital & Emerging Tech and Data & Analytics, where I helped deliver impactful solutions for clients.
            I then joined Amazon as a Software Development Engineer, focusing on large-scale, customer-facing systems. I bring curiosity, clarity, and a strong customer mindset to every project.
          </p>
          <p>
            I'm excited to be joining Canva soon, where I'll continue building thoughtful, user-first products.
          </p>
          <p>
            Outside of code, I love learning—whether it's a new tech concept, a good book, or how to spot better moves on a chessboard.
          </p>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src="/hero-photo.jpg"
          alt="Anjali smiling with headphones on"
          className="rounded-lg shadow-lg object-cover max-w-xs md:max-w-sm lg:max-w-md w-full h-64 md:h-96"
          style={{ background: "rgba(255,255,255,0.15)" }}
        />
      </div>
    </section>
  );
};

export default Hero; 