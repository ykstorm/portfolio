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
      "AI-integrated browser IDE — 13K+ LOC with WebContainers (real Node.js in browser), Monaco editor, xterm.js terminal, 4-mode Ollama AI chat, NextAuth v5, Docker-compose production setup.",
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
    description: "Kubernetes + ArgoCD GitOps pipeline with zero-downtime deploys, Prometheus monitoring, and automated testing.",
    longDescription:
      "Production-grade DevOps setup for Homesty.ai services. GitHub Actions CI/CD pipelines with automated testing, Docker multi-stage builds, Kubernetes deployments with horizontal pod autoscaling, ArgoCD GitOps workflow, Prometheus+Grafana monitoring, and Slack alerting. Achieved 99.9% uptime target.",
    tags: ["Kubernetes", "ArgoCD", "GitHub Actions", "Docker", "Prometheus", "Grafana"],
    href: "#",
    category: "tooling",
    status: "production",
  },
  {
    title: "BuyerChat Guardrails",
    description: "Content safety and output validation layer for LLM-powered customer-facing applications.",
    longDescription:
      "Guardrail system for production LLM applications. Implements prompt injection prevention, PII redaction, response validation, and audit logging. Reduces harmful outputs by ~98% in testing. Battle-tested in real customer conversations.",
    tags: ["Python", "FastAPI", "Redis", "LLM Integration", "Security"],
    href: "#",
    category: "ai",
    status: "production",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.title.toLowerCase().replace(/\s+/g, "-") === slug);
}