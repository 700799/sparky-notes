'use client';

import Pill from './Pill';
import {
  allEras,
  allGenres,
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

const GROUPS: { key: FilterGroup; label: string; values: string[] }[] = [
  { key: 'genre', label: 'Genre', values: allGenres() },
  { key: 'theme', label: 'Theme', values: allThemes() },
  { key: 'era', label: 'Era', values: allEras() },
];

/** The pill-box filter bar. Multi-select within and across groups. */
export default function FilterPills({ active, onToggle, onClear }: FilterPillsProps) {
  const activeCount = countActive(active);

  return (
    <div className="space-y-4">
      {GROUPS.map((group) => (
        <div key={group.key} className="flex flex-col gap-2 sm:flex-row sm:items-start">
          <span className="w-16 shrink-0 pt-1.5 text-xs font-semibold uppercase tracking-wide text-ink/50">
            {group.label}
          </span>
          <div className="flex flex-wrap gap-2">
            {group.values.map((value) => (
              <Pill
                key={value}
                active={active[group.key].includes(value)}
                onClick={() => onToggle(group.key, value)}
              >
                {value}
              </Pill>
            ))}
          </div>
        </div>
      ))}

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
