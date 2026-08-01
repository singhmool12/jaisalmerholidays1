import type { LandingContent } from "@/components/site/LandingPage";

const A = (id: string, name: string) => `https://jaisalmerholidays.lovable.app/__l5e/assets-v1/${id}/${name}`;

const IMG = {
  homeHero: A("72997d79-fb8f-4c0a-9106-616c67494be1", "home-hero.jpg"),
  sunrise: A("da5638c2-2390-4f35-9cee-197f6d4fd690", "sunrise-safari.webp"),
  luxuryCamp: A("5e5d8f72-00eb-4c70-918b-648255db750f", "luxury-camp-v2.avif"),
  deluxeSwiss: A("a9737693-e198-4c3c-ba6f-7b5b92487c01", "deluxe-swiss-v2.jpg"),
  standardCamp: A("1432e775-febc-455f-aa3a-25a33b504361", "standard-camp.jpg"),
  fort: A("d1bf2cab-c692-4c1b-9504-76c46d2707d8", "fort.jpg"),
  patwon: A("418dea09-f70a-4f88-beb2-7be2cef4d970", "patwon.jpg"),
  gadisar: A("ef9ef3d5-8c59-47aa-9410-24125376c61d", "gadisar.jpg"),
  kuldhara: A("971ad07e-a1c5-459f-a63d-f3203701e1ef", "kuldhara.webp"),
  badabagh: A("207bc4f3-848d-4662-8c30-e6d978ccc6e6", "badabagh.jpg"),
  cultural: A("519fc2cb-5880-44d0-b18e-47b01872af7f", "cultural.jpg"),
  oneDay: A("fe5cc5fe-2029-4a79-b278-db4d22745392", "one-day.jpg"),
  camping: A("470574f0-0a8b-40a3-8a72-401e6d46d29e", "camping.jpg"),
  dune4x4: A("d0890eca-4e6e-4fb5-8e25-d3e8090b807a", "dune-4x4-v2.jpg"),
  sedan: A("c5747f02-abb4-40fd-9ab1-802975f410f0", "sedan.avif"),
  tempo: A("82bc256f-32bf-4a59-8eb2-31bde14bec24", "tempo.avif"),
  suv: A("8871026f-5866-4577-a0b9-9e30d0f7121f", "suv.avif"),
  longewala: A("d50130cf-bcce-4e60-974d-cdadaa8ad944", "longewala.jpg"),
  royalCandle: A("eb8335c5-db22-4e1d-a339-c35a4f984910", "royal-candle.jpg"),
};

const HOME_CRUMB = { name: "Home", path: "/" };
const PKG_CRUMB = { name: "Tour Packages", path: "/tour-packages" };

const COMMON_WHY = [
  { t: "Local operators since 2010", d: "We are based in Jaisalmer, not a reseller. Our own camels, jeeps, camps and drivers mean fewer middlemen and honest prices." },
  { t: "Fully customisable itineraries", d: "Change hotels, add a night in the dunes, skip a monument, shift dates — every package below is a starting point, not a fixed menu." },
  { t: "Best price guarantee", d: "Tell us a written quote from another operator for the same inclusions and we will match or better it." },
  { t: "One WhatsApp number, start to finish", d: "The same team plans your trip, meets you at the station and answers the phone at 11 pm if a plan changes." },
];

const COMMON_INCLUDED = [
  "Air-conditioned vehicle with an experienced local driver for all listed transfers and sightseeing",
  "Accommodation as per the selected category (heritage hotel in Jaisalmer city and/or Swiss tent at the desert camp)",
  "Daily breakfast, plus dinner on desert-camp nights",
  "Sunset camel safari on the dunes with a trained handler",
  "Evening Rajasthani folk music and dance programme at the camp with bonfire",
  "All applicable driver allowance, fuel, tolls, parking and state taxes",
  "24×7 on-ground support from our Jaisalmer office",
];

const COMMON_NOT_INCLUDED = [
  "Train or flight tickets to and from Jaisalmer (we are happy to help you book)",
  "Monument entry tickets, camera fees and guide charges at Jaisalmer Fort and the havelis",
  "Lunches, drinks and anything personal in nature",
  "Adventure add-ons such as quad biking, dune bashing or paramotoring",
];

