import { bookCount } from '@/data/books';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-ink/10 bg-white/40">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-ink/60">
        <p className="font-serif text-base font-bold text-ink">⚡ Sparky Notes</p>
        <p className="mt-1 max-w-2xl">
          Deep, browse-first study guides for {bookCount} essential books — literary analysis,
          modern-day connections, and the quotes worth knowing. An educational study aid; always
          read the original work.
        </p>
        <p className="mt-3 text-xs text-ink/40">
          Built with Next.js · Progress is saved locally in your browser.
        </p>
      </div>
    </footer>
  );
}
