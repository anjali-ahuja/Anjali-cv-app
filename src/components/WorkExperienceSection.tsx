"use client";
import React from "react";
import Image from "next/image";
import { getAssetPath } from "../utils/paths";
import SectionTitle from "./SectionTitle";
import { playPopSound } from "../utils/sound";

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
      <div className="text-center max-w-6xl w-full px-8 py-6 h-full flex flex-col justify-center">
        <SectionTitle
          text="Work Experience"
          as="h2"
          className="text-2xl font-semibold mb-3 hover:scale-105 transition-transform duration-300 ease-in-out"
        />

        {/* Intro Paragraph */}
        <div className="mb-6">
          <p className="text-sm md:text-base leading-relaxed max-w-4xl mx-auto">
            I&apos;ve had the privilege of working with amazing teams and tackling complex challenges across e-commerce and fintech. Here&apos;s a glimpse into my professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left items-start">
          {/* Timeline: roles in reverse-chronological order */}
          <div className="lg:col-span-2 relative pl-14">
            {/* Vertical rail */}
            <div className="absolute left-[19px] top-3 bottom-3 w-0.5 bg-[var(--primary-purple)]/30" aria-hidden="true" />

            {/* Canva - Current */}
            <div className="relative mb-5">
              <div className="absolute -left-14 top-0 w-10 h-10 rounded-full bg-white ring-2 ring-[var(--primary-purple)]/40 overflow-hidden flex items-center justify-center shadow-sm z-10">
                <Image src={getAssetPath("/work-experience/canva_logo.jpeg")} alt="Canva logo" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <div className="bg-white/50 rounded-lg p-4 shadow-sm hover:bg-white/70 hover:shadow-lg transition-all duration-300 ease-in-out" onMouseEnter={playPopSound}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 mb-2">
                  <h4 className="text-base font-semibold">Canva · <span className="font-normal text-gray-700">Software Engineer</span></h4>
                  <span className="text-xs text-gray-600">July 2025 – Present</span>
                </div>
                <ul className="space-y-1 text-xs leading-snug">
                  <li>• Tech lead: owned team goals, authored directional design and planning docs, and delivered on time</li>
                  <li>• Shipped AI summary for deployment diffs, deployment notification system, infrastructure visualisation tool, and an AI-powered first responder for failing data jobs</li>
                  <li>• Led large-scale migration off legacy data platform infrastructure</li>
                  <li>• Built and documented core systems: CLI rearchitecture, CLI telemetry, and data cleanup automation</li>
                  <li>• Raised the bar on developer experience — improved local dev flows, test coverage, and brought solid software engineering rigour to data engineering</li>
                  <li>• Interviewing engineering candidates</li>
                </ul>
              </div>
            </div>

            {/* Amazon - Previous */}
            <div className="relative mb-5">
              <div className="absolute -left-14 top-0 w-10 h-10 rounded-full bg-white ring-2 ring-[var(--primary-purple)]/40 overflow-hidden flex items-center justify-center shadow-sm z-10">
                <Image src={getAssetPath("/work-experience/amazon_logo.jpeg")} alt="Amazon logo" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <div className="bg-white/50 rounded-lg p-4 shadow-sm hover:bg-white/70 hover:shadow-lg transition-all duration-300 ease-in-out" onMouseEnter={playPopSound}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-2 mb-2">
                  <h4 className="text-base font-semibold">Amazon · <span className="font-normal text-gray-700">Software Development Engineer</span></h4>
                  <span className="text-xs text-gray-600">August 2022 – July 2025</span>
                </div>
                <ul className="space-y-1 text-xs leading-snug">
                  <li>• Contributed to the design and development of microservices within the Buy With Prime ecosystem</li>
                  <li>• Maintained and extended the control-plane service that provisions customer infrastructure</li>
                  <li>• Delivered enterprise-level features, including the Buy With Prime app for Shopify</li>
                  <li>• Set up metrics, alarms, and dashboards to ensure operational readiness</li>
                  <li>• Mitigated production issues and conducted root cause analysis while on-call</li>
                  <li>• Led sprint planning, driving improvements in estimation accuracy and planning efficiency</li>
                </ul>
              </div>
            </div>

            {/* EY - Earliest */}
            <div className="relative">
              <div className="absolute -left-14 top-0 w-10 h-10 rounded-full bg-white ring-2 ring-[var(--primary-purple)]/40 overflow-hidden flex items-center justify-center shadow-sm z-10">
                <Image src={getAssetPath("/work-experience/ernstandyoung_logo.jpeg")} alt="Ernst & Young logo" width={40} height={40} className="w-full h-full object-cover" />
              </div>
              <div className="bg-white/50 rounded-lg p-4 shadow-sm hover:bg-white/70 hover:shadow-lg transition-all duration-300 ease-in-out" onMouseEnter={playPopSound}>
                <h4 className="text-base font-semibold mb-2">Ernst &amp; Young</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2 mb-1">
                      <span className="text-sm text-gray-700">Senior Tech Consultant</span>
                      <span className="text-xs text-gray-600">June 2022 – August 2022</span>
                    </div>
                    <ul className="space-y-1 text-xs leading-snug">
                      <li>• Contributed to business development efforts, presenting client proposals that led to successful project acquisitions</li>
                      <li>• Developed future-ready tech roadmaps and transition architectures for fintech clients navigating large-scale change</li>
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-2 mb-1">
                      <span className="text-sm text-gray-700">Tech Consultant</span>
                      <span className="text-xs text-gray-600">February 2021 – June 2022</span>
                    </div>
                    <ul className="space-y-1 text-xs leading-snug">
                      <li>• Delivered conceptual, logical, and physical data models — with schemas and DDLs — for enterprise data platforms in the financial sector</li>
                      <li>• Designed and led Python programming tutorials that upskilled over 90 colleagues across six months</li>
                      <li>• Consistently supported business development and played a key role in delivering multiple successful client projects</li>
                      <li>• Led team operations reviews to improve internal delivery processes and coordination</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Key Skills - companion column */}
          <div className="lg:col-span-1">
            <div className="bg-white/50 rounded-lg p-4 shadow-sm hover:bg-white/70 hover:shadow-lg transition-all duration-300 ease-in-out lg:sticky lg:top-6" onMouseEnter={playPopSound}>
              <h3 className="text-base font-semibold mb-3"><span className="inline-block hover:scale-125 transition-transform duration-300 ease-in-out">🛠️</span> Key Skills &amp; Technologies</h3>
              <p className="text-xs leading-relaxed mb-3">
                I&apos;m a full-stack software engineer focused on building clean, scalable systems — from front-end interfaces to backend services and data platforms, across both product and consulting environments.
              </p>
              <p className="text-xs leading-relaxed mb-4">
                I&apos;m drawn to elegant abstractions, clear architecture, and tools that make life better for users and developers alike — and I bring the same care to collaboration, whether leading planning, pairing with engineers, or aligning with stakeholders.
              </p>

              <div className="space-y-3 mb-4">
                {[
                  { label: "Languages", items: ["Python", "Java", "Kotlin", "TypeScript", "C"] },
                  { label: "Frontend", items: ["React", "Next.js", "Tailwind"] },
                  { label: "Backend & Cloud", items: ["AWS", "Snowflake"] },
                  { label: "Practices", items: ["system design", "technical writing", "tech leadership"] },
                ].map((group) => (
                  <div key={group.label}>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-wide text-[var(--primary-purple)]/70 mb-1.5">{group.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2 py-0.5 rounded-full bg-[var(--primary-purple)]/10 text-[var(--primary-purple)] hover:bg-[var(--primary-purple)]/20 hover:scale-105 transition-all duration-200 ease-in-out"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-gray-200">
                <p className="text-xs">🔗 View my full experience on <a href="https://www.linkedin.com/in/anjali-manoj-ahuja/" target="_blank" className="underline hover:text-purple-600 transition-colors">LinkedIn</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
