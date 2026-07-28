import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero, CTABand } from "@/components/site/Sections";
import { BackButton } from "@/components/site/BackButton";
import { HOME_HERO } from "@/lib/tours";

const SITE_URL = "https://www.jaisalmerholidays.com";
const PAGE_URL = SITE_URL + "/tour-packages";
const hero = HOME_HERO;

const PACKAGES = [
  {
    title: "2 Day Desert Escape",
    tagline: "Sunset dunes, folk music and a sunrise camel ride.",
    from: "starting from ₹ 4,500 / person",
    days: [
      { d: "Day 1", t: "Arrival, transfer to Sam Sand Dunes, sunset camel safari, folk music and Rajasthani dinner at a luxury desert camp." },
      { d: "Day 2", t: "Sunrise on the dunes, breakfast at camp, drop back to Jaisalmer." },
    ],
    links: [
      { to: "/desert-camp" as const, label: "Desert Camp" },
      { to: "/camel-safari" as const, label: "Camel Safari" },
    ],
  },
  {
    title: "3 Day Jaisalmer Explorer",
    tagline: "The city, its havelis, its fort — and one perfect night in the dunes.",
    from: "starting from ₹ 7,900 / person",
    days: [
      { d: "Day 1", t: "Jaisalmer sightseeing — Jaisalmer Fort, Patwon ki Haveli, Gadisar Lake. Overnight at our heritage hotel." },
      { d: "Day 2", t: "Kuldhara & Bada Bagh in the morning, transfer to Sam Sand Dunes, sunset camel safari and overnight at desert camp." },
      { d: "Day 3", t: "Sunrise, breakfast, return to Jaisalmer for departure." },
    ],
    links: [
      { to: "/sightseeing" as const, label: "Sightseeing" },
      { to: "/hotel" as const, label: "Heritage Hotel" },
      { to: "/desert-camp" as const, label: "Desert Camp" },
    ],
  },
  {
    title: "Romantic Getaway (3 Days)",
    tagline: "Built for couples and honeymooners.",
    from: "starting from ₹ 12,500 / couple",
    days: [
      { d: "Day 1", t: "Arrival, heritage hotel check-in, private Jaisalmer city walk at golden hour." },
      { d: "Day 2", t: "Transfer to Sam, private sunset camel ride, candlelight dinner on the dunes with folk music, stay in a luxury swiss tent." },
      { d: "Day 3", t: "Sunrise on the dunes, breakfast, return transfer to Jaisalmer." },
    ],
    links: [
      { to: "/exotic-tours" as const, label: "Private Experiences" },
      { to: "/desert-camp" as const, label: "Luxury Desert Camp" },
      { to: "/hotel" as const, label: "Heritage Hotel" },
    ],
  },
  {
    title: "5 Day Thar Immersion",
    tagline: "For travellers who want the full desert experience.",
    from: "starting from ₹ 18,900 / person",
    days: [
      { d: "Day 1", t: "Jaisalmer sightseeing — Fort, havelis and Gadisar Lake." },
      { d: "Day 2", t: "Kuldhara, Lodurva, Bada Bagh and a longer city tour." },
      { d: "Day 3", t: "Transfer to Sam Sand Dunes, sunset camel safari and cultural evening at a luxury desert camp." },
      { d: "Day 4", t: "Non-touristic multi-day safari further into the Thar — dunes almost no one visits." },
      { d: "Day 5", t: "Sunrise, breakfast, return to Jaisalmer for departure." },
    ],
    links: [
      { to: "/sightseeing" as const, label: "Sightseeing" },
      { to: "/camel-safari" as const, label: "Camel Safari" },
      { to: "/desert-camp" as const, label: "Desert Camp" },
      { to: "/adventure" as const, label: "Adventure Add-ons" },
    ],
  },
];

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Jaisalmer Tour Packages",
  itemListElement: PACKAGES.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "TouristTrip",
      name: p.title,
      description: p.tagline,
      provider: {
        "@type": "TravelAgency",
        name: "Jaisalmerholidays",
        url: SITE_URL,
        telephone: "+91 70145 78096",
      },
    },
  })),
};

export const Route = createFileRoute("/tour-packages")({
  head: () => ({
    meta: [
      { title: "Best Jaisalmer Tour Packages | Desert & City Tours" },
      { name: "description", content: "Explore affordable Jaisalmer tour packages including desert safari, sightseeing, camp stays, and camel rides. Customizable itineraries at the best prices." },
      { property: "og:title", content: "Best Jaisalmer Tour Packages | Desert & City Tours" },
      { property: "og:description", content: "Explore affordable Jaisalmer tour packages including desert safari, sightseeing, camp stays, and camel rides. Customizable itineraries at the best prices." },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(JSONLD) }],
  }),
  component: Page,
});

function Page() {
  return (
    <div className="min-h-screen bg-[var(--cream)] grain-bg" id="top">
      <Nav />
      <BackButton />
      <PageHero
        image={hero}
        kicker="Ready-made itineraries"
        title="Jaisalmer Tour Packages"
        subtitle="Sample itineraries you can book as-is or mix and match. Every package is fully customisable."
      />
      <section className="max-w-5xl mx-auto px-6 py-14">
        <p className="text-[var(--ink)] text-lg leading-relaxed max-w-3xl">
          Not sure how to piece your Jaisalmer trip together? Start with one of the packages below — each one combines
          services we already run: <Link to="/desert-camp" className="text-[var(--terracotta)] font-semibold hover:underline">desert camps</Link>,
          {" "}<Link to="/camel-safari" className="text-[var(--terracotta)] font-semibold hover:underline">camel safaris</Link>,
          {" "}<Link to="/sightseeing" className="text-[var(--terracotta)] font-semibold hover:underline">sightseeing tours</Link> and
          our <Link to="/hotel" className="text-[var(--terracotta)] font-semibold hover:underline">heritage hotel</Link>. We'll tailor dates, group size and inclusions to you.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {PACKAGES.map((p) => (
            <article
              key={p.title}
              className="rounded-3xl bg-white border border-[var(--border)] shadow-sm p-7 flex flex-col"
            >
              <h2 className="font-display text-2xl font-bold text-[var(--maroon)]">{p.title}</h2>
              <p className="text-[var(--muted-foreground)] mt-2">{p.tagline}</p>
              <p className="text-[var(--terracotta)] font-semibold text-sm mt-2">{p.from}</p>

              <ul className="mt-5 space-y-3">
                {p.days.map((d) => (
                  <li key={d.d} className="text-sm text-[var(--ink)] leading-relaxed">
                    <span className="font-semibold text-[var(--maroon)]">{d.d}:</span> {d.t}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {p.links.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="text-xs font-semibold text-[var(--maroon)] border border-[var(--border)] rounded-full px-3 py-1 hover:bg-[var(--maroon)] hover:text-[var(--cream)] transition"
                  >
                    {l.label} →
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-[var(--muted-foreground)]">
          Prices are indicative and vary by season, group size and inclusions. <Link to="/contact" className="text-[var(--terracotta)] font-semibold hover:underline">Message us</Link> with your dates and preferences and we'll come back with a tailored quote.
        </p>
      </section>
      <CTABand />
      <Footer />
    </div>
  );
}
