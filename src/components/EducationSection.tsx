"use client";
import React from "react";
import SectionTitle from "./SectionTitle";

const EducationSection = () => {
  return (
    <section
      className="flex items-center justify-center py-8 md:min-h-screen w-full px-6 md:px-4"
      style={{
        background: "var(--accent-aqua)",
        color: "var(--primary-purple)",
        ['--scroll-hint-color']: "var(--primary-purple)",
      } as React.CSSProperties}
    >
      <div className="text-center max-w-6xl px-8 py-6 h-full flex flex-col justify-center">
        <SectionTitle 
          text="Education" 
          as="h2" 
          className="text-2xl font-semibold mb-6 hover:scale-105 transition-transform duration-300 ease-in-out" 
        />
        
        {/* Intro Paragraph - Top Row */}
        <div className="mb-8">
          <p className="text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            I&apos;ve always loved learning — whether it&apos;s through formal study, technical certifications, or self-directed exploration. Here&apos;s a snapshot of my educational journey so far.
          </p>
        </div>

        {/* Two Columns - Middle Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Formal Education Section */}
          <div className="text-left flex flex-col">
            <h3 className="text-lg font-semibold mb-4"><span className="inline-block hover:scale-125 transition-transform duration-300 ease-in-out">🎓</span> Formal Education</h3>
            <div className="bg-white/50 rounded-lg p-4 shadow-sm flex-1 hover:bg-white/70 hover:shadow-lg transition-all duration-300 ease-in-out">
              <h4 className="text-lg font-semibold mb-2">Bachelor of Science</h4>
              <p className="text-base mb-1">University of Melbourne</p>
              <p className="text-sm text-gray-600 mb-3">2018 – 2020</p>
              <ul className="space-y-1 text-sm">
                <li>• Majored in: Computing and Software Systems</li>
                <li>• Undertook electives in Data Science, Physics and Positive Psychology</li>
                <li>• Awarded First Class Honours for final-year capstone project</li>
                <li>• Served as student representative in core computing subjects, advocating for a better learning experience </li>
              </ul>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="text-left flex flex-col">
            <h3 className="text-lg font-semibold mb-4"><span className="inline-block hover:scale-125 transition-transform duration-300 ease-in-out">📜</span> Certifications</h3>
            <div className="bg-white/50 rounded-lg p-4 shadow-sm flex-1 hover:bg-white/70 hover:shadow-lg transition-all duration-300 ease-in-out">
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm flex-1 min-w-0">AWS Certified Developer – Associate</span>
                    <span className="text-xs text-gray-600 flex-shrink-0 ml-2 text-right">October 2024</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Amazon Web Services</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm flex-1 min-w-0">Introduction to Concurrent Programming with GPUs</span>
                    <span className="text-xs text-gray-600 flex-shrink-0 ml-2 text-right">April 2024</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">John Hopkins University</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm flex-1 min-w-0">Microsoft Certified: Azure Data Scientist Associate</span>
                    <span className="text-xs text-gray-600 flex-shrink-0 ml-2 text-right">January 2022</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Microsoft</p>
                </div>
                <div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-sm flex-1 min-w-0">Neural Networks and Deep Learning</span>
                    <span className="text-xs text-gray-600 flex-shrink-0 ml-2 text-right">July 2020</span>
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
          <h3 className="text-lg font-semibold mb-4"><span className="inline-block hover:scale-125 transition-transform duration-300 ease-in-out">📚</span> Ongoing Learning</h3>
          <div className="bg-white/50 rounded-lg p-4 shadow-sm hover:bg-white/70 hover:shadow-lg transition-all duration-300 ease-in-out">
            <p className="text-sm leading-relaxed">
              I&apos;m currently deepening my skills in system design, machine learning, and product analytics — and outside of work, I&apos;m also working on sharpening my chess game and strategic thinking.
              If you&apos;re exploring similar topics, I&apos;d love to connect and learn together — feel free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection; 