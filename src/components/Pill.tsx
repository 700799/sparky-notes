import type { ReactNode } from 'react';

interface PillProps {
  children: ReactNode;
  active?: boolean;
  onClick?: () => void;
  /** Small, muted variant for inline tags on cards / guides. */
  size?: 'sm' | 'md';
  title?: string;
  /** Optional count badge shown on the right (used by the filter bar). */
  count?: number;
  /** Stretch to fill the grid cell and push the count to the right edge. */
  block?: boolean;
}

/**
 * A pill box. Renders as a toggle button when `onClick` is provided (used by
 * the filter bar), otherwise as a static tag.
 */
export default function Pill({
  children,
  active,
  onClick,
  size = 'md',
  title,
  count,
  block,
}: PillProps) {
  const base = `inline-flex items-center gap-1.5 rounded-full border font-medium transition-colors ${
    block ? 'w-full justify-between' : 'whitespace-nowrap'
  }`;
  const sizing = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3.5 py-1.5 text-sm';
  const state = active
    ? 'border-spark-deep bg-spark text-ink shadow-sm'
    : 'border-ink/15 bg-white/70 text-ink/70 hover:border-spark hover:text-ink';

  const badge =
    count !== undefined ? (
      <span
        className={`ml-1 rounded-full px-1.5 text-[11px] font-bold tabular-nums ${
          active ? 'bg-ink/15 text-ink' : 'bg-ink/5 text-ink/50'
        }`}
      >
        {count}
      </span>
    ) : null;

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        aria-pressed={active}
        title={title}
        className={`${base} ${sizing} ${state} cursor-pointer`}
      >
        <span className="truncate">{children}</span>
        {badge}
      </button>
    );
  }

  return (
    <span
      title={title}
      className={`${base} ${sizing} border-ink/10 bg-ink/5 text-ink/70`}
    >
      <span className="truncate">{children}</span>
      {badge}
    </span>
  );
}
