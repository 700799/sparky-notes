'use client';

import Link from 'next/link';
import type { Book } from '@/data/books';
import { useProgress } from '@/lib/progress';
import Pill from './Pill';

/** A browse card for a single book. Shows a ✓ ribbon once the guide is read. */
export default function BookCard({ book }: { book: Book }) {
  const { isComplete, hydrated } = useProgress();
  const done = hydrated && isComplete(book.slug);

  return (
    <Link
      href={`/books/${book.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-card-hover"
    >
      {/* "Cover" band */}
      <div
        className="relative flex h-28 items-center justify-center text-5xl"
        style={{ backgroundColor: book.accent }}
      >
        <span aria-hidden className="drop-shadow-sm">
          {book.emoji}
        </span>
        {done && (
          <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-white/90 px-2 py-0.5 text-xs font-bold text-emerald-700 shadow">
            ✓ Read
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-serif text-lg font-bold leading-tight text-ink group-hover:text-spark-deep">
          {book.title}
        </h3>
        <p className="mt-0.5 text-sm text-ink/60">
          {book.author} · {book.year < 0 ? `${Math.abs(book.year)} BCE` : book.year}
        </p>
        <p className="mt-2 flex-1 text-sm leading-snug text-ink/75">{book.hook}</p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {book.awards && book.awards.length > 0 && (
            <span className="inline-flex items-center gap-1 rounded-full border border-spark-deep/30 bg-spark/15 px-2.5 py-0.5 text-xs font-semibold text-spark-deep">
              🏆 {book.awards[0]}
            </span>
          )}
          {book.themes.slice(0, book.awards?.length ? 2 : 3).map((t) => (
            <Pill key={t} size="sm">
              {t}
            </Pill>
          ))}
        </div>
      </div>
    </Link>
  );
}
