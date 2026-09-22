type SectionHeadingProps = {
  index: string;
  label: string;
  title: string | readonly string[];
  className?: string;
};

export function SectionHeading({ index, label, title, className = "" }: SectionHeadingProps) {
  const lines = typeof title === "string" ? [title] : title;

  return (
    <header className={className} data-reveal>
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] opacity-60">
        <span className="geo-dot" aria-hidden />
        {index} — {label}
      </p>
      <h2 className="h-section mt-6 max-w-4xl">
        {lines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h2>
    </header>
  );
}
