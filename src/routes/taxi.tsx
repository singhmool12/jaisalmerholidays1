import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { TAXIS } from "@/lib/tours";
const hero = "https://jaisalmerholidays.lovable.app/__l5e/assets-v1/bbbcba69-6d05-4d06-b7cf-3cec37d84927/self-drive-dzire.jpg";

export const Route = createFileRoute("/taxi")({
  head: () => ({
    meta: [
      { title: "Jaisalmer Taxi Service | Airport & Local Transfers" },
      { name: "description", content: "Reliable Jaisalmer taxi service for airport pickup, local sightseeing, outstation trips, and desert transfers. Book AC cabs with experienced drivers." },
      { property: "og:title", content: "Jaisalmer Taxi Service | Airport & Local Transfers" },
      { property: "og:description", content: "Reliable Jaisalmer taxi service for airport pickup, local sightseeing, outstation trips, and desert transfers. Book AC cabs with experienced drivers." },
      { property: "og:url", content: "https://www.jaisalmerholidays.com/taxi" },
    ],
    links: [{ rel: "canonical", href: "https://www.jaisalmerholidays.com/taxi" }],
  }),
  component: () => (
    <ServicePage
      hero={hero}
      kicker="Getting around"
      title="Jaisalmer Taxi Service for Airport, Local & Outstation Trips"
      subtitle="Self-drive, sedans, SUVs, tempo travellers and luxury buses — for city sightseeing, airport transfers and full Rajasthan tours."
      intro="Every vehicle comes with a clean interior, an experienced local driver (unless self-drive) and transparent pricing on request. Call or WhatsApp us for the best rate for your route and dates."
      tours={TAXIS}
      showBooking={false}
    />

  ),
});
