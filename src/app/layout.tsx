import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollHint from "../components/ScrollHint";
import CursorTrail from "../components/CursorTrail";
import FloatingSparkles from "../components/FloatingSparkles";
import ImagePreload from "../components/ImagePreload";

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
        <ImagePreload />
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
        {/* Mobile: vertical scroll layout */}
        <main className="md:hidden flex flex-col w-full">
          {children}
        </main>
        {/* Desktop: horizontal scroll layout */}
        <main className="hidden md:flex md:flex-row md:overflow-x-auto md:overflow-y-hidden md:scroll-smooth md:h-screen md:w-screen md:[&>*]:min-w-full md:[&>*]:h-screen md:[&>*]:flex-shrink-0 md:no-scrollbar">
          {children}
        </main>
      </body>
    </html>
  );
}
