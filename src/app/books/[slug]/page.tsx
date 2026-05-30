import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { books, getBook } from '@/data/books';
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
    description: `${book.hook} Plot summary, character & theme analysis, key quotes, and 2026 connections for ${book.title}.`,
  };
}

function Prose({ text }: { text: string }) {
  return (
    <div className="prose-guide mt-3">
      {text.split('\n\n').map((p, i) => (
        <p key={i}>{p}</p>
      ))}
    </div>
  );
}

function SectionHeading({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-20 font-serif text-2xl font-black text-ink">
      {children}
    </h2>
  );
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
  const dd = book.deepDive;
  const highlightPosts: HighlightPost[] = book.highlights.map((h) => ({
    ...h,
    bookTitle: book.title,
    bookSlug: book.slug,
    accent: book.accent,
    emoji: book.emoji,
  }));

  // Quick-nav anchors, only for the rich deep-dive layout.
  const toc = dd
    ? [
        ['famous', 'Why it’s famous'],
        ['plot', 'Plot summary'],
        ['characters', 'Characters'],
        ['themes', 'Themes'],
        ['motifs', 'Symbols & motifs'],
        ['style', 'Literary analysis'],
        ['quotes', 'Quotes'],
        ['today', 'Today (2026)'],
        ['study', 'Study questions'],
        ['author', 'The author'],
      ]
    : [];

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
            {book.themes.map((tag) => (
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

      {/* Quick nav (deep-dive only) */}
      {toc.length > 0 && (
        <nav className="sticky top-[57px] z-30 border-b border-ink/10 bg-parchment/90 backdrop-blur">
          <div className="no-scrollbar mx-auto flex max-w-4xl gap-2 overflow-x-auto px-4 py-2">
            {toc.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className="whitespace-nowrap rounded-full px-3 py-1 text-sm font-medium text-ink/60 hover:bg-ink/5 hover:text-ink"
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
      )}

      <div className="mx-auto max-w-4xl space-y-12 px-4 py-10">
        {/* Overview / nutshell */}
        <section>
          <SectionHeading id="overview">Overview</SectionHeading>
          <Prose text={book.summary} />
        </section>

        {dd ? (
          <>
            {/* 1. What makes it famous */}
            <section>
              <SectionHeading id="famous">⭐ What makes it famous</SectionHeading>
              <Prose text={dd.whatMakesItFamous} />
            </section>

            {/* 2. Plot summary */}
            <section>
              <SectionHeading id="plot">📖 Plot summary</SectionHeading>
              <p className="mt-1 text-ink/60">
                What happens, section by section — with the major turning points.
              </p>
              <div className="mt-4 space-y-6">
                {dd.plotSummary.map((s) => (
                  <SectionBlock key={s.heading} section={s} />
                ))}
              </div>
            </section>

            {/* 3. Character analysis */}
            <section>
              <SectionHeading id="characters">👥 Character analysis</SectionHeading>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {dd.characters.map((c) => (
                  <div
                    key={c.name}
                    className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink/5"
                  >
                    <h3 className="font-serif text-lg font-bold text-ink">{c.name}</h3>
                    <p className="text-sm font-medium text-spark-deep">{c.role}</p>
                    <p className="mt-2 text-sm text-ink/75">
                      <span className="font-semibold text-ink">Motivation: </span>
                      {c.motivation}
                    </p>
                    <p className="mt-1.5 text-sm text-ink/75">
                      <span className="font-semibold text-ink">Arc: </span>
                      {c.arc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 4. Themes */}
            <section>
              <SectionHeading id="themes">💡 Themes</SectionHeading>
              <p className="mt-1 text-ink/60">The big ideas the author explores.</p>
              <div className="mt-4 space-y-6">
                {dd.themeAnalysis.map((s) => (
                  <SectionBlock key={s.heading} section={s} />
                ))}
              </div>
            </section>

            {/* 5. Symbols & motifs */}
            <section>
              <SectionHeading id="motifs">🔑 Symbols &amp; motifs</SectionHeading>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {dd.motifs.map((m) => (
                  <div
                    key={m.name}
                    className="rounded-2xl border border-ink/10 bg-white/70 p-4"
                  >
                    <h3 className="font-serif text-base font-bold text-ink">{m.name}</h3>
                    <p className="mt-1 text-sm text-ink/75">{m.meaning}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 6. Literary analysis (style) */}
            <section>
              <SectionHeading id="style">✍️ Literary analysis</SectionHeading>
              <p className="mt-1 text-ink/60">Writing style, tone, setting, and devices.</p>
              <div className="mt-4 space-y-6">
                {dd.style.map((s) => (
                  <SectionBlock key={s.heading} section={s} />
                ))}
              </div>
            </section>
          </>
        ) : (
          /* Legacy layout for books not yet upgraded */
          <section>
            <SectionHeading id="analysis">Literary analysis</SectionHeading>
            <div className="mt-4 space-y-6">
              {book.literaryAnalysis.map((section) => (
                <SectionBlock key={section.heading} section={section} />
              ))}
            </div>
          </section>
        )}

        {/* 7. Important quotes */}
        <section>
          <SectionHeading id="quotes">❝ Important quotes</SectionHeading>
          <div className="mt-4 space-y-4">
            {book.quotes.map((q, i) => (
              <figure key={i} className="rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink/5">
                <blockquote className="border-l-4 border-spark pl-4 font-serif text-lg italic text-ink">
                  &ldquo;{q.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-3 pl-4 text-sm text-ink/70">
                  {q.speaker && <span className="font-semibold text-ink">— {q.speaker}. </span>}
                  {q.significance}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Current events */}
        <section>
          <SectionHeading id="today">
            🌍 How it connects to today <span className="text-spark-deep">(2026)</span>
          </SectionHeading>
          <div className="mt-4 space-y-6">
            {book.currentEvents.map((section) => (
              <SectionBlock key={section.heading} section={section} />
            ))}
          </div>
        </section>

        {/* 8. Study questions + author (deep-dive only) */}
        {dd && (
          <>
            <section>
              <SectionHeading id="study">✏️ Study questions</SectionHeading>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-ink/50">
                    Discussion
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {dd.studyQuestions
                      .filter((q) => q.type === 'discussion')
                      .map((q, i) => (
                        <li
                          key={i}
                          className="rounded-xl bg-white/70 p-3 text-sm text-ink/80 ring-1 ring-ink/5"
                        >
                          {q.prompt}
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-ink/50">
                    Sample essay topics
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {dd.studyQuestions
                      .filter((q) => q.type === 'essay')
                      .map((q, i) => (
                        <li
                          key={i}
                          className="rounded-xl bg-white/70 p-3 text-sm text-ink/80 ring-1 ring-ink/5"
                        >
                          {q.prompt}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <SectionHeading id="author">🖋️ About the author</SectionHeading>
              <Prose text={dd.aboutAuthor} />
            </section>
          </>
        )}

        {/* Key highlights (cards) */}
        <section>
          <SectionHeading id="highlights">Key highlights</SectionHeading>
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
