import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { EXOTIC } from "@/lib/tours";
const hero = EXOTIC[2].image;

export const Route = createFileRoute("/exotic-tours")({
  head: () => ({
    meta: [
      { title: "Exotic Rajasthan Tours | Jaisalmer & Beyond" },
      { name: "description", content: "Plan exotic Rajasthan tours from Jaisalmer to Jodhpur, Udaipur, Jaipur, and Bikaner. Customized heritage, desert, and palace tour packages." },
      { property: "og:title", content: "Exotic Rajasthan Tours | Jaisalmer & Beyond" },
      { property: "og:description", content: "Plan exotic Rajasthan tours from Jaisalmer to Jodhpur, Udaipur, Jaipur, and Bikaner. Customized heritage, desert, and palace tour packages." },
      { property: "og:url", content: "https://www.jaisalmerholidays.com/exotic-tours" },
    ],
    links: [{ rel: "canonical", href: "https://www.jaisalmerholidays.com/exotic-tours" }],
  }),
  component: () => (
    <ServicePage
      hero={hero}
      kicker="Signature private experiences"
      title="Exotic Rajasthan Tours Starting from Jaisalmer"
      subtitle="Private picnics, stargazing, candlelight dinners and photography tours — curated for couples and photographers."
      intro="Every experience is set up privately for you, away from the crowds. Message us to customise dates, location and add-ons."
      tours={EXOTIC}
    />
  ),
});
