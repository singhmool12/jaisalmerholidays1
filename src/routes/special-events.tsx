import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { EVENTS } from "@/lib/tours";
const hero = EVENTS[0].image;

export const Route = createFileRoute("/special-events")({
  head: () => ({
    meta: [
      { title: "Weddings & Special Events in Jaisalmer | Jaisalmer Holidays" },
      { name: "description", content: "Desert weddings, private dinners and corporate retreats in the dunes — celebrate in style on your Jaisalmer holidays." },
      { property: "og:title", content: "Weddings & Special Events in Jaisalmer | Jaisalmer Holidays" },
      { property: "og:description", content: "Desert weddings, private dinners and corporate retreats in the dunes — celebrate in style on your Jaisalmer holidays." },
      { property: "og:url", content: "https://www.jaisalmerholidays.com/special-events" },
    ],
    links: [{ rel: "canonical", href: "https://www.jaisalmerholidays.com/special-events" }],
  }),
  component: () => (
    <ServicePage
      hero={hero}
      kicker="Celebrate in the dunes"
      title="Special Events in Jaisalmer"
      subtitle="From private candlelight dinners to full-scale desert weddings and corporate retreats."
      intro="We handle the entire event — decor, catering, cultural performers, guest transfers and stays — so you just show up and enjoy."
      tours={EVENTS}
    />
  ),
});
