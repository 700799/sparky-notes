import { books, bookCount } from './books';

export interface BadgeProgress {
  current: number;
  target: number;
}

export interface Badge {
  id: string;
  title: string;
  description: string;
  emoji: string;
  /** Bonus XP awarded on top of the per-book XP when this badge unlocks. */
  bonusXp: number;
  /** Progress toward the badge, derived from the set of completed slugs. */
  progress: (completed: Set<string>) => BadgeProgress;
}

const slugsWithGenre = (genre: string) =>
  books.filter((b) => b.genres.includes(genre)).map((b) => b.slug);

const slugsWithEra = (era: string) =>
  books.filter((b) => b.era === era).map((b) => b.slug);

const completedAmong = (completed: Set<string>, slugs: string[]) =>
  slugs.filter((s) => completed.has(s)).length;

function genreBadge(
  id: string,
  title: string,
  emoji: string,
  genre: string,
  bonusXp = 150,
): Badge {
  const slugs = slugsWithGenre(genre);
  return {
    id,
    title,
    description: `Finish every ${genre} guide in the collection.`,
    emoji,
    bonusXp,
    progress: (completed) => ({
      current: completedAmong(completed, slugs),
      target: slugs.length,
    }),
  };
}

function eraBadge(
  id: string,
  title: string,
  emoji: string,
  era: string,
  bonusXp = 150,
): Badge {
  const slugs = slugsWithEra(era);
  return {
    id,
    title,
    description: `Finish every ${era} guide in the collection.`,
    emoji,
    bonusXp,
    progress: (completed) => ({
      current: completedAmong(completed, slugs),
      target: slugs.length,
    }),
  };
}

/** All achievements, evaluated purely from the set of completed book slugs. */
export const badges: Badge[] = [
  {
    id: 'first-chapter',
    title: 'First Chapter',
    description: 'Finish your very first reading guide.',
    emoji: '📖',
    bonusXp: 50,
    progress: (completed) => ({ current: Math.min(completed.size, 1), target: 1 }),
  },
  {
    id: 'getting-serious',
    title: 'Getting Serious',
    description: 'Finish five reading guides.',
    emoji: '📚',
    bonusXp: 100,
    progress: (completed) => ({ current: Math.min(completed.size, 5), target: 5 }),
  },
  genreBadge('dystopian-scholar', 'Dystopian Scholar', '👁️', 'Dystopian'),
  genreBadge('tragedian', 'Master Tragedian', '🎭', 'Tragedy'),
  genreBadge('gothic-soul', 'Gothic Soul', '🦇', 'Gothic'),
  genreBadge('young-at-heart', 'Young at Heart', '🌱', 'Coming-of-Age'),
  eraBadge('bard-devotee', 'Devotee of the Bard', '🪶', 'Renaissance'),
  eraBadge('modern-reader', 'Modern Reader', '🌐', 'Modern'),
  {
    id: 'halfway-there',
    title: 'Halfway There',
    description: 'Finish half of the entire collection.',
    emoji: '⛰️',
    bonusXp: 250,
    progress: (completed) => ({
      current: Math.min(completed.size, Math.ceil(bookCount / 2)),
      target: Math.ceil(bookCount / 2),
    }),
  },
  {
    id: 'completionist',
    title: 'Canon Completionist',
    description: 'Finish every single reading guide. The ultimate flex.',
    emoji: '🏆',
    bonusXp: 1000,
    progress: (completed) => ({ current: completed.size, target: bookCount }),
  },
];

export function isEarned(badge: Badge, completed: Set<string>): boolean {
  const { current, target } = badge.progress(completed);
  return target > 0 && current >= target;
}

export function earnedBadges(completed: Set<string>): Badge[] {
  return badges.filter((b) => isEarned(b, completed));
}
