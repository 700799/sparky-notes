import type { ReactNode } from 'react';

interface PillProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  /** Small, muted variant for inline tags on cards / guides. */
  size?: 'sm' | 'md';
  title?: string;
}

/**
 * A pill box. Renders as a toggle button when `onClick` is provided (used by
 * the filter bar), otherwise as a static tag.
 */
export default function Pill({ children, active, onClick, size = 'md', title }: PillProps) {
  const base =
    'inline-flex items-center gap-1 rounded-full border font-medium transition-colors whitespace-nowrap';
  const sizing = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1.5 text-sm';
  const state = active
    ? 'border-spark-deep bg-spark text-ink shadow-sm'
    : 'border-ink/15 bg-white/70 text-ink/70 hover:border-spark hover:text-ink';

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        title={title}
        className={`${base} ${sizing} ${state} cursor-pointer`}
      >
        {children}
      </button>
    );
  }

  return (
    <span
      title={title}
      className={`${base} ${sizing} border-ink/10 bg-ink/5 text-ink/70`}
    >
      {children}
    </span>
  );
}
