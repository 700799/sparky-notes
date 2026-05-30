'use client';

import Pill from './Pill';
import {
  countActive,
  facetOptions,
  type ActiveFilters,
  type FilterGroup,
} from '@/lib/filters';

interface FilterPillsProps {
  active: ActiveFilters;
  onToggle: (group: FilterGroup, value: string) => void;
  onClear: () => void;
}

// Three facet groups, each precomputed with one-word labels + book counts.
const GROUPS: { key: 'theme' | 'genre' | 'award'; label: string }[] = [
  { key: 'theme', label: 'Theme' },
  { key: 'genre', label: 'Genre' },
  { key: 'award', label: 'Awards' },
];

const OPTIONS = {
  theme: facetOptions('theme'),
  genre: facetOptions('genre'),
  award: facetOptions('award'),
};

/** The filter bar: grouped, space-filling grids of one-word pills with counts. */
export default function FilterPills({ active, onToggle, onClear }: FilterPillsProps) {
  const activeCount = countActive(active);

  return (
    <div className="space-y-5">
      {GROUPS.map((group) => (
        <div key={group.key}>
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink/50">
            {group.label}
          </p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {OPTIONS[group.key].map((opt) => (
              <Pill
                key={opt.value}
                block
                count={opt.count}
                title={opt.value}
                active={active[group.key].includes(opt.value)}
                onClick={() => onToggle(group.key, opt.value)}
              >
                {opt.short}
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
