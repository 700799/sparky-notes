import type { Book } from './types';
import { classics1 } from './books/classics-1';
import { classics2 } from './books/classics-2';
import { classics3 } from './books/classics-3';
import { classics4 } from './books/classics-4';
import { modern } from './books/modern';
import { contemporary } from './books/contemporary';

export type { Book, GuideSection, Quote, Highlight } from './types';

/** The full collection, sorted alphabetically by title for stable browsing. */
export const books: Book[] = [
  ...classics1,
  ...classics2,
  ...classics3,
  ...classics4,
  ...modern,
  ...contemporary,
].sort((a, b) => a.title.localeCompare(b.title));

export function getBook(slug: string): Book | undefined {
  return books.find((b) => b.slug === slug);
}

export const bookCount = books.length;
