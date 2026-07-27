import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { ADVENTURE } from "@/lib/tours";
const hero = ADVENTURE[0].image;

export const Route = createFileRoute("/adventure")({
  head: () => ({
    meta: [
      { title: "Adventure Activities in Jaisalmer | Jaisalmer Holidays" },
      { name: "description", content: "Dune bashing, quad ATV rides and sandboarding — add some adrenaline to your Jaisalmer holidays in the Thar Desert." },
      { property: "og:title", content: "Adventure Activities in Jaisalmer | Jaisalmer Holidays" },
      { property: "og:description", content: "Dune bashing, quad ATV rides and sandboarding — add some adrenaline to your Jaisalmer holidays in the Thar Desert." },
      { property: "og:url", content: "https://www.jaisalmerholidays.com/adventure" },
    ],
    links: [{ rel: "canonical", href: "https://www.jaisalmerholidays.com/adventure" }],
  }),
  component: () => (
    <ServicePage
      hero={hero}
      kicker="Adrenaline in the dunes"
      title="Adventure Activities in Jaisalmer"
      subtitle="Dune bashing, quad ATV rides and sandboarding across the dunes."
      intro="All activities run with certified operators, safety briefings and proper equipment. Great as add-ons to any camel safari or desert camp stay."
      tours={ADVENTURE}
    />
  ),
});
