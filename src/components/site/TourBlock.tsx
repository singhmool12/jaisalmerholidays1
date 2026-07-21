import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, CreditCard } from "lucide-react";
import { tourWaLink, telLink } from "@/lib/brand";
import type { Tour } from "@/lib/tours";
import { BookingModal } from "@/components/site/BookingModal";

export function TourBlock({ tour, index, showBooking = true }: { tour: Tour; index: number; showBooking?: boolean }) {
  const imageFirst = index % 2 === 0;
  const [bookingOpen, setBookingOpen] = useState(false);
  const Image = (
    <motion.div
      initial={{ opacity: 0, x: imageFirst ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl shadow-xl group"
    >
      <img
        src={tour.image}
        alt={tour.title}
        loading="lazy"
        width={1200}
        height={900}
        className="w-full h-[320px] md:h-[420px] object-cover group-hover:scale-105 transition-transform duration-[1200ms]"
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--maroon)]/40 via-transparent to-transparent" />
    </motion.div>
  );
  const Text = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      className="flex flex-col justify-center"
    >
      <h3 className="font-display text-3xl md:text-4xl font-semibold text-[var(--maroon)]">{tour.title}</h3>
      {tour.price && (
        <p className="mt-2 text-[var(--terracotta)] font-semibold">{tour.price}</p>
      )}
      <div className="w-16 h-[3px] bg-[var(--gold)] rounded-full my-4" />
      <ul className="space-y-2.5 text-[var(--muted-foreground)] leading-relaxed">
        {tour.paragraphs.map((p, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--gold)]" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
      {tour.note && (
        <p className="text-sm italic text-[var(--ink)]/70 mt-1">{tour.note}</p>
      )}
      <div className="flex flex-wrap gap-3 mt-6">
        {showBooking && (
          <button
            type="button"
            onClick={() => setBookingOpen(true)}
            className="btn-primary btn-primary-hover"
          >
            <CreditCard size={16} /> Book Now
          </button>
        )}
        <a href={tourWaLink(tour.title)} target="_blank" rel="noreferrer"
           className="btn-outline hover:bg-[var(--maroon)] hover:text-[var(--cream)]">
          <MessageCircle size={16} /> WhatsApp
        </a>
        <a href={telLink} className="btn-outline hover:bg-[var(--maroon)] hover:text-[var(--cream)]">
          <Phone size={16} /> Call Now
        </a>
      </div>
      {showBooking && (
        <BookingModal
          open={bookingOpen}
          onClose={() => setBookingOpen(false)}
          tourTitle={tour.title}
          priceText={tour.price}
        />
      )}
    </motion.div>
  );
  return (
    <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
      {imageFirst ? <>{Image}{Text}</> : <>{Text}{Image}</>}
    </section>
  );
}
