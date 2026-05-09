"use client";

import { Download } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <div className="max-w-[900px] mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 font-mono text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150 mb-8"
          >
            <Download size={16} />
            Print / Save as PDF
          </button>

          <h1 className="font-space text-4xl font-bold text-[var(--color-text-primary)] mb-2">
            Lakshyaraj Singh Rao
          </h1>
          <p className="font-mono text-lg text-[var(--color-accent)] mb-4">
            Staff Engineer · AI Systems · Full-Stack
          </p>
          <div className="font-mono text-sm text-[var(--color-text-secondary)]">
            raolakshyaraj@gmail.com | linkedin.com/in/lakshyarajsinghrao | github.com/ykstorm | Jaipur, India
          </div>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="font-mono text-sm text-[var(--color-accent)] mb-3">// summary</h2>
          <p className="text-[var(--color-text-primary)] leading-relaxed">
            Backend-focused engineer who ships production AI products end-to-end. Solo-built Homesty.ai — live, commission-generating real estate AI platform with 165 production deploys, streaming GPT-4o chat, custom 7-module Decision Engine, Upstash Redis rate limiting, and RAG infrastructure.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="font-mono text-sm text-[var(--color-accent)] mb-3">// skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "TypeScript",
              "Next.js 15",
              "React 19",
              "Tailwind v4",
              "Node.js",
              "Prisma",
              "PostgreSQL",
              "Redis",
              "Docker",
              "Kubernetes",
              "GitHub Actions",
              "GPT-4o",
              "RAG",
              "pgvector",
            ].map((skill) => (
              <span
                key={skill}
                className="font-mono text-xs px-3 py-1.5 rounded border border-[var(--color-border)] text-[var(--color-text-secondary)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="font-mono text-sm text-[var(--color-accent)] mb-3">// projects</h2>

          <div className="space-y-6">
            {/* BuyerChat */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-medium text-[var(--color-text-primary)]">BuyerChat</h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)]">AI Sales Agent Platform</span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                End-to-end AI sales agent platform for Homesty.ai. RAG pipelines, streaming GPT-4o responses, content safety guardrails, and production deployment.
              </p>
              <div className="font-mono text-xs text-[var(--color-text-secondary)]">
                Next.js 15 · TypeScript · PostgreSQL · Redis · RAG · LangChain · Vercel
              </div>
              <div className="font-mono text-xs text-[var(--color-accent)] mt-1">
                165 deploys · thousands of real conversations processed
              </div>
            </div>

            {/* Chai Vibe Editor */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-medium text-[var(--color-text-primary)]">Chai Vibe Editor</h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)]">AI-integrated Browser IDE</span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                AI-integrated browser IDE with WebContainers (real Node.js in browser), Monaco editor, xterm.js terminal, and 4-mode Ollama AI chat.
              </p>
              <div className="font-mono text-xs text-[var(--color-text-secondary)]">
                React · TypeScript · WebContainers · Monaco Editor · NextAuth v5
              </div>
              <div className="font-mono text-xs text-[var(--color-accent)] mt-1">
                13K+ LOC · Docker-compose production setup
              </div>
            </div>

            {/* DevOps Showcase */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-medium text-[var(--color-text-primary)]">DevOps Showcase</h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)]">GitOps Pipeline</span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                Kubernetes + ArgoCD GitOps pipeline with zero-downtime deploys, Prometheus monitoring, and automated testing.
              </p>
              <div className="font-mono text-xs text-[var(--color-text-secondary)]">
                Kubernetes · ArgoCD · GitHub Actions · Docker · Prometheus · Grafana
              </div>
              <div className="font-mono text-xs text-[var(--color-accent)] mt-1">
                99.9% uptime target achieved
              </div>
            </div>

            {/* BuyerChat Guardrails */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-medium text-[var(--color-text-primary)]">BuyerChat Guardrails</h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)]">Content Safety Layer</span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] mb-2">
                Content safety and output validation layer for LLM-powered customer-facing applications. Prompt injection prevention, PII redaction, response validation, audit logging.
              </p>
              <div className="font-mono text-xs text-[var(--color-text-secondary)]">
                Python · FastAPI · Redis · LLM Integration · Security
              </div>
              <div className="font-mono text-xs text-[var(--color-accent)] mt-1">
                ~98% harmful output reduction
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="font-mono text-sm text-[var(--color-accent)] mb-3">// experience</h2>

          <div className="space-y-4">
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-medium text-[var(--color-text-primary)]">Homesty.ai</h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)]">Founder / Staff Engineer</span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Solo-built and deployed production AI platform generating real commission revenue. 165 production deploys. Streaming GPT-4o chat. Custom Decision Engine. RAG infrastructure. Redis rate limiting.
              </p>
            </div>
          </div>
        </section>

        {/* Print styles */}
        <style jsx global>{`
          @media print {
            button { display: none; }
            body { background: white; }
            .min-h-screen { min-height: auto; }
          }
        `}</style>
      </div>
    </div>
  );
}