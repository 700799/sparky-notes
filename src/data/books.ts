import type { Book } from './types';
import { classics1 } from './books/classics-1';
import { classics2 } from './books/classics-2';
import { classics3 } from './books/classics-3';
import { classics4 } from './books/classics-4';
import { modern } from './books/modern';
import { contemporary } from './books/contemporary';
import type { BookDeepDive } from './types';
import { deepDives } from './deepdives';
import { deepDives2 } from './deepdives-2';
import { deepDives3 } from './deepdives-3';
import { deepDives4 } from './deepdives-4';

export type { Book, GuideSection, Quote, Highlight } from './types';

// Deep-dive guides are authored in batches; merge them into one lookup keyed by slug.
const allDeepDives: Record<string, BookDeepDive> = {
  ...deepDives,
  ...deepDives2,
  ...deepDives3,
  ...deepDives4,
};

/** The full collection, sorted alphabetically by title for stable browsing. */
export const books: Book[] = [
  ...classics1,
  ...classics2,
  ...classics3,
  ...classics4,
  ...modern,
  ...contemporary,
]
  .map((b) => (allDeepDives[b.slug] ? { ...b, deepDive: allDeepDives[b.slug] } : b))
  .sort((a, b) => a.title.localeCompare(b.title));

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export const bookCount = books.length;
