import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { EVENTS } from "@/lib/tours";
const hero = EVENTS[0].image;

export const Route = createFileRoute("/special-events")({
  head: () => ({
    meta: [
      { title: "Destination Weddings & Events in Jaisalmer" },
      { name: "description", content: "Host unforgettable destination weddings, corporate events, and celebrations in Jaisalmer. Desert venues, luxury camps, and full event planning support." },
      { property: "og:title", content: "Destination Weddings & Events in Jaisalmer" },
      { property: "og:description", content: "Host unforgettable destination weddings, corporate events, and celebrations in Jaisalmer. Desert venues, luxury camps, and full event planning support." },
      { property: "og:url", content: "https://jaisalmerholidays.com/special-events" },
    ],
    links: [{ rel: "canonical", href: "https://jaisalmerholidays.com/special-events" }],
  }),
  component: () => (
    <ServicePage
      hero={hero}
      kicker="Celebrate in the dunes"
      title="Destination Weddings & Special Events in Jaisalmer"
      subtitle="From private candlelight dinners to full-scale desert weddings and corporate retreats."
      intro="We handle the entire event — decor, catering, cultural performers, guest transfers and stays — so you just show up and enjoy."
      tours={EVENTS}
    />
  ),
});
