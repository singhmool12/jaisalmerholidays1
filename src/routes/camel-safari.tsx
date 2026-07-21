import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { CAMEL_TOURS } from "@/lib/tours";
const hero = CAMEL_TOURS[3].image;

export const Route = createFileRoute("/camel-safari")({
  head: () => ({
    meta: [
      { title: "Camel Safari in Jaisalmer — Jaisalmerholidays" },
      { name: "description", content: "Half-day, overnight and multi-day camel safaris across the Thar Desert with Jaisalmerholidays." },
      { property: "og:title", content: "Camel Safari in Jaisalmer" },
      { property: "og:description", content: "Non-touristic camel safaris in the Thar Desert since 2010." },
    ],
  }),
  component: () => (
    <ServicePage
      hero={hero}
      kicker="Since 2010"
      title="Camel Safari in Jaisalmer"
      subtitle="Non-touristic tracks, real desert, and a night sky you won't forget."
      intro="From a half-day sunrise ride to a full 22-day expedition, we run camel safaris across the Thar for every kind of traveller. Every safari uses off-the-beaten-track routes and local guides."
      tours={CAMEL_TOURS}
    />
  ),
});