export const LANDING_PAGES: Record<string, LandingContent> = {
  "family-tour-packages": {
    slug: "family-tour-packages",
    metaTitle: "Jaisalmer Family Packages | Kid-Friendly Desert Trips",
    metaDescription:
      "Book Jaisalmer family tour packages with kid-safe camel rides, comfortable desert camps and easy sightseeing. Custom itineraries from ₹6,900 per person.",
    h1: "Jaisalmer Family Tour Packages | Jaisalmer Holidays",
    kicker: "Made for families",
    subtitle: "Gentle camel rides, clean tents with attached bathrooms and a pace that works with kids and grandparents.",
    hero: IMG.cultural,
    crumbs: [HOME_CRUMB, PKG_CRUMB, { name: "Family Tour Packages", path: "/family-tour-packages" }],
    intro: [
      "A Jaisalmer family package should be about the moments everyone remembers — a child's first camel ride across warm sand, grandparents watching a folk dancer spin in the firelight, and the whole family lying back on a dune counting satellites. Our family tour packages are built around exactly that, with shorter driving legs, air-conditioned vehicles, tents with attached western bathrooms and enough flexibility to swap an afternoon of sightseeing for an afternoon by the pool.",
      "We have been running family trips in the Thar since 2010, and we know where the pressure points are. Small children get tired on long camel rides, so we keep them to 30–45 minutes with a jeep following behind. Older parents need shade and seating, so we plan Jaisalmer Fort and Patwon ki Haveli for the cooler morning hours. Teenagers want the fun stuff, so we add dune bashing or quad biking as a separate slot rather than dragging everyone along.",
      "Every family itinerary below can be shortened, extended or rebuilt entirely. Send us your dates, the ages in your group and your budget on WhatsApp and we will come back with a plan and a clear all-inclusive price — no hidden extras at the camp gate.",
    ],
    why: COMMON_WHY,
    itineraryTitle: "Suggested 3-night Jaisalmer family itinerary",
    itinerary: [
      { d: "Day 1 — Arrival and easy start", t: "Pickup from Jaisalmer railway station or airport, check in to a heritage hotel inside the walled city, rest, then an early-evening walk to Gadisar Lake for boating and sunset. Dinner at a rooftop restaurant with fort views." },
      { d: "Day 2 — Fort, havelis and Bada Bagh", t: "Morning guided tour of Jaisalmer Fort, Patwon ki Haveli, Nathmal ki Haveli and the Jain temples while it is cool. Afternoon break at the hotel. Late-afternoon drive to Bada Bagh cenotaphs and the windmill fields for golden-hour photographs." },
      { d: "Day 3 — Desert camp day", t: "Late checkout, drive to Sam Sand Dunes via Kuldhara ghost village. Check in to the camp, short kid-friendly camel ride at sunset, folk music and dance around the bonfire, Rajasthani dinner and a night in Swiss tents with attached bathrooms." },
      { d: "Day 4 — Sunrise and departure", t: "Sunrise on the dunes, breakfast at camp, optional jeep safari or quad ride for older kids, then transfer back to Jaisalmer for your train or flight." },
    ],
    included: COMMON_INCLUDED,
    notIncluded: COMMON_NOT_INCLUDED,
    pricingTitle: "Jaisalmer family package pricing",
    pricing: [
      { plan: "Family Short Break", duration: "2 days / 1 night", price: "from ₹6,900 / person", note: "Weekend trips, families with toddlers" },
      { plan: "Family Classic", duration: "3 days / 2 nights", price: "from ₹9,800 / person", note: "The most-booked family option" },
      { plan: "Family Comfort", duration: "4 days / 3 nights", price: "from ₹13,500 / person", note: "Heritage hotel + luxury desert camp" },
      { plan: "Family Grand Thar", duration: "5 days / 4 nights", price: "from ₹18,900 / person", note: "Adds Longewala, Tanot and Khuri dunes" },
    ],
    gallery: [
      { src: IMG.cultural, alt: "Rajasthani folk dancers performing for families at a Jaisalmer desert camp" },
      { src: IMG.deluxeSwiss, alt: "Deluxe Swiss tent with attached bathroom at a family desert camp near Jaisalmer" },
      { src: IMG.gadisar, alt: "Families boating at Gadisar Lake in Jaisalmer at sunset" },
    ],
    faqs: [
      { q: "Are camel safaris safe for young children?", a: "Yes. Children ride with a parent or with a handler walking alongside the camel at all times, and we keep family rides to 30–45 minutes on gentle dunes. For toddlers we recommend the jeep safari instead, which reaches the same sunset viewpoint." },
      { q: "Do the desert camps have attached bathrooms and hot water?", a: "Our deluxe and luxury Swiss tents have attached western bathrooms with 24-hour running water and hot water via geyser or bucket service. Standard camps share clean common washrooms — tell us which category you want when booking." },
      { q: "What is the best time to visit Jaisalmer with family?", a: "October to March. Days are 20–28°C and nights are cool, which suits children and older travellers. Avoid mid-May to early July when daytime temperatures cross 42°C." },
      { q: "How many days do we need for a Jaisalmer family trip?", a: "Three days and two nights covers the fort, the havelis, Kuldhara, Bada Bagh and one night at a desert camp comfortably. Four nights lets you add Khuri dunes, the war museum or Longewala without rushing." },
      { q: "Can you arrange child-friendly and Jain food at the camp?", a: "Yes. All meals are cooked fresh at the camp, and we can prepare mild, non-spicy dishes for children as well as pure vegetarian, Jain or no-onion-no-garlic food if you tell us at least a day in advance." },
      { q: "Is there an extra charge for children?", a: "Children under 5 usually stay free sharing a bed with parents. Ages 5–11 are charged roughly 60–70% of the adult rate with an extra mattress. We confirm exact child rates in your quote." },
    ],
    related: [
      { to: "/desert-camp", label: "Luxury Desert Camp", blurb: "Swiss tents with attached bathrooms at Sam Sand Dunes." },
      { to: "/camel-safari", label: "Camel Safari", blurb: "Short, handler-led sunset rides that work for all ages." },
      { to: "/sightseeing", label: "Jaisalmer Sightseeing", blurb: "Fort, havelis, Gadisar Lake and Bada Bagh with a guide." },
    ],
    waMessage: "Hi Jaisalmer Holidays! We'd like a family tour package for Jaisalmer. Please share options and pricing.",
    tripPrice: "6900",
  },

  "jaisalmer-package-from-delhi": {
    slug: "jaisalmer-package-from-delhi",
    metaTitle: "Jaisalmer Package From Delhi | Train, Flight & Tour",
    metaDescription:
      "Jaisalmer tour package from Delhi with train and flight options, desert camp stay, camel safari and sightseeing. Custom 3–5 day trips from ₹9,500 per person.",
    h1: "Jaisalmer Package From Delhi | Jaisalmer Holidays",
    kicker: "Delhi to the Thar",
    subtitle: "Overnight train or a 90-minute flight, then everything on the ground handled by our Jaisalmer team.",
    hero: IMG.homeHero,
    crumbs: [HOME_CRUMB, PKG_CRUMB, { name: "Package From Delhi", path: "/jaisalmer-package-from-delhi" }],
    intro: [
      "Delhi to Jaisalmer is one of the easiest desert getaways in India, and it is the route most of our guests take. The overnight train drops you into the Golden City at breakfast time, so you lose no holiday to travel; if you would rather fly, seasonal direct flights and a Jodhpur connection cut the journey to a few hours. Whichever way you arrive, our Jaisalmer package from Delhi picks up from there — station or airport transfer, hotel inside the fort area, sightseeing with a local guide, and a night on the dunes with folk music and a sunrise camel ride.",
      "The classic route is the 14659/14660 Delhi–Jaisalmer Express from Delhi (Old Delhi / Sarai Rohilla), roughly 17–18 hours, arriving in the morning. Many travellers instead take a fast train or flight to Jodhpur and drive the scenic 280 km to Jaisalmer in about five hours, stopping at Pokhran fort along the way. By road it is around 780 km via Bikaner, which is worth it only if you want a multi-city Rajasthan loop.",
      "We plan the whole ground portion around your arrival and departure times, so nothing is wasted. Send us your travel dates on WhatsApp and we will tell you which train has berths, whether flying makes sense that week, and exactly what your trip will cost, all in.",
    ],
    why: COMMON_WHY,
    itineraryTitle: "Suggested 3-night Delhi to Jaisalmer itinerary",
    itinerary: [
      { d: "Night 0 — Depart Delhi", t: "Board the overnight Delhi–Jaisalmer Express from Delhi Sarai Rohilla or Old Delhi, or fly to Jaisalmer / Jodhpur the next morning. We share live berth and fare guidance before you book." },
      { d: "Day 1 — Arrival and city", t: "Morning pickup from Jaisalmer railway station, check in and freshen up, then a guided tour of Jaisalmer Fort, Patwon ki Haveli and the Jain temples. Sunset and boating at Gadisar Lake." },
      { d: "Day 2 — Kuldhara and the dunes", t: "Drive out to Kuldhara ghost village and Bada Bagh cenotaphs, continue to Sam Sand Dunes, sunset camel safari, folk music and dinner, overnight in a Swiss tent at the desert camp." },
      { d: "Day 3 — Desert extras", t: "Sunrise on the dunes and breakfast, optional jeep dune bashing or a trip to Longewala and Tanot Mata temple, return to Jaisalmer for a heritage hotel night and rooftop dinner." },
      { d: "Day 4 — Return to Delhi", t: "Free morning for shopping in Sadar Bazaar or Gandhi Chowk, then transfer to the station or airport for your journey back to Delhi." },
    ],
    included: [...COMMON_INCLUDED, "Station or airport pickup and drop in Jaisalmer, timed to your train or flight"],
    notIncluded: COMMON_NOT_INCLUDED,
    pricingTitle: "Delhi to Jaisalmer package pricing",
    pricing: [
      { plan: "Weekend Desert Dash", duration: "2 nights on ground", price: "from ₹9,500 / person", note: "Friday train out, Sunday train back" },
      { plan: "Classic Delhi–Jaisalmer", duration: "3 nights on ground", price: "from ₹13,900 / person", note: "Fort, Kuldhara, dunes and camp" },
      { plan: "Delhi–Jaisalmer Deluxe", duration: "4 nights on ground", price: "from ₹19,500 / person", note: "Luxury camp, Longewala and Tanot" },
      { plan: "Delhi–Jodhpur–Jaisalmer", duration: "6 nights, two cities", price: "from ₹27,900 / person", note: "Blue City plus the Golden City" },
    ],
    gallery: [
      { src: IMG.fort, alt: "Jaisalmer Fort golden sandstone architecture seen from the city" },
      { src: IMG.camping, alt: "Desert camp tents lit at night on the dunes near Jaisalmer" },
      { src: IMG.sunrise, alt: "Sunrise camel safari on Sam Sand Dunes, Jaisalmer" },
    ],
    faqs: [
      { q: "How do I reach Jaisalmer from Delhi?", a: "The simplest option is the overnight Delhi–Jaisalmer Express (about 17–18 hours) arriving in the morning. You can also fly to Jaisalmer directly in the winter season, or fly to Jodhpur and drive 280 km (roughly 5 hours) with us." },
      { q: "How many days is enough for a Jaisalmer trip from Delhi?", a: "Three nights on the ground is ideal — one or two nights in the city and one night at a desert camp. With two nights you can still see the fort, Kuldhara and the dunes, but it will be a fast trip." },
      { q: "Is the overnight train comfortable?", a: "Yes. Book 3AC or 2AC for air-conditioned berths with bedding. Sleeper class is cheap but cold in winter nights in the desert stretch. We can advise which train has availability for your dates." },
      { q: "What does a Delhi to Jaisalmer package cost?", a: "Our ground packages start at around ₹9,500 per person for two nights and go up with hotel category, camp category and vehicle size. Train or flight tickets from Delhi are booked separately by you or with our help." },
      { q: "What is the best time to travel from Delhi to Jaisalmer?", a: "October to March. December and January nights on the dunes drop close to freezing, so pack warm layers; February and October are the most comfortable overall." },
      { q: "Do you pick up from Jaisalmer railway station?", a: "Yes, every package includes a station or airport pickup and drop timed to your actual train or flight, with our driver waiting on the platform side with a name board." },
    ],
    related: [
      { to: "/tour-packages", label: "All Tour Packages", blurb: "Compare our 2 to 5 day Jaisalmer itineraries." },
      { to: "/desert-camp", label: "Desert Camp Stay", blurb: "Swiss tents, bonfire and folk music at Sam." },
      { to: "/taxi", label: "Taxi & Transfers", blurb: "Station pickups and Jodhpur–Jaisalmer road transfers." },
    ],
    waMessage: "Hi Jaisalmer Holidays! I want a Jaisalmer package from Delhi. Please share itineraries and pricing.",
    tripPrice: "9500",
  },

  "jaisalmer-package-from-mumbai": {
    slug: "jaisalmer-package-from-mumbai",
    metaTitle: "Jaisalmer Package From Mumbai | Flight & Train Trips",
    metaDescription:
      "Jaisalmer tour package from Mumbai with flight and train routes, desert camp stay, camel safari and city sightseeing. 4–6 day trips from ₹12,900 per person.",
    h1: "Jaisalmer Package From Mumbai | Jaisalmer Holidays",
    kicker: "Mumbai to the Thar",
    subtitle: "Fly via Jodhpur or take the direct train — we take over the moment you land in Rajasthan.",
    hero: IMG.luxuryCamp,
    crumbs: [HOME_CRUMB, PKG_CRUMB, { name: "Package From Mumbai", path: "/jaisalmer-package-from-mumbai" }],
    intro: [
      "Mumbai to Jaisalmer takes a little planning, and that is exactly what this package is for. Most of our Mumbai guests fly to Jodhpur — about 1 hour 45 minutes from Mumbai — and drive the 280 km to Jaisalmer with our car, arriving in time for a fort sunset. In winter there are also seasonal direct flights to Jaisalmer airport. If you prefer rail, the 14707/14708 Ranakpur Express and the Bandra Terminus–Jaisalmer trains run the route in roughly 22–24 hours, which many families still choose for the comfort of a single boarding.",
      "Because the journey is longer than from Delhi, we design Mumbai itineraries with at least three nights on the ground so the travel time is worth it. That usually means two nights in Jaisalmer city — enough for Jaisalmer Fort, Patwon ki Haveli, Gadisar Lake and Bada Bagh — plus a night at a Sam Sand Dunes camp with a sunset camel safari, bonfire, folk music and sunrise on the dunes. Adding a Jodhpur night on the way in or out is popular and costs very little extra since you pass through anyway.",
      "Tell us your Mumbai departure dates and whether you would rather fly or take the train, and we will build the ground plan around it, including the Jodhpur airport transfer, hotels, camp and every sightseeing stop.",
    ],
    why: COMMON_WHY,
    itineraryTitle: "Suggested 4-night Mumbai to Jaisalmer itinerary",
    itinerary: [
      { d: "Day 1 — Fly Mumbai to Jodhpur, drive to Jaisalmer", t: "Morning flight to Jodhpur, our driver meets you at the airport, scenic 5-hour drive via Pokhran with a lunch stop. Evening check-in and a rooftop dinner with Jaisalmer Fort lit up in front of you." },
      { d: "Day 2 — Golden City sightseeing", t: "Guided morning tour of Jaisalmer Fort, Patwon ki Haveli, Nathmal ki Haveli, Salim Singh ki Haveli and the Jain temples. Afternoon rest, then Bada Bagh cenotaphs and Gadisar Lake at golden hour." },
      { d: "Day 3 — Kuldhara and the desert camp", t: "Drive to Kuldhara ghost village and Amar Sagar, continue to Sam Sand Dunes. Sunset camel safari, Rajasthani dinner, folk music and dance around the bonfire, overnight in a Swiss tent." },
      { d: "Day 4 — Border country", t: "Sunrise and breakfast at camp, full-day excursion to Tanot Mata temple, Longewala war memorial and the Thar border belt, returning to a Jaisalmer hotel for the night." },
      { d: "Day 5 — Return to Mumbai", t: "Morning shopping for Jaisalmer leather, mirror-work textiles and stone carving, then transfer to Jaisalmer airport or the drive back to Jodhpur for your flight home." },
    ],
    included: [...COMMON_INCLUDED, "Jodhpur airport or railway station pickup and drop if your package uses the Jodhpur route"],
    notIncluded: COMMON_NOT_INCLUDED,
    pricingTitle: "Mumbai to Jaisalmer package pricing",
    pricing: [
      { plan: "Short Desert Break", duration: "3 nights on ground", price: "from ₹12,900 / person", note: "Fly via Jodhpur, one camp night" },
      { plan: "Classic Mumbai–Jaisalmer", duration: "4 nights on ground", price: "from ₹17,500 / person", note: "City, dunes and border excursion" },
      { plan: "Jodhpur + Jaisalmer", duration: "5 nights, two cities", price: "from ₹23,900 / person", note: "Mehrangarh plus the Thar" },
      { plan: "Luxury Thar Escape", duration: "5 nights, premium", price: "from ₹32,500 / person", note: "Heritage suites and luxury camp" },
    ],
    gallery: [
      { src: IMG.luxuryCamp, alt: "Luxury desert camp with Swiss tents near Sam Sand Dunes, Jaisalmer" },
      { src: IMG.patwon, alt: "Carved sandstone facade of Patwon Ki Haveli in Jaisalmer" },
      { src: IMG.longewala, alt: "Longewala war memorial tank display near Jaisalmer" },
    ],
    faqs: [
      { q: "What is the fastest way to reach Jaisalmer from Mumbai?", a: "Fly Mumbai to Jodhpur (about 1 hour 45 minutes) and drive 280 km to Jaisalmer in roughly five hours with our car. In the winter season there are also seasonal direct flights into Jaisalmer airport." },
      { q: "Is there a direct train from Mumbai to Jaisalmer?", a: "Yes. Trains from Bandra Terminus run to Jaisalmer, and the Ranakpur Express connects via Jodhpur. Expect roughly 22–24 hours end to end, so book an AC class for comfort." },
      { q: "How many days should a Mumbai traveller plan?", a: "Plan four to six days including travel. Three nights on the ground is the practical minimum to justify the journey, and five nights lets you add Jodhpur or the Longewala–Tanot border circuit." },
      { q: "What does a Mumbai to Jaisalmer package cost?", a: "Ground packages start around ₹12,900 per person for three nights, including hotels, camp, transfers, sightseeing car and the camel safari. Flights or train fares from Mumbai are extra." },
      { q: "Can you arrange the Jodhpur airport pickup?", a: "Yes. Our driver waits at Jodhpur airport or railway station with a name board and drives you directly to Jaisalmer, with stops at Pokhran fort and a clean highway restaurant for lunch." },
      { q: "When should Mumbai travellers visit Jaisalmer?", a: "Between October and March. Mumbai winters are mild, so pack more warm clothing than you expect — desert nights in December and January can fall to 3–8°C." },
    ],
    related: [
      { to: "/tour-packages", label: "All Tour Packages", blurb: "Ready-made 2 to 5 day Jaisalmer itineraries." },
      { to: "/hotel", label: "Heritage Hotel", blurb: "Fort-view rooms and rooftop dining in the old city." },
      { to: "/exotic-tours", label: "Private Experiences", blurb: "Candlelight dinners, stargazing and photo tours." },
    ],
    waMessage: "Hi Jaisalmer Holidays! I want a Jaisalmer package from Mumbai. Please share itineraries and pricing.",
    tripPrice: "12900",
  },

  "jaisalmer-package-from-jaipur": {
    slug: "jaisalmer-package-from-jaipur",
    metaTitle: "Jaisalmer Package From Jaipur | Road & Train Tours",
    metaDescription:
      "Jaisalmer tour package from Jaipur by road or overnight train. Desert camp, camel safari and sightseeing included. 3–5 day trips from ₹8,900 per person.",
    h1: "Jaisalmer Package From Jaipur | Jaisalmer Holidays",
    kicker: "Pink City to Golden City",
    subtitle: "A 560 km desert highway or an overnight train — plus everything waiting for you at the other end.",
    hero: IMG.badabagh,
    crumbs: [HOME_CRUMB, PKG_CRUMB, { name: "Package From Jaipur", path: "/jaisalmer-package-from-jaipur" }],
    intro: [
      "Jaipur to Jaisalmer is the classic Rajasthan road trip: 560 km of highway that runs from the Aravallis into open desert, past Jodhpur or Bikaner depending on the route you pick. Driving it in one go takes about nine to ten hours on good roads, which is why most of our Jaipur guests either break the journey with a night in Jodhpur or Bikaner, or take the overnight Delhi–Jaisalmer Express which passes through Jaipur and reaches Jaisalmer by morning.",
      "Once you are here, the trip itself is simple and it is the part we handle end to end. A guided morning at Jaisalmer Fort, Patwon ki Haveli and the Jain temples; Gadisar Lake in the late light; Kuldhara ghost village and Bada Bagh on the way out to the dunes; a sunset camel safari; and a night at a Sam Sand Dunes camp with a bonfire, folk singers and a sunrise you will photograph badly and remember perfectly.",
      "Because Jaipur travellers are often mid-way through a larger Rajasthan circuit, we are happy to slot into an existing plan — pick you up from the train, cover three days in Jaisalmer, and drop you at Jodhpur or back on a train to Udaipur. Message us your route and we will fit the Jaisalmer leg around it.",
    ],
    why: COMMON_WHY,
    itineraryTitle: "Suggested 3-night Jaipur to Jaisalmer itinerary",
    itinerary: [
      { d: "Day 0 — Leave Jaipur", t: "Take the overnight train from Jaipur to Jaisalmer, or start a morning drive via Jodhpur (breaking the journey there) or via Bikaner if you want to add the Karni Mata temple and Junagarh Fort." },
      { d: "Day 1 — Arrive and explore the fort", t: "Morning arrival and hotel check-in, guided walk through the living Jaisalmer Fort, Patwon ki Haveli, Nathmal ki Haveli and the Jain temples, sunset at Gadisar Lake and a rooftop dinner." },
      { d: "Day 2 — Kuldhara, Bada Bagh and the dunes", t: "Morning at Kuldhara ghost village and the Bada Bagh cenotaphs, afternoon transfer to Sam Sand Dunes, sunset camel safari, folk music and dance, dinner and a night in a Swiss tent." },
      { d: "Day 3 — Sunrise and the border belt", t: "Sunrise on the dunes and breakfast, then either the Longewala–Tanot border excursion or an easy day back in Jaisalmer with shopping and the war museum." },
      { d: "Day 4 — Onward", t: "Transfer to Jaisalmer railway station or airport, or a road drop to Jodhpur if you are continuing your Rajasthan circuit." },
    ],
    included: [...COMMON_INCLUDED, "Optional one-way road transfer between Jaisalmer and Jodhpur or Bikaner on request"],
    notIncluded: COMMON_NOT_INCLUDED,
    pricingTitle: "Jaipur to Jaisalmer package pricing",
    pricing: [
      { plan: "Quick Desert Trip", duration: "2 nights on ground", price: "from ₹8,900 / person", note: "Overnight train both ways" },
      { plan: "Classic Jaipur–Jaisalmer", duration: "3 nights on ground", price: "from ₹12,500 / person", note: "City, Kuldhara and camp night" },
      { plan: "Jodhpur en route", duration: "4 nights, two cities", price: "from ₹18,900 / person", note: "Mehrangarh plus the dunes" },
      { plan: "Bikaner + Jaisalmer circuit", duration: "5 nights", price: "from ₹24,500 / person", note: "Junagarh Fort and the Thar" },
    ],
    gallery: [
      { src: IMG.badabagh, alt: "Bada Bagh cenotaphs at sunset near Jaisalmer" },
      { src: IMG.kuldhara, alt: "Ruined stone houses of Kuldhara ghost village near Jaisalmer" },
      { src: IMG.standardCamp, alt: "Desert camp tents on the sand at Sam Sand Dunes, Jaisalmer" },
    ],
    faqs: [
      { q: "How far is Jaisalmer from Jaipur?", a: "About 560 km by road, roughly 9–10 hours of driving via Jodhpur, or a similar distance via Bikaner. The overnight train covers it in about 11–12 hours while you sleep." },
      { q: "Should I drive or take the train from Jaipur?", a: "Take the overnight train if you want to save a day and arrive fresh. Drive if you plan to break the journey at Jodhpur or Bikaner, which turns the transfer into part of the holiday." },
      { q: "Can you pick us up in Jodhpur on the way?", a: "Yes. We regularly meet guests at Jodhpur airport or station and drive them to Jaisalmer, with a stop at Pokhran. It can be arranged one-way or both ways." },
      { q: "How many days do we need in Jaisalmer?", a: "Two nights covers the fort, havelis and one desert-camp night. Three nights lets you add Kuldhara, Bada Bagh and the Longewala–Tanot border circuit without rushing." },
      { q: "What does a Jaipur to Jaisalmer package cost?", a: "Ground packages start at about ₹8,900 per person for two nights including hotel, desert camp, sightseeing car, camel safari and transfers. Train fares or the Jaipur-side car are quoted separately." },
      { q: "Is the Jaipur–Jaisalmer highway safe at night?", a: "The highway is in good condition but we do not recommend arriving late at night on unfamiliar desert roads. Our drivers plan departures so you reach Jaisalmer before dark." },
    ],
    related: [
      { to: "/sightseeing", label: "Jaisalmer Sightseeing", blurb: "Fort, havelis, Kuldhara and Bada Bagh with a guide." },
      { to: "/camel-safari", label: "Camel Safari", blurb: "Sunset rides and overnight dune expeditions." },
      { to: "/taxi", label: "Taxi & Transfers", blurb: "Jodhpur, Bikaner and station road transfers." },
    ],
    waMessage: "Hi Jaisalmer Holidays! I want a Jaisalmer package from Jaipur. Please share itineraries and pricing.",
    tripPrice: "8900",
  },

  "jaisalmer-package-from-ahmedabad": {
    slug: "jaisalmer-package-from-ahmedabad",
    metaTitle: "Jaisalmer Package From Ahmedabad | Train & Road Tour",
    metaDescription:
      "Jaisalmer tour package from Ahmedabad with train, flight and road options. Desert camp, camel safari and sightseeing from ₹9,900 per person. Book on WhatsApp.",
    h1: "Jaisalmer Package From Ahmedabad | Jaisalmer Holidays",
    kicker: "Gujarat to the Thar",
    subtitle: "Direct overnight trains, an easy Jodhpur flight, or a scenic drive through Mount Abu.",
    hero: IMG.oneDay,
    crumbs: [HOME_CRUMB, PKG_CRUMB, { name: "Package From Ahmedabad", path: "/jaisalmer-package-from-ahmedabad" }],
    intro: [
      "Ahmedabad is one of the friendliest starting points for a Jaisalmer trip. Direct trains such as the Sabarmati–Jaisalmer route run overnight and put you in the Golden City by morning, which means a Friday-night departure can give you a full desert weekend. You can also fly Ahmedabad to Jodhpur in about an hour and drive 280 km to Jaisalmer with our car, or make a road trip of it — around 630 km via Mount Abu and Jodhpur, best split over two days.",
      "Our Ahmedabad packages are built for that arrival rhythm: station pickup, quick freshen-up at the hotel, then straight into Jaisalmer Fort and Patwon ki Haveli while the light is still soft. Day two takes you out past Kuldhara ghost village and Bada Bagh to Sam Sand Dunes for a sunset camel safari, Rajasthani thali dinner, folk music round the bonfire and a night in a Swiss tent under an enormous sky.",
      "Gujarati and Jain travellers make up a large share of our guests, so pure vegetarian, Jain and no-onion-no-garlic meals are standard for us, not a special request. Tell us your dates and food preferences on WhatsApp and we will send back a full itinerary with a fixed all-inclusive price.",
    ],
    why: COMMON_WHY,
    itineraryTitle: "Suggested 3-night Ahmedabad to Jaisalmer itinerary",
    itinerary: [
      { d: "Day 0 — Overnight train from Ahmedabad", t: "Board the direct overnight train from Ahmedabad or Sabarmati; alternatively fly to Jodhpur the next morning and drive across with our vehicle." },
      { d: "Day 1 — Arrival and Golden City tour", t: "Station pickup and hotel check-in, guided visit to Jaisalmer Fort, Patwon ki Haveli, Salim Singh ki Haveli and the Jain temples inside the fort, followed by sunset at Gadisar Lake." },
      { d: "Day 2 — Kuldhara and the desert camp", t: "Kuldhara ghost village and Bada Bagh cenotaphs in the morning, transfer to Sam Sand Dunes, sunset camel safari, pure-veg or Jain Rajasthani dinner, folk dance and a Swiss tent night." },
      { d: "Day 3 — Sunrise, border or leisure", t: "Sunrise on the dunes and breakfast, then a choice of the Tanot Mata and Longewala excursion or a relaxed day of shopping and the Jaisalmer war museum, night in Jaisalmer." },
      { d: "Day 4 — Return to Ahmedabad", t: "Free morning, then transfer to Jaisalmer station or airport, or the road drop to Jodhpur for your flight back to Ahmedabad." },
    ],
    included: [...COMMON_INCLUDED, "Pure vegetarian, Jain or no-onion-no-garlic meals on request at no extra cost"],
    notIncluded: COMMON_NOT_INCLUDED,
    pricingTitle: "Ahmedabad to Jaisalmer package pricing",
    pricing: [
      { plan: "Weekend Desert Trip", duration: "2 nights on ground", price: "from ₹9,900 / person", note: "Overnight train both ways" },
      { plan: "Classic Ahmedabad–Jaisalmer", duration: "3 nights on ground", price: "from ₹13,500 / person", note: "City, dunes and camp night" },
      { plan: "Family Gujarat Special", duration: "4 nights on ground", price: "from ₹17,900 / person", note: "Pure-veg meals, slower pace" },
      { plan: "Mount Abu + Jaisalmer", duration: "6 nights, road trip", price: "from ₹28,500 / person", note: "Hill station plus the desert" },
    ],
    gallery: [
      { src: IMG.oneDay, alt: "Camel caravan crossing the Thar Desert dunes near Jaisalmer" },
      { src: IMG.royalCandle, alt: "Private candlelight dinner set up on the sand dunes at Jaisalmer" },
      { src: IMG.suv, alt: "Air-conditioned SUV used for Jaisalmer sightseeing and transfers" },
    ],
    faqs: [
      { q: "Is there a direct train from Ahmedabad to Jaisalmer?", a: "Yes. Direct overnight services run from Ahmedabad and Sabarmati to Jaisalmer, typically taking 14–16 hours and arriving in the morning, which makes a two-night weekend trip realistic." },
      { q: "Can I fly from Ahmedabad to Jaisalmer?", a: "There are seasonal direct flights in winter. Otherwise fly Ahmedabad to Jodhpur in about an hour and drive 280 km to Jaisalmer with our car in roughly five hours." },
      { q: "Do you provide pure vegetarian and Jain food?", a: "Yes, at no extra charge. All camp and hotel meals can be prepared pure vegetarian, Jain or no-onion-no-garlic if you tell us when booking." },
      { q: "How long is the road trip from Ahmedabad to Jaisalmer?", a: "About 630 km, roughly 11 hours of driving via Mount Abu and Jodhpur. Most self-drivers break it into two days with a night in Jodhpur or Mount Abu." },
      { q: "What does an Ahmedabad to Jaisalmer package cost?", a: "Ground packages start at about ₹9,900 per person for two nights, covering hotel, desert camp, camel safari, sightseeing vehicle and all transfers. Train or flight fares are separate." },
      { q: "What is the best season for this trip?", a: "October to March. Diwali, Christmas and the February Desert Festival weeks are the busiest, so book at least three to four weeks ahead for those dates." },
    ],
    related: [
      { to: "/desert-camp", label: "Desert Camp Stay", blurb: "Swiss tents, bonfire dinners and sunrise on the dunes." },
      { to: "/tour-packages", label: "All Tour Packages", blurb: "Compare 2 to 5 day Jaisalmer itineraries." },
      { to: "/adventure", label: "Desert Adventure", blurb: "Dune bashing, quad bikes and paramotoring add-ons." },
    ],
    waMessage: "Hi Jaisalmer Holidays! I want a Jaisalmer package from Ahmedabad. Please share itineraries and pricing.",
    tripPrice: "9900",
  },
};
