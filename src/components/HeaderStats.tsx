'use client';

import Link from 'next/link';
import { useProgress } from '@/lib/progress';
import ProgressBar from './ProgressBar';

/** Compact progress readout shown in the site header (links to the Trophy Case). */
export default function HeaderStats() {
  const { hydrated, level, levelTitle, completedCount, totalCount, xpIntoLevel, xpForLevel, earned } =
    useProgress();

  // Render a neutral placeholder before hydration to avoid SSR/CSR mismatch.
  if (!hydrated) {
    return <div className="h-9 w-40 animate-pulse rounded-full bg-ink/5" aria-hidden />;
  }

  return (
    <Link
      href="/rewards"
      className="group flex items-center gap-3 rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 shadow-sm transition-colors hover:border-spark"
      title="View your Trophy Case"
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-spark text-xs font-bold text-ink">
        {level}
      </span>
      <span className="hidden flex-col leading-tight sm:flex">
        <span className="text-xs font-semibold text-ink">{levelTitle}</span>
        <span className="text-[11px] text-ink/50">
          {completedCount}/{totalCount} read · {earned.length} 🏅
        </span>
      </span>
      <span className="hidden w-20 md:block">
        <ProgressBar value={xpIntoLevel} max={xpForLevel} />
      </span>
    </Link>
  );
}
