'use client';

import { useMemo, useState } from 'react';
import type { Book } from '@/data/books';
import {
  emptyFilters,
  filterBooks,
  type ActiveFilters,
  type FilterGroup,
} from '@/lib/filters';
import FilterPills from './FilterPills';
import BookCard from './BookCard';

/**
 * The browse-first core of the home page: the pill filter bar plus the live
 * book grid. Filtering is entirely client-side over the static book list.
 */
export default function BrowseSection({ books }: { books: Book[] }) {
  const [active, setActive] = useState<ActiveFilters>(emptyFilters);

  const toggle = (group: FilterGroup, value: string) => {
    setActive((prev) => {
      const set = new Set(prev[group]);
      if (set.has(value)) set.delete(value);
      else set.add(value);
      return { ...prev, [group]: Array.from(set) };
    });
  };

  const clear = () => setActive(emptyFilters());

  const visible = useMemo(() => filterBooks(active, books), [active, books]);

  return (
    <section id="browse" className="mx-auto max-w-6xl px-4">
      <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-ink/5 backdrop-blur">
        <FilterPills active={active} onToggle={toggle} onClear={clear} />
      </div>

      <p className="mt-4 text-sm text-ink/50">
        Showing <span className="font-semibold text-ink/80">{visible.length}</span> of {books.length}{' '}
        guides
      </p>

      {visible.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((book) => (
            <BookCard key={book.slug} book={book} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-ink/20 p-10 text-center text-ink/50">
          No books match those filters. Try clearing a few pills.
        </div>
      )}
    </section>
  );
}
