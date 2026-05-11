"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-12"
    >
      <motion.p
        className="font-mono text-sm text-[var(--color-accent)] mb-2 section-label-slide"
        initial={{ opacity: 0, x: -10 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {label}
      </motion.p>
      <h2 className="font-space text-3xl md:text-4xl font-medium text-[var(--color-text-primary)] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-[var(--color-text-secondary)] text-base max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}