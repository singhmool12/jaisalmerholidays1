import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { ServiceIcons } from "@/components/site/ServiceIcons";
import { ContactSection, CTABand } from "@/components/site/Sections";
import { BRAND } from "@/lib/brand";
import { CAMEL_TOURS, SIGHTSEEING, ADVENTURE, HOME_HERO, DESERT_CAMPS, EXOTIC, EVENTS } from "@/lib/tours";
const hero = HOME_HERO;


const SITE_URL = "https://www.jaisalmerholidays.com";

const HOME_JSONLD = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Jaisalmerholidays",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  image: HOME_HERO,
  telephone: "+91 70145 78096",
  email: "info@jaisalmerholidays.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Near Jaisalmer Fort",
    addressLocality: "Jaisalmer",
    addressRegion: "Rajasthan",
    postalCode: "345001",
    addressCountry: "IN",
  },
  geo: { "@type": "GeoCoordinates", latitude: 26.9157, longitude: 70.9083 },
  areaServed: "Jaisalmer, Thar Desert, Rajasthan",
  sameAs: [] as string[],
};

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Jaisalmer Tour Packages | Desert Safari & Camp | Jaisalmer Holidays" },
      {
        name: "description",
        content:
          "Book the best Jaisalmer tour packages, desert safari, camel rides, and luxury camps with Jaisalmer Holidays. Trusted local travel agency since 2010.",
      },
      { property: "og:title", content: "Jaisalmer Tour Packages | Desert Safari & Camp | Jaisalmer Holidays" },
      {
        property: "og:description",
        content:
          "Book the best Jaisalmer tour packages, desert safari, camel rides, and luxury camps with Jaisalmer Holidays. Trusted local travel agency since 2010.",
      },
      { property: "og:url", content: SITE_URL + "/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: HOME_HERO },
      { name: "twitter:image", content: HOME_HERO },
    ],
    links: [{ rel: "canonical", href: SITE_URL + "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(HOME_JSONLD) }],
  }),
});

const WORDS = "Jaisalmerholidays".split("");

/* ---------- Intro splash: cinematic reveal ---------- */
function IntroSplash() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("jh_intro_seen")) return;
    setShow(true);
    sessionStorage.setItem("jh_intro_seen", "1");
    const t = setTimeout(() => setShow(false), 3400);
    return () => clearTimeout(t);
  }, []);
  const title = "Jaisalmerholidays";
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)" }}
          transition={{ duration: 1.0, ease: [0.7, 0, 0.3, 1] }}
          className="fixed inset-0 z-[100] overflow-hidden bg-[#641516]"
        >
          {/* Radial glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 55%, rgba(232,171,62,0.55) 0%, rgba(232,171,62,0.0) 60%), radial-gradient(120% 80% at 50% 100%, rgba(0,0,0,0.55) 0%, transparent 60%)",
            }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          {/* Rising sun */}
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 rounded-full"
            style={{
              width: 320, height: 320,
              background: "radial-gradient(circle, #FBF4E6 0%, #E8AB3E 55%, rgba(232,171,62,0) 72%)",
              filter: "blur(2px)",
            }}
            initial={{ bottom: -260, opacity: 0 }}
            animate={{ bottom: -140, opacity: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          {/* Dune silhouette */}
          <motion.svg
            viewBox="0 0 1440 400" preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-[42%]"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          >
            <path d="M0,240 C220,120 420,320 680,220 C900,140 1120,300 1440,180 L1440,400 L0,400 Z" fill="#3d0a0b" />
            <path d="M0,320 C260,220 500,360 780,300 C1040,246 1240,360 1440,280 L1440,400 L0,400 Z" fill="#2a0708" />
          </motion.svg>

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <motion.p
              initial={{ opacity: 0, letterSpacing: "0.15em" }}
              animate={{ opacity: 1, letterSpacing: "0.55em" }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="text-[#FBF4E6] uppercase text-[10px] sm:text-xs font-semibold"
            >
              Welcome to the Thar
            </motion.p>

            <div className="mt-6 font-display font-normal text-[#FBF4E6] text-5xl sm:text-7xl md:text-8xl leading-[1] tracking-tight max-w-[95vw] flex flex-col items-center gap-1">
              {["Jaisalmer", "holidays"].map((word, wi) => (
                <div key={wi} className="flex justify-center">
                  {word.split("").map((c, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 40, rotateX: -90 }}
                      animate={{ opacity: 1, y: 0, rotateX: 0 }}
                      transition={{ duration: 0.7, delay: 0.7 + (wi * 9 + i) * 0.045, ease: [0.22, 1, 0.36, 1] }}
                      className="inline-block"
                      style={wi === 1 ? { color: "#E8AB3E", fontStyle: "italic" } : undefined}
                    >
                      {c}
                    </motion.span>
                  ))}
                </div>
              ))}
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.0, delay: 1.7, ease: "easeOut" }}
              className="mt-8 h-[1px] w-40 bg-[#E8AB3E]/70 origin-center"
            />
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.0 }}
              className="mt-4 text-[#FBF4E6]/70 text-xs sm:text-sm tracking-[0.3em] uppercase"
            >
              Est. 2010 · Jaisalmer, Rajasthan
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}


