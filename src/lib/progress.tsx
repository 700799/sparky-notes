'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import type { BookFacet } from '@/data/types';
import { buildBadges, earnedBadges, type Badge } from '@/data/badges';

const STORAGE_KEY = 'sparky-notes:progress:v1';
const XP_PER_BOOK = 100;
const XP_PER_LEVEL = 500;

const LEVEL_TITLES = [
  'Page Turner',
  'Bookworm',
  'Lit Buff',
  'Scholar',
  'Lit Scholar',
  'Literary Sage',
  'Canon Master',
];

export interface ToggleResult {
  /** True if the book is now marked complete (false if it was un-marked). */
  completed: boolean;
  /** XP delta from this action (book XP +/- and any badge bonuses gained). */
  xpDelta: number;
  /** Badges newly unlocked by this action (for celebratory toasts). */
  newBadges: Badge[];
}

interface ProgressState {
  /** Slugs of completed guides. */
  completed: Set<string>;
  /** True once we have read from localStorage (avoids SSR/CSR mismatch). */
  hydrated: boolean;
  isComplete: (slug: string) => boolean;
  toggleComplete: (slug: string) => ToggleResult;
  resetProgress: () => void;
  xp: number;
  level: number;
  levelTitle: string;
  /** XP earned within the current level. */
  xpIntoLevel: number;
  /** Total XP needed to clear the current level. */
  xpForLevel: number;
  completedCount: number;
  totalCount: number;
  badges: Badge[];
  earned: Badge[];
}

function levelFromXp(xp: number) {
  const level = Math.floor(xp / XP_PER_LEVEL) + 1;
  const xpIntoLevel = xp % XP_PER_LEVEL;
  const title = LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)];
  return { level, xpIntoLevel, xpForLevel: XP_PER_LEVEL, title };
}

const ProgressContext = createContext<ProgressState | null>(null);

export function ProgressProvider({
  children,
  facets,
  bookCount,
}: {
  children: ReactNode;
  /** Light book facts from the server; never the full prose-laden book data. */
  facets: BookFacet[];
  bookCount: number;
}) {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  const badges = useMemo(() => buildBadges(facets, bookCount), [facets, bookCount]);

  const computeXp = useCallback(
    (done: Set<string>) =>
      done.size * XP_PER_BOOK +
      earnedBadges(badges, done).reduce((sum, b) => sum + b.bonusXp, 0),
    [badges],
  );

  // Read persisted progress once, on the client only.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { completed?: string[] };
        if (Array.isArray(parsed.completed)) {
          setCompleted(new Set(parsed.completed));
        }
      }
    } catch {
      // Corrupt or unavailable storage — start fresh, don't crash.
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((next: Set<string>) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ completed: Array.from(next) }),
      );
    } catch {
      // Ignore storage write failures (private mode, quota, etc.).
    }
  }, []);

  const isComplete = useCallback((slug: string) => completed.has(slug), [completed]);

  const toggleComplete = useCallback(
    (slug: string): ToggleResult => {
      const before = completed;
      const beforeBadges = new Set(earnedBadges(badges, before).map((b) => b.id));
      const beforeXp = computeXp(before);

      const next = new Set(before);
      const nowCompleted = !next.has(slug);
      if (nowCompleted) next.add(slug);
      else next.delete(slug);

      const afterXp = computeXp(next);
      const newBadges = earnedBadges(badges, next).filter((b) => !beforeBadges.has(b.id));

      setCompleted(next);
      persist(next);

      return { completed: nowCompleted, xpDelta: afterXp - beforeXp, newBadges };
    },
    [completed, persist, badges, computeXp],
  );

  const resetProgress = useCallback(() => {
    const empty = new Set<string>();
    setCompleted(empty);
    persist(empty);
  }, [persist]);

  const value = useMemo<ProgressState>(() => {
    const xp = computeXp(completed);
    const { level, xpIntoLevel, xpForLevel, title } = levelFromXp(xp);
    return {
      completed,
      hydrated,
      isComplete,
      toggleComplete,
      resetProgress,
      xp,
      level,
      levelTitle: title,
      xpIntoLevel,
      xpForLevel,
      completedCount: completed.size,
      totalCount: bookCount,
      badges,
      earned: earnedBadges(badges, completed),
    };
  }, [completed, hydrated, isComplete, toggleComplete, resetProgress, badges, bookCount, computeXp]);

  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>;
}

export function useProgress(): ProgressState {
  const ctx = useContext(ProgressContext);
  if (!ctx) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return ctx;
}
