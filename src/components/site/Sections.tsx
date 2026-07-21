import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { BRAND, telLink, waLink } from "@/lib/brand";
import { ContactForm } from "./ContactForm";

export function PageHero({ image, kicker, title, subtitle }: {
  image: string; kicker?: string; title: string; subtitle?: string;
}) {
  return (
    <section className="relative w-full h-[52vh] min-h-[380px] overflow-hidden">
      <img src={image} alt="" loading="eager" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-[var(--cream)]" />
      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-end pb-16">
        {kicker && (
          <motion.span
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="text-[var(--gold)] uppercase tracking-[0.25em] text-xs font-semibold">
            {kicker}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
          className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-white mt-2 max-w-3xl leading-tight break-words">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}
            className="text-white/85 max-w-2xl mt-3">
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

export function CTABand() {
  return (
    <section className="max-w-6xl mx-auto px-6 my-16">
      <div className="rounded-3xl p-10 md:p-14 bg-gradient-to-br from-[var(--maroon)] to-[#7a2626] text-[var(--cream)] shadow-2xl grid md:grid-cols-2 gap-6 items-center">
        <div>
          <p className="text-[var(--gold)] uppercase tracking-widest text-xs font-semibold mb-2">Ready to ride?</p>
          <h3 className="font-display text-3xl md:text-4xl font-bold leading-tight">
            Let's plan your Jaisalmer trip together.
          </h3>
          <p className="mt-3 opacity-85">Talk to us on WhatsApp or call — we usually reply within minutes.</p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a target="_blank" rel="noreferrer"
             href={waLink("Hi Jaisalmerholidays! I'd like to plan a trip.")}
             className="btn-gold hover:brightness-105">
            <MessageCircle size={16} /> WhatsApp Us
          </a>
          <a href={telLink} className="btn-outline !border-[var(--cream)] !text-[var(--cream)] hover:bg-white/10">
            <Phone size={16} /> Call Now
          </a>
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-14">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-[var(--terracotta)] uppercase tracking-widest text-xs font-semibold">Get in touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--maroon)] mt-2">
            Tell us what you'd like to do.
          </h2>
          <p className="text-[var(--muted-foreground)] mt-4">
            Fill the form and we'll get back to you on WhatsApp with a suggested plan and pricing.
            Prefer to talk? Call us anytime.
          </p>
          <div className="mt-6 space-y-3 text-sm break-words">
            <p><span className="font-semibold text-[var(--maroon)]">Phone / WhatsApp:</span> {BRAND.phone}</p>
            <p className="break-all"><span className="font-semibold text-[var(--maroon)]">Email:</span> {BRAND.email}</p>
            <p><span className="font-semibold text-[var(--maroon)]">Address:</span> {BRAND.address}</p>
          </div>
        </div>
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-lg border border-[var(--border)]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
