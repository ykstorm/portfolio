"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { posts, Post } from "@/lib/posts";
import Link from "next/link";
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react";
import { ReadingProgressBar } from "@/components/reading-progress-bar";

interface BlogPostClientProps {
  slug: string;
}

export default function BlogPostClient({ slug }: BlogPostClientProps) {
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const found = posts.find((p) => p.slug === slug) || null;
    setPost(found);
    setIsLoading(false);
  }, [slug]);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-[var(--color-bg-primary)]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="animate-pulse space-y-4">
            <div className="h-4 w-32 bg-[var(--color-bg-secondary)] rounded" />
            <div className="h-8 w-64 bg-[var(--color-bg-secondary)] rounded" />
            <div className="h-4 w-48 bg-[var(--color-bg-secondary)] rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-[var(--color-bg-primary)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="font-space text-2xl text-[var(--color-text-primary)]">
            Post not found
          </h1>
          <Link
            href="/blog"
            className="text-[var(--color-accent)] font-mono text-sm mt-4 inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const nextPost = posts[currentIndex + 1] || posts[0];

  return (
    <>
      <ReadingProgressBar />
      <div className="min-h-screen pt-24 pb-16 bg-[var(--color-bg-primary)]">
        <article className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-12"
            >
              <ArrowLeft size={16} />
              All posts
            </Link>
          </motion.div>

          <motion.header
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-sm text-[var(--color-text-muted)] flex items-center gap-1.5">
                <Calendar size={14} />
                {formattedDate}
              </span>
              <span className="text-[var(--color-text-muted)]">·</span>
              <span className="font-mono text-sm text-[var(--color-text-muted)]">
                {post.readingTime} min read
              </span>
            </div>

            <motion.h1
              className="font-space text-3xl md:text-4xl font-medium text-[var(--color-text-primary)] mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              {post.title}
            </motion.h1>

            <motion.div
              className="flex flex-wrap gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] px-3 py-1.5 rounded border border-[var(--color-border)]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div
              className="prose prose-invert prose-zinc max-w-none"
              style={{
                color: "var(--color-text-secondary)",
                lineHeight: "1.75",
              }}
            >
              {post.content.split("\n").map((line, i) => {
                if (line.startsWith("## ")) {
                  return (
                    <motion.h2
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="font-space text-xl font-medium text-[var(--color-text-primary)] mt-10 mb-4"
                    >
                      {line.replace("## ", "")}
                    </motion.h2>
                  );
                }
                if (line.startsWith("### ")) {
                  return (
                    <motion.h3
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4 }}
                      className="font-space text-lg font-medium text-[var(--color-text-primary)] mt-8 mb-3"
                    >
                      {line.replace("### ", "")}
                    </motion.h3>
                  );
                }
                if (line.startsWith("```")) {
                  return null;
                }
                if (line.startsWith("- ")) {
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      className="text-[var(--color-text-secondary)] ml-4"
                    >
                      {line.replace("- ", "")}
                    </motion.li>
                  );
                }
                if (line.trim() === "") {
                  return <br key={i} />;
                }
                if (line.match(/^\d+\./)) {
                  return (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      className="text-[var(--color-text-secondary)] ml-4"
                    >
                      {line.replace(/^\d+\.\s*/, "")}
                    </motion.li>
                  );
                }
                const boldParts = line.split(/(\*\*[^*]+\*\*)/g);
                return (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3 }}
                    className="text-[var(--color-text-secondary)] mb-4"
                  >
                    {boldParts.map((part, j) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return (
                          <strong
                            key={j}
                            className="text-[var(--color-text-primary)] font-medium"
                          >
                            {part.replace(/\*\*/g, "")}
                          </strong>
                        );
                      }
                      return part;
                    })}
                  </motion.p>
                );
              })}
            </div>
          </motion.div>

          <motion.nav
            className="mt-16 pt-8 border-t border-[var(--color-border)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href={`/blog/${nextPost.slug}`}
              className="group flex items-center justify-between p-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded hover:border-[var(--color-accent)] transition-all duration-150"
            >
              <div className="flex items-center gap-3">
                <ArrowLeft
                  size={16}
                  className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors"
                />
                <div className="text-left">
                  <p className="font-mono text-xs text-[var(--color-text-muted)] mb-0.5">
                    Next post
                  </p>
                  <p className="text-[var(--color-text-primary)] font-space">
                    {nextPost.title}
                  </p>
                </div>
              </div>
              <ArrowRight
                size={16}
                className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors"
              />
            </Link>
          </motion.nav>
        </article>
      </div>
    </>
  );
}