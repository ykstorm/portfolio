interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="font-mono text-sm text-[var(--color-accent)] mb-2">{label}</p>
      <h2 className="font-space text-3xl md:text-4xl font-medium text-[var(--color-text-primary)] mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-[var(--color-text-secondary)] text-base max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}