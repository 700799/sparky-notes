'use client';

import { useState } from 'react';
import { useProgress } from '@/lib/progress';
import RewardToast, { type ToastData } from './RewardToast';

/** "Mark as read" toggle for a guide page — awards XP and fires a reward toast. */
export default function MarkReadButton({ slug, title }: { slug: string; title: string }) {
  const { isComplete, toggleComplete, hydrated } = useProgress();
  const [toast, setToast] = useState<ToastData | null>(null);

  const done = hydrated && isComplete(slug);

  const handleClick = () => {
    const result = toggleComplete(slug);
    if (result.completed) {
      setToast({
        id: Date.now(),
        message: `Finished “${title}”!`,
        xpDelta: result.xpDelta,
        badges: result.newBadges,
      });
    } else {
      setToast({
        id: Date.now(),
        message: `Removed “${title}” from your finished list.`,
        xpDelta: result.xpDelta,
        badges: [],
      });
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        disabled={!hydrated}
        className={
          done
            ? 'inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-5 py-2.5 font-semibold text-emerald-700 transition hover:bg-emerald-100 disabled:opacity-50'
            : 'inline-flex items-center gap-2 rounded-full bg-spark px-5 py-2.5 font-semibold text-ink shadow-sm transition hover:bg-spark-deep disabled:opacity-50'
        }
      >
        {done ? '✓ Finished — earned 100 XP' : '＋ Mark as read (+100 XP)'}
      </button>
      <RewardToast toast={toast} onDismiss={() => setToast(null)} />
    </>
  );
}
