import { useState } from "react";
import { Send } from "lucide-react";
import { waLink } from "@/lib/brand";

export function ContactForm() {
  const [f, setF] = useState({ name: "", email: "", phone: "", subject: "General enquiry", message: "" });
  const upd = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setF({ ...f, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Hi Jaisalmerholidays!%0A%0A` +
      `*Name:* ${f.name}%0A` +
      `*Email:* ${f.email}%0A` +
      `*Phone:* ${f.phone}%0A` +
      `*Interested in:* ${f.subject}%0A%0A` +
      `${f.message}`;
    const link = waLink("").split("?")[0] + "?text=" + msg;
    window.open(link, "_blank");
  };

  const cls =
    "w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-white text-[var(--ink)] " +
    "focus:outline-none focus:ring-2 focus:ring-[var(--maroon)]/40 focus:border-[var(--maroon)] transition";

  return (
    <form onSubmit={submit} className="grid md:grid-cols-2 gap-4">
      <input required placeholder="Your name" value={f.name} onChange={upd("name")} className={cls} />
      <input required type="email" placeholder="Email" value={f.email} onChange={upd("email")} className={cls} />
      <input required placeholder="Phone" value={f.phone} onChange={upd("phone")} className={cls} />
      <select value={f.subject} onChange={upd("subject")} className={cls}>
        <option>General enquiry</option>
        <option>Camel Safari</option>
        <option>Desert Camp</option>
        <option>Sightseeing</option>
        <option>Adventure</option>
        <option>Exotic Tours</option>
        <option>Special Events</option>
        <option>Hotel Booking</option>
        
      </select>
      <textarea required rows={5} placeholder="Tell us a bit about what you're looking for..."
                value={f.message} onChange={upd("message")}
                className={`${cls} md:col-span-2 resize-none`} />
      <div className="md:col-span-2">
        <button type="submit" className="btn-primary btn-primary-hover w-full md:w-auto">
          <Send size={16} /> Send Enquiry via WhatsApp
        </button>
        <p className="text-xs text-[var(--muted-foreground)] mt-2">
          Clicking send opens WhatsApp with your details pre-filled — just press send to reach us instantly.
        </p>
      </div>
    </form>
  );
}
