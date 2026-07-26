import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { ADVENTURE } from "@/lib/tours";
const hero = ADVENTURE[0].image;

export const Route = createFileRoute("/adventure")({
  head: () => ({
    meta: [
      { title: "Adventure Activities in Jaisalmer — Jaisalmerholidays" },
      { name: "description", content: "Dune bashing, quad ATV rides and sandboarding in the Thar." },
      { property: "og:title", content: "Adventure Activities in Jaisalmer" },
      { property: "og:description", content: "Adrenaline in the dunes." },
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
