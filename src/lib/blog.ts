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
  title: string;
  description: string;
  cover: string;
  datePublished: string;
};

// NOTE: datePublished values are approximate — please verify/adjust before launch.
export const BLOG_POSTS: BlogSummary[] = [
  {
    slug: "jaisalmer-honeymoon-couples-guide",
    title: "Jaisalmer for Couples: Honeymoon & Romantic Getaway Guide",
    description:
      "Plan a romantic Jaisalmer honeymoon — heritage hotel stays, luxury desert camps, private candlelight dinners and sunset picnics in the Thar. Book now.",
    cover: honeymoon,
    datePublished: "2025-01-12",
  },
  {
    slug: "jaisalmer-nightlife-guide",
    title: "Jaisalmer Nightlife: What Happens After Sunset",
    description:
      "Nightlife in Jaisalmer isn't clubs — it's bonfires, folk music, cultural evenings in desert camps and quiet fort-view dinners in the old city.",
    cover: nightlife,
    datePublished: "2025-01-18",
  },
  {
    slug: "lodurva-excursion-guide",
    title: "Lodurva & Amar Sagar: A Half-Day Excursion from Jaisalmer",
    description:
      "Visit the Lodurva Jain temple complex and Amar Sagar on an easy half-day excursion from Jaisalmer. Distance, timings and how to pair it with sightseeing.",
    cover: lodurva,
    datePublished: "2025-01-24",
  },
  {
    slug: "jaisalmer-war-museum",
    title: "Jaisalmer War Museum: A Tribute to the 1971 War",
    description:
      "The Jaisalmer War Museum honours the 1971 Indo-Pak war with tanks, aircraft and exhibits from the Battle of Longewala. What to expect on your visit.",
    cover: warMuseum,
    datePublished: "2025-02-02",
  },
  {
    slug: "jaisalmer-local-food-guide",
    title: "What to Eat in Jaisalmer: A Local Food Guide",
    description:
      "Rajasthani thali, ker sangri, dal baati churma and desert-camp dinners — a local food guide to what makes Jaisalmer's cuisine unforgettable.",
    cover: food,
    datePublished: "2025-02-08",
  },
  {
    slug: "jaisalmer-shopping-guide",
    title: "Jaisalmer Shopping Guide: Textiles, Mirror Work & Handicrafts",
    description:
      "Shopping in Jaisalmer — embroidered textiles, mirror work, leather, silver jewelry and where to browse in the bazaars around Jaisalmer Fort.",
    cover: shopping,
    datePublished: "2025-02-15",
  },
  {
    slug: "candlelight-dinner-desert-dining",
    title: "Private Candlelight Dinners & Desert Dining Experiences",
    description:
      "Book a private candlelight dinner in the Jaisalmer dunes — royal thalis, sunset picnics and cultural evenings set up just for you. Book now.",
    cover: candlelight,
    datePublished: "2025-02-22",
  },
  {
    slug: "sam-sand-dunes-guide",
    title: "Sam Sand Dunes: Everything You Need to Know",
    description:
      "What makes Sam Sand Dunes Jaisalmer's most popular desert destination — access, timing, and why it's the base for camps and camel safaris.",
    cover: samDunes,
    datePublished: "2025-03-02",
  },
];

export const SITE_URL = "https://www.jaisalmerholidays.com";
export const blogUrl = (slug: string) => `${SITE_URL}/blog/${slug}`;
// Absolute URL for a cover image (used in og:image / JSON-LD image fields).
export const absoluteCover = (cover: string) => (cover.startsWith("http") ? cover : SITE_URL + cover);
