import React from "react";

const ScrollHint = () => {
  return (
    <div className="hidden md:flex fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 pointer-events-none">
      <div className="flex items-center space-x-2 bg-white/80 px-4 py-2 rounded-full shadow">
        <span className="animate-bounce text-gray-600">←</span>
        <span className="text-gray-600 text-sm">Scroll</span>
        <span className="animate-bounce text-gray-600">→</span>
      </div>
    </div>
  );
};

export default ScrollHint; 