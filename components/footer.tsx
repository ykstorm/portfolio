import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-[var(--color-text-muted)]">
          © {year} Lakshyaraj Singh Rao
        </p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/ykstorm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/lakshyaraj-singh-rao"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:raolakshyaraj@gmail.com"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="font-mono text-xs text-[var(--color-text-muted)]">
          Built with Next.js 15 + Tailwind v4
        </p>
      </div>
    </footer>
  );
}