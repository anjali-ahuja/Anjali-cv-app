"use client";
import React from "react";

const Hero = () => {
  return (
    <section
      className="flex items-center justify-center min-h-screen w-full px-4"
      style={{ background: "var(--primary-purple)", color: "var(--soft-peach)" }}
    >
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl md:text-5xl mb-6 leading-tight">
          Hi, I'm Anjali —<br className="hidden md:inline" />
          <span className="block mt-2">a software engineer based in Australia.</span>
        </h1>
        <p className="text-lg md:text-xl mb-6 opacity-90">
          I care about writing clean, reliable code and building systems that genuinely help people.
        </p>
        <div className="text-base md:text-lg space-y-4 mb-8 opacity-90">
          <p>
            I started my career in tech consulting at EY, working across Digital & Emerging Tech and Data & Analytics, where I helped deliver impactful solutions for clients.
            I then joined Amazon as a Software Development Engineer (SDE), focusing on large-scale, customer-facing systems. I bring curiosity, clarity, and a strong customer mindset to every project.
          </p>
          <p>
            I'm excited to be joining Canva soon, where I'll continue building thoughtful, user-first products.
          </p>
          <p>
            Outside of code, I love learning—whether it's a new tech concept, a good book, or how to spot better moves on a chessboard.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero; 