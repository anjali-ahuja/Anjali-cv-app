import React from "react";
import Image from "next/image";

const ForegroundMoon = () => {
  return (
    <div className="fixed top-0 right-0 z-50 p-4 w-24 h-24">
      <Image src="/foreground_moon.svg" alt="Moon foreground" fill style={{objectFit: 'contain'}} />
    </div>
  );
};

export default ForegroundMoon; 