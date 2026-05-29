import { books, type Book } from '@/data/books';

export type FilterGroup = 'genre' | 'theme' | 'era';

export interface ActiveFilters {
  genre: string[];
  theme: string[];
  era: string[];
}

export const emptyFilters = (): ActiveFilters => ({ genre: [], theme: [], era: [] });

/** Unique, sorted list of every genre across the collection. */
export function allGenres(): string[] {
  return unique(books.flatMap((b) => b.genres));
}

/** Unique, sorted list of every theme across the collection. */
export function allThemes(): string[] {
  return unique(books.flatMap((b) => b.themes));
}

/** Eras in a sensible chronological order (not alphabetical). */
export function allEras(): string[] {
  const order = [
    'Ancient',
    'Renaissance',
    '19th Century',
    'Early 20th C.',
    'Mid 20th C.',
    'Modern',
    'Contemporary',
  ];
  const present = new Set(books.map((b) => b.era));
  return order.filter((e) => present.has(e));
}

/**
 * Filter books by the active pills. Within a group the match is OR (any selected
 * genre is fine); across groups it is AND (must satisfy genre AND theme AND era).
 * No filters selected = everything.
 */
export function filterBooks(active: ActiveFilters, source: Book[] = books): Book[] {
  return source.filter((book) => {
    const genreOk =
      active.genre.length === 0 || active.genre.some((g) => book.genres.includes(g));
    const themeOk =
      active.theme.length === 0 || active.theme.some((t) => book.themes.includes(t));
    const eraOk = active.era.length === 0 || active.era.includes(book.era);
    return genreOk && themeOk && eraOk;
  });
}

export function countActive(active: ActiveFilters): number {
  return active.genre.length + active.theme.length + active.era.length;
}

function unique(values: string[]): string[] {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}
