export interface Project {
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  href: string;
  repo?: string;
  category: "ai" | "tooling" | "fullstack";
  status: "production" | "wip" | "archived";
}

export const projects: Project[] = [
  {
    title: "BuyerChat",
    description: "AI sales agent platform — RAG pipelines, streaming responses, guardrails, and production deployment.",
    longDescription:
      "End-to-end AI sales agent platform built for Homesty.ai. Handles real customer conversations with retrieval-augmented generation, streaming LLM responses, content safety guardrails, and multi-channel deployment. Processed thousands of real conversations in production.",
    tags: ["Next.js 15", "TypeScript", "PostgreSQL", "Redis", "RAG", "LangChain", "Vercel"],
    href: "https://buyerchat.io",
    category: "ai",
    status: "production",
  },
  {
    title: "CodeCraft AI",
    description:
      "AI-integrated browser IDE — 13K+ LOC, ⭐1 on GitHub (real Node.js in browser), Monaco editor, xterm.js terminal, 4-mode Ollama AI chat, NextAuth v5, Docker-compose production setup.",
    longDescription:
      "Browser-based IDE with full Monaco editor, WebContainers (real Node.js runtime in browser tab), xterm.js terminal, and AI chat powered by Ollama. NextAuth v5 for auth, Prisma + MongoDB for persistence. Docker Compose for local dev, GitHub Actions CI/CD for production. Splits a 650-line monolithic AI sidebar into focused components for maintainability.",
    tags: ["Next.js 15", "WebContainers", "Monaco Editor", "Ollama", "TypeScript", "Docker"],
    href: "#",
    repo: "https://github.com/ykstorm/codecraft-ai",
    category: "tooling",
    status: "production",
  },
  {
    title: "DevOps Showcase",
    description: "Kubernetes GitOps platform — ArgoCD app-of-apps, canary deploys with auto-rollback, Prometheus + Loki + Tempo + Grafana.",
    longDescription:
      "Production-grade Kubernetes platform for Homesty.ai. kind cluster with ArgoCD app-of-apps pattern, Argo Rollouts for canary deploys with automatic rollback on error spike, ingress-nginx, cert-manager (TLS), Sealed Secrets for encrypted git secrets. Observability stack: Prometheus + Loki + Tempo + Grafana for metrics/logs/traces. Pod Security Standards 'restricted' on all namespaces. `make up` full-stack bring-up. 99.9% uptime target.",
    tags: ["Kubernetes", "ArgoCD", "Argo Rollouts", "Prometheus", "Loki", "Tempo", "Grafana", "cert-manager", "Sealed Secrets"],
    href: "https://github.com/ykstorm/devops-showcase",
    repo: "https://github.com/ykstorm/devops-showcase",
    category: "tooling",
    status: "production",
  },
  {
    title: "guardrail-proxy",
    description: "Real-time + post-hoc safety layer for streaming LLM responses. 23 CHECK cases, 16-token sliding window, hard-abort + soft-observe patterns. 117 tests.",
    longDescription:
      "NPM package (@ykstorm/guardrail-proxy) for production LLM safety. StreamingGuard intercepts token streams mid-generation with a 16-token sliding window — hard-abort patterns (contact leak, business leak) throw immediately; soft-observe patterns (price commit, commission discussion) fire a callback and let the stream continue. checkResponse() runs all 23 CHECK cases on complete output. Built from buyerchat LOCKS-1/2 system (830 tests in production). Partial delivery guaranteed on every abort — users never see silence.",
    tags: ["TypeScript", "Node.js", "LLM", "AI Safety", "NPM Package", "Vitest"],
    href: "https://www.npmjs.com/package/@ykstorm/guardrail-proxy",
    repo: "https://github.com/ykstorm/guardrail-proxy",
    category: "ai",
    status: "production",
  },
  {
    title: "stream-bench",
    description: "LLM streaming performance benchmarking toolkit — measures TTFT, TPS, guardrail overhead. Cost ledger with hard ceiling.",
    longDescription:
      "Benchmarking toolkit for LLM streaming endpoints. Measures time-to-first-token (TTFT), tokens-per-second (TPS), and guardrail overhead vs baseline. JSON Lines cost ledger (api_calls.jsonl) with $2 hard ceiling — every call logged, halts before overage. Supports OpenAI and Anthropic providers. Built for comparing guardrail middleware overhead across model providers.",
    tags: ["TypeScript", "Benchmarking", "OpenAI", "Anthropic", "LLM Streaming"],
    href: "https://github.com/ykstorm/stream-bench",
    repo: "https://github.com/ykstorm/stream-bench",
    category: "tooling",
    status: "production",
  },
  {
    title: "rag-starter",
    description: "Next.js 15 + Prisma + pgvector starter template for production RAG. Score floor 0.30, adaptive K, idempotent upsert.",
    longDescription:
      "Production-ready RAG template extracted from buyerchat's pipeline. Prisma 7 + Neon serverless Postgres + pgvector for embeddings. retrieveChunks() with 0.30 cosine similarity score floor (0.20 for amenity queries), adaptive K (6 normal / 10 for amenity-category), location-data boost. embed-writer with idempotent ON CONFLICT upsert for all entity types. Chunk size 512 tokens. CLI for bulk backfill.",
    tags: ["Next.js 15", "Prisma", "pgvector", "RAG", "OpenAI Embeddings", "PostgreSQL"],
    href: "https://github.com/ykstorm/rag-starter",
    repo: "https://github.com/ykstorm/rag-starter",
    category: "ai",
    status: "production",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug);
}