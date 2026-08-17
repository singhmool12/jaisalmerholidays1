import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ChevronUp } from "lucide-react";
import { BRAND, telLink } from "@/lib/brand";

export function Footer() {
  return (
    <footer className="bg-[var(--maroon)] text-[var(--cream)] mt-20 pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">
        <div className="col-span-2 md:col-span-1">
          <p className="font-display font-bold text-2xl mb-3">Jaisalmerholidays</p>
          <p className="opacity-80 leading-relaxed">
            {BRAND.tagline}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[var(--gold)] mb-1">Experiences</p>
          <Link to="/camel-safari" className="opacity-80 hover:opacity-100">Camel Safari</Link>
          <Link to="/desert-camp" className="opacity-80 hover:opacity-100">Desert Camp</Link>
          <Link to="/adventure" className="opacity-80 hover:opacity-100">Adventure</Link>
          <Link to="/special-events" className="opacity-80 hover:opacity-100">Special Events</Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[var(--gold)] mb-1">Travel</p>
          <Link to="/tour-packages" className="opacity-80 hover:opacity-100">Tour Packages</Link>
          <Link to="/sightseeing" className="opacity-80 hover:opacity-100">Sightseeing</Link>
          <Link to="/exotic-tours" className="opacity-80 hover:opacity-100">Exotic Tours</Link>
          <Link to="/taxi" className="opacity-80 hover:opacity-100">Jaisalmer Taxi Service</Link>
          <Link to="/hotel" className="opacity-80 hover:opacity-100">Hotel</Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-[var(--gold)] mb-1">Company</p>
          <Link to="/contact" className="opacity-80 hover:opacity-100">Contact</Link>
          <Link to="/blog" className="opacity-80 hover:opacity-100">Blog</Link>
          <a href="#" className="opacity-80 hover:opacity-100">About Us</a>
          <a href="#" className="opacity-80 hover:opacity-100">Travel Safe</a>
        </div>
        <div className="flex flex-col gap-2 col-span-2 md:col-span-1 min-w-0">
          <p className="font-semibold text-[var(--gold)] mb-1">Reach us</p>
          <a href={telLink} className="opacity-80 hover:opacity-100 inline-flex items-center gap-1.5 break-all">
            <Phone size={13} className="shrink-0" /> <span className="break-all">{BRAND.phone}</span>
          </a>
          <a href={`mailto:${BRAND.email}`} className="opacity-80 hover:opacity-100 inline-flex items-start gap-1.5 break-all">
            <Mail size={13} className="shrink-0 mt-1" /> <span className="break-all">{BRAND.email}</span>
          </a>
          <span className="opacity-80 inline-flex items-center gap-1.5 break-words">
            <MapPin size={13} className="shrink-0" /> {BRAND.address}
          </span>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs opacity-70 gap-2">
        <span>© {new Date().getFullYear()} Jaisalmerholidays. All rights reserved.</span>
        <a href="#top" className="inline-flex items-center gap-1 hover:opacity-100">
          <ChevronUp size={14} /> Back to top
        </a>
      </div>
    </footer>
  );
}
