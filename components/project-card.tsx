"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  repo?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  repo,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -4 }}
      className="group relative bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg p-6 transition-all duration-200 hover:border-[var(--color-accent)]"
    >
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-space text-lg font-medium text-[var(--color-text-primary)]">
          {title}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {repo && (
            <motion.a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              aria-label="View repository"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
            </motion.a>
          )}
          <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="View project"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={18} />
          </motion.a>
        </div>
      </div>

      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.3,
              delay: index * 0.05,
              ease: "backOut",
            }}
            className="font-mono text-xs bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] px-2 py-1 rounded"
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <motion.div
        className="absolute inset-0 border border-[var(--color-accent)] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        initial={false}
        animate={{
          opacity: 0,
          boxShadow: "0 0 0 0 transparent",
        }}
        whileHover={{
          opacity: 1,
          boxShadow: "0 0 20px -5px var(--color-accent)",
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.article>
  );
}