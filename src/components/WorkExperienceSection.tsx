"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const WorkExperienceSection = () => {
  // Typewriter effect state for header
  const headerText = "Work Experience";
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
      style={{ background: "var(--lime-green)", color: "var(--primary-purple)" }}
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
          I’ve had the privilege of working with amazing teams and tackling complex challenges across e-commerce and fintech. Here's a glimpse into my professional journey.
          </p>
        </div>

        {/* Two Columns for Work Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Current Company */}
          <div className="text-left">
            <div className="bg-white/50 rounded-lg p-4 shadow-sm h-full">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-lg font-semibold">Amazon</h4>
                  <p className="text-base text-gray-700">Software Development Engineer</p>
                </div>
                <span className="text-sm text-gray-600">August 2022 – Present</span>
              </div>
              <ul className="space-y-1 text-xs">
                <li>• Contributed to the design and development of microservices within the Buy With Prime ecosystem</li>
                <li>• Maintained and extended the control-plane service that provisions customer infrastructure</li>
                <li>• Delivered enterprise-level features, including the Buy With Prime app for Shopify</li>
                <li>• Set up metrics, alarms, and dashboards to ensure operational readiness </li>
                <li>• Mitigated production issues and conducted root cause analysis while on-call </li>
                <li>• Led sprint planning for the team, driving improvements in estimation accuracy and planning efficiency </li>
              </ul>
            </div>
          </div>

          {/* Previous Company 1 */}
          <div className="text-left">
            <div className="bg-white/50 rounded-lg p-4 shadow-sm h-full">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-lg font-semibold">Ernst & Young</h4>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-s text-gray-700">Senior Tech Consultant</span>
                    <span className="text-xs text-gray-600">June 2022 – August 2022</span>
                  </div>
                  <ul className="space-y-1 text-xs">
                    <li>• Contributed to business development efforts, presenting client proposals that led to successful project acquisitions</li>
                    <li>• Developed future-ready tech roadmaps and transition architectures for fintech clients navigating large-scale change</li>
                  </ul>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-s text-gray-700">Tech Consultant</span>
                    <span className="text-xs text-gray-600">February 2021 - June 2022 </span>
                  </div>
                  <ul className="space-y-1 text-xs">
                    <li>• Delivered conceptual, logical, and physical data models — along with schemas and DDLs — for enterprise data platforms in the financial sector</li>
                    <li>• Designed and led Python programming tutorials that upskilled over 90 colleagues across six months</li>
                    <li>• Consistently supported business development initiatives and played a key role in delivering multiple successful client projects</li>
                    <li>• Led team operations reviews to improve internal delivery processes and team coordination</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Skills Section - Bottom Row */}
        <div className="text-left">
          <h3 className="text-lg font-semibold mb-4">🛠️ Key Skills & Technologies</h3>
          <div className="bg-white/50 rounded-lg p-4 shadow-sm">
            <p className="text-sm leading-relaxed mb-3">
            I’m a full-stack software engineer with a focus on building clean, scalable systems — from front-end interfaces to backend services and data platforms. I work fluently with React, TypeScript, Python, Java, Kotlin, and AWS, and have contributed to high-impact projects in both product and consulting environments.

I’m drawn to elegant abstractions, clear architecture, and tools that make life better for both users and developers. I bring the same care to collaboration — whether I’m leading planning sessions, pairing with engineers, or aligning with stakeholders to bring a vision to life.
            </p>
            <div className="pt-3 border-t border-gray-200">
              <p className="text-xs">🔗 View my full experience on <a href="https://www.linkedin.com/in/anjali-manoj-ahuja/" target="_blank" className="underline hover:text-purple-600 transition-colors">LinkedIn</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection; 