import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SIGHTSEEING } from "@/lib/tours";
import { faqJsonLd, type FAQItem } from "@/components/site/FAQ";
import { SITE_URL, breadcrumbJsonLd, touristTripJsonLd, type Crumb } from "@/lib/seo";

const hero = SIGHTSEEING[0].image;
const PAGE_URL = SITE_URL + "/sightseeing";
const TITLE = "Jaisalmer Sightseeing Tour | Fort, Havelis & Dunes";
const DESC =
  "Book Jaisalmer sightseeing tours: Golden Fort, Patwon ki Haveli, Gadisar Lake, Kuldhara, Bada Bagh and Desert National Park with local guides. Book now.";

const crumbs: Crumb[] = [
  { name: "Home", path: "/" },
  { name: "Jaisalmer Sightseeing", path: "/sightseeing" },
];

const faqs: FAQItem[] = [
  {
    q: "What is the historical background of Jaisalmer?",
    a: "Rising from the heart of the Thar Desert, Jaisalmer is a city with stories etched into every sandstone wall. It was established in the 12th century by Rawal Jaisal, a Rajput king with an eye for scenic real estate, and quickly became a vital outpost on the ancient caravan trade routes. Nicknamed the Golden City for its honey-hued architecture, Jaisalmer's legacy is woven from centuries of merchant wealth, grand forts and a living tapestry of Rajasthani culture. Beyond the ramparts you'll find elaborately carved havelis, serene Jain temples and rolling sand dunes — each one a chapter in Jaisalmer's ongoing tale as a desert jewel.",
  },
  {
    q: "Why is Kuldhara Village considered haunted or mysterious?",
    a: "Kuldhara is a scattering of ancient stone homes and winding lanes, left eerily frozen in time after its sudden abandonment. Legends say the residents — once wealthy Paliwal Brahmins — vanished overnight, leaving behind their homes and even their temple to escape a powerful ruler's demands. Today the silence is remarkable: no one lives here, yet stories echo across the empty courtyards. Local tales hint at ghostly sightings and a mysterious energy over the site, though nothing has ever been proven. It's the hush of history and the unanswered questions that make Kuldhara feel otherworldly.",
  },
  {
    q: "What is included in a Jaisalmer heritage walk, and which sites are covered?",
    a: "The heritage walk starts with a stroll around Gadi Sagar Lake, then heads into the winding lanes of the walled city with a local guide who knows the shortcuts, hidden corners and best snack stops. You'll visit temples and step-wells, pause at quiet chowks, explore ornate merchant havelis with their golden sandstone carvings, and finish at the Jaisalmer War Museum on the city's edge, where the outdoor exhibits include a real fighter aircraft. Choose a morning or afternoon departure; a comfortable car and driver cover the longer distances.",
  },
  {
    q: "What are the recommended timings, entry fees and durations for major Jaisalmer attractions?",
    a: "Jaisalmer Fort: 9:00 am – 5:00 pm daily, around ₹250 for foreign nationals plus camera fees, allow 2–2.5 hours. Patwon ki Haveli: 9:00 am – 5:00 pm, around ₹100 for foreign nationals, allow 1 hour. Gadisar Lake: 9:30 am – 5:30 pm, ₹50 for foreigners and ₹10 for Indian nationals. Kuldhara: 9:00 am – 5:00 pm, ₹50–100 for foreigners and ₹10 for Indians. Longewala: 8:00 am – 5:30 pm, ₹10–50 per guest plus vehicle entry, allow 2–3 hours. Tanot Mata Temple: 10:00 am – 5:00 pm. The Jaisalmer War Museum is open seven days a week and its light and sound show runs 6:30–7:30 pm.",
  },
  {
    q: "What are the main features and historical significance of the cenotaphs at Bada Bagh?",
    a: "Just 6 km north of Jaisalmer on the Ramgarh–Tanot road, Bada Bagh sits on a hillock overlooking what were once lush mango groves. This 16th-century garden complex, commissioned by Maharaja Maharawal Jai Singh, features the golden cenotaphs known as Rajao Ki Chatariya, built by Jaisalmer's royals from the 18th to the early 20th century. The site served both spiritual and practical needs — stepwells here once supplied water to local villagers. Sweeping desert views and slowly turning wind turbines make it a favourite for sunset photography.",
  },
  {
    q: "What is unique about the architecture and history of Jaisalmer's havelis?",
    a: "Each haveli was designed around airy courtyards that once hosted bustling merchant families. Inside Patwon ki Haveli you'll find the Hall of Havelis, a superb display of traditional stonework and jali screens, along with antique and royal collections that speak to the opulence of Jaisalmer's trading past. The intricate facades and lavish interiors borrow from royal palace design, making Patwon ki Haveli and its neighbours — including Nathmal Ji Ki Haveli — essential stops for anyone curious about the golden era of the desert city.",
  },
  {
    q: "Which rare and notable bird species can be seen at Desert National Park?",
    a: "Desert National Park is one of the last refuges of the critically endangered Great Indian Bustard. You can also spot a wide range of raptors — short-toed, tawny and spotted eagles, harriers, buzzards, vultures, laggar falcons and kestrels — soaring over the open scrub, plus migratory species in winter. Alongside the birds, the park is home to chinkara, desert fox and desert cat across 3,000 sq km of dunes, rocky outcrops, salt lakes and fossil beds.",
  },
  {
    q: "What exhibits and experiences are available at the Jaisalmer War Museum?",
    a: "The museum sits on the Jodhpur highway just outside Jaisalmer and showcases tanks, vintage army vehicles, war trophies and a Hunter aircraft from the 1971 Battle of Longewala. You can walk among murals, real armour and displays on Indian Army strategy and desert warfare, with a 106 mm anti-tank gun among the highlights. Indoor exhibits recount key moments from the Indo-Pak conflicts, there's a café and souvenir shop on site, and an evening light and sound show runs from 6:30 to 7:30 pm.",
  },
  {
    q: "What are the best markets and shopping experiences in Jaisalmer?",
    a: "Sadar Bazaar is best for hand-embroidered textiles and traditional Rajasthani jewelry. Bhatia Bazaar has camel-leather goods, brassware and vibrant bandhani fabrics. Pansari Bazaar, the oldest market, is the spot for antiques, miniature paintings, woven carpets and locally crafted puppets. Manak Chowk, right by the fort entrance, is packed with silver ornaments, mirror-work bags and handicrafts. Most markets are open daily from late morning until after sunset.",
  },
  {
    q: "What are the best ways to explore the desert and rural life around Jaisalmer?",
    a: "Pair the Kuldhara half-day tour with a camel ride or a leisurely desert walk through the surrounding villages. You'll see herders passing by, rural crafts still practised the old way, and traditions that carry on well beyond the city limits — you can even try your hand at tying a Rajasthani turban. Staying overnight at a desert camp is the best way to feel the rhythm of the Thar, with folk music, a bonfire and a sky full of stars.",
  },
];

