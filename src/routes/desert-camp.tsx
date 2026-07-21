import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { DESERT_CAMPS } from "@/lib/tours";
const hero = DESERT_CAMPS[0].image;

export const Route = createFileRoute("/desert-camp")({
  head: () => ({
    meta: [
      { title: "Desert Camp in Jaisalmer — Jaisalmerholidays" },
      { name: "description", content: "Luxury, deluxe and standard desert camps in the Sam sand dunes with dinner, folk music and camel rides." },
      { property: "og:title", content: "Desert Camp in Jaisalmer" },
      { property: "og:description", content: "Stay in luxury swiss tents under the Thar sky." },
    ],
  }),
  component: () => (
    <ServicePage
      hero={hero}
      kicker="Nights under the stars"
      title="Desert Camp in Jaisalmer"
      subtitle="Swiss tents, cultural evenings and quiet sunrises on the dunes."
      intro="Our desert camps sit slightly away from the main tourist strip so you get proper silence and proper stars — with dinner, folk music, and a sunrise camel ride included."
      tours={DESERT_CAMPS}
    />
  ),
});
