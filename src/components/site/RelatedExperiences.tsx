import { Link } from "@tanstack/react-router";

export type RelatedLink = { to: string; label: string; blurb: string };

export function RelatedExperiences({ links, title = "Related Experiences" }: { links: RelatedLink[]; title?: string }) {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12" aria-labelledby="related-heading">
      <h2 id="related-heading" className="font-display text-2xl md:text-3xl font-bold text-[var(--maroon)] mb-6">
        {title}
      </h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to as "/"}
            className="rounded-2xl bg-white border border-[var(--border)] shadow-sm p-5 hover:shadow-md transition block"
          >
            <p className="font-display text-lg font-semibold text-[var(--maroon)]">{l.label} →</p>
            <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{l.blurb}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
