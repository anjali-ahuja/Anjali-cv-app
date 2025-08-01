"use client";
import React from "react";

const ProjectsSection = () => {
  return (
    <section
      className="flex items-center justify-center min-h-screen w-full px-6 md:px-4 py-8"
      style={{ background: "var(--accent-orange)", color: "white" }}
    >
      <div className="text-center max-w-6xl px-8 py-6 h-full flex flex-col justify-center w-full">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="mb-12 space-y-6">
          <p className="text-lg leading-relaxed">
            Most of my engineering journey so far has been shaped by my work at <span className="font-semibold">Amazon</span> and <span className="font-semibold">Canva</span>, so I haven't always had the time to build many side projects. I'm looking to change that. This space will grow with more experiments, creative builds, and collaborations.
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
        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Amazon Accomplishments - Large Card */}
          <div className="lg:col-span-2 bg-white/50 rounded-lg p-6 shadow-sm flex flex-col justify-between text-left relative">
            <div className="flex items-center mb-4">
              <img src="/globe.svg" alt="Amazon" className="w-12 h-12 mr-4 rounded" />
              <div>
                <h3 className="text-xl font-semibold text-[var(--primary-purple)]">Accomplishments at Amazon</h3>
                <span className="text-sm text-gray-700">Aug 2022 – Jul 2025</span>
              </div>
            </div>
            <p className="text-base text-gray-800 mb-4">
              Led the design and development of microservices for Buy With Prime, delivered enterprise features, and improved operational readiness. Drove sprint planning and on-call excellence.
            </p>
            <a
              href="https://www.linkedin.com/in/anjali-manoj-ahuja/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold transition-colors text-sm"
              style={{ color: "var(--primary-purple)" }}
            >
              View on LinkedIn
            </a>
          </div>
          {/* Right Column: Two Smaller Cards */}
          <div className="flex flex-col gap-8">
            {/* Microsoft X EY Datathon */}
            <div className="bg-white/50 rounded-lg p-6 shadow-sm flex flex-col justify-between text-left">
              <div className="flex items-center mb-4">
                <img src="/window.svg" alt="Datathon" className="w-10 h-10 mr-4 rounded" />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--primary-purple)]">Global Semifinalist: Microsoft X EY Datathon</h3>
                  <span className="text-sm text-gray-700">Nov 2021</span>
                </div>
              </div>
              <p className="text-base text-gray-800 mb-4">
                Built a data-driven solution for social impact, reaching the global semifinals among 2,000+ teams. Collaborated across disciplines to deliver a working prototype.
              </p>
              <a
                href="https://news.microsoft.com/en-au/features/ey-microsoft-datathon/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold transition-colors text-sm"
                style={{ color: "var(--primary-purple)" }}
              >
                Read more
              </a>
            </div>
            {/* Date Ideas App */}
            <div className="bg-white/50 rounded-lg p-6 shadow-sm flex flex-col justify-between text-left">
              <div className="flex items-center mb-4">
                <img src="/file.svg" alt="Date Ideas App" className="w-10 h-10 mr-4 rounded" />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--primary-purple)]">Date Ideas App</h3>
                  <span className="text-sm text-gray-700">Mar 2024</span>
                </div>
              </div>
              <p className="text-base text-gray-800 mb-4">
                A playful web app to generate creative date ideas, built with React and OpenAI APIs. Designed for fun and inspiration.
              </p>
              <a
                href="https://github.com/anjali-manoj-ahuja/date-ideas-app"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold transition-colors text-sm"
                style={{ color: "var(--primary-purple)" }}
              >
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 