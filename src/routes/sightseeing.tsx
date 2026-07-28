import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SIGHTSEEING } from "@/lib/tours";
const hero = SIGHTSEEING[0].image;

export const Route = createFileRoute("/sightseeing")({
  head: () => ({
    meta: [
      { title: "Jaisalmer Sightseeing Tour | Fort, Havelis & Dunes" },
      { name: "description", content: "Discover top Jaisalmer sightseeing places: Golden Fort, Patwon Ki Haveli, Gadisar Lake, Bada Bagh, and Sam Sand Dunes with expert local guides." },
      { property: "og:title", content: "Jaisalmer Sightseeing Tour | Fort, Havelis & Dunes" },
      { property: "og:description", content: "Discover top Jaisalmer sightseeing places: Golden Fort, Patwon Ki Haveli, Gadisar Lake, Bada Bagh, and Sam Sand Dunes with expert local guides." },
      { property: "og:url", content: "https://www.jaisalmerholidays.com/sightseeing" },
    ],
    links: [{ rel: "canonical", href: "https://www.jaisalmerholidays.com/sightseeing" }],
  }),
  component: () => (
    <ServicePage
      hero={hero}
      kicker="Seven ways to meet the Thar"
      title="Jaisalmer Sightseeing Tour: Fort, Havelis & Desert"
      subtitle="Forts, havelis, lakes and the desert border — with local guides who actually know these places."
      intro="Every tour below can be booked on its own or combined into a half-day or full-day itinerary. Pickup and drop from your hotel is always included."
      tours={SIGHTSEEING}
    />
  ),
});
