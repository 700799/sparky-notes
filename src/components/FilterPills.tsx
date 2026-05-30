'use client';

import Pill from './Pill';
import {
  allThemes,
  countActive,
  type ActiveFilters,
  type FilterGroup,
} from '@/lib/filters';

interface FilterPillsProps {
  active: ActiveFilters;
  onToggle: (group: FilterGroup, value: string) => void;
  onClear: () => void;
}

// Browsing is filtered by theme only — genre and era pills were removed to
// keep the bar focused and uncluttered.
const THEMES = allThemes();

/** The theme pill-box filter bar. Multi-select. */
export default function FilterPills({ active, onToggle, onClear }: FilterPillsProps) {
  const activeCount = countActive(active);

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start">
        <span className="w-16 shrink-0 pt-1.5 text-xs font-semibold uppercase tracking-wide text-ink/50">
          Theme
        </span>
        <div className="flex flex-wrap gap-2">
          {THEMES.map((value) => (
            <Pill
              key={value}
              active={active.theme.includes(value)}
              onClick={() => onToggle('theme', value)}
            >
              {value}
            </Pill>
          ))}
        </div>
      </div>

      {activeCount > 0 && (
        <button
          type="button"
          onClick={onClear}
          className="text-sm font-medium text-spark-deep underline-offset-2 hover:underline"
        >
          Clear all filters ({activeCount})
        </button>
      )}
    </div>
  );
}
