"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const TYPEWRITER_STRINGS = [
  "building production AI systems",
  "shipping RAG pipelines",
  "engineering guardrails that scale",
  "deploying LLM-powered products",
];

const CODE_SNIPPETS = [
  { code: "const rag = await pipeline.retrieve(query)", x: "5%", y: "20%", delay: 0 },
  { code: "embedding.cosineSimilarity(a, b)", x: "85%", y: "15%", delay: 0.5 },
  { code: "guardrail.check(output).validate()", x: "90%", y: "60%", delay: 1 },
  { code: "stream.emit(token).toClient()", x: "8%", y: "70%", delay: 1.5 },
  { code: "ollama.chat(messages).stream()", x: "75%", y: "80%", delay: 0.8 },
  { code: "vecdb.similaritySearch(emb)", x: "15%", y: "45%", delay: 1.2 },
];

function TypewriterText({ strings, prefix }: { strings: string[]; prefix: string }) {
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[stringIndex];

    if (!isDeleting && charIndex <= currentString.length) {
      const timeout = setTimeout(() => setCharIndex(charIndex + 1), 60);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex >= 0) {
      const timeout = setTimeout(() => setCharIndex(charIndex - 1), 30);
      return () => clearTimeout(timeout);
    }

    if (charIndex === currentString.length && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (charIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setStringIndex((stringIndex + 1) % strings.length);
    }
  }, [charIndex, isDeleting, stringIndex, strings]);

  const displayText = strings[stringIndex].slice(0, charIndex);

  return (
    <span className="font-mono text-sm md:text-base text-[var(--color-text-secondary)]">
      {prefix}
      <span className="text-[var(--color-accent)]">{displayText}</span>
      <span className="inline-block w-0.5 h-4 bg-[var(--color-accent)] ml-1 animate-pulse" />
    </span>
  );
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.4 },
  },
};

function FadeUp({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function NameReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.h1>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-transparent to-[var(--color-bg-primary)]" />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 70%)" }}
        animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-accent-dim) 0%, transparent 70%)" }}
        animate={{ x: [0, -35, 0], y: [0, 20, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating code snippets */}
      {CODE_SNIPPETS.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:flex items-center gap-2 px-3 py-2 bg-[var(--color-bg-secondary)]/80 backdrop-blur border border-[var(--color-border)] rounded font-mono text-xs text-[var(--color-text-muted)] whitespace-nowrap"
          style={{ left: snippet.x, top: snippet.y }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: snippet.delay + 1 },
            scale: { duration: 0.8, delay: snippet.delay + 1 },
            y: { duration: 4 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: snippet.delay },
          }}
        >
          <span className="text-[var(--color-accent)] opacity-50">{">"}</span>
          {snippet.code}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-32 text-center">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          {/* Available status pill */}
          <FadeUp delay={0.5} className="mb-8">
            <span className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1.5 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-full">
              <span className="w-2 h-2 rounded-full bg-[var(--color-code-green)] animate-pulse" />
              Available for Staff+ Engineering Roles
            </span>
          </FadeUp>

          {/* Terminal-style intro */}
          <FadeUp delay={0.6} className="mb-6 flex items-center justify-center gap-2">
            <span className="font-mono text-xs text-[var(--color-text-muted)] bg-[var(--color-bg-secondary)] px-2 py-1 rounded border border-[var(--color-border)]">
              ~/portfolio
            </span>
            <span className="font-mono text-xs text-[var(--color-text-muted)]">npm run intro</span>
          </FadeUp>

          {/* Name with gradient */}
          <FadeUp delay={0.7}>
            <NameReveal>
              <span className="font-space text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight block">
                <span className="bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-dim)] to-[var(--color-text-secondary)] bg-clip-text text-transparent">
                  Lakshyaraj
                </span>
                <br />
                <span className="text-[var(--color-text-primary)]">Singh Rao</span>
              </span>
            </NameReveal>
          </FadeUp>

          {/* Typewriter tagline */}
          <FadeUp delay={0.85} className="mb-6 min-h-[2rem]">
            <TypewriterText prefix="$ self-taught -- " strings={TYPEWRITER_STRINGS} />
          </FadeUp>

          {/* Role subheading */}
          <FadeUp delay={0.95} className="mb-3">
            <p className="font-mono text-base md:text-lg text-[var(--color-text-secondary)]">
              ML Engineer &nbsp;|&nbsp; AI Engineer &nbsp;|&nbsp; CTO
            </p>
          </FadeUp>

          {/* Stats row */}
          <FadeUp delay={1.05} className="mb-10 overflow-hidden">
            <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-[var(--color-text-muted)]">
              {["165 deploys", "3+ years", "830 tests", "12 shipped", "99.9% uptime"].map((stat, i) => (
                <span key={stat} className="flex items-center gap-2">
                  {i > 0 && <span className="w-px h-3 bg-[var(--color-border)]" />}
                  <span className="text-[var(--color-text-secondary)]">{stat}</span>
                </span>
              ))}
            </div>
          </FadeUp>

          {/* CTA buttons */}
          <FadeUp delay={1.15} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-mono text-sm px-6 py-3 rounded font-medium hover:bg-[var(--color-accent-dim)] transition-colors"
              >
                View Projects
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 25 }}>
              <Link
                href="/resume"
                className="inline-flex items-center gap-2 border border-[var(--color-border)] text-[var(--color-text-secondary)] font-mono text-sm px-6 py-3 rounded hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors"
              >
                View Resume
              </Link>
            </motion.div>
          </FadeUp>

          {/* Tech pills */}
          <FadeUp delay={1.25} className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs">
            {["Next.js 15", "TypeScript", "PostgreSQL", "Redis", "RAG", "LangChain", "Python", "LLM Integration"].map((tech) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded text-[var(--color-text-muted)]"
                whileHover={{ scale: 1.08, borderColor: "var(--color-accent)", color: "var(--color-accent)" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                {tech}
              </motion.span>
            ))}
          </FadeUp>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="w-px h-14 bg-gradient-to-b from-[var(--color-text-muted)] to-transparent"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}