/* ---------- Auto-scrolling testimonials marquee ---------- */
const REVIEWS = [
  { q: "The most magical night I've spent under the stars. Our guide made every moment feel special.", a: "Sarah", city: "United Kingdom" },
  { q: "Booked the overnight safari and it was worth every rupee. Non-touristy, authentic, beautiful.", a: "Rohan", city: "Mumbai" },
  { q: "From pickup to the last camel ride — everything ran smoothly. Highly recommend.", a: "Lena", city: "Germany" },
  { q: "Best trip we've done in India. The camp food, the music, the sunrise — perfect.", a: "Marc & Julie", city: "France" },
  { q: "Genuine, warm hospitality. Felt like family by the end of the second day.", a: "Aditi", city: "Bengaluru" },
  { q: "Loved the folk dance evening and the private dune. 10/10 would return.", a: "Kenji", city: "Tokyo" },
];

function Marquee() {
  const row = [...REVIEWS, ...REVIEWS];
  return (
    <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
      <motion.div
        className="flex gap-6 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 50, ease: "linear", repeat: Infinity }}
      >
        {row.map((t, i) => (
          <blockquote
            key={i}
            className="shrink-0 w-[320px] md:w-[380px] bg-white rounded-3xl p-6 shadow-sm border border-[var(--border)]"
          >
            <div className="flex gap-0.5 text-[var(--gold)] mb-3">
              {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={15} fill="currentColor" />)}
            </div>
            <p className="text-[var(--ink)] leading-relaxed text-sm">"{t.q}"</p>
            <footer className="mt-4 text-sm font-semibold text-[var(--maroon)]">
              — {t.a} <span className="text-[var(--muted-foreground)] font-normal">· {t.city}</span>
            </footer>
          </blockquote>
        ))}
      </motion.div>
    </div>
  );
}

