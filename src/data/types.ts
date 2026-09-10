// Core content model for Sparky Notes reading guides.
// Everything the site renders (cards, pills, guide pages, highlight posts) is
// derived from these typed objects, so adding a book = adding one `Book` entry.

/** A titled block of multi-paragraph prose. `body` paragraphs are split on "\n\n". */
export interface GuideSection {
  heading: string;
  body: string;
}

/** A standout quote and why it matters — feeds the "Key Quotes" section. */
export interface Quote {
  quote: string;
  speaker?: string;
  significance: string;
}

/** A bite-size takeaway rendered as a card-like post. */
export interface Highlight {
  title: string;
  detail: string;
}

/** A main character: who they are, what drives them, and how they change. */
export interface Character {
  name: string;
  role: string;
  motivation: string;
  arc: string;
}

/** An important symbol or recurring motif and what it represents. */
export interface Motif {
  name: string;
  meaning: string;
}

/** A study / discussion prompt or sample essay topic. */
export interface StudyQuestion {
  prompt: string;
  type: 'discussion' | 'essay';
}

/**
 * The expanded, in-depth guide. Optional so books can be upgraded to the rich
 * format progressively without breaking the build. When present, the guide page
 * renders the full 8-section layout.
 */
export interface BookDeepDive {
  /** Why the book is famous / culturally significant. Multi-paragraph. */
  whatMakesItFamous: string;
  /** Chapter/section-by-section plot with major events and turning points. */
  plotSummary: GuideSection[];
  /** Main characters, their motivations, and how they change. */
  characters: Character[];
  /** Big ideas the author explores, explained in depth. */
  themeAnalysis: GuideSection[];
  /** Important symbols and recurring motifs. */
  motifs: Motif[];
  /** Writing style, tone, setting, and literary devices. */
  style: GuideSection[];
  /** Discussion questions and sample essay topics. */
  studyQuestions: StudyQuestion[];
  /** Intriguing facts about the author and why they wrote it. Multi-paragraph. */
  aboutAuthor: string;
}

export interface Book {
  /** URL id, e.g. "1984". */
  slug: string;
  title: string;
  author: string;
  /** Year of first publication / first performance. */
  year: number;
  /** Coarse era bucket — drives an "Era" pill group. */
  era: string;
  /** Origin / cultural setting — e.g. "American", "British", "Nigerian". */
  region: string;
  /** Genre tags — drives the "Genre" pill group. */
  genres: string[];
  /** Thematic tags — drives the "Theme" pill group. */
  themes: string[];
  /** Accent color (hex) used for the card cover + guide header. */
  accent: string;
  /** Emoji used as a lightweight "cover" motif. */
  emoji: string;
  /** One-line teaser shown on the browse card. */
  hook: string;
  /** Thorough plot / overview. */
  summary: string;
  /** Deep literary-analysis sections (themes, symbolism, character, style…). */
  literaryAnalysis: GuideSection[];
  /** How the book connects to modern-day (2026) situations. */
  currentEvents: GuideSection[];
  /** Best / most famous quotes with significance. */
  quotes: Quote[];
  /** 3–4 takeaways feeding the highlight card grid. */
  highlights: Highlight[];
  /** Notable awards / honors, e.g. "Pulitzer Prize", "Booker Prize", "#1 NYT Bestseller". */
  awards?: string[];
  /** Expanded, in-depth guide (optional; rolled out progressively). */
  deepDive?: BookDeepDive;
}

/**
 * The lightweight subset of a Book needed to render a browse card and run the
 * client-side filters. The home page passes only this shape into the client
 * browse grid so the long guide prose (summary, analysis, deep dives) is never
 * serialized into the home page payload.
 */
/**
 * Lightweight, serializable facts about a book: enough to evaluate badge
 * progress without pulling any guide prose along. The server derives these and
 * passes them to client code, which must never import the full book data.
 */
export interface BookFacet {
  slug: string;
  genres: string[];
  era: string;
  hasAwards: boolean;
}

export type BookCardData = Pick<
  Book,
  | 'slug'
  | 'title'
  | 'author'
  | 'year'
  | 'era'
  | 'region'
  | 'genres'
  | 'themes'
  | 'accent'
  | 'emoji'
  | 'hook'
  | 'awards'
>;
