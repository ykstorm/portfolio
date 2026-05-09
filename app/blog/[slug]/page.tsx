import { Metadata } from "next";
import { posts } from "@/lib/posts";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };

  return {
    title: `${post.title} — Lakshyaraj Singh Rao`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-[var(--color-bg-primary)]">
        <div className="max-w-[1200px] mx-auto px-6">
          <h1 className="font-space text-2xl text-[var(--color-text-primary)]">Post not found</h1>
          <Link href="/blog" className="text-[var(--color-accent)] font-mono text-sm mt-4 inline-flex items-center gap-2">
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

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[var(--color-bg-primary)]">
      <article className="max-w-3xl mx-auto px-6">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-mono text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors mb-12"
        >
          <ArrowLeft size={16} />
          All posts
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-sm text-[var(--color-text-muted)] flex items-center gap-1.5">
              <Calendar size={14} />
              {formattedDate}
            </span>
            <span className="text-[var(--color-text-muted)]">·</span>
            <span className="font-mono text-sm text-[var(--color-text-muted)]">{post.readingTime} min read</span>
          </div>

          <h1 className="font-space text-3xl md:text-4xl font-medium text-[var(--color-text-primary)] mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs bg-[var(--color-bg-secondary)] text-[var(--color-text-muted)] px-3 py-1.5 rounded border border-[var(--color-border)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

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
                <h2 key={i} className="font-space text-xl font-medium text-[var(--color-text-primary)] mt-10 mb-4">
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line.startsWith("### ")) {
              return (
                <h3 key={i} className="font-space text-lg font-medium text-[var(--color-text-primary)] mt-8 mb-3">
                  {line.replace("### ", "")}
                </h3>
              );
            }
            if (line.startsWith("```")) {
              return null;
            }
            if (line.startsWith("- ")) {
              return (
                <li key={i} className="text-[var(--color-text-secondary)] ml-4">
                  {line.replace("- ", "")}
                </li>
              );
            }
            if (line.trim() === "") {
              return <br key={i} />;
            }
            if (line.match(/^\d+\./)) {
              return (
                <li key={i} className="text-[var(--color-text-secondary)] ml-4">
                  {line.replace(/^\d+\.\s*/, "")}
                </li>
              );
            }
            // Handle bold
            const boldParts = line.split(/(\*\*[^*]+\*\*)/g);
            return (
              <p key={i} className="text-[var(--color-text-secondary)] mb-4">
                {boldParts.map((part, j) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                      <strong key={j} className="text-[var(--color-text-primary)] font-medium">
                        {part.replace(/\*\*/g, "")}
                      </strong>
                    );
                  }
                  return part;
                })}
              </p>
            );
          })}
        </div>
      </article>
    </div>
  );
}