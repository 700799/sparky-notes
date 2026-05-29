'use client';

import Link from 'next/link';
import { useProgress } from '@/lib/progress';
import { isEarned } from '@/data/badges';
import XpBadgeBar from '@/components/XpBadgeBar';
import BadgeCard from '@/components/BadgeCard';

export default function RewardsPage() {
  const { badges, completed, hydrated, resetProgress, earned } = useProgress();

  const handleReset = () => {
    if (confirm('Reset all reading progress and badges? This cannot be undone.')) {
      resetProgress();
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-serif text-4xl font-black text-ink">🏆 Trophy Case</h1>
          <p className="mt-1 text-ink/60">
            Mark guides as read to earn XP, level up, and unlock badges.
          </p>
        </div>
        <Link
          href="/#browse"
          className="rounded-full bg-ink px-5 py-2.5 font-semibold text-white transition hover:bg-ink-soft"
        >
          Find something to read →
        </Link>
      </div>

      <div className="mt-6">
        <XpBadgeBar />
      </div>

      <h2 className="mt-10 font-serif text-2xl font-black text-ink">
        Badges{' '}
        {hydrated && (
          <span className="text-base font-medium text-ink/50">
            ({earned.length} / {badges.length} unlocked)
          </span>
        )}
      </h2>

      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {badges.map((badge) => {
          const { current, target } = badge.progress(completed);
          return (
            <BadgeCard
              key={badge.id}
              badge={badge}
              current={current}
              target={target}
              earned={hydrated && isEarned(badge, completed)}
            />
          );
        })}
      </div>

      {hydrated && completed.size > 0 && (
        <div className="mt-10 border-t border-ink/10 pt-6">
          <button
            type="button"
            onClick={handleReset}
            className="text-sm font-medium text-red-600 underline-offset-2 hover:underline"
          >
            Reset all progress
          </button>
        </div>
      )}
    </div>
  );
}
