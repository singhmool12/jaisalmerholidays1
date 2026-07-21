import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { EXOTIC } from "@/lib/tours";
const hero = EXOTIC[2].image;

export const Route = createFileRoute("/exotic-tours")({
  head: () => ({
    meta: [
      { title: "Exotic Experiences in the Thar — Jaisalmerholidays" },
      { name: "description", content: "Private sunset picnics, stargazing, royal candlelight dinners and photography tours in the Jaisalmer dunes." },
      { property: "og:title", content: "Exotic Experiences in the Thar" },
      { property: "og:description", content: "Signature private experiences in the dunes." },
    ],
  }),
  component: () => (
    <ServicePage
      hero={hero}
      kicker="Signature private experiences"
      title="Exotic Experiences in the Thar"
      subtitle="Private picnics, stargazing, candlelight dinners and photography tours — curated for couples and photographers."
      intro="Every experience is set up privately for you, away from the crowds. Message us to customise dates, location and add-ons."
      tours={EXOTIC}
    />
  ),
});
