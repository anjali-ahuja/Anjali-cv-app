import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollHint from "../components/ScrollHint";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {/* Sticky SVGs */}
        <ScrollHint />
        {/* Responsive layout: horizontal scroll on desktop, vertical on mobile */}
        <main
          className="flex flex-col md:flex-row md:overflow-x-auto md:overflow-y-hidden md:scroll-smooth md:h-screen md:w-screen md:[&>*]:min-w-full md:[&>*]:h-screen md:[&>*]:flex-shrink-0 md:no-scrollbar"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
