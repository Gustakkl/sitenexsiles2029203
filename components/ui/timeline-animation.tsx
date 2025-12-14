import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { cn } from "../../lib/utils";

interface TimelineContentProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  animationNum?: number;
  timelineRef?: React.RefObject<HTMLElement>;
  customVariants?: any;
}

export const TimelineContent = ({
  children,
  as: Component = "div",
  className,
  animationNum = 0,
  timelineRef,
  customVariants,
  ...props
}: TimelineContentProps) => {
  const localRef = useRef(null);
  const ref = timelineRef || localRef;
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const defaultVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  const variants = customVariants || defaultVariants;
  const MotionComponent = motion(Component as any);

  return (
    <MotionComponent
      ref={localRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      custom={animationNum}
      variants={variants}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionComponent>
  );
};