'use client';

import { useProgress } from '@/lib/progress';
import ProgressBar from './ProgressBar';

/** A fuller XP / level / badge summary panel (used atop the Trophy Case). */
export default function XpBadgeBar() {
  const {
    hydrated,
    level,
    levelTitle,
    xp,
    xpIntoLevel,
    xpForLevel,
    completedCount,
    totalCount,
    earned,
  } = useProgress();

  if (!hydrated) {
    return <div className="h-28 w-full animate-pulse rounded-2xl bg-ink/5" aria-hidden />;
  }

  return (
    <div className="rounded-2xl bg-ink p-6 text-white shadow-card">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-spark text-xl font-black text-ink">
            {level}
          </span>
          <div>
            <p className="text-xl font-bold">{levelTitle}</p>
            <p className="text-sm text-white/60">{xp.toLocaleString()} total XP</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-black text-spark">
            {completedCount}
            <span className="text-base font-medium text-white/60">/{totalCount}</span>
          </p>
          <p className="text-sm text-white/60">guides finished</p>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-1 flex justify-between text-xs text-white/60">
          <span>Level {level}</span>
          <span>
            {xpIntoLevel} / {xpForLevel} XP to level {level + 1}
          </span>
        </div>
        <ProgressBar value={xpIntoLevel} max={xpForLevel} />
      </div>

      {earned.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {earned.map((b) => (
            <span
              key={b.id}
              className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-sm"
              title={b.title}
            >
              <span aria-hidden>{b.emoji}</span> {b.title}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
