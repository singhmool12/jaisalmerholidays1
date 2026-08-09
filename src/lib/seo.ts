export const SITE_URL = "https://jaisalmerholidays.com";

export const PHONE = "+91 70145 78096";

export type Crumb = { name: string; path: string };

export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: SITE_URL + c.path,
    })),
  };
}

export const travelAgencyJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Jaisalmer Holidays",
  image: `${SITE_URL}/favicon.ico`,
  "@id": SITE_URL,
  url: SITE_URL,
  telephone: "+91-70145-78096",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jaisalmer",
    addressLocality: "Jaisalmer",
    addressRegion: "Rajasthan",
    postalCode: "345001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 26.9157,
    longitude: 70.9083,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
};

export function touristTripJsonLd(opts: {
  name: string;
  description: string;
  url: string;
  image: string;
  price?: string;
  itinerary?: { name: string; description: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    image: opts.image,
    provider: {
      "@type": "TravelAgency",
      name: "Jaisalmer Holidays",
      url: SITE_URL,
      telephone: "+91-70145-78096",
    },
    ...(opts.price
      ? {
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: opts.price,
            availability: "https://schema.org/InStock",
            url: opts.url,
          },
        }
      : {}),
    ...(opts.itinerary
      ? {
          itinerary: {
            "@type": "ItemList",
            itemListElement: opts.itinerary.map((d, i) => ({
              "@type": "ListItem",
              position: i + 1,
              item: { "@type": "TouristAttraction", name: d.name, description: d.description },
            })),
          },
        }
      : {}),
  };
}

export const AUTHOR = {
  name: "Vikram Singh",
  jobTitle: "Local Travel Expert, Jaisalmer Holidays",
  bio: "Born and raised in Jaisalmer, Vikram has guided desert safaris and city tours across the Thar since 2010. He plans itineraries for thousands of travellers every season.",
};

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    jobTitle: AUTHOR.jobTitle,
    description: AUTHOR.bio,
    worksFor: { "@type": "TravelAgency", name: "Jaisalmer Holidays", url: SITE_URL },
    url: `${SITE_URL}/contact`,
  };
}
