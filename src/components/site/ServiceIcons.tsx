import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import camel from "@/assets/icon-camel.png";
import tent from "@/assets/icon-tent.png";
import sight from "@/assets/icon-fort.png";
import adv from "@/assets/icon-adventure.png";
import compass from "@/assets/icon-compass.png";
import events from "@/assets/icon-events.png";
import hotel from "@/assets/icon-hotel.png";
import taxi from "@/assets/icon-taxi.png";

const services = [
  { to: "/camel-safari",   label: "Camel Safari",   img: camel },
  { to: "/desert-camp",    label: "Desert Camp",    img: tent },
  { to: "/sightseeing",    label: "Sightseeing",    img: sight },
  { to: "/adventure",      label: "Adventure",      img: adv },
  { to: "/exotic-tours",   label: "Exotic Tours",   img: compass },
  { to: "/special-events", label: "Special Events", img: events },
  { to: "/hotel",          label: "Hotel",          img: hotel },
  { to: "/taxi",           label: "Taxi",           img: taxi },
];

export function ServiceIcons() {
  return (
    <section className="relative -mt-12 md:-mt-24 z-20 max-w-7xl mx-auto px-3 sm:px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white rounded-2xl md:rounded-3xl shadow-2xl border border-[var(--border)] p-4 sm:p-6 md:p-8"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
          {services.map(({ to, label, img }, i) => (
            <motion.div
              key={to}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.45 }}
            >
              <Link
                to={to}
                className="group flex flex-col items-center justify-start text-center gap-3 p-3 sm:p-4 rounded-2xl hover:bg-[var(--sand)]/60 transition-all h-full"
              >
                <div className="w-24 h-24 sm:w-24 sm:h-24 md:w-20 md:h-20 lg:w-20 lg:h-20 grid place-items-center rounded-2xl bg-[var(--cream)] group-hover:bg-white group-hover:shadow-lg transition-all duration-500 group-hover:-translate-y-1 shrink-0 p-2">
                  <img
                    src={img}
                    alt={label}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <span className="text-sm sm:text-base font-semibold text-[var(--maroon)] leading-tight underline underline-offset-4 decoration-[var(--gold)] decoration-2 group-hover:decoration-[var(--terracotta)]">
                  {label}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
}
