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
    cover: "https://loremflickr.com/1600/900/jaisalmer,candlelight,dinner?lock=201",
    datePublished: "2025-01-12",
  },
  {
    slug: "jaisalmer-nightlife-guide",
    title: "Jaisalmer Nightlife: What Happens After Sunset",
    description:
      "Nightlife in Jaisalmer isn't clubs — it's bonfires, folk music, cultural evenings in desert camps and quiet fort-view dinners in the old city.",
    cover: "https://loremflickr.com/1600/900/jaisalmer,bonfire,folk?lock=202",
    datePublished: "2025-01-18",
  },
  {
    slug: "lodurva-excursion-guide",
    title: "Lodurva & Amar Sagar: A Half-Day Excursion from Jaisalmer",
    description:
      "Visit the Lodurva Jain temple complex and Amar Sagar on an easy half-day excursion from Jaisalmer. Distance, timings and how to pair it with sightseeing.",
    cover: "https://loremflickr.com/1600/900/jain,temple,rajasthan?lock=203",
    datePublished: "2025-01-24",
  },
  {
    slug: "jaisalmer-war-museum",
    title: "Jaisalmer War Museum: A Tribute to the 1971 War",
    description:
      "The Jaisalmer War Museum honours the 1971 Indo-Pak war with tanks, aircraft and exhibits from the Battle of Longewala. What to expect on your visit.",
    cover: "https://loremflickr.com/1600/900/war,museum,tank?lock=204",
    datePublished: "2025-02-02",
  },
  {
    slug: "jaisalmer-local-food-guide",
    title: "What to Eat in Jaisalmer: A Local Food Guide",
    description:
      "Rajasthani thali, ker sangri, dal baati churma and desert-camp dinners — a local food guide to what makes Jaisalmer's cuisine unforgettable.",
    cover: "https://loremflickr.com/1600/900/rajasthani,thali,food?lock=205",
    datePublished: "2025-02-08",
  },
  {
    slug: "jaisalmer-shopping-guide",
    title: "Jaisalmer Shopping Guide: Textiles, Mirror Work & Handicrafts",
    description:
      "Shopping in Jaisalmer — embroidered textiles, mirror work, leather, silver jewelry and where to browse in the bazaars around Jaisalmer Fort.",
    cover: "https://loremflickr.com/1600/900/jaisalmer,bazaar,textile?lock=206",
    datePublished: "2025-02-15",
  },
  {
    slug: "candlelight-dinner-desert-dining",
    title: "Private Candlelight Dinners & Desert Dining Experiences",
    description:
      "Book a private candlelight dinner in the Jaisalmer dunes — royal thalis, sunset picnics and cultural evenings set up just for you. Book now.",
    cover: "https://loremflickr.com/1600/900/candlelight,dinner,dunes?lock=207",
    datePublished: "2025-02-22",
  },
];

export const SITE_URL = "https://www.jaisalmerholidays.com";
export const blogUrl = (slug: string) => `${SITE_URL}/blog/${slug}`;
