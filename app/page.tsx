"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/hero";
import ProjectCard from "@/components/project-card";
import SectionHeader from "@/components/section-header";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/posts";

const featuredProjects = projects.slice(0, 3);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  return (
    <>
      <Hero />

      {/* Featured Projects */}
      <section className="py-24 bg-[var(--color-bg-primary)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="// projects"
            title="Systems I've Built"
            description="Production systems handling real traffic, real money, and real users."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.tags}
                href={project.href}
                repo={project.repo}
              />
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150"
            >
              View all projects
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="py-24 bg-[var(--color-bg-secondary)] border-y border-[var(--color-border)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="// writing"
            title="How I Built Things"
            description="Technical deep-dives from production systems."
          />
          <motion.div
            className="mb-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {posts.slice(0, 3).map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="block py-4 border-b border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-space text-lg text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors mb-1">
                        {post.title}
                      </h3>
                      <p className="font-mono text-sm text-[var(--color-text-muted)]">
                        {post.date} · {post.readingTime} min read
                      </p>
                    </div>
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                      className="text-[var(--color-text-muted)] mt-1 shrink-0 group-hover:text-[var(--color-accent)] transition-colors"
                    >
                      <ArrowRight size={16} />
                    </motion.span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150"
            >
              All posts
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About teaser */}
      <section className="py-24 bg-[var(--color-bg-primary)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <SectionHeader
            label="// about"
            title="Background"
            description="CTO. Self-taught. Shipped alone."
          />
          <motion.p
            className="font-mono text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-[700px] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            I built Homesty AI from scratch — AI streaming architecture, RAG pipelines, production
            guardrails, and the admin system that runs it. 13+ years of shipping production code.
            Currently CTO, actively interviewing for Staff/Principal Engineer roles at AI product
            companies.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-mono text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150"
            >
              Full story
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
        <motion.div
          className="max-w-[1200px] mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-space text-3xl font-bold text-[var(--color-text-primary)] mb-4">
            Open to Staff+ Engineering Roles
          </h2>
          <p className="font-mono text-[var(--color-text-secondary)] mb-8">
            AI product companies. India / Remote. $80–120k.
          </p>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-mono text-sm font-semibold rounded hover:bg-[var(--color-accent-dim)] transition-colors"
            >
              Get in touch
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}