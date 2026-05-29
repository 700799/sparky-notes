import Link from 'next/link';
import HeaderStats from './HeaderStats';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-parchment/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden>
            ⚡
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-black tracking-tight text-ink">
              Sparky Notes
            </span>
            <span className="text-[11px] font-medium uppercase tracking-wider text-ink/50">
              Deep reading guides
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            href="/#browse"
            className="hidden text-sm font-medium text-ink/70 hover:text-ink sm:block"
          >
            Browse
          </Link>
          <Link
            href="/rewards"
            className="hidden text-sm font-medium text-ink/70 hover:text-ink sm:block"
          >
            Trophy Case
          </Link>
          <HeaderStats />
        </nav>
      </div>
    </header>
  );
}