function Home() {
  const featured = [CAMEL_TOURS[0], SIGHTSEEING[0], ADVENTURE[0]];
  return (
    <div className="min-h-screen bg-[var(--cream)]" id="top">
      <IntroSplash />
      <Nav />

      {/* HERO */}
      <section className="relative w-full h-[92vh] min-h-[620px] overflow-hidden bg-[var(--maroon)]">
        <motion.img
          src={hero}
          alt="Golden Thar desert dunes at sunset"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 4, ease: "easeOut" }}
        />
        {/* Layered maroon → gold vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(100,21,22,0.55) 0%, rgba(100,21,22,0.15) 35%, rgba(100,21,22,0.35) 70%, var(--cream) 100%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 40% at 50% 30%, rgba(232,171,62,0.18), transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center items-center text-center pt-10">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            className="h-[2px] w-14 bg-[#E8AB3E] origin-center mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
            className="text-[#FBF4E6] uppercase tracking-[0.5em] text-[10px] sm:text-xs md:text-sm font-semibold">
            Welcome to the Thar
          </motion.p>

          <h1 className="sr-only">Jaisalmer Tour Packages &amp; Desert Safari with Jaisalmer Holidays</h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.9 }}
            aria-hidden="true"
            className="mt-5 font-display font-normal text-[#FBF4E6] text-[2.6rem] sm:text-6xl md:text-7xl lg:text-8xl leading-[1] tracking-tight max-w-full drop-shadow-[0_4px_30px_rgba(0,0,0,0.35)] flex flex-col items-center gap-1 lg:block lg:text-center">
            <span className="block lg:inline">Jaisalmer</span><span className="italic text-[#E8AB3E] block lg:inline">holidays</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-6 max-w-2xl text-[#FBF4E6]/90 text-base sm:text-lg md:text-xl px-2 font-light">
            {BRAND.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.7 }}
            className="mt-10 inline-flex items-center gap-3 text-[#FBF4E6]/70 text-[11px] sm:text-xs tracking-[0.4em] uppercase">
            <span className="h-px w-8 bg-[#E8AB3E]/60" />
            Est. {BRAND.since} · Jaisalmer, Rajasthan
            <span className="h-px w-8 bg-[#E8AB3E]/60" />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[#FBF4E6]/70 text-[10px] sm:text-xs tracking-widest uppercase"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 1 }}>
          Scroll to explore ↓
        </motion.div>
      </section>



      <ServiceIcons />

      {/* WHY */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-6 text-center">
        <p className="text-[var(--terracotta)] uppercase tracking-widest text-xs font-semibold">Why travel with us</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--maroon)] mt-3">
          Real desert, real people, real memories.
        </h2>
        <p className="mt-5 max-w-2xl mx-auto text-[var(--muted-foreground)] text-lg">
          We've been guiding travellers through the Thar since 2010 — off the beaten track, always with local guides,
          and always at a fair price.
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          {[
            { n: "16+", l: "Years in the desert" },
            { n: "12k+", l: "Happy travellers" },
            { n: "40+", l: "Curated experiences" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-3xl p-8 bg-white border border-[var(--border)] shadow-sm">
              <p className="font-display text-5xl font-bold text-[var(--maroon)]">{s.n}</p>
              <p className="mt-2 text-[var(--muted-foreground)]">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <div>
            <p className="text-[var(--terracotta)] uppercase tracking-widest text-xs font-semibold">Handpicked</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--maroon)] mt-2">Featured experiences</h2>
          </div>
          <Link to="/camel-safari" className="btn-outline hover:bg-[var(--maroon)] hover:text-[var(--cream)]">
            View all safaris <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((t, i) => (
            <motion.div key={t.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group rounded-3xl overflow-hidden bg-white shadow-lg border border-[var(--border)]">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={t.image} alt={t.title} loading="lazy" width={1200} height={900}
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-[var(--maroon)]">{t.title}</h3>
                {t.price && <p className="text-sm text-[var(--terracotta)] mt-1 font-medium">{t.price}</p>}
                <p className="text-sm text-[var(--muted-foreground)] mt-3 line-clamp-3">{t.paragraphs[0]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS — auto marquee */}
      <section className="bg-[var(--sand)]/50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center mb-10">
          <p className="text-[var(--terracotta)] uppercase tracking-widest text-xs font-semibold">Loved by travellers</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-[var(--maroon)] mt-2">What people say</h2>
        </div>
        <Marquee />
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-10">
          <p className="text-[var(--terracotta)] uppercase tracking-widest text-xs font-semibold">Simple & stress-free</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--maroon)] mt-2">How it works</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {[
            { n: "01", t: "Message us", d: "Tell us your dates and what you'd like to do — WhatsApp is fastest." },
            { n: "02", t: "We plan it", d: "You get a tailored itinerary and a fair, all-inclusive price." },
            { n: "03", t: "Enjoy Jaisalmer", d: "Show up, meet your local guide, and let the desert do the rest." },
          ].map((s, i) => (
            <motion.div key={s.n}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative rounded-3xl p-6 sm:p-7 bg-white border border-[var(--border)] shadow-sm">
              <span className="font-display text-5xl text-[var(--gold)] leading-none">{s.n}</span>
              <h3 className="mt-3 font-display text-2xl text-[var(--maroon)] font-semibold">{s.t}</h3>
              <p className="mt-2 text-[var(--muted-foreground)] text-sm leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-16 sm:py-20 bg-[var(--maroon)] text-[var(--cream)]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 text-center mb-8 sm:mb-10">
          <p className="text-[var(--gold)] uppercase tracking-widest text-xs font-semibold">A glimpse of the Thar</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2">Moments from our trips</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 px-2 sm:px-4 max-w-7xl mx-auto">
          {[
            { url: CAMEL_TOURS[0].image, title: "Sunrise ride" },
            { url: SIGHTSEEING[0].image, title: "Jaisalmer Fort" },
            { url: CAMEL_TOURS[7].image, title: "Folk evening" },
            { url: CAMEL_TOURS[3].image, title: "Overnight safari" },
            { url: SIGHTSEEING[2].image, title: "Gadisar Lake" },
            { url: EXOTIC[1].image, title: "Under the stars" },
            { url: EXOTIC[0].image, title: "Sunset picnic" },
            { url: SIGHTSEEING[1].image, title: "Havelis" },
          ].map((t, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: (i % 4) * 0.08, duration: 0.5 }}
              className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl group">
              <img src={t.url} alt={t.title} loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
