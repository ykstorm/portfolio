import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  repo?: string;
}

export default function ProjectCard({ title, description, tags, href, repo }: ProjectCardProps) {
  return (
    <article className="group relative bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-lg p-6 transition-all duration-150 hover:border-[var(--color-accent)] hover:-translate-y-0.5">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="font-space text-lg font-medium text-[var(--color-text-primary)]">
          {title}
        </h3>
        <div className="flex items-center gap-2 shrink-0">
          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
              aria-label="View repository"
            >
              <Github size={18} />
            </a>
          )}
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors"
            aria-label="View project"
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs bg-[var(--color-bg-tertiary)] text-[var(--color-text-muted)] px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}