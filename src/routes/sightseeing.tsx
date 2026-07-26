import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { SIGHTSEEING } from "@/lib/tours";
const hero = SIGHTSEEING[0].image;

export const Route = createFileRoute("/sightseeing")({
  head: () => ({
    meta: [
      { title: "Sightseeing in Jaisalmer — Jaisalmerholidays" },
      { name: "description", content: "Jaisalmer Fort, Patwon ki Haveli, Gadisar Lake, Kuldhara, Bada Bagh, Sam dunes and border tours." },
      { property: "og:title", content: "Sightseeing in Jaisalmer" },
      { property: "og:description", content: "The best of Jaisalmer with local guides." },
      { property: "og:url", content: "https://www.jaisalmerholidays.com/sightseeing" },
    ],
    links: [{ rel: "canonical", href: "https://www.jaisalmerholidays.com/sightseeing" }],
  }),
  component: () => (
    <ServicePage
      hero={hero}
      kicker="Seven ways to meet the Thar"
      title="Sightseeing in Jaisalmer"
      subtitle="Forts, havelis, lakes and the desert border — with local guides who actually know these places."
      intro="Every tour below can be booked on its own or combined into a half-day or full-day itinerary. Pickup and drop from your hotel is always included."
      tours={SIGHTSEEING}
    />
  ),
});
