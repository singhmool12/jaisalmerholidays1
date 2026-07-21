import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BRAND, telLink } from "@/lib/brand";
import logo from "@/assets/logo.png";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Hotel", to: "/hotel" },
  { label: "Events", to: "/special-events" },
  { label: "Contact", to: "/contact" },
] as const;

const MOBILE_NAV = [
  { label: "Home", to: "/" },
  { label: "Camel Safari", to: "/camel-safari" },
  { label: "Desert Camp", to: "/desert-camp" },
  { label: "Sightseeing", to: "/sightseeing" },
  { label: "Adventure", to: "/adventure" },
  { label: "Exotic Tours", to: "/exotic-tours" },
  { label: "Special Events", to: "/special-events" },
  { label: "Hotel", to: "/hotel" },
  { label: "Taxi", to: "/taxi" },
  { label: "Contact", to: "/contact" },
] as const;

export function TopBar() {
  return null;
}


export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 bg-[var(--cream)]/95 backdrop-blur border-b border-[var(--border)]">
      <TopBar />
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-2 shrink-0 min-w-0">
          <img src={logo} alt="Jaisalmerholidays" width={40} height={40} className="h-9 w-9 sm:h-10 sm:w-10 shrink-0" />
          <span className="font-display text-lg sm:text-2xl font-semibold text-[var(--maroon)] leading-none truncate">
            Jaisalmer<span className="text-[var(--terracotta)]">holidays</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <Link key={n.to} to={n.to}
              className="px-3 py-1.5 text-sm font-medium text-[var(--ink)] hover:text-[var(--maroon)] [&.active]:text-[var(--maroon)] [&.active]:font-semibold"
              activeProps={{ className: "active" }}>
              {n.label}
            </Link>
          ))}
          <a href={telLink} className="btn-primary btn-primary-hover text-sm ml-2">
            <Phone size={14} /> Call
          </a>
        </nav>

        {/* Mobile: call + hamburger */}
        <div className="flex md:hidden items-center gap-1">
          <a href={telLink} aria-label="Call us"
             className="h-10 w-10 grid place-items-center rounded-full bg-[var(--maroon)] text-[var(--cream)] active:scale-95 transition">
            <Phone size={17} />
          </a>
          <button onClick={() => setOpen(v => !v)} aria-label="Open menu" aria-expanded={open}
             className="h-10 w-10 grid place-items-center rounded-full border border-[var(--border)] bg-white text-[var(--maroon)] active:scale-95 transition">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[var(--border)] bg-[var(--cream)]"
          >
            <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col">
              {MOBILE_NAV.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)}
                  className="py-3 text-base font-medium text-[var(--ink)] border-b border-[var(--border)]/60 last:border-0 [&.active]:text-[var(--maroon)] [&.active]:font-semibold"
                  activeProps={{ className: "active" }}>
                  {n.label}
                </Link>
              ))}
              <a href={telLink} onClick={() => setOpen(false)}
                 className="mt-3 btn-primary btn-primary-hover justify-center">
                <Phone size={15} /> {BRAND.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
