"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

export default function CursorTrail() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      ref={trailRef}
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        backgroundColor: "var(--color-accent)",
        opacity: 0.6,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
}