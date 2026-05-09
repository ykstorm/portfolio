"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const floatVariant = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden">
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--color-accent-dim) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -25, 0],
          y: [0, 15, 0],
          scale: [1, 0.95, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-transparent to-[var(--color-bg-primary)]" />

      <motion.div
        className="relative z-10 max-w-[1200px] mx-auto px-6 py-32 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Available status pill */}
        <motion.div variants={fadeUpVariant} className="mb-6">
          <span className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full">
            <span className="w-2 h-2 rounded-full bg-[var(--color-code-green)] animate-pulse" />
            Available for staff+ roles
          </span>
        </motion.div>

        <motion.p
          variants={fadeUpVariant}
          className="font-mono text-sm text-[var(--color-accent)] mb-6"
        >
          CTO to Staff Engineer
        </motion.p>

        <motion.h1
          variants={fadeUpVariant}
          className="font-space text-4xl md:text-6xl lg:text-7xl font-medium text-[var(--color-text-primary)] mb-6 leading-tight"
        >
          Lakshyaraj Singh Rao
        </motion.h1>

        <motion.p
          variants={fadeUpVariant}
          className="font-mono text-lg md:text-xl text-[var(--color-text-secondary)] mb-4"
        >
          Self-taught engineer building production AI systems
        </motion.p>

        <motion.p
          variants={fadeUpVariant}
          className="text-[var(--color-text-muted)] text-base max-w-xl mx-auto mb-12"
        >
          3 years of full-stack. 6 months of CTO. Shipped BuyerChat alone — RAG pipelines, streaming
          responses, guardrails, and real customers. Now seeking staff-level engineering roles at AI
          product companies.
        </motion.p>

        <motion.div
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-mono text-sm px-6 py-3 rounded hover:bg-[var(--color-accent-dim)] transition-colors duration-150"
          >
            View projects
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 border border-[var(--color-border)] text-[var(--color-text-secondary)] font-mono text-sm px-6 py-3 rounded hover:border-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors duration-150"
          >
            About me
          </Link>
        </motion.div>

        {/* Animated stats band */}
        <motion.div
          variants={fadeUpVariant}
          className="mb-12 overflow-hidden"
        >
          <motion.div
            className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-[var(--color-text-muted)]"
            animate={{
              x: [0, 0],
            }}
          >
            {["165 deploys", "3 years exp", "830 tests", "12 projects", "99.9% uptime"].map(
              (stat, i) => (
                <span key={stat} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="w-px h-3 bg-[var(--color-border)]" />
                  )}
                  <span className="text-[var(--color-text-secondary)]">{stat}</span>
                </span>
              )
            )}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUpVariant}
          className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-[var(--color-text-muted)]"
        >
          {["Next.js 15", "TypeScript", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Python", "LLM Integration"].map(
            (tech) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded"
                whileHover={{ scale: 1.05, borderColor: "var(--color-accent)" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {tech}
              </motion.span>
            )
          )}
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-[var(--color-text-muted)] to-transparent"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}