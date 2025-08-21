"use client";
import React from "react";
import SectionTitle from "./SectionTitle";

const ProjectsSection = () => {
  return (
    <section
      className="flex items-center justify-center min-h-screen w-full px-6 md:px-4 py-8"
      style={{
        background: "var(--accent-aqua)",
        color: "var(--primary-purple)",
        ['--scroll-hint-color']: "var(--primary-purple)",
      } as React.CSSProperties}
    >
      <div className="text-center max-w-6xl px-8 py-6 h-full flex flex-col justify-center w-full">
        <SectionTitle 
          text="Projects" 
          as="h2" 
          className="text-2xl font-semibold mb-6" 
        />
        <div className="mb-8 space-y-4">
          <p className="text-base md:text-lg leading-relaxed">
            Most of my engineering journey so far has been shaped by my work at <span className="font-semibold">Amazon</span> and <span className="font-semibold">Canva</span>, so I haven&apos;t always had the time to build many side projects. I&apos;m looking to change that. This space will grow with more experiments, creative builds, and collaborations.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            If you&apos;re interested in collaborating on something data-driven, design-focused, or just an idea worth exploring, I&apos;d love to hear from you on{' '}
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Amazon Accomplishments - Large Card */}
          <div className="h-full bg-white/50 rounded-lg p-4 shadow-sm flex flex-col text-left relative">
            <div className="flex items-center mb-3">
              <img src="/projects/amazon_accomplishments.svg" alt="Amazon" className="w-[3.125rem] h-[3.125rem] mr-3 rounded" />
              <div>
                <h3 className="text-lg font-semibold text-[var(--primary-purple)]">Accomplishments at Amazon</h3>
                <span className="text-xs text-[var(--primary-purple)]">Aug 2022 – Jul 2025</span>
              </div>
            </div>
            <ul className="list-disc pl-5 marker:text-base space-y-1 text-sm leading-snug text-[var(--primary-purple)]">
              <li>Reduced canary testing costs for a control plane service by 80% through targeted improvements to test templates.</li>
              <li>
                Delivered multiple features for the Buy with Prime ecosystem, including:
                <ul className="mt-1 pl-[2.592rem] list-disc marker:text-xs space-y-1 text-sm leading-snug">
                  <li>Shopify integration enhancements such as return synchronisation and virtual bundles support</li>
                  <li>Frontends for Multi-Channel Fulfillment and Buy with Prime apps</li>
                  <li>Control plane provisioning logic for Salesforce Commerce Cloud integration, including sandbox capabilities</li>
                </ul>
              </li>
              <li>Designed and implemented event-driven automation for account suspensions and closures, eliminating the need for manual operational tickets.</li>
            </ul>
          </div>
          {/* Right Column: Two Smaller Cards */}
          <div className="flex flex-col gap-6">
            {/* Microsoft X EY Datathon */}
            <div className="bg-white/50 rounded-lg p-4 shadow-sm flex flex-col justify-between text-left">
              <div className="flex items-center mb-3">
                <img src="/projects/microsoft_ey_datathon.svg" alt="Datathon" className="w-[2.8125rem] h-[2.8125rem] mr-3 rounded" />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--primary-purple)]">Global Semifinalist: Microsoft X EY Datathon</h3>
                  <span className="text-xs text-[var(--primary-purple)]">May 2022 - June 2022</span>
                </div>
              </div>
              <p className="text-sm leading-snug text-[var(--primary-purple)] mb-3">
                Developed a frog species classification model to advance biodiversity monitoring and modelling, leveraging geospatial time-series data on frogs and weather. Built in Python using xarray, pandas, NumPy, scikit-learn, and Zarr. Achieved global semifinalist ranking (#4 of 400+ teams) for which I was asked to present my solution.
              </p>
              <a
                href="https://www.linkedin.com/posts/anjali-manoj-ahuja_global-semi-finalist-ey-x-microsoft-2022-activity-6964729323513683968-WxbU"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold transition-colors text-xs"
                style={{ color: "var(--primary-purple)" }}
              >
                Read more
              </a>
            </div>
            {/* Date Ideas App */}
            <div className="bg-white/50 rounded-lg p-4 shadow-sm flex flex-col justify-between text-left">
              <div className="flex items-center mb-3">
                <img src="/projects/date_ideas_app.svg" alt="Date Ideas App" className="w-[2.8125rem] h-[2.8125rem] mr-3 rounded" />
                <div>
                  <h3 className="text-lg font-semibold text-[var(--primary-purple)]">Date Ideas App</h3>
                  <span className="text-xs text-[var(--primary-purple)]">Feb 2022</span>
                </div>
              </div>
              <p className="text-sm leading-snug text-[var(--primary-purple)] mb-3">
                A playful web app to generate creative date ideas, built with React. Predates the AI boom. Designed for fun and inspiration.
              </p>
              <a
                href="https://anjali-ahuja.github.io/date-ideas-app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold transition-colors text-xs"
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