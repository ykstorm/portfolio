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
    title: "guardrail-proxy",
    description: "Open-source TypeScript package for production LLM safety — mid-stream abort, 23 CHECK cases, MIT license.",
    longDescription:
      "Streaming guardrails for LLM apps. StreamingGuard intercepts token streams mid-generation with a 16-token sliding window — hard-abort patterns throw immediately; soft-observe patterns fire callbacks. checkResponse() runs all 23 CHECK cases on complete output. 27 tests, MIT license, published to npm. Partial delivery guaranteed on every abort.",
    tags: ["TypeScript", "Node.js", "LLM", "AI Safety", "NPM Package", "Vitest", "MIT"],
    href: "https://www.npmjs.com/package/@ykstorm/guardrail-proxy",
    repo: "https://github.com/ykstorm/guardrail-proxy",
    category: "ai",
    status: "production",
  },
  {
    title: "codecraft-ai",
    description: "AI browser IDE — real Node.js in browser via WebContainers, Monaco editor, Ollama AI. Live at codecraft-ai.vercel.app.",
    longDescription:
      "Browser-based IDE with full Monaco editor, WebContainers (real Node.js runtime in browser), xterm.js terminal, and AI chat powered by Ollama. 4-mode AI chat (Chat/Review/Fix/Optimize). NextAuth v5 auth, Prisma + MongoDB persistence. Docker Compose for local dev, GitHub Actions CI/CD. Deployed live at codecraft-ai.vercel.app.",
    tags: ["Next.js 15", "WebContainers", "Monaco Editor", "Ollama", "TypeScript", "Docker", "MIT"],
    href: "https://codecraft-ai.vercel.app",
    repo: "https://github.com/ykstorm/codecraft-ai",
    category: "tooling",
    status: "production",
  },
  {
    title: "devops-showcase",
    description: "Kubernetes GitOps platform — ArgoCD, canary deploys, Prometheus + Loki + Tempo. MIT license.",
    longDescription:
      "Production-grade Kubernetes platform. kind cluster with ArgoCD app-of-apps pattern, Argo Rollouts for canary deploys with automatic rollback on error spike, ingress-nginx, cert-manager (TLS), Sealed Secrets. Observability: Prometheus + Loki + Tempo + Grafana. Pod Security Standards restricted on all namespaces. `make up` full-stack bring-up.",
    tags: ["Kubernetes", "ArgoCD", "Argo Rollouts", "Prometheus", "Loki", "Tempo", "Grafana", "MIT"],
    href: "https://github.com/ykstorm/devops-showcase",
    repo: "https://github.com/ykstorm/devops-showcase",
    category: "tooling",
    status: "production",
  },
  {
    title: "rag-starter",
    description: "Next.js 15 + Prisma + pgvector RAG template — 0.30 score floor, adaptive K, idempotent upsert. MIT license.",
    longDescription:
      "Production-ready RAG template extracted from real deployment. Prisma 7 + Neon serverless Postgres + pgvector for embeddings. retrieveChunks() with 0.30 cosine similarity score floor, adaptive K (6 normal / 10 for amenity queries), location-data boost. embed-writer with idempotent ON CONFLICT upsert for all entity types. 15 tests.",
    tags: ["Next.js 15", "Prisma", "pgvector", "RAG", "OpenAI Embeddings", "PostgreSQL", "MIT"],
    href: "https://github.com/ykstorm/rag-starter",
    repo: "https://github.com/ykstorm/rag-starter",
    category: "ai",
    status: "production",
  },
  {
    title: "stream-bench",
    description: "LLM streaming benchmark toolkit — TTFT, TPS, guardrail overhead, $2 cost ceiling. MIT license.",
    longDescription:
      "Benchmarking toolkit for LLM streaming endpoints. Measures time-to-first-token (TTFT), tokens-per-second (TPS), and guardrail overhead vs baseline across OpenAI and Anthropic providers. JSON Lines cost ledger (api_calls.jsonl) with $2 hard ceiling — every call logged, halts before overage. 8 tests.",
    tags: ["TypeScript", "Benchmarking", "OpenAI", "Anthropic", "LLM Streaming", "MIT"],
    href: "https://github.com/ykstorm/stream-bench",
    repo: "https://github.com/ykstorm/stream-bench",
    category: "tooling",
    status: "production",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug);
}