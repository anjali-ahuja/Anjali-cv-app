"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const EducationSection = () => {
  // Typewriter effect state for header
  const headerText = "Education";
  const [displayedHeader, setDisplayedHeader] = useState("");
  const controls = useAnimation();

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      setDisplayedHeader(headerText.slice(0, current + 1));
      current++;
      if (current === headerText.length) {
        clearInterval(interval);
        controls.start({ opacity: 1, y: 0 });
      }
    }, 100); // typing speed
    return () => clearInterval(interval);
  }, [headerText, controls]);

  return (
    <section
      className="flex items-center justify-center min-h-screen w-full px-4 py-8"
      style={{ background: "var(--soft-peach)", color: "var(--primary-purple)" }}
    >
      <div className="text-center max-w-6xl px-8 py-6 h-full flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-6">
          <span style={{ minHeight: "2rem", display: "inline-block" }}>
            {displayedHeader}
            <span className="animate-pulse">|</span>
          </span>
        </h2>
        
        {/* Intro Paragraph - Top Row */}
        <div className="mb-8">
          <p className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            I've always loved learning — whether it's through formal study, technical certifications, or self-directed exploration. Here's a snapshot of my educational journey so far.
          </p>
        </div>

        {/* Two Columns - Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Formal Education Section */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">🎓 Formal Education</h3>
            <div className="bg-white/50 rounded-lg p-4 shadow-sm">
              <h4 className="text-lg font-semibold mb-2">Bachelor of Computer Science</h4>
              <p className="text-base mb-3">University of Melbourne — 2018 – 2020</p>
              <ul className="space-y-1 text-sm">
                <li>• Majored in: Computing and Software Systems</li>
                <li>• Undertook electives in Data Science, Physics and Positive Psychology</li>
                <li>• Awarded First Class Honours for final-year capstone project</li>
                <li>• Served as student representative in core computing subjects, advocating for a better learning experience </li>
              </ul>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">📜 Certifications</h3>
            <div className="bg-white/50 rounded-lg p-4 shadow-sm">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm">AWS Certified Developer – Associate</span>
                    <span className="text-xs text-gray-600">October 2024</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Amazon Web Services</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm">Introduction to Concurrent Programming with GPUs</span>
                    <span className="text-xs text-gray-600">April 2024</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">John Hopkins University</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm">Microsoft Certified: Azure Data Scientist Associate</span>
                    <span className="text-xs text-gray-600">January 2022</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Microsoft</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm">Neural Networks and Deep Learning</span>
                    <span className="text-xs text-gray-600">July 2020</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">DeepLearning.AI</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-200">
                <p className="text-xs">🔗 View all my certifications on <a href="https://www.credly.com/users/anjali-manoj-ahuja/" target="_blank" className="underline hover:text-purple-600 transition-colors">Credly</a></p>
              </div>
            </div>
          </div>
        </div>

        {/* Ongoing Learning Section - Bottom Row */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-4">📚 Ongoing Learning</h3>
          <div className="bg-white/50 rounded-lg p-4 shadow-sm">
            <p className="text-sm leading-relaxed">
            I'm currently deepening my skills in system design, machine learning, and product analytics — and outside of work, I'm also working on sharpening my chess game and strategic thinking.
            If you're exploring similar topics, I'd love to connect and learn together — feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 