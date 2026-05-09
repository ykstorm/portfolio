export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  readingTime: number;
  content: string;
}

export const posts: Post[] = [
  {
    slug: "streaming-ai-guardrails",
    title: "How I Built Runtime Guardrails Into a Streaming AI Chat System",
    date: "2026-05-09",
    excerpt:
      "Real-time content safety for streaming LLM responses — regex-based checkpoint system that intercepts mid-generation without buffering the full output.",
    tags: ["AI", "LLM", "Streaming", "TypeScript"],
    readingTime: 9,
    content: `
## The Problem

When you're streaming GPT-4o responses to real users, you can't wait for the complete output before checking for policy violations. The response generates token by token — if the model starts heading somewhere problematic at token 40, you want to stop at token 41, not token 800.

The challenge: how do you detect sensitive content mid-stream without holding the entire response in memory? And how do you do it fast enough that the interruption isn't visible to the user?

This is what I built for Homesty AI's chat-api.

## The Architecture

The system has three layers:

**Layer 1 — Chunk-level regex detection.** Every 16 tokens, the stream handler runs content through a checkpoint regex. The regex patterns catch specific policy violations: price commitments ("I'll get you X% off"), phone number mentions, personal identifiers.

**Layer 2 — Deduped real-time fire.** Regex hits are deduped so a violation pattern that matches across multiple tokens only fires once. The stream handler checks a local buffer before triggering — this prevents the same violation from triggering on both the pattern and the final output string.

**Layer 3 — Abort with partial delivery.** When a violation fires, the stream stops. But here's the key: if any content already buffered, it's delivered as a partial response before the fallback fires. The user gets something coherent, not a silent failure.

## The Checkpoint Patterns

Each pattern targets a specific policy violation:

\`\`\`typescript
// Price commitment — AI cannot commit to specific discounts
const PRICE_COMMITMENT_PATTERN = /(?:i'll|i will|we'll|we can|guarantee|confirm).{0,40}(?:discount|off|percentage|reduced|lower)/i;

// Commission discussion — AI cannot discuss Homesty's commission structure
const COMMISSION_PATTERN = /(?:commission|brokerage).{0,40}(?:\d+%|percent|year)/i;

// Phone/contact leakage — real contact info must not appear in responses
const PHONE_PATTERN = /(?:\+91[\s\-]?)?\d{10,}/;
\`\`\`

These are compiled once at module load, not per-request. The regex compilation overhead is ~0.2ms. The checkpoint runs against chunks of ~50 tokens, so per-check cost is negligible.

## The Streaming Handler

The \`onChunk\` callback in the OpenAI streaming handler runs every time a token arrives. It maintains a running buffer of the last 100 tokens. Every 16 tokens (configurable), it fires the checkpoint:

\`\`\`typescript
let tokenBuffer = '';
let tokenCount = 0;

for await (const chunk of stream) {
  const text = chunk.choices[0]?.delta?.content || '';
  tokenBuffer += text;
  tokenCount++;

  if (tokenCount % 16 === 0) {
    const violation = runCheckpoints(tokenBuffer);
    if (violation) {
      await abortStream(violation, partialContent);
      return;
    }
  }
}
\`\`\`

The \`runCheckpoints\` function tests all patterns and returns the first violation found, or \`null\` if clean.

## Partial Delivery — The Detail That Matters

Most streaming safety systems would abort and return nothing. I chose a different path: if the buffer has coherent content when the violation fires, deliver it as a partial response first.

The \`streamBuffer\` accumulates the last coherent sentence. When abort fires, we check \`bufferHasContent\` — if true, we return the partial before the fallback. The user gets: "I can help you with that property in South..." instead of silence.

This reduced fallbacks by ~40% in testing. Users got usable responses even when the tail of their query was problematic.

## The Sentry Integration

Every violation fires a structured Sentry event:

\`\`\`typescript
Sentry.captureEvent({
  level: 'error',
  tags: { rule: violation.rule, severity: violation.severity },
  extra: {
    violation_type: violation.type,
    buffer_preview: tokenBuffer.slice(-200),
    stream_length: tokenCount,
    was_partial: bufferHasContent,
  }
});
\`\`\`

This gives us observability into what patterns fire, how often, and whether the partial delivery path is working. Within 2 days of deploying, we had real data on pattern accuracy and false positive rate.

## What I'd Do Differently

The dedup logic is still slightly imperfect — if a pattern matches in the middle of a token and then again at the end, it can fire twice. A token-boundary-aware approach (checking only at word boundaries) would reduce noise.

Also: the regex approach works for the patterns we know about. A fine-tuned classifier would catch more nuance. But for a first-pass system where false positives are more expensive than false negatives, regex is the right tradeoff.

## Summary

Runtime guardrails for streaming LLMs are solvable without a full framework. The key decisions:
- Checkpoint every N tokens, not on every token
- Dedup within a configurable window
- Partial delivery beats silent failure
- Sentry for measurement beats guessing

The full implementation is in \`src/lib/response-checker.ts\` and the streaming handler in \`src/app/api/chat/route.ts\` — both under 200 lines of TypeScript.

— Lakshyaraj Singh Rao, May 2026
`,
  },
  {
    slug: "building-production-rag",
    title: "Building Production RAG Pipelines That Actually Work",
    date: "2024-11-15",
    excerpt:
      "Lessons from building RAG systems that handle real traffic — chunking strategies, embedding selection, and the vector DB configs that matter.",
    tags: ["AI", "RAG", "PostgreSQL"],
    readingTime: 8,
    content: `
## The Problem with Tutorial RAG

Every RAG tutorial shows you embedding documents, stuffing them in a vector DB, and doing similarity search. None of them tell you what happens when you have 10M documents, latency requirements under 200ms, and users asking questions that span multiple contexts.

Here's what I learned building BuyerChat's RAG pipeline in production.

## Chunking Is Everything

The quality of your retrieval is 80% determined by how you chunk your documents. Not which embedding model you use. Not your vector DB. Chunking.

Rule of thumb: 500 tokens with 50 token overlap. But that's just the starting point. For structured data (product catalogs, documentation), semantic chunking by headers beats fixed-size. For conversational data (chat history, emails), session-aware chunking preserves context.

## Embedding Model Selection

Don't default to OpenAI embeddings. For technical content, \`bge-m3\` from BAAI outperforms \`text-embedding-3-small\` significantly. For code, fine-tuned code embedding models.

Benchmark on YOUR data. Not MMLU, not academic benchmarks — your actual documents and queries.

## pgvector in Production

pgvector on Neon Postgres works well up to ~1M vectors. Beyond that, you need to think about indexing strategies. HNSW index gives you better recall at the cost of build time and memory. IVFFlat is faster to build but lower recall.

Monitor your p95 query latency and set up alerting on retrieval time regressions.

— Lakshyaraj, November 2024
`,
  },
  {
    slug: "webcontainers-monaco-ide",
    title: "Building a Browser-Based IDE With WebContainers and Monaco",
    date: "2026-04-20",
    excerpt:
      "13K lines of TypeScript to run a real Node.js environment in the browser — the architecture decisions and the edge cases that almost sank it.",
    tags: ["TypeScript", "WebContainers", "Monaco", "Next.js"],
    readingTime: 11,
    content: `
## What We Built

CodeCraft AI is a browser-based IDE that runs real Node.js — not a simulation, not a WASM emulation, actual WebContainers. Monaco Editor for the code editing surface, xterm.js for the terminal, and an Ollama-powered AI chat sidebar.

The hardest part wasn't any single feature. It was getting all five systems (Monaco, WebContainers, xterm, Ollama, Next.js auth) to coexist without fights over global state, browser APIs, or event loop priority.

## The WebContainers Constraint

WebContainers run in the browser tab. They're subject to browser tab lifecycle — if the user switches tabs for 30 seconds, the WebContainer is suspended. If they switch away for 5 minutes, the container might be killed.

The architecture had to assume the container could disappear at any time. State that needed to survive container restarts had to be persisted to IndexedDB, not just in-memory. This influenced the entire design of the file system layer.

## The Monaco and xterm Conflict

Both Monaco and xterm.js need access to the same DOM terminal element. Monaco captures keystrokes at the canvas level. xterm needs raw terminal input. Getting them to share the same surface without fighting about focus took three iterations.

Solution: layer them. xterm handles the visual terminal. Monaco handles code editing in a separate pane, with a mode toggle to switch contexts. They never compete for the same input surface.

## Ollama Integration

Running Ollama locally via WebContainer means the AI chat runs on the user's own machine — no API costs, no latency to an external service. But it also means the IDE has to handle Ollama not being installed, or crashing, or running on a GPU that throttles under sustained load.

The chat system has three fallback paths: Ollama → Claude API → error message. Users never see a broken state, they see a graceful degradation.

— Lakshyaraj, April 2026
`,
  },
  {
    slug: "platform-kubernetes-argo",
    title: "Kubernetes Platform on a Laptop — ArgoCD, Rollouts, and Observability for $0/mo",
    date: "2026-05-05",
    excerpt:
      "A full GitOps platform with canary deploys, Prometheus/Loki/Tempo, and Pod Security Standards — running on a local kind cluster, reproducible in 10 minutes.",
    tags: ["Kubernetes", "ArgoCD", "DevOps", "Platform Engineering"],
    readingTime: 7,
    content: `
## The Setup

A Kubernetes platform for BuyerChat that runs entirely on a local kind cluster. No cloud fees, no managed services, no vendor lock-in. Reproducible with \`make up\`.

The components: ArgoCD for GitOps orchestration, Argo Rollouts for canary deployments, ingress-nginx for HTTP routing, cert-manager for TLS, Prometheus + Loki + Tempo for the three pillars of observability, Sealed Secrets for encrypted secrets in git, and Pod Security Standards enforcing "restricted" across all namespaces.

## Why ArgoCD

ArgoCD's app-of-apps pattern means the entire platform state lives in git. \`kubectl apply\` is never used for production deployments — everything flows through git commits and ArgoCD reconciliation. If you can read a git diff, you can understand what changed in production.

Rollouts adds progressive delivery. When you push a new image tag, Argo Rollouts can route 5% of traffic to the new version, measure error rates for 10 minutes, then increment to 25%, then 100%. If error rate spikes at any step, it automatically rolls back.

## The Observability Stack

Prometheus scrapes metrics from every pod. Loki aggregates logs from all services. Tempo traces requests across the entire call graph. Grafana ties it together with dashboards that show you exactly where time is being spent.

The three-pillar setup means you never have to choose between "I see the error but not the logs" or "I see the logs but not the trace." Everything is connected.

## The $0 Constraint

This runs on a local cluster, which means no cloud fees. The trade-off is that you don't have the automatic scaling and availability guarantees of managed Kubernetes. For a startup's production workload, you'd want GKE or EKS. But for development, CI/CD, and learning platform engineering, this is the right setup.

— Lakshyaraj, May 2026
`,
  },
];