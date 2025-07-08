"use client";
import React from "react";

const Hero = () => {
  return (
    <section
      className="flex items-center justify-center min-h-screen w-full"
      style={{ background: "var(--primary-purple)", color: "var(--soft-peach)" }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">[Your Name]</h1>
        <p className="text-lg">[Short introduction or about you]</p>
      </div>
    </section>
  );
};

export default Hero; 