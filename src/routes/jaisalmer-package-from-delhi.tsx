import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/site/LandingPage";
import { LANDING_PAGES } from "@/lib/landing-pages";
import { landingHead } from "@/lib/landing-head";

export const Route = createFileRoute("/jaisalmer-package-from-delhi")({
  head: () => landingHead("jaisalmer-package-from-delhi"),
  component: () => <LandingPage c={LANDING_PAGES["jaisalmer-package-from-delhi"]} />,
});
