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
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-parchment/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-2 px-3 py-3 sm:gap-4 sm:px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="text-2xl" aria-hidden>
            ⚡
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-black tracking-tight text-ink sm:text-xl">
              Sparky Notes
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-wider text-ink/50 sm:block">
              Deep reading guides
            </span>
          </span>
        </Link>

        {/* Always-visible one-word quick-nav for fast browsing on every screen size. */}
        <nav className="flex items-center gap-3 sm:gap-5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-ink/70 transition-colors hover:text-spark-deep"
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
