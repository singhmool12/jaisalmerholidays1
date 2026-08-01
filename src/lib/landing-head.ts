import { LANDING_PAGES } from "@/lib/landing-pages";
import { faqJsonLd } from "@/components/site/FAQ";
import { SITE_URL, breadcrumbJsonLd, touristTripJsonLd } from "@/lib/seo";

export function landingHead(slug: keyof typeof LANDING_PAGES) {
  const c = LANDING_PAGES[slug];
  const url = `${SITE_URL}/${c.slug}`;
  return {
    meta: [
      { title: c.metaTitle },
      { name: "description", content: c.metaDescription },
      { property: "og:title", content: c.metaTitle },
      { property: "og:description", content: c.metaDescription },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { property: "og:image", content: c.hero },
      { name: "twitter:image", content: c.hero },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          touristTripJsonLd({
            name: c.h1,
            description: c.metaDescription,
            url,
            image: c.hero,
            price: c.tripPrice,
            itinerary: c.itinerary.map((d) => ({ name: d.d, description: d.t })),
          }),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(c.faqs)) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd(c.crumbs)) },
    ],
  };
}
