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
}