export const Route = createFileRoute("/sightseeing")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: PAGE_URL },
      { property: "og:type", content: "website" },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          touristTripJsonLd({
            name: "Jaisalmer Sightseeing Tour",
            description: DESC,
            url: PAGE_URL,
            image: hero,
            price: "700",
            itinerary: SIGHTSEEING.map((t) => ({ name: t.title, description: t.paragraphs[0] })),
          }),
        ),
      },
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd(faqs)) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbJsonLd(crumbs)) },
    ],
  }),
  component: () => (
    <ServicePage
      hero={hero}
      kicker="Ten ways to meet the Thar"
      title="Jaisalmer Sightseeing Tour: Fort, Havelis & Desert"
      subtitle="Forts, havelis, lakes and the desert border — with local guides who actually know these places."
      intro="Every tour below can be booked on its own or combined into a half-day or full-day itinerary. Pickup and drop from your hotel is always included."
      tours={SIGHTSEEING}
      crumbs={crumbs}
      faqs={faqs}
      why={[
        { t: "Local guides, not scripts", d: "Our guides grew up in these lanes. They know which haveli courtyard catches the best morning light and which chai stall to stop at on the way." },
        { t: "Everything in one day", d: "Fort, havelis, Gadisar Lake, Kuldhara and Bada Bagh can be combined into a comfortable full-day loop with an air-conditioned car." },
        { t: "Honest, upfront pricing", d: "Tour prices are per vehicle or per person as listed; monument entry fees and camera charges are payable at each site." },
        { t: "Flexible timings", d: "Sunrise starts, sunset finishes, or a slow midday pace with long lunch breaks — we build the day around you." },
      ]}
      related={[
        { label: "Camel Safari", blurb: "Ride into the Khuri and Sam dunes at sunrise or sunset.", to: "/camel-safari" },
        { label: "Desert Camp", blurb: "Luxury and Swiss tents with folk music, bonfire and dinner.", to: "/desert-camp" },
        { label: "Tour Packages", blurb: "Multi-day Jaisalmer itineraries with stays and transfers.", to: "/tour-packages" },
        { label: "Shopping Guide", blurb: "Where to buy textiles, silver and handicrafts in Jaisalmer.", to: "/blog/jaisalmer-shopping-guide" },
        { label: "Lodurva Excursion Guide", blurb: "The Jain temples and ruins of the old Bhati capital.", to: "/blog/lodurva-excursion-guide" },
        { label: "Jaisalmer War Museum", blurb: "Longewala history, tanks and the audio-visual gallery.", to: "/blog/jaisalmer-war-museum" },
        { label: "Local Food Guide", blurb: "What to eat in Jaisalmer and where the locals go.", to: "/blog/jaisalmer-local-food-guide" },
      ]}
      extra={
        <section className="max-w-3xl mx-auto px-6 py-12 prose-jh">
          <h2 className="font-display text-3xl font-bold text-[var(--maroon)]">A short history of Jaisalmer</h2>
          <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
            Rising from the heart of the Thar Desert, Jaisalmer is a city with stories etched into every sandstone wall.
            Established in the 12th century by Rawal Jaisal, a Rajput king with an eye for scenic real estate, it quickly
            became a vital outpost along the ancient caravan trade routes running between India and Central Asia.
          </p>
          <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
            Nicknamed the “Golden City” for its honey-hued architecture, Jaisalmer's legacy is woven from centuries of
            merchant wealth, grand forts and a living tapestry of Rajasthani culture. Beyond the ramparts you'll find a
            landscape dotted with elaborately carved havelis, serene Jain temples and rolling sand dunes — each one a
            chapter in Jaisalmer's ongoing tale as a desert jewel.
          </p>
          <h2 className="font-display text-3xl font-bold text-[var(--maroon)] mt-10">Want something extra?</h2>
          <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
            Craving the full desert experience? Ask about our camel safaris out to the Khuri dunes — ride into the sunset,
            try a desert walking safari, and experience rural life by staying at a traditional desert camp. Discover the
            secrets of turban tying, the rhythms of local folk music, and the warmth of village hospitality that defines
            the Thar.
          </p>
        </section>
      }
    />
  ),
});
