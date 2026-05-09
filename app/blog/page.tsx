"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BlogPostCard from "@/components/blog-post-card";
import SectionHeader from "@/components/section-header";
import { posts, Post } from "@/lib/posts";

const allTags = ["All", ...Array.from(new Set(posts.flatMap((p) => p.tags)))];

export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredPosts = useMemo(() => {
    if (activeFilter === "All") return posts;
    return posts.filter((post) => post.tags.includes(activeFilter));
  }, [activeFilter]);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[var(--color-bg-primary)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="// writing"
          title="Engineering Notes"
          description="Lessons from building production systems — RAG pipelines, Kubernetes, TypeScript patterns, and career reflections."
        />

        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {allTags.map((tag) => (
            <motion.button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`font-mono text-xs px-3 py-1.5 rounded border transition-all duration-150 ${
                activeFilter === tag
                  ? "bg-[var(--color-accent)] text-[var(--color-bg-primary)] border-[var(--color-accent)]"
                  : "bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] border-[var(--color-border)] hover:border-[var(--color-accent)]"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        <div className="max-w-3xl">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <BlogPostCard
                  title={post.title}
                  date={post.date}
                  excerpt={post.excerpt}
                  tags={post.tags}
                  slug={post.slug}
                  readingTime={post.readingTime}
                />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[var(--color-text-muted)] font-mono text-sm"
            >
              No posts with this tag yet.
            </motion.p>
          )}
        </div>
      </div>
    </div>
  );
}