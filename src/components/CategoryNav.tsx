'use client';

import { useRouter } from 'next/navigation';
import { facetOptions } from '@/lib/filters';

const CATEGORIES = facetOptions('theme');

/** Event other components can listen for to apply a theme filter. */
export const FILTER_THEME_EVENT = 'sparky:filter-theme';

/** Smoothly scroll the browse grid into view, accounting for the sticky header. */
function scrollToBrowse() {
  const el = document.getElementById('browse');
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * The header's category row. Clicking a category applies that theme filter
 * (via a custom event BrowseSection listens for) and scrolls down to the grid,
 * so it works whether or not the user is already on the home page.
 */
export default function CategoryNav() {
  const router = useRouter();

  const handleClick = (category: string) => {
    if (window.location.pathname === '/' || window.location.pathname === '') {
      // Already home: filter + scroll without a navigation.
      window.dispatchEvent(new CustomEvent(FILTER_THEME_EVENT, { detail: category }));
      // Wait a tick so the grid re-renders before we scroll to it.
      requestAnimationFrame(scrollToBrowse);
    } else {
      // On a guide page: navigate home with the theme in the query string.
      router.push(`/?theme=${encodeURIComponent(category)}#browse`);
    }
  };

  return (
    <div className="border-t border-ink/5 bg-white/40">
      <nav className="no-scrollbar mx-auto flex max-w-6xl items-center gap-3 overflow-x-auto px-3 py-1.5 text-xs sm:px-4">
        <span className="shrink-0 font-semibold uppercase tracking-wide text-ink/40">
          Categories
        </span>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            type="button"
            title={cat.value}
            onClick={() => handleClick(cat.value)}
            className="flex shrink-0 cursor-pointer items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 font-medium text-ink/70 transition-colors hover:bg-spark/15 hover:text-spark-deep"
          >
            {cat.short}
            <span className="rounded-full bg-ink/5 px-1.5 text-[10px] font-bold tabular-nums text-ink/40">
              {cat.count}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}
