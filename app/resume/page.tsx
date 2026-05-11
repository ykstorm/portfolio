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
            Full-Stack Engineer · Backend · 2026 Graduate
          </p>
          <div className="font-mono text-sm text-[var(--color-text-secondary)]">
            raolakshyaraj@gmail.com | linkedin.com/in/lakshyarajsinghrao | github.com/ykstorm | Jaipur, India
          </div>
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="font-mono text-sm text-[var(--color-accent)] mb-3">// summary</h2>
          <p className="text-[var(--color-text-primary)] leading-relaxed">
            B.Tech final-year student (2026) seeking full-stack / backend engineering roles. Solo-built
            Homesty.ai&apos;s AI platform from scratch — streaming GPT-4o chat, pgvector RAG, runtime guardrails.
            5 MIT-licensed open-source projects with 83+ tests, shipped to production.
            Backend-heavy: Node.js, PostgreSQL, Redis, Kubernetes, ArgoCD. Comfortable owning features end-to-end.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="font-mono text-sm text-[var(--color-accent)] mb-3">// skills</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "TypeScript",
              "JavaScript",
              "Python",
              "SQL",
              "Node.js",
              "Next.js 15",
              "React 19",
              "Tailwind v4",
              "Prisma 7",
              "PostgreSQL",
              "pgvector",
              "Redis",
              "Docker",
              "Kubernetes",
              "ArgoCD",
              "GitHub Actions",
              "GPT-4o",
              "RAG",
              "Vitest",
              "Jest",
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
          <h2 className="font-mono text-sm text-[var(--color-accent)] mb-3">// open source projects (all MIT licensed)</h2>

          <div className="space-y-6">
            {/* guardrail-proxy */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-medium text-[var(--color-text-primary)]">guardrail-proxy</h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)]">
                  npm · GitHub
                </span>
              </div>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1 mb-2">
                <li>• NPM package for production LLM safety — mid-stream abort with 16-token sliding window</li>
                <li>• Hard-abort patterns throw immediately; soft-observe patterns fire callbacks and continue</li>
                <li>• StreamingGuard (streaming) + checkResponse() with 23 CHECK cases. Partial delivery on every abort</li>
              </ul>
              <div className="font-mono text-xs text-[var(--color-text-secondary)]">
                MIT · TypeScript · Node.js · 27 tests · Vitest
              </div>
            </div>

            {/* codecraft-ai */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-medium text-[var(--color-text-primary)]">codecraft-ai</h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)]">
                  codecraft-ai.vercel.app · GitHub
                </span>
              </div>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1 mb-2">
                <li>• Browser-based IDE: WebContainers (real Node.js in browser), Monaco Editor, xterm.js terminal</li>
                <li>• 4-mode Ollama chat (Chat/Review/Fix/Optimize). NextAuth v5, Prisma + MongoDB</li>
                <li>• Live at codecraft-ai.vercel.app. Docker Compose dev setup. GitHub Actions CI/CD</li>
              </ul>
              <div className="font-mono text-xs text-[var(--color-text-secondary)]">
                MIT · 23 tests · 13K+ LOC · Next.js 15 · TypeScript
              </div>
            </div>

            {/* stream-bench */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-medium text-[var(--color-text-primary)]">stream-bench</h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)]">GitHub</span>
              </div>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1 mb-2">
                <li>• Benchmarks TTFT, TPS, and guardrail overhead vs baseline across OpenAI + Anthropic providers</li>
                <li>• JSON Lines ledger with $2 hard ceiling — halts before overage</li>
              </ul>
              <div className="font-mono text-xs text-[var(--color-text-secondary)]">
                MIT · 8 tests · TypeScript · Node.js
              </div>
            </div>

            {/* rag-starter */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-medium text-[var(--color-text-primary)]">rag-starter</h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)]">GitHub</span>
              </div>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1 mb-2">
                <li>• pgvector embeddings with 0.30 cosine score floor, adaptive K (6 normal / 10 for amenity queries)</li>
                <li>• embed-writer with idempotent ON CONFLICT upsert. CLI for bulk backfill with chunk size 512 tokens</li>
              </ul>
              <div className="font-mono text-xs text-[var(--color-text-secondary)]">
                MIT · 15 tests · Next.js 15 · Prisma 7 · pgvector
              </div>
            </div>

            {/* devops-showcase */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-medium text-[var(--color-text-primary)]">devops-showcase</h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)]">GitHub</span>
              </div>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1 mb-2">
                <li>• kind cluster + ArgoCD app-of-apps, Argo Rollouts (canary deploys + auto-rollback)</li>
                <li>• Prometheus + Loki + Tempo + Grafana observability. Pod Security Standards restricted</li>
              </ul>
              <div className="font-mono text-xs text-[var(--color-text-secondary)]">
                MIT · Kubernetes · ArgoCD · Prometheus · Grafana
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-8">
          <h2 className="font-mono text-sm text-[var(--color-accent)] mb-3">// experience</h2>
          <div>
            <div className="flex items-baseline gap-3 mb-1">
              <h3 className="font-medium text-[var(--color-text-primary)]">Homesty.ai</h3>
              <span className="font-mono text-xs text-[var(--color-text-secondary)]">Founder / Engineer · 2024 – Present</span>
            </div>
            <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
              <li>• Built Homesty.ai&apos;s AI platform solo — streaming GPT-4o chat with runtime guardrails (mid-generation abort)</li>
              <li>• pgvector RAG pipeline with sub-50ms retrieval latency; Neon Postgres for serverless persistence</li>
              <li>• 7-module Decision Engine enforcing business logic; Redis rate limiting; RERA paste-extract admin panel</li>
              <li>• Stack: Next.js 15, Prisma 7, PostgreSQL/pgvector, Redis, Kubernetes, ArgoCD, Prometheus</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="font-mono text-sm text-[var(--color-accent)] mb-3">// education</h2>
          <div>
            <div className="flex items-baseline gap-3 mb-1">
              <h3 className="font-medium text-[var(--color-text-primary)]">B.Tech, Computer Science &amp; Communication Engineering</h3>
              <span className="font-mono text-xs text-[var(--color-text-secondary)]">Manipal University Jaipur · Expected 2026</span>
            </div>
            <ul className="text-sm text-[var(--color-text-secondary)] space-y-1">
              <li>• Final year, 8th semester — CC4270 Major Project: chai-vibe-editor (Mr. Jitendra Singh Yadav)</li>
              <li>• LeetCode: 7 problems solved  ·  GitHub: 16 public repos, 7 followers</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Print styles */}
      <style jsx global>{`
        @media print {
          button { display: none; }
          body { background: white; }
          .min-h-screen { min-height: auto; }
        }
      `}</style>
    </div>
  );
}