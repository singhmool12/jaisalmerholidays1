import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero, CTABand, ContactSection } from "@/components/site/Sections";
import { BackButton } from "@/components/site/BackButton";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { TourBlock } from "@/components/site/TourBlock";
import { FAQ, type FAQItem } from "@/components/site/FAQ";
import { RelatedExperiences, type RelatedLink } from "@/components/site/RelatedExperiences";
import type { Crumb } from "@/lib/seo";
import type { Tour } from "@/lib/tours";
import type { ReactNode } from "react";

export function ServicePage({
  hero, kicker, title, subtitle, intro, tours, showBooking = true,
  crumbs, faqs, why, related, extra,
}: {
  hero: string; kicker: string; title: string; subtitle: string;
  intro: string; tours: Tour[]; showBooking?: boolean;
  crumbs?: Crumb[];
  faqs?: FAQItem[];
  why?: { t: string; d: string }[];
  related?: RelatedLink[];
  extra?: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--cream)] grain-bg" id="top">
      <Nav />
      <BackButton />
      <PageHero image={hero} kicker={kicker} title={title} subtitle={subtitle} />
      {crumbs && <Breadcrumbs items={crumbs} />}
      <div className="max-w-3xl mx-auto px-6 pt-10 text-center">
        <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed">{intro}</p>
      </div>
      <div className="divide-y divide-[var(--border)]/60">
        {tours.map((t, i) => <TourBlock key={t.title} tour={t} index={i} showBooking={showBooking} />)}
      </div>

      {why && why.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-12">
          <div className="text-center mb-8">
            <p className="text-[var(--terracotta)] uppercase tracking-widest text-xs font-semibold">Why choose us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--maroon)] mt-2">
              Local experts in Jaisalmer since 2010
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {why.map((f) => (
              <div key={f.t} className="rounded-2xl p-5 bg-white border border-[var(--border)] shadow-sm">
                <h3 className="font-display text-lg font-semibold text-[var(--maroon)]">{f.t}</h3>
                <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{f.d}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {extra}

      {faqs && faqs.length > 0 && <FAQ items={faqs} />}
      {related && related.length > 0 && <RelatedExperiences links={related} />}

      <CTABand />
      <ContactSection />
      <Footer />
    </div>
  );
}
