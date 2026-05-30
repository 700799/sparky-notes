import Link from 'next/link';
import HeaderStats from './HeaderStats';
import { allThemes } from '@/lib/filters';

// One-word quick-nav links shown in the top bar on every screen size.
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#browse', label: 'Browse' },
  { href: '/#highlights', label: 'Highlights' },
  { href: '/rewards', label: 'Rewards' },
];

// Theme categories surfaced as a second menu row; each jumps to a filtered grid.
const CATEGORIES = allThemes();

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-parchment/90 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-6xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-4">
        <Link href="/" className="flex shrink-0 items-center gap-1.5">
          <span className="text-xl" aria-hidden>
            ⚡
          </span>
          <span className="font-serif text-base font-black tracking-tight text-ink sm:text-lg">
            Sparky Notes
          </span>
        </Link>

        {/* Condensed, always-visible one-word quick-nav for fast browsing. */}
        <nav className="flex items-center gap-3 text-sm sm:gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-semibold text-ink/70 transition-colors hover:text-spark-deep"
            >
              {link.label}
            </Link>
          ))}
          <HeaderStats />
        </nav>
      </div>

      {/* Second row: theme categories that link straight into a filtered grid. */}
      <div className="border-t border-ink/5 bg-white/40">
        <nav className="no-scrollbar mx-auto flex max-w-6xl items-center gap-3 overflow-x-auto px-3 py-1.5 text-xs sm:px-4">
          <span className="shrink-0 font-semibold uppercase tracking-wide text-ink/40">
            Categories
          </span>
          {CATEGORIES.map((category) => (
            <Link
              key={category}
              href={`/?theme=${encodeURIComponent(category)}#browse`}
              className="shrink-0 whitespace-nowrap rounded-full px-2.5 py-1 font-medium text-ink/70 transition-colors hover:bg-spark/15 hover:text-spark-deep"
            >
              {category}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
