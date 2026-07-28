import honeymoon from "@/assets/blog/honeymoon.jpg";
import nightlife from "@/assets/blog/nightlife.jpg";
import lodurva from "@/assets/blog/lodurva.jpg";
import warMuseum from "@/assets/blog/war-museum.jpg";
import food from "@/assets/blog/food.jpg";
import shopping from "@/assets/blog/shopping.jpg";
import candlelight from "@/assets/blog/candlelight.jpg";
import samDunes from "@/assets/blog/sam-dunes.jpg";

export type BlogSummary = {
  slug: string;
  /** H1 for the post — short, descriptive */
  title: string;
  /** Card description on /blog listing */
  description: string;
  /** <title> tag — <=60 chars, keyword-front-loaded */
  metaTitle: string;
  /** meta description — <=160 chars */
  metaDescription: string;
  cover: string;
  datePublished: string;
};

// NOTE: datePublished values are approximate — please verify/adjust before launch.
export const BLOG_POSTS: BlogSummary[] = [
  {
    slug: "jaisalmer-honeymoon-couples-guide",
    title: "Jaisalmer Honeymoon Guide for Couples",
    description:
      "Plan a romantic Jaisalmer honeymoon — heritage hotel stays, luxury desert camps, private candlelight dinners and sunset picnics in the Thar.",
    metaTitle: "Jaisalmer Honeymoon Guide | Romantic Desert Escape",
    metaDescription:
      "Plan a magical Jaisalmer honeymoon with desert camps, candlelight dinners, private camel rides, and romantic forts. Best season & itinerary included.",
    cover: honeymoon,
    datePublished: "2025-01-12",
  },
  {
    slug: "jaisalmer-nightlife-guide",
    title: "Jaisalmer Nightlife Guide: Camps, Cafes & Cultural Shows",
    description:
      "Nightlife in Jaisalmer isn't clubs — it's bonfires, folk music, cultural evenings in desert camps and quiet fort-view dinners in the old city.",
    metaTitle: "Jaisalmer Nightlife Guide | Desert Parties & Camps",
    metaDescription:
      "Discover Jaisalmer nightlife: desert camp cultural shows, stargazing, rooftop cafes, folk music, and night safari experiences for every traveler.",
    cover: nightlife,
    datePublished: "2025-01-18",
  },
  {
    slug: "lodurva-excursion-guide",
    title: "Lodurva Excursion Guide from Jaisalmer",
    description:
      "Visit the Lodurva Jain temple complex and Amar Sagar on an easy half-day excursion from Jaisalmer. Distance, timings and how to pair it with sightseeing.",
    metaTitle: "Lodurva Excursion Guide | Ancient Jain Temples",
    metaDescription:
      "Plan a half-day Lodurva excursion from Jaisalmer. Visit ancient Jain temples, sand dunes, and Amar Sagar Lake with our detailed guide and travel tips.",
    cover: lodurva,
    datePublished: "2025-01-24",
  },
  {
    slug: "jaisalmer-war-museum",
    title: "Jaisalmer War Museum: Complete Visit Guide",
    description:
      "The Jaisalmer War Museum honours the 1971 Indo-Pak war with tanks, aircraft and exhibits from the Battle of Longewala. What to expect on your visit.",
    metaTitle: "Jaisalmer War Museum | Visit & Travel Guide",
    metaDescription:
      "Explore the Jaisalmer War Museum at Jaisalmer Military Station. Learn about Indian Army history, entry timing, ticket price, and how to reach from city.",
    cover: warMuseum,
    datePublished: "2025-02-02",
  },
  {
    slug: "jaisalmer-local-food-guide",
    title: "Jaisalmer Local Food Guide: Must-Try Rajasthani Dishes",
    description:
      "Rajasthani thali, ker sangri, dal baati churma and desert-camp dinners — a local food guide to what makes Jaisalmer's cuisine unforgettable.",
    metaTitle: "Jaisalmer Food Guide | Must-Try Rajasthani Dishes",
    metaDescription:
      "Taste the best Jaisalmer food: dal baati churma, ker sangri, gatte ki sabzi, lassi, and street food spots. A local's guide to Rajasthani cuisine.",
    cover: food,
    datePublished: "2025-02-08",
  },
  {
    slug: "jaisalmer-shopping-guide",
    title: "Jaisalmer Shopping Guide: Best Markets & Souvenirs",
    description:
      "Shopping in Jaisalmer — embroidered textiles, mirror work, leather, silver jewelry and where to browse in the bazaars around Jaisalmer Fort.",
    metaTitle: "Jaisalmer Shopping Guide | Best Souvenirs & Markets",
    metaDescription:
      "Shop in Jaisalmer like a local. Best markets for Rajasthani textiles, jewelry, puppets, mirror work, handicrafts, and bangles with bargaining tips.",
    cover: shopping,
    datePublished: "2025-02-15",
  },
  {
    slug: "candlelight-dinner-desert-dining",
    title: "Candlelight Dinner in Jaisalmer Desert",
    description:
      "Book a private candlelight dinner in the Jaisalmer dunes — royal thalis, sunset picnics and cultural evenings set up just for you.",
    metaTitle: "Candlelight Dinner in Jaisalmer Desert | VIP Dining",
    metaDescription:
      "Book a romantic candlelight dinner in Jaisalmer desert. Private dining under the stars, folk music, and luxury camp setup for couples and celebrations.",
    cover: candlelight,
    datePublished: "2025-02-22",
  },
  {
    slug: "sam-sand-dunes-guide",
    title: "Sam Sand Dunes Jaisalmer: Complete Travel Guide",
    description:
      "What makes Sam Sand Dunes Jaisalmer's most popular desert destination — access, timing, and why it's the base for camps and camel safaris.",
    metaTitle: "Sam Sand Dunes Jaisalmer | Safari, Camp & Travel Guide",
    metaDescription:
      "Complete Sam Sand Dunes guide: best time to visit, camel and jeep safari, desert camps, distance from Jaisalmer, sunset tips, and booking advice.",
    cover: samDunes,
    datePublished: "2025-03-02",
  },
];

export const SITE_URL = "https://www.jaisalmerholidays.com";
export const blogUrl = (slug: string) => `${SITE_URL}/blog/${slug}`;
// Absolute URL for a cover image (used in og:image / JSON-LD image fields).
export const absoluteCover = (cover: string) => (cover.startsWith("http") ? cover : SITE_URL + cover);
