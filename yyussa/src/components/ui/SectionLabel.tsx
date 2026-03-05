interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}

export default function SectionLabel({ children, className = '', light = false }: SectionLabelProps) {
  return (
    <span
      className={`section-label ${light ? 'text-[var(--color-primary-light)]' : 'text-[var(--color-primary)]'} ${className}`}
    >
      {children}
    </span>
  );
}
