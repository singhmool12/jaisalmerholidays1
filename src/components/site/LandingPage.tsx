import { MessageCircle, Phone } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero, CTABand, ContactSection } from "@/components/site/Sections";
import { BackButton } from "@/components/site/BackButton";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { FAQ, type FAQItem } from "@/components/site/FAQ";
import { RelatedExperiences, type RelatedLink } from "@/components/site/RelatedExperiences";
import { telLink, waLink } from "@/lib/brand";
import type { Crumb } from "@/lib/seo";

export type LandingContent = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  kicker: string;
  subtitle: string;
  hero: string;
  crumbs: Crumb[];
  intro: string[];
  why: { t: string; d: string }[];
  itineraryTitle: string;
  itinerary: { d: string; t: string }[];
  included: string[];
  notIncluded?: string[];
  pricingTitle: string;
  pricing: { plan: string; duration: string; price: string; note: string }[];
  gallery: { src: string; alt: string }[];
  faqs: FAQItem[];
  related: RelatedLink[];
  waMessage: string;
  tripPrice: string;
};

export function LandingPage({ c }: { c: LandingContent }) {
  return (
    <div className="min-h-screen bg-[var(--cream)] grain-bg" id="top">
      <Nav />
      <BackButton />
      <PageHero image={c.hero} kicker={c.kicker} title={c.h1} subtitle={c.subtitle} />
      <Breadcrumbs items={c.crumbs} />

      <section className="max-w-4xl mx-auto px-6 pt-10 space-y-5">
        {c.intro.map((p, i) => (
          <p key={i} className="text-base md:text-lg text-[var(--ink)] leading-relaxed">{p}</p>
        ))}
        <div className="flex flex-wrap gap-3 pt-2">
          <a href={waLink(c.waMessage)} target="_blank" rel="noreferrer" className="btn-primary btn-primary-hover">
            <MessageCircle size={16} /> Get a quote on WhatsApp
          </a>
          <a href={telLink} className="btn-outline hover:bg-[var(--maroon)] hover:text-[var(--cream)]">
            <Phone size={16} /> Call Now
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--maroon)] mb-6">
          Why choose Jaisalmer Holidays
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {c.why.map((f) => (
            <div key={f.t} className="rounded-2xl p-5 bg-white border border-[var(--border)] shadow-sm">
              <h3 className="font-display text-lg font-semibold text-[var(--maroon)]">{f.t}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--maroon)] mb-6">{c.itineraryTitle}</h2>
        <ol className="space-y-4">
          {c.itinerary.map((d) => (
            <li key={d.d} className="rounded-2xl bg-white border border-[var(--border)] shadow-sm p-5">
              <p className="font-semibold text-[var(--maroon)] font-display">{d.d}</p>
              <p className="mt-1.5 text-sm md:text-base text-[var(--muted-foreground)] leading-relaxed">{d.t}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--maroon)] mb-4">What's included</h2>
          <ul className="space-y-2.5">
            {c.included.map((x) => (
              <li key={x} className="flex gap-3 text-[var(--muted-foreground)] leading-relaxed">
                <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
        {c.notIncluded && (
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--maroon)] mb-4">Not included</h2>
            <ul className="space-y-2.5">
              {c.notIncluded.map((x) => (
                <li key={x} className="flex gap-3 text-[var(--muted-foreground)] leading-relaxed">
                  <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--terracotta)]" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-8">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-[var(--maroon)] mb-6">{c.pricingTitle}</h2>
        <div className="overflow-x-auto rounded-2xl border border-[var(--border)] bg-white shadow-sm">
          <table className="w-full text-left text-sm min-w-[520px]">
            <thead className="bg-[var(--sand)]/60 text-[var(--maroon)]">
              <tr>
                <th scope="col" className="px-4 py-3 font-semibold">Package</th>
                <th scope="col" className="px-4 py-3 font-semibold">Duration</th>
                <th scope="col" className="px-4 py-3 font-semibold">Price</th>
                <th scope="col" className="px-4 py-3 font-semibold">Good for</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]/70">
              {c.pricing.map((r) => (
                <tr key={r.plan}>
                  <td className="px-4 py-3 font-semibold text-[var(--maroon)]">{r.plan}</td>
                  <td className="px-4 py-3 text-[var(--muted-foreground)]">{r.duration}</td>
                  <td className="px-4 py-3 text-[var(--terracotta)] font-semibold whitespace-nowrap">{r.price}</td>
                  <td className="px-4 py-3 text-[var(--muted-foreground)]">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-[var(--muted-foreground)]">
          Prices are indicative per person and vary with season, group size, hotel category and vehicle type.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-8 grid sm:grid-cols-3 gap-4">
        {c.gallery.map((g) => (
          <img
            key={g.src + g.alt}
            src={g.src}
            alt={g.alt}
            loading="lazy"
            width={1200}
            height={900}
            className="w-full h-56 object-cover rounded-2xl shadow-sm"
          />
        ))}
      </section>

      <FAQ items={c.faqs} />
      <RelatedExperiences links={c.related} />
      <CTABand />
      <ContactSection />
      <Footer />
    </div>
  );
}
