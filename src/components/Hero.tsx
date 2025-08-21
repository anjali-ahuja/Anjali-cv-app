"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { getAssetPath } from "../utils/paths";

const Hero = () => {
  // Typewriter effect state
  const headline = "Hi, I'm Anjali — a software engineer based in Australia.";
  const [displayedText, setDisplayedText] = useState("");
  const controls = useAnimation();

  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-20% 0px -20% 0px" });

  useEffect(() => {
    if (!isInView) return;

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
  }, [headline, controls, isInView]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col md:flex-row items-center justify-center py-8 md:min-h-screen w-full px-6 md:px-16 lg:px-32 md:gap-6 lg:gap-10"
      style={{
        background: "var(--primary-purple)",
        color: "var(--soft-peach)",
        ['--scroll-hint-color']: "var(--soft-peach)",
      } as React.CSSProperties}
    >
      <div className="w-full md:w-1/2 flex flex-col items-center text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl mb-6 leading-tight hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
          <span 
            style={{ minHeight: 48, display: "inline-block", letterSpacing: "0.02em", color: "var(--lime-green)" }}
            className="hover:text-opacity-80 transition-all duration-300 ease-in-out"
          >
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </h1>
        <motion.p
          className="text-lg md:text-xl mb-6 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I care about writing clean, reliable code and building systems that genuinely help people.
        </motion.p>
        <motion.div
          className="text-base md:text-lg space-y-4 mb-8 opacity-90"
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>
            I&apos;m a <span className="font-semibold" style={{ color: "var(--lime-green)" }}>Software Engineer</span> at <span className="font-semibold" style={{ color: "var(--lime-green)" }}>Canva</span>, 
            working on the internal data platform to improve data warehouse experiences for teams across the company. 
            Before this, I was a <span className="font-semibold" style={{ color: "var(--lime-green)" }}>Software Development Engineer</span> at <span className="font-semibold" style={{ color: "var(--lime-green)" }}>Amazon</span>, 
            building large-scale, customer-facing systems. I bring curiosity, clarity, and a strong customer mindset to every project. 
            My tech journey began as a <span className="font-semibold" style={{ color: "var(--lime-green)" }}>Consultant</span> at <span className="font-semibold" style={{ color: "var(--lime-green)" }}>EY</span>, 
            where I worked across Digital & Emerging Tech and Data & Analytics to deliver meaningful solutions for clients.
          </p>
          <p>
            Outside of code, I love learning—whether it&apos;s a new tech concept, a good book, or how to spot better moves on a chessboard.
          </p>
        </motion.div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <Image
          src={getAssetPath("/hero/hero-photo.jpg")}
          alt="Anjali smiling with headphones on"
          width={400}
          height={400}
          className="rounded-lg shadow-lg object-cover max-w-xs md:max-w-sm lg:max-w-md w-full h-64 md:h-96 hover:shadow-xl transition-all duration-300 ease-in-out"
          style={{ background: "rgba(255,255,255,0.15)" }}
        />
      </div>
    </section>
  );
};

export default Hero; 