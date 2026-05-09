import { Metadata } from "next";
import SectionHeader from "@/components/section-header";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Lakshyaraj Singh Rao",
  description: "Get in touch for staff-level engineering opportunities at AI product companies.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-[var(--color-bg-primary)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="// contact"
          title="Let's talk"
          description="Open to staff-level engineering roles at AI product companies. Not looking for FAANG — smaller teams with harder problems."
        />

        <div className="max-w-2xl">
          <div className="space-y-6 mb-12">
            <a
              href="mailto:raolakshyaraj@gmail.com"
              className="flex items-center gap-4 p-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded group hover:border-[var(--color-accent)] transition-colors"
            >
              <Mail size={24} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
              <div>
                <p className="font-mono text-sm text-[var(--color-text-muted)] mb-0.5">Email</p>
                <p className="text-[var(--color-text-primary)]">raolakshyaraj@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/ykstorm"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded group hover:border-[var(--color-accent)] transition-colors"
            >
              <Github size={24} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
              <div>
                <p className="font-mono text-sm text-[var(--color-text-muted)] mb-0.5">GitHub</p>
                <p className="text-[var(--color-text-primary)]">github.com/ykstorm</p>
              </div>
              <ArrowRight size={16} className="ml-auto text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
            </a>

            <a
              href="https://linkedin.com/in/lakshyaraj-singh-rao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded group hover:border-[var(--color-accent)] transition-colors"
            >
              <Linkedin size={24} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
              <div>
                <p className="font-mono text-sm text-[var(--color-text-muted)] mb-0.5">LinkedIn</p>
                <p className="text-[var(--color-text-primary)]">Lakshyaraj Singh Rao</p>
              </div>
              <ArrowRight size={16} className="ml-auto text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors" />
            </a>
          </div>

          <div className="p-6 border border-[var(--color-border)] rounded bg-[var(--color-bg-secondary)]">
            <p className="font-mono text-sm text-[var(--color-accent)] mb-2">What I'm looking for</p>
            <ul className="space-y-2 text-[var(--color-text-secondary)] text-sm">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)]">→</span>
                Staff-level engineering roles at AI product companies
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)]">→</span>
                Founding engineer positions (first 10 employees)
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)]">→</span>
                DevTools, Platform, or Infrastructure teams
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)]">→</span>
                Problems involving LLM systems, RAG, or production AI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}