interface SectionHeadingProps {
  number: string;
  title: string;
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className="mb-16 md:mb-20">
      <span className="text-xs font-mono text-accent tracking-widest">
        {number}
      </span>
      <h2 className="text-display font-light tracking-tight mt-2">
        {title}
      </h2>
    </div>
  );
}
