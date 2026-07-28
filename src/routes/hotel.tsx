import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Phone, Users, Ruler, Eye, BedDouble, Bath, Wifi, Wind, Utensils, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PageHero, CTABand, ContactSection } from "@/components/site/Sections";
import { BackButton } from "@/components/site/BackButton";
import hero from "@/assets/hotel-exterior.jpg";
import room1 from "@/assets/room-1.jpg";
import room2 from "@/assets/room-2.jpg";
import room3 from "@/assets/room-3.jpg";
import room4 from "@/assets/room-4.jpg";
import room5 from "@/assets/room-5.jpg";
import dining1 from "@/assets/dining-1.jpg.asset.json";
import dining2 from "@/assets/dining-2.jpg.asset.json";
import dining3 from "@/assets/dining-3.jpg.asset.json";
import dining4 from "@/assets/dining-4.jpg.asset.json";
import { telLink, tourWaLink } from "@/lib/brand";

export const Route = createFileRoute("/hotel")({
  head: () => ({
    meta: [
      { title: "Hotels in Jaisalmer | Best Stays Near Fort & Dunes" },
      { name: "description", content: "Find the best hotels in Jaisalmer: heritage havelis, desert camps, and budget stays near Jaisalmer Fort and Sam Sand Dunes. Book with local experts." },
      { property: "og:title", content: "Hotels in Jaisalmer | Best Stays Near Fort & Dunes" },
      { property: "og:description", content: "Find the best hotels in Jaisalmer: heritage havelis, desert camps, and budget stays near Jaisalmer Fort and Sam Sand Dunes. Book with local experts." },
      { property: "og:url", content: "https://www.jaisalmerholidays.com/hotel" },
    ],
    links: [{ rel: "canonical", href: "https://www.jaisalmerholidays.com/hotel" }],
  }),
  component: Hotel,
});

const ROOMS = [
  {
    title: "Super Deluxe King Room",
    badge: "Most booked",
    price: "₹ 2,662",
    images: [room1, room4, room2],
    features: [
      { icon: Users, label: "Max 3 Guests" },
      { icon: Ruler, label: "225 sq.ft" },
      { icon: Eye, label: "City View" },
      { icon: BedDouble, label: "1 King Bed" },
      { icon: Bath, label: "1 Bathroom" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: Utensils, label: "Room Service" },
      { icon: Wifi, label: "Free Wi-Fi" },
    ],
  },
  {
    title: "Deluxe Twin Room",
    badge: "Great for friends",
    price: "₹ 2,362",
    images: [room3, room5, room1],
    features: [
      { icon: Users, label: "Max 3 Guests" },
      { icon: Ruler, label: "210 sq.ft" },
      { icon: BedDouble, label: "2 Single Beds" },
      { icon: Bath, label: "1 Bathroom" },
      { icon: Wind, label: "Air Conditioning" },
      { icon: Utensils, label: "Room Service" },
      { icon: Wifi, label: "Free Wi-Fi" },
      { icon: Sparkles, label: "Housekeeping" },
    ],
  },
];

function RoomCarousel({ images, title }: { images: string[]; title: string }) {
  const [i, setI] = useState(0);
  const next = () => setI((v) => (v + 1) % images.length);
  const prev = () => setI((v) => (v - 1 + images.length) % images.length);
  return (
    <div className="relative w-full h-full min-h-[280px] sm:min-h-[360px] bg-[var(--sand)] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={i}
          src={images[i]}
          alt={`${title} — photo ${i + 1}`}
          loading="lazy"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      <button
        onClick={prev}
        aria-label="Previous photo"
        className="absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 grid place-items-center rounded-full bg-white/90 text-[var(--maroon)] shadow active:scale-95"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        aria-label="Next photo"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 grid place-items-center rounded-full bg-white/90 text-[var(--maroon)] shadow active:scale-95"
      >
        <ChevronRight size={18} />
      </button>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, k) => (
          <span key={k} className={`h-1.5 rounded-full transition-all ${k === i ? "w-6 bg-[var(--gold)]" : "w-1.5 bg-white/70"}`} />
        ))}
      </div>
    </div>
  );
}

function Hotel() {
  return (
    <div className="min-h-screen bg-[var(--cream)] grain-bg" id="top">
      <Nav />
      <BackButton />
      <PageHero image={hero} kicker="Boutique stay" title="Best Hotels in Jaisalmer: Havelis, Camps & Budget Stays" subtitle="A quiet heritage-style hotel a few minutes from the Golden Fort." />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-10">
        {ROOMS.map((r, idx) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.05 }}
            className="grid md:grid-cols-2 rounded-3xl overflow-hidden bg-white shadow-2xl border border-[var(--border)]"
          >
            <div className="relative">
              <RoomCarousel images={r.images} title={r.title} />
              <span className="absolute top-3 left-3 z-10 bg-[var(--gold)] text-[var(--maroon)] text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                {r.badge}
              </span>
            </div>
            <div className="p-6 sm:p-8 md:p-10 flex flex-col">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--maroon)] break-words">{r.title}</h2>
              <div className="w-16 h-[3px] bg-[var(--gold)] rounded-full my-4" />
              <ul className="grid grid-cols-2 gap-2.5 text-sm text-[var(--ink)]">
                {r.features.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-2 min-w-0">
                    <Icon size={16} className="text-[var(--maroon)] shrink-0" />
                    <span className="truncate">{label}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 rounded-2xl bg-[var(--sand)]/50 p-4 text-sm">
                <p className="font-semibold text-[var(--maroon)]">Room Only</p>
                <p className="text-[var(--muted-foreground)] mt-1">Free cancellation within 24 hours of booking.</p>
              </div>
              <div className="mt-5 flex items-end justify-between flex-wrap gap-2">
                <div>
                  <p className="font-display text-3xl sm:text-4xl font-bold text-[var(--maroon)]">{r.price}</p>
                  <p className="text-xs text-[var(--muted-foreground)]">per night • +taxes</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                <a target="_blank" rel="noreferrer" href={tourWaLink(r.title)} className="btn-primary btn-primary-hover text-sm">
                  <MessageCircle size={15} /> WhatsApp
                </a>
                <a href={telLink} className="btn-outline hover:bg-[var(--maroon)] hover:text-[var(--cream)] text-sm">
                  <Phone size={15} /> Call
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="text-center mb-8">
          <p className="text-[var(--terracotta)] uppercase tracking-widest text-xs font-semibold">Eat with us</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--maroon)] mt-2">Our Dining</h2>
          <p className="text-[var(--muted-foreground)] mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            A heritage-style sandstone restaurant and rooftop — traditional Rajasthani thalis, Indian classics and continental favourites.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
          {[dining1, dining2, dining3, dining4].map((d, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl group">
              <img src={d.url} alt={`Dining ${i + 1}`} loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </section>

      <CTABand />
      <ContactSection />
      <Footer />
    </div>
  );
}
