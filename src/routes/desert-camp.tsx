import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { DESERT_CAMPS } from "@/lib/tours";
const hero = DESERT_CAMPS[0].image;

export const Route = createFileRoute("/desert-camp")({
  head: () => ({
    meta: [
      { title: "Luxury Desert Camp Jaisalmer | Sam Sand Dunes Stay" },
      { name: "description", content: "Stay at the best luxury desert camp in Jaisalmer near Sam Sand Dunes. Enjoy Swiss tents, cultural programs, dinner under stars, and desert safari." },
      { property: "og:title", content: "Luxury Desert Camp Jaisalmer | Sam Sand Dunes Stay" },
      { property: "og:description", content: "Stay at the best luxury desert camp in Jaisalmer near Sam Sand Dunes. Enjoy Swiss tents, cultural programs, dinner under stars, and desert safari." },
      { property: "og:url", content: "https://jaisalmerholidays.com/desert-camp" },
    ],
    links: [{ rel: "canonical", href: "https://jaisalmerholidays.com/desert-camp" }],
  }),
  component: () => (
    <ServicePage
      hero={hero}
      kicker="Nights under the stars"
      title="Luxury Desert Camp in Jaisalmer Near Sam Sand Dunes"
      subtitle="Swiss tents, cultural evenings and quiet sunrises on the dunes."
      intro="Our desert camps sit slightly away from the main tourist strip so you get proper silence and proper stars — with dinner, folk music, and a sunrise camel ride included."
      tours={DESERT_CAMPS}
    />
  ),
});
