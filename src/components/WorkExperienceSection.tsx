"use client";
import React from "react";
import Image from "next/image";
import { getAssetPath } from "../utils/paths";
import SectionTitle from "./SectionTitle";

const WorkExperienceSection = () => {
  return (
    <section
      className="flex items-center justify-center py-8 md:min-h-screen w-full px-6 md:px-4"
      style={{
        background: "var(--lime-green)",
        color: "var(--primary-purple)",
        ['--scroll-hint-color']: "var(--primary-purple)",
      } as React.CSSProperties}
    >
      <div className="text-center max-w-6xl px-8 py-6 h-full flex flex-col justify-center">
        <SectionTitle 
          text="Work Experience" 
          as="h2" 
          className="text-2xl font-semibold mb-6 hover:scale-105 transition-transform duration-300 ease-in-out" 
        />
        
        {/* Intro Paragraph - Top Row */}
        <div className="mb-8">
          <p className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            I&apos;ve had the privilege of working with amazing teams and tackling complex challenges across e-commerce and fintech. Here&apos;s a glimpse into my professional journey.
          </p>
        </div>

        {/* Two Columns for Work Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-y-0 gap-x-0 lg:gap-x-6 mb-8">
          {/* Left Column: Current and Recent Companies */}
          <div className="text-left flex flex-col gap-4 lg:gap-6">
            {/* Canva - Current Company */}
            <div className="bg-white/50 rounded-lg p-4 shadow-sm hover:bg-white/70 hover:shadow-lg transition-all duration-300 ease-in-out">
              <div className="flex items-center gap-3 mb-2">
                <Image src={getAssetPath("/work-experience/canva_logo.jpeg")} alt="Canva logo" width={32} height={32} className="w-8 h-8 rounded hover:scale-110 transition-transform duration-300 ease-in-out flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h4 className="text-lg font-semibold">Canva</h4>
                  <p className="text-base text-gray-700">Software Engineer</p>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-3">July 2025 – Present</div>
              <ul className="space-y-1 text-xs">
                <li>• Ramping up to improve data warehouse experiences for teams across the company <span className="inline-block hover:scale-125 transition-transform duration-300 ease-in-out">🏗️</span></li>
              </ul>
            </div>
            {/* Amazon - Previous Company */}
            <div className="bg-white/50 rounded-lg p-4 shadow-sm hover:bg-white/70 hover:shadow-lg transition-all duration-300 ease-in-out">
              <div className="flex items-center gap-3 mb-2">
                <Image src={getAssetPath("/work-experience/amazon_logo.jpeg")} alt="Amazon logo" width={32} height={32} className="w-8 h-8 rounded hover:scale-110 transition-transform duration-300 ease-in-out flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <h4 className="text-lg font-semibold">Amazon</h4>
                  <p className="text-base text-gray-700">Software Development Engineer</p>
                </div>
              </div>
              <div className="text-sm text-gray-600 mb-3">August 2022 – July 2025</div>
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

          {/* Right Column: EY */}
          <div className="text-left">
            <div className="bg-white/50 rounded-lg p-4 shadow-sm h-full hover:bg-white/70 hover:shadow-lg transition-all duration-300 ease-in-out">
              <div className="flex items-center gap-3 mb-3">
                <Image src={getAssetPath("/work-experience/ernstandyoung_logo.jpeg")} alt="Ernst & Young logo" width={32} height={32} className="w-8 h-8 rounded hover:scale-110 transition-transform duration-300 ease-in-out flex-shrink-0" />
                <h4 className="text-lg font-semibold">Ernst & Young</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-s text-gray-700 flex-1 min-w-0">Senior Tech Consultant</span>
                    <span className="text-xs text-gray-600 flex-shrink-0 ml-2 text-right">June 2022 – August 2022</span>
                  </div>
                  <ul className="space-y-1 text-xs">
                    <li>• Contributed to business development efforts, presenting client proposals that led to successful project acquisitions</li>
                    <li>• Developed future-ready tech roadmaps and transition architectures for fintech clients navigating large-scale change</li>
                  </ul>
                </div>
                <div className="pt-2 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-s text-gray-700 flex-1 min-w-0">Tech Consultant</span>
                    <span className="text-xs text-gray-600 flex-shrink-0 ml-2 text-right">February 2021 - June 2022 </span>
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
          <h3 className="text-lg font-semibold mb-4"><span className="inline-block hover:scale-125 transition-transform duration-300 ease-in-out">🛠️</span> Key Skills & Technologies</h3>
          <div className="bg-white/50 rounded-lg p-4 shadow-sm hover:bg-white/70 hover:shadow-lg transition-all duration-300 ease-in-out">
            <p className="text-sm leading-relaxed mb-3">
              I&apos;m a full-stack software engineer with a focus on building clean, scalable systems — from front-end interfaces to backend services and data platforms. I work fluently with React, TypeScript, Python, Java, Kotlin, and AWS, and have contributed to high-impact projects in both product and consulting environments.

              I&apos;m drawn to elegant abstractions, clear architecture, and tools that make life better for both users and developers. I bring the same care to collaboration — whether I&apos;m leading planning sessions, pairing with engineers, or aligning with stakeholders to bring a vision to life.
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