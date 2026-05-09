import { Metadata } from "next";
import BlogPostCard from "@/components/blog-post-card";
import SectionHeader from "@/components/section-header";
import { posts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — Lakshyaraj Singh Rao",
  description: "Writing on AI systems, TypeScript, DevOps, and engineering craft.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-[var(--color-bg-primary)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="// writing"
          title="Engineering Notes"
          description="Lessons from building production systems — RAG pipelines, Kubernetes, TypeScript patterns, and career reflections."
        />

        <div className="max-w-3xl">
          {posts.map((post) => (
            <BlogPostCard
              key={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              tags={post.tags}
              slug={post.slug}
              readingTime={post.readingTime}
            />
          ))}
        </div>
      </div>
    </div>
  );
}