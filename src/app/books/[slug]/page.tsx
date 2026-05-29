import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { books, getBook } from '@/data/books';
import Pill from '@/components/Pill';
import SectionBlock from '@/components/SectionBlock';
import HighlightCard, { type HighlightPost } from '@/components/HighlightCard';
import MarkReadButton from '@/components/MarkReadButton';

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) return { title: 'Guide not found' };
  return {
    title: `${book.title} by ${book.author} — Study Guide`,
    description: `${book.hook} Literary analysis, key quotes, and 2026 connections for ${book.title}.`,
  };
}

export default async function BookGuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();

  const year = book.year < 0 ? `${Math.abs(book.year)} BCE` : book.year;
  const highlightPosts: HighlightPost[] = book.highlights.map((h) => ({
    ...h,
    bookTitle: book.title,
    bookSlug: book.slug,
    accent: book.accent,
    emoji: book.emoji,
  }));

  return (
    <article className="pb-10">
      {/* Guide header */}
      <header className="text-white" style={{ backgroundColor: book.accent }}>
        <div className="mx-auto max-w-4xl px-4 py-10">
          <Link href="/#browse" className="text-sm font-medium text-white/80 hover:text-white">
            ← Back to library
          </Link>
          <div className="mt-4 flex items-start gap-4">
            <span className="text-5xl drop-shadow" aria-hidden>
              {book.emoji}
            </span>
            <div>
              <h1 className="font-serif text-4xl font-black leading-tight">{book.title}</h1>
              <p className="mt-1 text-lg text-white/85">
                {book.author} · {year} · {book.region}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-white/90">{book.hook}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[...book.genres, book.era, ...book.themes].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/15 px-3 py-1 text-sm font-medium text-white"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <MarkReadButton slug={book.slug} title={book.title} />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-4xl space-y-12 px-4 py-10">
        {/* Summary */}
        <section>
          <h2 className="font-serif text-2xl font-black text-ink">Overview &amp; summary</h2>
          <div className="prose-guide mt-3">
            {book.summary.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>

        {/* Literary analysis */}
        <section>
          <h2 className="font-serif text-2xl font-black text-ink">Literary analysis</h2>
          <div className="mt-4 space-y-6">
            {book.literaryAnalysis.map((section) => (
              <SectionBlock key={section.heading} section={section} />
            ))}
          </div>
        </section>

        {/* Current events */}
        <section>
          <h2 className="font-serif text-2xl font-black text-ink">
            How it connects to today <span className="text-spark-deep">(2026)</span>
          </h2>
          <p className="mt-1 text-ink/60">
            Why this book still matters in the modern world.
          </p>
          <div className="mt-4 space-y-6">
            {book.currentEvents.map((section) => (
              <SectionBlock key={section.heading} section={section} />
            ))}
          </div>
        </section>

        {/* Key quotes */}
        <section>
          <h2 className="font-serif text-2xl font-black text-ink">Key quotes</h2>
          <div className="mt-4 space-y-4">
            {book.quotes.map((q, i) => (
              <figure
                key={i}
                className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink/5"
              >
                <blockquote className="border-l-4 border-spark pl-4 font-serif text-lg italic text-ink">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 pl-4 text-sm text-ink/70">
                  {q.speaker && (
                    <span className="font-semibold text-ink">— {q.speaker}. </span>
                  )}
                  {q.significance}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Key highlights (cards) */}
        <section>
          <h2 className="font-serif text-2xl font-black text-ink">Key highlights</h2>
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {highlightPosts.map((post, i) => (
              <HighlightCard key={i} post={post} />
            ))}
          </div>
        </section>

        <div className="flex justify-center pt-4">
          <MarkReadButton slug={book.slug} title={book.title} />
        </div>
      </div>
    </article>
  );
}
