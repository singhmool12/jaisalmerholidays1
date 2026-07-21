import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero, CTABand, ContactSection } from "@/components/site/Sections";
import { BackButton } from "@/components/site/BackButton";
import { TourBlock } from "@/components/site/TourBlock";
import type { Tour } from "@/lib/tours";

export function ServicePage({
  hero, kicker, title, subtitle, intro, tours, showBooking = true,
}: {
  hero: string; kicker: string; title: string; subtitle: string;
  intro: string; tours: Tour[]; showBooking?: boolean;
}) {
  return (
    <div className="min-h-screen bg-[var(--cream)] grain-bg" id="top">
      <Nav />
      <BackButton />
      <PageHero image={hero} kicker={kicker} title={title} subtitle={subtitle} />
      <div className="max-w-3xl mx-auto px-6 pt-14 text-center">
        <p className="text-lg md:text-xl text-[var(--muted-foreground)] leading-relaxed">{intro}</p>
      </div>
      <div className="divide-y divide-[var(--border)]/60">
        {tours.map((t, i) => <TourBlock key={t.title} tour={t} index={i} showBooking={showBooking} />)}
      </div>
      <CTABand />
      <ContactSection />
      <Footer />
    </div>
  );
}
