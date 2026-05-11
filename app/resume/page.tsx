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
            Solo CTO who built Homesty.ai from scratch — production AI platform handling real buyer conversations, generating real commission. Streaming GPT-4o with runtime guardrails (abort mid-generation on policy violations), pgvector RAG with sub-50ms retrieval, 165 production deploys with zero-downtime, custom 7-module Decision Engine enforcing 6 business locks, and an operator-facing admin system with RERA paste-extract for all 8 pages. Also built CodeCraft AI: browser-based IDE running real Node.js via WebContainers (13K+ LOC, no server-side compute). Currently interviewing for Staff+ roles at AI product companies.
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
            {/* Homesty.ai BuyerChat */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-medium text-[var(--color-text-primary)]">Homesty.ai — BuyerChat AI Platform</h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)]">homesty.ai</span>
              </div>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1 mb-2">
                <li>• Mid-stream regex guardrails for production GPT-4o — fires every 16 tokens, aborts on price/commission leaks, partial delivery so buyers never see silence. Zero false-positive blocks across 830+ tests</li>
                <li>• Atomic multi-entity Prisma lock system — 4-state (Hold/Suspend/Archive) across Builder and Project models with $transaction, audit log, 40 transition tests</li>
                <li>• RERA portal deep extraction pipeline — 60+ fields from unstructured government text (project metadata, unit configs, construction progress, compliance docs) with stream-SSE UX</li>
                <li>• pgvector RAG pipeline: 6-retrieval + 0.30 score floor + amenity-boost, PART 17 context injection with source/score annotation, zero fabrication on empty retrieval</li>
                <li>• 7-module Decision Engine: 17-stage buyer journey, 6 business locks, AI suggests, Balvir approves</li>
                <li>• Admin system: 8 pages (Dashboard, Project CRM, Buyer CRM, Builder CRM, Follow-Up, Revenue, Intelligence, Settings)</li>
                <li>• Schema operational fidelity — Prisma schema cross-referenced vs 14-section Master Manual, Neon-compatible migrations (direct-url vs pooled-url)</li>
                <li>• 830+ tests, pre-commit hooks, CHECK 1-9 discipline, zero broken-prod recoveries across 165 deploys</li>
              </ul>
              <div className="font-mono text-xs text-[var(--color-text-secondary)]">
                Next.js 15 · TypeScript · Prisma 7 · Neon Postgres · pgvector · GPT-4o · Anthropic SDK · Upstash Redis · Sentry · Vercel
              </div>
            </div>

            {/* CodeCraft AI */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-medium text-[var(--color-text-primary)]">CodeCraft AI — Browser IDE</h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)]">chai-vibe-editor-master.vercel.app</span>
              </div>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1 mb-2">
                <li>• 13K+ LOC: WebContainers (real Node.js in browser via V8 Service Worker), Monaco Editor, xterm.js, 4-mode Ollama AI chat (Chat/Review/Fix/Optimize)</li>
                <li>• Docker Compose: Ollama (GPU) + MongoDB + app, GitHub Actions CI, GHCR container registry, health endpoint, rate limiting (20 req/min sliding window)</li>
                <li>• Zero server-side compute for code execution — all runtime client-side, Vercel serves only the static shell</li>
              </ul>
              <div className="font-mono text-xs text-[var(--color-text-secondary)]">
                Next.js 15 · TypeScript · WebContainers · Monaco · xterm.js · Ollama · NextAuth v5 · Prisma · MongoDB · Docker
              </div>
            </div>

            {/* DevOps Showcase */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-medium text-[var(--color-text-primary)]">DevOps Showcase — Kubernetes GitOps Platform</h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)]">github.com/ykstorm/devops-showcase</span>
              </div>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1 mb-2">
                <li>• kind cluster with ArgoCD (app-of-apps), Argo Rollouts (canary deploys, auto-rollback on error spike), ingress-nginx, cert-manager (TLS), Sealed Secrets (encrypted git secrets)</li>
                <li>• Observability: Prometheus + Loki + Tempo + Grafana (dashboards for metrics/logs/traces), Pod Security Standards "restricted" on all namespaces</li>
                <li>• BuyerChat deployed via GitOps: `ghcr.io/ykstorm/buyerchat` image, `make up` full stack bring-up, 99.9% uptime target</li>
              </ul>
              <div className="font-mono text-xs text-[var(--color-text-secondary)]">
                Kubernetes · kind · ArgoCD · Argo Rollouts · Prometheus · Loki · Tempo · ingress-nginx · cert-manager · Sealed Secrets
              </div>
            </div>

            {/* guardrail-proxy */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-medium text-[var(--color-text-primary)]">guardrail-proxy — Open Source NPM Package</h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)]">@ykstorm/guardrail-proxy · npm · GitHub</span>
              </div>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1 mb-2">
                <li>• Extracted buyerchat's LOCKS-1/2 guardrails into a reusable TypeScript package — StreamingGuard (16-token sliding window, hard-abort + soft-observe) + checkResponse (23 CHECK cases)</li>
                <li>• Hard-abort patterns throw mid-stream on contact leak, business leak; soft-observe patterns fire callback and let stream continue — partial delivery guaranteed, users never see silence</li>
                <li>• 117 tests, MIT license, TypeScript strict, published to npm — production tested on buyerchat's 830-test suite</li>
              </ul>
              <div className="font-mono text-xs text-[var(--color-text-secondary)]">
                TypeScript · Node.js · Vitest · NPM Package · AI Safety · LLM Streaming
              </div>
            </div>

            {/* stream-bench */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-medium text-[var(--color-text-primary)]">stream-bench — Open Source Benchmarking Toolkit</h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)]">npm · GitHub</span>
              </div>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1 mb-2">
                <li>• LLM streaming benchmark: measures TTFT, TPS, guardrail overhead vs baseline across OpenAI and Anthropic providers</li>
                <li>• JSON Lines cost ledger (api_calls.jsonl) with $2 hard ceiling — every call logged, halts before overage</li>
                <li>• Built to quantify guardrail middleware overhead across model providers — supports custom provider adapters</li>
              </ul>
              <div className="font-mono text-xs text-[var(--color-text-secondary)]">
                TypeScript · Node.js · Benchmarking · OpenAI SDK · Anthropic SDK
              </div>
            </div>

            {/* rag-starter */}
            <div>
              <div className="flex items-baseline gap-3 mb-1">
                <h3 className="font-medium text-[var(--color-text-primary)]">rag-starter — Production RAG Template</h3>
                <span className="font-mono text-xs text-[var(--color-text-secondary)]">GitHub</span>
              </div>
              <ul className="text-sm text-[var(--color-text-secondary)] space-y-1 mb-2">
                <li>• Next.js 15 + Prisma 7 + pgvector RAG template: 0.30 cosine similarity score floor, adaptive K (6 normal / 10 for amenity queries)</li>
                <li>• Idempotent ON CONFLICT upsert for all entity types (project, builder, locality, infra, location-data)</li>
                <li>• Extracted from buyerchat's RAG pipeline — deployed in production, handling real queries</li>
              </ul>
              <div className="font-mono text-xs text-[var(--color-text-secondary)]">
                Next.js 15 · Prisma 7 · pgvector · OpenAI Embeddings · PostgreSQL
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