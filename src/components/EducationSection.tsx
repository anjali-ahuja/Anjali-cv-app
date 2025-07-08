"use client";
import React from "react";

const EducationSection = () => {
  return (
    <section
      className="flex items-center justify-center min-h-screen w-full"
      style={{ background: "var(--soft-peach)", color: "var(--primary-purple)" }}
    >
      <div className="text-center max-w-2xl">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <ul className="space-y-6 text-lg md:text-xl">
          <li>
            <span className="font-bold">Bachelor of Computer Science</span> — University of Melbourne<br/>
            <span className="text-base">2018 – 2020</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EducationSection; 