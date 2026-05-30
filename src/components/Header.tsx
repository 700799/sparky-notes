import Link from 'next/link';
import HeaderStats from './HeaderStats';

// One-word quick-nav links shown in the top bar on every screen size.
const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#browse', label: 'Browse' },
  { href: '/#highlights', label: 'Highlights' },
  { href: '/rewards', label: 'Rewards' },
];

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
    </header>
  );
}
