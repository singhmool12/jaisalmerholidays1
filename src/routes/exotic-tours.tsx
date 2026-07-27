import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { EXOTIC } from "@/lib/tours";
const hero = EXOTIC[2].image;

export const Route = createFileRoute("/exotic-tours")({
  head: () => ({
    meta: [
      { title: "Private Desert Experiences in Jaisalmer | Jaisalmer Holidays" },
      { name: "description", content: "Sunset picnics, candlelight dinners and stargazing — signature private experiences for a memorable Jaisalmer holiday." },
      { property: "og:title", content: "Private Desert Experiences in Jaisalmer | Jaisalmer Holidays" },
      { property: "og:description", content: "Sunset picnics, candlelight dinners and stargazing — signature private experiences for a memorable Jaisalmer holiday." },
      { property: "og:url", content: "https://www.jaisalmerholidays.com/exotic-tours" },
    ],
    links: [{ rel: "canonical", href: "https://www.jaisalmerholidays.com/exotic-tours" }],
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
