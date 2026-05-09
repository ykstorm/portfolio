import Link from "next/link";
import { Calendar } from "lucide-react";

interface BlogPostCardProps {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  slug: string;
  readingTime: number;
}

export default function BlogPostCard({ title, date, excerpt, tags, slug, readingTime }: BlogPostCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <article className="group border-b border-[var(--color-border)] pb-8 mb-8 last:border-0 last:mb-0 last:pb-0">
      <div className="flex items-center gap-2 mb-3">
        <span className="font-mono text-xs text-[var(--color-text-muted)] flex items-center gap-1.5">
          <Calendar size={12} />
          {formattedDate}
        </span>
        <span className="text-[var(--color-text-muted)]">·</span>
        <span className="font-mono text-xs text-[var(--color-text-muted)]">{readingTime} min read</span>
      </div>

      <Link href={`/blog/${slug}`} className="block group-hover:no-underline">
        <h3 className="font-space text-xl font-medium text-[var(--color-text-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-150">
          {title}
        </h3>
      </Link>

      <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-4">
        {excerpt}
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