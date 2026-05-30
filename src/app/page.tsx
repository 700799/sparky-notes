import Link from 'next/link';
import { books, bookCount } from '@/data/books';
import BrowseSection from '@/components/BrowseSection';
import HighlightCard, { type HighlightPost } from '@/components/HighlightCard';

// One standout highlight per book, surfaced as card-like posts at the bottom.
const highlightPosts: HighlightPost[] = books.map((b) => ({
  ...b.highlights[0],
  bookTitle: b.title,
  bookSlug: b.slug,
  accent: b.accent,
  emoji: b.emoji,
}));

export default function HomePage() {
  return (
    <div className="pb-10">
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-6 pt-6 sm:pt-8">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-spark/15 px-3 py-1 text-xs font-semibold text-spark-deep">
            ⚡ {bookCount} deep reading guides
          </span>
          <h1 className="mt-3 font-serif text-3xl font-black leading-tight text-ink sm:text-4xl">
            Actually understand the books you have to read.
          </h1>
          <p className="mt-2 text-base leading-relaxed text-ink/70">
            Thorough <strong>literary analysis</strong>, the <strong>best quotes</strong>, and how
            each book connects to <strong>today&rsquo;s world (2026)</strong> — filter by theme and
            start browsing.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/#browse"
              className="rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-ink-soft"
            >
              Browse the library
            </Link>
            <Link
              href="/rewards"
              className="rounded-full border border-ink/20 bg-white px-5 py-2.5 text-sm font-semibold text-ink transition hover:border-spark"
            >
              🏆 Earn rewards as you read
            </Link>
          </div>
        </div>
      </section>

      {/* Browse-first: filter pills + live grid */}
      <BrowseSection books={books} />

      {/* Key Highlights — card-like posts at the bottom */}
      <section id="highlights" className="mx-auto mt-16 max-w-6xl scroll-mt-20 px-4">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-black text-ink">Key highlights</h2>
            <p className="mt-1 text-ink/60">
              Bite-size takeaways from across the collection — tap any card to dive in.
            </p>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {highlightPosts.map((post) => (
            <HighlightCard key={post.bookSlug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
