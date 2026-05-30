import { books, type Book } from '@/data/books';

export type FilterGroup = 'genre' | 'theme' | 'era';

export interface ActiveFilters {
  genre: string[];
  theme: string[];
  era: string[];
}

export const emptyFilters = (): ActiveFilters => ({ genre: [], theme: [], era: [] });

/**
 * Books carry granular genre/theme tags (great for the cards & guides), but that
 * produced ~20+ filter pills. For browsing we collapse those into a small set of
 * canonical buckets — a book belongs to a bucket if it has any member tag.
 */
interface Bucket {
  label: string;
  members: string[];
}

const GENRE_BUCKETS: Bucket[] = [
  { label: 'Tragedy', members: ['Tragedy'] },
  { label: 'Dystopian & Sci-Fi', members: ['Dystopian', 'Science Fiction', 'Speculative'] },
  { label: 'Coming-of-Age', members: ['Coming-of-Age', 'Vignettes'] },
  { label: 'Gothic & Romance', members: ['Gothic', 'Romance'] },
  { label: 'Drama', members: ['Drama'] },
  {
    label: 'Satire & Political',
    members: ['Satire', 'Social Satire', 'Allegory', 'Fable', 'Political'],
  },
  {
    label: 'Historical & Realism',
    members: [
      'Historical',
      'Social Realism',
      'Postcolonial',
      'Memoir',
      'Family Saga',
      'Magical Realism',
      'Psychological',
      'Philosophical',
    ],
  },
  { label: 'Epic & Adventure', members: ['Epic', 'Adventure', 'Survival', 'Graphic Novel'] },
];

const THEME_BUCKETS: Bucket[] = [
  {
    label: 'Power & Politics',
    members: [
      'Power',
      'Surveillance',
      'Censorship',
      'Conformity',
      'Propaganda',
      'Revolution',
      'Hysteria',
      'Colonialism',
    ],
  },
  {
    label: 'Identity & Belonging',
    members: [
      'Identity',
      'Belonging',
      'Isolation',
      'Alienation',
      'Independence',
      'Heritage',
      'Coming-of-Age',
      'Gender',
      'Masculinity',
    ],
  },
  {
    label: 'Morality & Justice',
    members: [
      'Morality',
      'Justice',
      'Guilt',
      'Redemption',
      'Sin',
      'Shame',
      'Hypocrisy',
      'Integrity',
      'Truth',
      'Responsibility',
    ],
  },
  {
    label: 'Love & Family',
    members: [
      'Love',
      'Family',
      'Motherhood',
      'Friendship',
      'Generations',
      'Youth',
      'Loyalty',
      'Obsession',
    ],
  },
  { label: 'Race & Class', members: ['Race', 'Class', 'Slavery', 'Dignity'] },
  {
    label: 'Dreams & Ambition',
    members: ['Dreams', 'The American Dream', 'Ambition', 'Destiny', 'Journey'],
  },
  {
    label: 'Freedom & Society',
    members: ['Freedom', 'Religion', 'Tradition', 'Civilization', 'Consumerism', 'Violence'],
  },
  {
    label: 'Science & Mortality',
    members: [
      'Science',
      'Technology',
      'Knowledge',
      'Fate',
      'Mortality',
      'Madness',
      'Memory',
      'Trauma',
      'Survival',
      'Faith',
      'Humanity',
      'Innocence',
      'Revenge',
    ],
  },
];

function bucketsFor(values: string[], buckets: Bucket[]): string[] {
  return buckets
    .filter((bucket) => bucket.members.some((m) => values.includes(m)))
    .map((bucket) => bucket.label);
}

/** Canonical genre buckets a book belongs to (used by the filter bar). */
export const canonicalGenres = (book: Book): string[] => bucketsFor(book.genres, GENRE_BUCKETS);

/** Canonical theme buckets a book belongs to (used by the filter bar). */
export const canonicalThemes = (book: Book): string[] => bucketsFor(book.themes, THEME_BUCKETS);

/** Canonical genre pills, in display order, limited to those with matching books. */
export function allGenres(): string[] {
  const present = new Set(books.flatMap(canonicalGenres));
  return GENRE_BUCKETS.map((b) => b.label).filter((label) => present.has(label));
}

/** Canonical theme pills, in display order, limited to those with matching books. */
export function allThemes(): string[] {
  const present = new Set(books.flatMap(canonicalThemes));
  return THEME_BUCKETS.map((b) => b.label).filter((label) => present.has(label));
}

/** Eras in chronological (not alphabetical) order. */
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
 * Filter by the active pills. Within a group the match is OR; across groups it is
 * AND. Genre/theme are matched against the book's canonical buckets.
 */
export function filterBooks(active: ActiveFilters, source: Book[] = books): Book[] {
  return source.filter((book) => {
    const genres = canonicalGenres(book);
    const themes = canonicalThemes(book);
    const genreOk = active.genre.length === 0 || active.genre.some((g) => genres.includes(g));
    const themeOk = active.theme.length === 0 || active.theme.some((t) => themes.includes(t));
    const eraOk = active.era.length === 0 || active.era.includes(book.era);
    return genreOk && themeOk && eraOk;
  });
}

export function countActive(active: ActiveFilters): number {
  return active.genre.length + active.theme.length + active.era.length;
}
