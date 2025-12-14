import React, { useState } from "react";
import { cn } from "../../lib/utils";

interface BubbleTextProps {
  text?: string;
  className?: string;
}

export const BubbleText = ({ text = "Bubble Text", className }: BubbleTextProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <h2
      onMouseLeave={() => setHoveredIndex(null)}
      className={cn("cursor-default font-display text-3xl md:text-4xl", className)}
    >
      {text.split("").map((char, idx) => {
        const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - idx) : null;
        
        // Base classes
        let classes = "transition-all duration-300 ease-in-out inline-block";
        
        // Apply different styles based on distance
        switch (distance) {
          case 0: // Hovered
            classes += " font-extrabold text-white scale-110";
            break;
          case 1: // Neighbors 1
            classes += " font-bold text-white/90 scale-105";
            break;
          case 2: // Neighbors 2
            classes += " font-medium text-white/70";
            break;
          default: // Base state
            classes += " font-light text-white/40";
            break;
        }

        return (
          <span
            key={idx}
            onMouseEnter={() => setHoveredIndex(idx)}
            className={classes}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </h2>
  );
};
