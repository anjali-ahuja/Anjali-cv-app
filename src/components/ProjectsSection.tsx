"use client";
import React from "react";
import SectionTitle from "./SectionTitle";
import { playPopSound } from "../utils/sound";

type Status = "live" | "wip" | "achievement";

const statusStyles: Record<Status, { label: string; className: string }> = {
  live: { label: "● Live", className: "bg-[#1D9E75]/20 text-[#0F6E56]" },
  wip: { label: "◐ In progress", className: "bg-[#EF9F27]/25 text-[#854F0B]" },
  achievement: { label: "★ Achievement", className: "bg-[var(--primary-purple)]/15 text-[var(--primary-purple)]" },
};

const Chip = ({ label }: { label: string }) => (
  <span className="bg-[var(--primary-purple)]/10 text-[var(--primary-purple)] text-[0.7rem] px-2 py-0.5 rounded-full hover:bg-[var(--primary-purple)]/20 hover:scale-105 transition-all duration-200 ease-in-out">
    {label}
  </span>
);

const StatusBadge = ({ status }: { status: Status }) => (
  <span className={`text-[0.65rem] px-2 py-0.5 rounded-full whitespace-nowrap ${statusStyles[status].className}`}>
    {statusStyles[status].label}
  </span>
);

const ProjectLink = ({ href, icon, label }: { href: string; icon: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[var(--primary-purple)] text-[0.7rem] font-semibold hover:text-purple-900 transition-colors"
  >
    {icon} {label}
  </a>
);

const ProjectsSection = () => {
  return (
    <section
      className="flex items-center justify-center py-8 md:min-h-screen w-full px-6 md:px-4"
      style={{
        background: "var(--soft-peach)",
        color: "var(--primary-purple)",
        ['--scroll-hint-color']: "var(--primary-purple)",
      } as React.CSSProperties}
    >
      <div className="text-center max-w-6xl w-full px-8 py-6 h-full flex flex-col justify-center">
        <SectionTitle
          text="Projects"
          as="h2"
          className="text-2xl font-semibold mb-3 hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <p className="text-sm md:text-base leading-relaxed max-w-3xl mx-auto mb-6">
          Most of my engineering has been at <span className="font-semibold">Amazon</span> and <span className="font-semibold">Canva</span>, so side projects have been fewer — but I&apos;ve been changing that. A few recent builds below, and I&apos;d love to collaborate on something data-driven, design-focused, or just an idea worth exploring on{' '}
          <a
            href="https://www.linkedin.com/in/anjali-manoj-ahuja/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold hover:text-purple-900 transition-colors"
          >
            LinkedIn
          </a>.
        </p>

        {/* Featured project */}
        <div
          className="bg-white/50 rounded-lg p-4 shadow-sm text-left mb-4 hover:bg-white/70 hover:shadow-lg transition-all duration-300 ease-in-out"
          onMouseEnter={playPopSound}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[var(--primary-purple)] text-white flex items-center justify-center text-xl flex-shrink-0 hover:scale-110 transition-transform duration-300 ease-in-out">📈</div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-semibold text-[var(--primary-purple)]">Paper Trading App</h3>
                <StatusBadge status="live" />
              </div>
            </div>
          </div>
          <p className="text-xs leading-snug mb-2.5">
            Simulate stock &amp; crypto trades with live market prices — FIFO cost-basis P&amp;L, event-sourced trade history, and a clean domain core behind a FastAPI + Streamlit stack.
          </p>
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {["Python", "FastAPI", "SQLModel", "event sourcing", "Streamlit"].map((t) => <Chip key={t} label={t} />)}
          </div>
          <ProjectLink href="https://github.com/anjali-ahuja/paper-trading-app" icon="🔗" label="View on GitHub" />
        </div>

        {/* Other projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {/* Chess Dashboard */}
          <div className="bg-white/50 rounded-lg p-4 shadow-sm flex flex-col hover:bg-white/70 hover:shadow-lg transition-all duration-300 ease-in-out" onMouseEnter={playPopSound}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-[var(--primary-purple)] text-white flex items-center justify-center text-lg flex-shrink-0 hover:scale-110 transition-transform duration-300 ease-in-out">♟️</div>
              <div className="flex flex-wrap items-center gap-2 min-w-0">
                <h3 className="text-sm font-semibold text-[var(--primary-purple)]">Chess Dashboard</h3>
                <StatusBadge status="wip" />
              </div>
            </div>
            <p className="text-xs leading-snug mb-2.5 flex-1">
              Weekly Stockfish analysis of my Chess.com games with deterministic, cached evaluations and a Streamlit dashboard.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {["Python", "Stockfish", "Streamlit"].map((t) => <Chip key={t} label={t} />)}
            </div>
            <ProjectLink href="https://github.com/anjali-ahuja/chess-dashboard" icon="🔗" label="GitHub" />
          </div>

          {/* Meme Mirror */}
          <div className="bg-white/50 rounded-lg p-4 shadow-sm flex flex-col hover:bg-white/70 hover:shadow-lg transition-all duration-300 ease-in-out" onMouseEnter={playPopSound}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-[var(--primary-purple)] text-white flex items-center justify-center text-lg flex-shrink-0 hover:scale-110 transition-transform duration-300 ease-in-out">🐵</div>
              <div className="flex flex-wrap items-center gap-2 min-w-0">
                <h3 className="text-sm font-semibold text-[var(--primary-purple)]">Meme Mirror</h3>
                <StatusBadge status="live" />
              </div>
            </div>
            <p className="text-xs leading-snug mb-2.5 flex-1">
              A webcam app that reads your pose and expression, then mirrors back a matching animal meme in real time.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {["Python", "OpenCV", "MediaPipe"].map((t) => <Chip key={t} label={t} />)}
            </div>
            <ProjectLink href="https://github.com/anjali-ahuja/meme-mirror" icon="🔗" label="GitHub" />
          </div>

          {/* Date Ideas App */}
          <div className="bg-white/50 rounded-lg p-4 shadow-sm flex flex-col hover:bg-white/70 hover:shadow-lg transition-all duration-300 ease-in-out" onMouseEnter={playPopSound}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-[var(--primary-purple)] text-white flex items-center justify-center text-lg flex-shrink-0 hover:scale-110 transition-transform duration-300 ease-in-out">💝</div>
              <div className="flex flex-wrap items-center gap-2 min-w-0">
                <h3 className="text-sm font-semibold text-[var(--primary-purple)]">Date Ideas App</h3>
                <StatusBadge status="live" />
              </div>
            </div>
            <p className="text-xs leading-snug mb-2.5 flex-1">
              A playful generator for creative date ideas, built with React. Predates the AI boom — designed for fun and inspiration.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {["React"].map((t) => <Chip key={t} label={t} />)}
            </div>
            <ProjectLink href="https://anjali-ahuja.github.io/date-ideas-app/" icon="🔗" label="Live demo" />
          </div>

          {/* Datathon Achievement */}
          <div className="bg-white/50 rounded-lg p-4 shadow-sm flex flex-col hover:bg-white/70 hover:shadow-lg transition-all duration-300 ease-in-out" onMouseEnter={playPopSound}>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-9 h-9 rounded-full bg-[var(--primary-purple)] text-white flex items-center justify-center text-lg flex-shrink-0 hover:scale-110 transition-transform duration-300 ease-in-out">🏆</div>
              <div className="flex flex-wrap items-center gap-2 min-w-0">
                <h3 className="text-sm font-semibold text-[var(--primary-purple)]">Microsoft × EY Datathon</h3>
                <StatusBadge status="achievement" />
              </div>
            </div>
            <p className="text-xs leading-snug mb-2.5 flex-1">
              Global semifinalist (#4 of 400+, solo) — a frog-species classification model for biodiversity monitoring using geospatial time-series data.
            </p>
            <div className="flex flex-wrap gap-1.5 mb-2.5">
              {["Python", "scikit-learn", "geospatial"].map((t) => <Chip key={t} label={t} />)}
            </div>
            <ProjectLink href="https://www.linkedin.com/posts/anjali-manoj-ahuja_global-semi-finalist-ey-x-microsoft-2022-activity-6964729323513683968-WxbU" icon="🔗" label="Read more" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
