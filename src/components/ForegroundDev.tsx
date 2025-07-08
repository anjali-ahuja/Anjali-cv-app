import React from "react";
import Image from "next/image";

const ForegroundDev = () => {
  return (
    <div className="fixed bottom-0 left-0 z-50 p-4 w-32 h-32">
      <Image src="/foreground_dev.svg" alt="Dev foreground" fill style={{objectFit: 'contain'}} />
    </div>
  );
};

export default ForegroundDev; 