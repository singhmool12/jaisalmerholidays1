import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero, ContactSection } from "@/components/site/Sections";
import { BackButton } from "@/components/site/BackButton";
const hero = "https://loremflickr.com/1600/900/desert,sunrise,jaisalmer?lock=130";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jaisalmerholidays" },
      { name: "description", content: "Reach Jaisalmerholidays on +91 70145 78096 or email info@jaisalmerholidays.com." },
      { property: "og:title", content: "Contact Jaisalmerholidays" },
      { property: "og:description", content: "Talk to us on WhatsApp or call — usually replies within minutes." },
    ],
  }),
  component: () => (
    <div className="min-h-screen bg-[var(--cream)] grain-bg" id="top">
      <Nav />
      <BackButton />
      <PageHero image={hero} kicker="We're here to help" title="Contact us" subtitle="Send us a message and we'll reply on WhatsApp within minutes." />
      <ContactSection />
      <Footer />
    </div>
  ),
});
