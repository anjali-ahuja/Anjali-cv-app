"use client";
import React from "react";

const ContactSection = () => {
  return (
    <section
      className="flex items-center justify-center min-h-screen w-full"
      style={{ background: "var(--pink)", color: "var(--coral)" }}
    >
      <div className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <div className="space-x-4">
          {/* Replace with your contact links or social icons */}
          <a href="#" className="underline" style={{ color: "var(--coral)" }}>Email</a>
          <a href="#" className="underline" style={{ color: "var(--coral)" }}>LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 