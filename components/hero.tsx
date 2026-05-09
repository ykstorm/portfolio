import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-bg-primary)] via-transparent to-[var(--color-bg-primary)]" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-32 text-center">
        <p className="font-mono text-sm text-[var(--color-accent)] mb-6">
          CTO → Staff Engineer
        </p>

        <h1 className="font-space text-4xl md:text-6xl lg:text-7xl font-medium text-[var(--color-text-primary)] mb-6 leading-tight">
          Lakshyaraj Singh Rao
        </h1>

        <p className="font-mono text-lg md:text-xl text-[var(--color-text-secondary)] mb-4">
          Self-taught engineer building production AI systems
        </p>

        <p className="text-[var(--color-text-muted)] text-base max-w-xl mx-auto mb-12">
          3 years of full-stack. 6 months of CTO. Shipped BuyerChat alone — RAG pipelines, streaming responses, guardrails, and real customers. Now seeking staff-level engineering roles at AI product companies.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
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
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 font-mono text-xs text-[var(--color-text-muted)]">
          {["Next.js 15", "TypeScript", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Python", "LLM Integration"].map(
            (tech) => (
              <span key={tech} className="px-3 py-1.5 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded">
                {tech}
              </span>
            )
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-px h-12 bg-gradient-to-b from-[var(--color-text-muted)] to-transparent" />
      </div>
    </section>
  );
}