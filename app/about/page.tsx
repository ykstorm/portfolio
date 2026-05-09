import { Metadata } from "next";
import SectionHeader from "@/components/section-header";

export const metadata: Metadata = {
  title: "About — Lakshyaraj Singh Rao",
  description: "Self-taught engineer. Built production AI systems. Seeking staff-level engineering roles.",
};

const skills = {
  Frontend: ["React", "Next.js 15", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Redis"],
  Infrastructure: ["Docker", "Kubernetes", "GitHub Actions", "Terraform", "Prometheus", "Grafana"],
  AI: ["LLM Integration", "RAG", "LangChain", "Guardrails", "Streaming"],
};

const timeline = [
  { role: "CTO", company: "Homesty.ai", period: "2024", description: "Led technical strategy, built team, shipped BuyerChat" },
  { role: "Lead Engineer", company: "Freelance", period: "2023–2024", description: "Built web apps and AI integrations for clients" },
  { role: "Self-Taught", company: "Online resources", period: "2022–2023", description: "JavaScript → React → Node.js → Full-stack → AI" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-[var(--color-bg-primary)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader label="// about" title="Background" />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div className="text-[var(--color-text-secondary)] space-y-4 leading-relaxed">
              <p>
                Started learning JavaScript in 2022. No CS degree, no bootcamp — just docs, tutorials, and a lot of broken code. Within a year, I was building full-stack applications and taking on freelance work.
              </p>
              <p>
                In 2024, I joined Homesty.ai as CTO. Built BuyerChat from the ground up — PostgreSQL schema, Next.js frontend, RAG pipelines, guardrails, deployment infrastructure. Processed thousands of real customer conversations. Made decisions that mattered and shipped code that held up under load.
              </p>
              <p>
                After six months, I stepped back from the CTO role. I realized I preferred being deep in the technical weeds — architecture, systems design, and writing code that ships — over the organizational and board-level work the role demanded. The CTO experience was valuable. It clarified what I actually want: staff-level engineering at AI product companies where the problems are genuinely hard.
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-12">
              <h3 className="font-space text-lg font-medium text-[var(--color-text-primary)] mb-6">Timeline</h3>
              <div className="space-y-6">
                {timeline.map((item) => (
                  <div key={item.period} className="flex gap-4">
                    <div className="w-24 shrink-0">
                      <span className="font-mono text-sm text-[var(--color-accent)]">{item.period}</span>
                    </div>
                    <div className="flex-1 border-l border-[var(--color-border)] pl-4">
                      <p className="font-medium text-[var(--color-text-primary)]">
                        {item.role}{" "}
                        <span className="text-[var(--color-text-muted)]">@ {item.company}</span>
                      </p>
                      <p className="text-sm text-[var(--color-text-muted)]">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills sidebar */}
          <div>
            <h3 className="font-space text-lg font-medium text-[var(--color-text-primary)] mb-6">Skills</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="font-mono text-xs text-[var(--color-text-muted)] mb-2 uppercase tracking-wider">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono text-xs bg-[var(--color-bg-secondary)] text-[var(--color-text-secondary)] px-2.5 py-1.5 rounded border border-[var(--color-border)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}