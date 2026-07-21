import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { TAXIS } from "@/lib/tours";
const hero = "https://loremflickr.com/1600/900/car,rental,india?lock=710";

export const Route = createFileRoute("/taxi")({
  head: () => ({
    meta: [
      { title: "Taxi & Car Rental in Jaisalmer — Jaisalmerholidays" },
      { name: "description", content: "Self-drive cars, luxury buses, sedans, SUVs and tempo travellers for Jaisalmer sightseeing and Rajasthan tours." },
      { property: "og:title", content: "Taxi & Car Rental in Jaisalmer" },
      { property: "og:description", content: "Self-drive, buses, sedans, SUVs and tempo travellers — call or WhatsApp for a quote." },
    ],
  }),
  component: () => (
    <ServicePage
      hero={hero}
      kicker="Getting around"
      title="Taxi & Car Rental"
      subtitle="Self-drive, sedans, SUVs, tempo travellers and luxury buses — for city sightseeing, airport transfers and full Rajasthan tours."
      intro="Every vehicle comes with a clean interior, an experienced local driver (unless self-drive) and transparent pricing on request. Call or WhatsApp us for the best rate for your route and dates."
      tours={TAXIS}
      showBooking={false}
    />

  ),
});
