import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollHint from "../components/ScrollHint";
import CursorTrail from "../components/CursorTrail";
import FloatingSparkles from "../components/FloatingSparkles";

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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {/* Sticky SVGs */}
        <ScrollHint />
        {/* Ambient floating sparkles */}
        <FloatingSparkles />
        {/* Cursor trail effect */}
        <CursorTrail />
        {/* Responsive layout: vertical scroll on mobile, horizontal on desktop */}
        <main
          className="flex flex-col md:flex-row md:overflow-x-auto md:overflow-y-hidden md:scroll-smooth md:h-screen md:w-screen md:[&>*]:min-w-full md:[&>*]:h-screen md:[&>*]:flex-shrink-0 md:no-scrollbar"
          style={{ 
            minHeight: '100vh',
            WebkitOverflowScrolling: 'touch' // Enable smooth scrolling on iOS
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
