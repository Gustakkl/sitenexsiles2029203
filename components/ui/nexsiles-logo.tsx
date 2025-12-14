import React from "react";
import { cn } from "../../lib/utils";

interface NexsilesLogoProps {
  className?: string;
  size?: number;
}

export const NexsilesLogo = ({ className, size = 32 }: NexsilesLogoProps) => {
  return (
    <div 
      className={cn("relative flex items-center justify-center select-none", className)} 
      style={{ width: size, height: size }}
    >
      <img
        src="https://i.postimg.cc/G2bmkzRm/aa021811-603b-494b-9cd0-d9678b29b9e7-removebg-preview.png"
        alt="Nexsiles Logo"
        className="w-full h-full object-contain"
        draggable={false}
        style={{ filter: 'hue-rotate(45deg)' }}
      />
    </div>
  );
};