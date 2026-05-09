"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "@/components/project-card";
import SectionHeader from "@/components/section-header";
import { projects, Project } from "@/lib/projects";

const categories = [
  { value: "all", label: "All" },
  { value: "ai", label: "AI" },
  { value: "tooling", label: "Tooling" },
  { value: "fullstack", label: "Full-stack" },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[var(--color-bg-primary)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="// projects"
          title="Systems I've Built"
          description="Production systems handling real traffic, real money, and real users. Not tutorials — shipped products."
        />

        <motion.div
          className="flex gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value)}
              className={`font-mono text-xs px-4 py-2 rounded border transition-all duration-150 ${
                activeFilter === cat.value
                  ? "bg-[var(--color-accent)] text-[var(--color-bg-primary)] border-[var(--color-accent)]"
                  : "bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] border-[var(--color-border)] hover:border-[var(--color-accent)]"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.longDescription}
                  tags={project.tags}
                  href={project.href}
                  repo={project.repo}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[var(--color-text-muted)] font-mono text-sm"
          >
            No projects in this category yet.
          </motion.p>
        )}
      </div>
    </div>
  );
}