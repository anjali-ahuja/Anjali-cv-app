"use client";
import React from "react";

const ProjectsCarousel = () => {
  return (
    <section
      className="flex items-center justify-center min-h-screen w-full px-6 md:px-4 py-8"
      style={{ background: "var(--accent-orange)", color: "white" }}
    >
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        
        <div className="mb-12 space-y-6">
          <p className="text-lg leading-relaxed">
            Most of my engineering journey so far has been shaped by my work at{" "}
            <span className="font-semibold">Amazon</span> and{" "}
            <span className="font-semibold">Canva</span>, so I haven't always had the time to build many side projects. I'm looking to change that. This space will grow with more experiments, creative builds, and collaborations.
          </p>
          
          <p className="text-lg leading-relaxed">
            If you're interested in collaborating on something data-driven, design-focused, or just an idea worth exploring, I'd love to hear from you on{' '}
            <a
              href="https://www.linkedin.com/in/anjali-manoj-ahuja/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-[var(--primary-purple)] transition-colors"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>

        <div className="w-full h-40 flex items-center justify-center border-2 border-dashed border-white opacity-60">
          [Project carousel placeholder]
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel; 