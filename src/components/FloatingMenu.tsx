'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface MenuLink {
  href: string;
  label: string;
  emoji: string;
}

const LINKS: MenuLink[] = [
  { href: '/', label: 'Home', emoji: '🏠' },
  { href: '/#browse', label: 'Browse books', emoji: '📚' },
  { href: '/#highlights', label: 'Key highlights', emoji: '✨' },
  { href: '/rewards', label: 'Trophy Case', emoji: '🏆' },
];

/**
 * A floating action button (bottom-right) that expands into a quick-nav menu.
 * Also offers a "back to top" jump once the user has scrolled down.
 */
export default function FloatingMenu() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the menu on Escape for accessibility.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      {/* Expanded menu */}
      {open && (
        <>
          {/* Click-away backdrop */}
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="fixed inset-0 -z-10 cursor-default bg-ink/20 backdrop-blur-[1px]"
          />
          <nav className="animate-pop flex flex-col gap-2 rounded-2xl bg-white p-2 shadow-2xl ring-1 ring-ink/10">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-spark/15"
              >
                <span aria-hidden className="text-lg">
                  {link.emoji}
                </span>
                {link.label}
              </Link>
            ))}
            {scrolled && (
              <button
                type="button"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setOpen(false);
                }}
                className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-spark/15"
              >
                <span aria-hidden className="text-lg">
                  ⬆️
                </span>
                Back to top
              </button>
            )}
          </nav>
        </>
      )}

      {/* The floating action button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-spark text-2xl text-ink shadow-2xl ring-1 ring-spark-deep/30 transition-transform hover:scale-105 active:scale-95"
      >
        <span aria-hidden>{open ? '✕' : '⚡'}</span>
      </button>
    </div>
  );
}
