"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/lib/hooks";

export function ReadingProgressBar() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-[var(--color-bg-secondary)]">
      <motion.div
        className="h-full bg-[var(--color-accent)]"
        style={{ width: `${progress}%` }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}