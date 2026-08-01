import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { LANDING_PAGES } from "@/lib/landing-pages";
import { landingHead } from "@/lib/landing-head";

export const Route = createFileRoute("/family-tour-packages")({
  head: () => landingHead("family-tour-packages"),
  component: () => <LandingPage c={LANDING_PAGES["family-tour-packages"]} />,
});
