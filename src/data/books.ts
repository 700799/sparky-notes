import type { Book } from './types';
import { classics1 } from './books/classics-1';
import { classics2 } from './books/classics-2';
import { classics3 } from './books/classics-3';
import { classics4 } from './books/classics-4';
import { modern } from './books/modern';
import { contemporary } from './books/contemporary';
import { awardWinners } from './books/award-winners';
import type { BookDeepDive } from './types';
import { deepDives } from './deepdives';
import { deepDives2 } from './deepdives-2';
import { deepDives3 } from './deepdives-3';
import { deepDives4 } from './deepdives-4';
import { deepDives5 } from './deepdives-5';
import { deepDives6 } from './deepdives-6';
import { deepDives7 } from './deepdives-7';

export type { Book, GuideSection, Quote, Highlight } from './types';

// Deep-dive guides are authored in batches; merge them into one lookup keyed by slug.
const allDeepDives: Record<string, BookDeepDive> = {
  ...deepDives,
  ...deepDives2,
  ...deepDives3,
  ...deepDives4,
  ...deepDives5,
  ...deepDives6,
  ...deepDives7,
};

// Award backfill for notable existing winners, so award pills and the
// "Decorated Reader" badge are meaningful across the established canon too.
// (New batch-7 books carry their own `awards` field directly.)
const awardBackfill: Record<string, string[]> = {
  'to-kill-a-mockingbird': ['Pulitzer Prize'],
  'the-grapes-of-wrath': ['Pulitzer Prize', 'National Book Award'],
  beloved: ['Pulitzer Prize'],
  'their-eyes-were-watching-god': ['Modern Library 100 Best Novels'],
  'things-fall-apart': ['Man Booker International Honoree'],
};

/** The full collection, sorted alphabetically by title for stable browsing. */
export const books: Book[] = [
  ...classics1,
  ...classics2,
  ...classics3,
  ...classics4,
  ...modern,
  ...contemporary,
  ...awardWinners,
]
  .map((b) => {
    const deepDive = allDeepDives[b.slug];
    const awards = b.awards ?? awardBackfill[b.slug];
    return { ...b, ...(deepDive ? { deepDive } : {}), ...(awards ? { awards } : {}) };
  })
  .sort((a, b) => a.title.localeCompare(b.title));

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export const bookCount = books.length;
