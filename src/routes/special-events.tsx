import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { EVENTS } from "@/lib/tours";
const hero = EVENTS[0].image;

export const Route = createFileRoute("/special-events")({
  head: () => ({
    meta: [
      { title: "Special Events in Jaisalmer — Jaisalmerholidays" },
      { name: "description", content: "Desert weddings, private candlelight dinners, corporate retreats and celebrations in Jaisalmer." },
      { property: "og:title", content: "Special Events in Jaisalmer" },
      { property: "og:description", content: "Weddings, dinners and retreats in the dunes." },
    ],
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
