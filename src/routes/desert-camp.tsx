import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { DESERT_CAMPS } from "@/lib/tours";
const hero = DESERT_CAMPS[0].image;

export const Route = createFileRoute("/desert-camp")({
  head: () => ({
    meta: [
      { title: "Desert Camp in Jaisalmer | Jaisalmer Holidays" },
      { name: "description", content: "Luxury, deluxe and standard desert camps in the Sam sand dunes — part of your perfect Jaisalmer holidays. Dinner, folk music and camel rides included." },
      { property: "og:title", content: "Desert Camp in Jaisalmer | Jaisalmer Holidays" },
      { property: "og:description", content: "Luxury, deluxe and standard desert camps in the Sam sand dunes — part of your perfect Jaisalmer holidays. Dinner, folk music and camel rides included." },
      { property: "og:url", content: "https://www.jaisalmerholidays.com/desert-camp" },
    ],
    links: [{ rel: "canonical", href: "https://www.jaisalmerholidays.com/desert-camp" }],
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
