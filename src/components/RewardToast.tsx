'use client';

import { useEffect } from 'react';
import type { Badge } from '@/data/badges';

export interface ToastData {
  id: number;
  message: string;
  xpDelta: number;
  badges: Badge[];
}

/** A celebratory toast that pops on completion / badge unlocks, then auto-dismisses. */
export default function RewardToast({
  toast,
  onDismiss,
}: {
  toast: ToastData | null;
  onDismiss: () => void;
}) {
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(onDismiss, 4000);
    return () => clearTimeout(t);
  }, [toast, onDismiss]);

  if (!toast) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <div className="animate-toast-in pointer-events-auto w-full max-w-sm rounded-2xl bg-ink p-4 text-white shadow-2xl ring-1 ring-white/10">
        <div className="flex items-start gap-3">
          <span className="animate-pop text-2xl" aria-hidden>
            {toast.xpDelta > 0 ? '🎉' : '↩️'}
          </span>
          <div className="flex-1">
            <p className="font-semibold">{toast.message}</p>
            {toast.xpDelta !== 0 && (
              <p className="text-sm text-spark">
                {toast.xpDelta > 0 ? '+' : ''}
                {toast.xpDelta} XP
              </p>
            )}
            {toast.badges.length > 0 && (
              <ul className="mt-2 space-y-1">
                {toast.badges.map((b) => (
                  <li key={b.id} className="text-sm text-white/90">
                    <span aria-hidden>{b.emoji}</span> Badge unlocked:{' '}
                    <span className="font-semibold">{b.title}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            type="button"
            onClick={onDismiss}
            className="text-white/50 hover:text-white"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
