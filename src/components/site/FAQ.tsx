import { useState } from "react";
import { ChevronDown } from "lucide-react";

export type FAQItem = { q: string; a: string };

export function FAQ({ items, title = "Frequently Asked Questions" }: { items: FAQItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="max-w-3xl mx-auto px-6 py-16" aria-labelledby="faq-heading">
      <div className="text-center mb-10">
        <p className="text-[var(--terracotta)] uppercase tracking-widest text-xs font-semibold">Good to know</p>
        <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-bold text-[var(--maroon)] mt-2">
          {title}
        </h2>
      </div>
      <div className="space-y-3">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={i} className="rounded-2xl bg-white border border-[var(--border)] shadow-sm overflow-hidden">
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between text-left gap-4 px-5 md:px-6 py-4 md:py-5"
              >
                <h3 className="font-display text-base md:text-lg font-semibold text-[var(--maroon)]">
                  {item.q}
                </h3>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-[var(--terracotta)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <div className="px-5 md:px-6 pb-5 text-[var(--muted-foreground)] leading-relaxed text-sm md:text-base">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function faqJsonLd(items: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}
