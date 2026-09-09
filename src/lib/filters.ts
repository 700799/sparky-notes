import { books, type Book, type BookCardData } from '@/data/books';

export type FilterGroup = 'genre' | 'theme' | 'era' | 'award';

export interface ActiveFilters {
  genre: string[];
  theme: string[];
  era: string[];
  award: string[];
}

export const emptyFilters = (): ActiveFilters => ({
  genre: [],
  theme: [],
  era: [],
  award: [],
});

/**
 * Books carry granular genre/theme tags (great for the cards & guides), but that
 * produced ~20+ filter pills. For browsing we collapse those into a small set of
 * canonical buckets — a book belongs to a bucket if it has any member tag.
 * `label` is the canonical filter value; `short` is the one-word display label.
 */
interface Bucket {
  label: string;
  short: string;
  members: string[];
}

const GENRE_BUCKETS: Bucket[] = [
  { label: 'Tragedy', short: 'Tragedy', members: ['Tragedy'] },
  {
    label: 'Dystopian & Sci-Fi',
    short: 'Dystopian',
    members: ['Dystopian', 'Science Fiction', 'Speculative'],
  },
  { label: 'Coming-of-Age', short: 'Coming-of-Age', members: ['Coming-of-Age', 'Vignettes'] },
  { label: 'Gothic & Romance', short: 'Gothic', members: ['Gothic', 'Romance'] },
  { label: 'Drama', short: 'Drama', members: ['Drama'] },
  {
    label: 'Satire & Political',
    short: 'Satire',
    members: ['Satire', 'Social Satire', 'Allegory', 'Fable', 'Political'],
  },
  {
    label: 'Historical & Realism',
    short: 'Historical',
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
  {
    label: 'Epic & Adventure',
    short: 'Epic',
    members: ['Epic', 'Adventure', 'Survival', 'Graphic Novel'],
  },
];

const THEME_BUCKETS: Bucket[] = [
  {
    label: 'Power & Politics',
    short: 'Power',
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
    short: 'Identity',
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
    short: 'Justice',
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
    short: 'Love',
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
  { label: 'Race & Class', short: 'Race', members: ['Race', 'Class', 'Slavery', 'Dignity'] },
  {
    label: 'Dreams & Ambition',
    short: 'Dreams',
    members: ['Dreams', 'The American Dream', 'Ambition', 'Destiny', 'Journey'],
  },
  {
    label: 'Freedom & Society',
    short: 'Freedom',
    members: ['Freedom', 'Religion', 'Tradition', 'Civilization', 'Consumerism', 'Violence'],
  },
  {
    label: 'Science & Mortality',
    short: 'Science',
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

// Award buckets map a one-word label to substrings matched against a book's
// `awards` strings (e.g. "Pulitzer Prize", "#1 NYT Bestseller", "Newbery Medal").
interface AwardBucket {
  label: string;
  short: string;
  match: string[];
}

const AWARD_BUCKETS: AwardBucket[] = [
  { label: 'Pulitzer Prize', short: 'Pulitzer', match: ['Pulitzer'] },
  { label: 'Booker Prize', short: 'Booker', match: ['Booker'] },
  { label: 'National Book Award', short: 'National', match: ['National Book Award'] },
  { label: 'Newbery Medal', short: 'Newbery', match: ['Newbery'] },
  { label: 'NYT Bestseller', short: 'Bestseller', match: ['NYT', 'Bestseller', 'Bestselling'] },
];

function bucketsFor(values: string[], buckets: Bucket[]): string[] {
  return buckets
    .filter((bucket) => bucket.members.some((m) => values.includes(m)))
    .map((bucket) => bucket.label);
}

/** Canonical genre buckets a book belongs to (used by the filter bar). */
export const canonicalGenres = (book: BookCardData): string[] => bucketsFor(book.genres, GENRE_BUCKETS);

/** Canonical theme buckets a book belongs to (used by the filter bar). */
export const canonicalThemes = (book: BookCardData): string[] => bucketsFor(book.themes, THEME_BUCKETS);

/** Canonical award buckets a book belongs to, derived from its `awards` strings. */
export const canonicalAwards = (book: BookCardData): string[] => {
  const awards = book.awards ?? [];
  return AWARD_BUCKETS.filter((bucket) =>
    awards.some((a) => bucket.match.some((m) => a.toLowerCase().includes(m.toLowerCase()))),
  ).map((bucket) => bucket.label);
};

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

/** Canonical award pills, in display order, limited to those with matching books. */
export function allAwards(): string[] {
  const present = new Set(books.flatMap(canonicalAwards));
  return AWARD_BUCKETS.map((b) => b.label).filter((label) => present.has(label));
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

/** A filter option: canonical value, one-word display label, and book count. */
export interface FacetOption {
  value: string;
  short: string;
  count: number;
}

const SHORT_BY_VALUE = new Map<string, string>([
  ...GENRE_BUCKETS.map((b) => [b.label, b.short] as const),
  ...THEME_BUCKETS.map((b) => [b.label, b.short] as const),
  ...AWARD_BUCKETS.map((b) => [b.label, b.short] as const),
]);

function countFor(group: Exclude<FilterGroup, 'era'>, value: string): number {
  const fn =
    group === 'genre' ? canonicalGenres : group === 'theme' ? canonicalThemes : canonicalAwards;
  return books.filter((b) => fn(b).includes(value)).length;
}

/** Options (value + one-word label + count) for a facet group, present-only. */
export function facetOptions(group: 'genre' | 'theme' | 'award'): FacetOption[] {
  const values =
    group === 'genre' ? allGenres() : group === 'theme' ? allThemes() : allAwards();
  return values.map((value) => ({
    value,
    short: SHORT_BY_VALUE.get(value) ?? value,
    count: countFor(group, value),
  }));
}

/**
 * Filter by the active pills. Within a group the match is OR; across groups it is
 * AND. Genre/theme/award are matched against the book's canonical buckets.
 */
export function filterBooks<T extends BookCardData = Book>(
  active: ActiveFilters,
  source: T[] = books as unknown as T[],
): T[] {
  return source.filter((book) => {
    const genres = canonicalGenres(book);
    const themes = canonicalThemes(book);
    const awards = canonicalAwards(book);
    const genreOk = active.genre.length === 0 || active.genre.some((g) => genres.includes(g));
    const themeOk = active.theme.length === 0 || active.theme.some((t) => themes.includes(t));
    const eraOk = active.era.length === 0 || active.era.includes(book.era);
    const awardOk = active.award.length === 0 || active.award.some((a) => awards.includes(a));
    return genreOk && themeOk && eraOk && awardOk;
  });
}

export function countActive(active: ActiveFilters): number {
  return active.genre.length + active.theme.length + active.era.length + active.award.length;
}
