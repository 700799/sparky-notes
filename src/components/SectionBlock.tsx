import type { GuideSection } from '@/data/books';

/** Renders a titled guide section, splitting `body` into paragraphs on blank lines. */
export default function SectionBlock({ section }: { section: GuideSection }) {
  const paragraphs = section.body.split('\n\n');
  return (
    <div className="border-l-2 border-spark/40 pl-5">
      <h3 className="font-serif text-xl font-bold text-ink">{section.heading}</h3>
      <div className="prose-guide mt-2">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  );
}
