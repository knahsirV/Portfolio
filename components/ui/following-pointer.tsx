// Core component that receives mouse positions and renders pointer and content
"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import {
  MotionValue,
  motion,
  AnimatePresence,
  useMotionValue,
} from "motion/react";

export const FollowerPointerCard = ({
  children,
  className,
  title,
}: {
  children: React.ReactNode;
  className?: string;
  title?: string | React.ReactNode;
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const [isInside, setIsInside] = useState<boolean>(false); // Add this line
  const [isClickable, setIsClickable] = useState(false);

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (rect) {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      x.set(e.clientX - rect.left + scrollX);
      y.set(e.clientY - rect.top + scrollY);

      // Check if the target is clickable
      const target = e.target as HTMLElement;
      setIsClickable(
        target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.onclick != null ||
          window.getComputedStyle(target).cursor === "pointer",
      );
    }
  };
  const handleMouseLeave = () => {
    setIsInside(false);
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };
  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      style={{
        cursor: "none",
      }}
      ref={ref}
      className={cn("relative [&_*]:cursor-none", className)}
    >
      <AnimatePresence>
        {isInside && (
          <FollowPointer x={x} y={y} title={title} isClickable={isClickable} />
        )}
      </AnimatePresence>
      {children}
    </div>
  );
};

export const FollowPointer = ({
  x,
  y,
  //   title,
  isClickable,
}: {
  x: MotionValue<number>;
  y: MotionValue<number>;
  title?: string | React.ReactNode;
  isClickable?: boolean;
}) => {
  return (
    <motion.div
      className="absolute z-50 h-4 w-4 rounded-full"
      style={{
        top: y,
        left: x,
        pointerEvents: "none",
      }}
      initial={{
        scale: 1,
        opacity: 1,
      }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      exit={{
        scale: 0,
        opacity: 0,
      }}
    >
      {isClickable ? (
        <motion.div
          className="h-4 w-4 -translate-x-[8px] -translate-y-[8px] rounded-full bg-purple-500 stroke-purple-600"
          style={{
            boxShadow: "0 0 0 1px #7c3aed",
          }}
          layoutId="pointer"
        />
      ) : (
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="1"
          viewBox="0 0 16 16"
          className="h-6 w-6 -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform stroke-purple-600 text-purple-500"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
        </svg>
      )}
    </motion.div>
  );
};
