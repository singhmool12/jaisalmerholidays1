import { createFileRoute, Link } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { FAQ, faqJsonLd, type FAQItem } from "@/components/site/FAQ";
import { CAMEL_TOURS } from "@/lib/tours";

const hero = CAMEL_TOURS[3].image;
const SITE_URL = "https://www.jaisalmerholidays.com";
const PAGE_URL = SITE_URL + "/camel-safari";

const FAQS: FAQItem[] = [
  {
    q: "What is the best time to visit Jaisalmer for a desert safari?",
    a: "October to March is the best window — cool days, cold clear nights and comfortable camel rides. September and April are still good; May–August is very hot in the Thar Desert, so we run early-morning and late-evening safaris only.",
  },
  {
    q: "How long does a camel safari last?",
    a: "It depends on the package. A half-day sunrise or sunset ride is 1.5–2 hours on camelback. Overnight safaris include an evening ride, dinner, night in the dunes and a sunrise ride the next morning. Multi-day expeditions run 2–8 days across the Thar.",
  },
  {
    q: "Is a camel safari safe for kids and elderly travellers?",
    a: "Yes. Our camels are well-trained and every rider is walked by an experienced local handler. For young children and older guests we recommend the half-day ride or our cultural-program safari with a shorter time on camelback and jeep support throughout.",
  },
  {
    q: "What is included in an overnight desert camp package?",
    a: "Hotel pickup and drop in Jaisalmer, camel ride to the camp, welcome tea, folk music around a bonfire, a multi-course Rajasthani dinner, bedding under the stars or in a tent, sunrise breakfast and the return transfer.",
  },
  {
    q: "Do I need to book my Jaisalmer safari in advance?",
    a: "In peak season (October–February) we recommend booking at least 3–5 days ahead. In shoulder months you can often book same-day on WhatsApp. Book now to lock in your preferred dates and dune route.",
  },
  {
    q: "Which sand dunes are better — Sam or Khuri?",
    a: "Sam Sand Dunes are larger, livelier and closer to the tourist strip. Khuri Dunes are quieter, greener and better for authentic village stays. Our non-touristic routes go beyond both, into dunes you'll rarely share with another group.",
  },
  {
    q: "What should I pack and wear for a desert safari?",
    a: "Loose cotton clothes for the day, a light jacket and warm layers for the night (deserts are cold after sunset in winter), closed shoes, sunglasses, sunscreen, a scarf/hat and a refillable water bottle. Bring a power bank for photography.",
  },
  {
    q: "Are meals and cultural shows included?",
    a: "Yes — all listed meals are cooked fresh in the desert and cultural safaris include live Rajasthani folk music and dance. Vegetarian, Jain and non-veg options are available if you tell us in advance.",
  },
];

const TRIP_JSONLD = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Camel Safari in Jaisalmer",
  description:
    "Half-day, overnight and multi-day camel safaris in the Thar Desert with local guides, non-touristic dune routes, meals and cultural evenings.",
  touristType: ["Adventure", "Family", "Couples", "Photographers"],
  url: PAGE_URL,
  image: hero,
  provider: {
    "@type": "TravelAgency",
    name: "Jaisalmerholidays",
    url: SITE_URL,
    telephone: "+91 70145 78096",
  },
  offers: {
    "@type": "Offer",
    priceCurrency: "INR",
    price: "2150",
    availability: "https://schema.org/InStock",
    url: PAGE_URL,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: 4.9,
    reviewCount: 412,
    bestRating: 5,
    worstRating: 1,
  },
};

export const Route = createFileRoute("/camel-safari")({
  head: () => ({
    meta: [
      { title: "Camel Safari Jaisalmer | Book Sam Sand Dunes Ride" },
      {
        name: "description",
        content:
          "Experience the best camel safari in Jaisalmer at Sam Sand Dunes. Sunset rides, overnight desert camping, and guided tours with Jaisalmer Holidays.",
      },
      { property: "og:title", content: "Camel Safari Jaisalmer | Book Sam Sand Dunes Ride" },
      {
        property: "og:description",
        content:
          "Experience the best camel safari in Jaisalmer at Sam Sand Dunes. Sunset rides, overnight desert camping, and guided tours with Jaisalmer Holidays.",
      },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "article" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(TRIP_JSONLD) },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(FAQS)) },
    ],
  }),
  component: CamelSafariPage,
});

function CamelSafariPage() {
  return (
    <>
      <ServicePage
        hero={hero}
        kicker="Since 2010"
        title="Camel Safari in Jaisalmer: Sam Sand Dunes Experience"
        subtitle="Non-touristic tracks, real desert, and a night sky you won't forget."
        intro="A camel safari in Jaisalmer is the single best way to feel the Thar Desert — the slow sway of the camel, warm sand crunching underfoot, chai brewed over an open fire, and a sunrise that turns the dunes gold. We ride away from the crowded Sam Sand Dunes strip into quieter belts near Khuri and beyond, sleep on cotton bedding under the open sky, and share a proper Rajasthani dinner cooked in the sand. Whether you want a two-hour sunrise ride, an overnight in the dunes with folk music, or an eight-day expedition, every safari is led by a local guide who was born in these villages and knows the desert like their own backyard."
        tours={CAMEL_TOURS}
      />

      {/* Why choose us */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <p className="text-[var(--terracotta)] uppercase tracking-widest text-xs font-semibold">Why choose us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--maroon)] mt-2">
            Local guides, real desert, fair pricing
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { t: "Off-the-beaten-track routes", d: "We skip the crowded Sam viewpoint and ride into quieter dunes near Khuri, Kanoi and beyond." },
            { t: "Born-and-raised local guides", d: "Every safari is led by a guide from the surrounding villages — not a hired outsider." },
            { t: "Family-friendly options", d: "Shorter rides, jeep support and cultural-program safaris for kids and older travellers." },
            { t: "Authentic Rajasthani food", d: "Dal, sabzi, gatte, roti and rice cooked fresh in the desert over an open fire." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl p-5 bg-white border border-[var(--border)] shadow-sm">
              <h3 className="font-display text-lg font-semibold text-[var(--maroon)]">{f.t}</h3>
              <p className="mt-2 text-sm text-[var(--muted-foreground)] leading-relaxed">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related pages — contextual internal links */}
      <section className="max-w-5xl mx-auto px-6 pb-4">
        <div className="rounded-2xl bg-[var(--sand)]/50 border border-[var(--border)] p-6 text-[var(--ink)]">
          <p className="font-display text-lg font-semibold text-[var(--maroon)] mb-2">Plan the rest of your Jaisalmer trip</p>
          <p className="text-sm leading-relaxed text-[var(--muted-foreground)]">
            Pair your ride with a night in a <Link to="/desert-camp" className="text-[var(--terracotta)] font-semibold hover:underline">luxury desert camp in the Sam dunes</Link>,
            explore Jaisalmer Fort and Patwon ki Haveli on our <Link to="/sightseeing" className="text-[var(--terracotta)] font-semibold hover:underline">Jaisalmer sightseeing tour</Link>,
            or add some <Link to="/adventure" className="text-[var(--terracotta)] font-semibold hover:underline">dune bashing and quad-bike adventure</Link> the next day.
            Visiting Kuldhara or the Longewala border? See our <Link to="/taxi" className="text-[var(--terracotta)] font-semibold hover:underline">Jaisalmer taxi service</Link> for hassle-free transfers.
          </p>
        </div>
      </section>

      <FAQ items={FAQS} />
    </>
  );
}
