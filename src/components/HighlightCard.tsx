import Link from 'next/link';
import type { Highlight } from '@/data/books';

export interface HighlightPost extends Highlight {
  bookTitle: string;
  bookSlug: string;
  accent: string;
  emoji: string;
}

/** A card-like "post" surfacing one key highlight, linking back to its guide. */
export default function HighlightCard({ post }: { post: HighlightPost }) {
  return (
    <Link
      href={`/books/${post.bookSlug}`}
      className="group flex flex-col rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink/5 transition-all hover:-translate-y-1 hover:shadow-card-hover"
    >
      <div className="flex items-center gap-2 text-sm text-ink/50">
        <span
          className="flex h-8 w-8 items-center justify-center rounded-lg text-lg"
          style={{ backgroundColor: `${post.accent}22` }}
          aria-hidden
        >
          {post.emoji}
        </span>
        <span className="font-medium text-ink/70">{post.bookTitle}</span>
      </div>
      <h3 className="mt-3 font-serif text-lg font-bold leading-tight text-ink group-hover:text-spark-deep">
        {post.title}
      </h3>
      <p className="mt-1.5 text-sm leading-snug text-ink/75">{post.detail}</p>
    </Link>
  );
}
