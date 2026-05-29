import type { Badge } from '@/data/badges';
import ProgressBar from './ProgressBar';

/** A trophy-case card for one badge, showing locked/unlocked state and progress. */
export default function BadgeCard({
  badge,
  current,
  target,
  earned,
}: {
  badge: Badge;
  current: number;
  target: number;
  earned: boolean;
}) {
  return (
    <div
      className={`flex flex-col rounded-2xl p-5 shadow-card ring-1 transition ${
        earned ? 'bg-white ring-spark/40' : 'bg-white/50 ring-ink/5'
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${
            earned ? 'bg-spark/20' : 'bg-ink/5 grayscale'
          }`}
          aria-hidden
        >
          {earned ? badge.emoji : '🔒'}
        </span>
        <div>
          <h3 className="font-serif text-lg font-bold leading-tight text-ink">{badge.title}</h3>
          <p className="text-xs font-medium text-spark-deep">+{badge.bonusXp} XP</p>
        </div>
      </div>

      <p className="mt-3 flex-1 text-sm text-ink/70">{badge.description}</p>

      <div className="mt-4">
        <ProgressBar value={current} max={target} />
        <p className="mt-1 text-right text-xs text-ink/50">
          {earned ? 'Unlocked!' : `${current} / ${target}`}
        </p>
      </div>
    </div>
  );
}
