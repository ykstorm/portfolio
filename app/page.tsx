import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/hero";
import ProjectCard from "@/components/project-card";
import SectionHeader from "@/components/section-header";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/posts";

const featuredProjects = projects.slice(0, 3);

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

          <div className="text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150"
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          </div>
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
          <div className="mb-8">
            {posts.slice(0, 3).map((post) => (
              <Link
                key={post.slug}
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
                  <ArrowRight size={16} className="text-[var(--color-text-muted)] mt-1 shrink-0 group-hover:text-[var(--color-accent)] transition-colors" />
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 font-mono text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150"
            >
              All posts
              <ArrowRight size={16} />
            </Link>
          </div>
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
          <p className="font-mono text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-[700px] mb-8">
            I built Homesty AI from scratch — AI streaming architecture, RAG pipelines, production guardrails, and the admin system that runs it. 13+ years of shipping production code. Currently CTO, actively interviewing for Staff/Principal Engineer roles at AI product companies.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-mono text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150"
          >
            Full story
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[var(--color-bg-secondary)] border-t border-[var(--color-border)]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-space text-3xl font-bold text-[var(--color-text-primary)] mb-4">
            Open to Staff+ Engineering Roles
          </h2>
          <p className="font-mono text-[var(--color-text-secondary)] mb-8">
            AI product companies. India / Remote. $80–120k.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-bg-primary)] font-mono text-sm font-semibold rounded hover:bg-[var(--color-accent-dim)] transition-colors"
          >
            Get in touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}