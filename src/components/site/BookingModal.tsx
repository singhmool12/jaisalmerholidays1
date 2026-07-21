import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2, CheckCircle2, ShieldCheck } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  tourTitle: string;
  priceText?: string;
};

// Parse first ₹number(with commas) from price text
function parseAmount(priceText?: string): number {
  if (!priceText) return 500;
  const m = priceText.replace(/,/g, "").match(/₹\s*(\d+)/);
  return m ? Math.max(1, parseInt(m[1], 10)) : 500;
}

function loadRazorpay(): Promise<boolean> {
  return new Promise((resolve) => {
    if (typeof window === "undefined") return resolve(false);
    if ((window as any).Razorpay) return resolve(true);
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

export function BookingModal({ open, onClose, tourTitle, priceText }: Props) {
  const unitPrice = useMemo(() => parseAmount(priceText), [priceText]);
  const isJeep = /4\s*[×x]\s*4|dune\s*bashing/i.test(tourTitle);
  const unitSingular = isJeep ? "jeep" : "guest";
  const unitPlural = isJeep ? "jeeps" : "guests";
  const countLabel = isJeep ? "Jeeps" : "Guests";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState<number>(1);
  const [date, setDate] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const totalAmount = Math.max(unitPrice, unitPrice * (guests || 1));
  const formattedTotal = totalAmount.toLocaleString("en-IN");

  useEffect(() => {
    if (open) {
      setStatus("idle");
      setError(null);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setError(null);
    try {
      const bookingPayload = { tourTitle, name, email, phone, guests: String(guests), date, notes, amount: totalAmount };
      const orderRes = await fetch("/api/public/booking-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: totalAmount, tourTitle }),
      });
      if (!orderRes.ok) throw new Error(`Order failed (${orderRes.status})`);
      const { orderId, keyId, currency } = await orderRes.json();

      const ok = await loadRazorpay();
      if (!ok) throw new Error("Payment SDK failed to load. Check your connection.");

      await new Promise<void>((resolve, reject) => {
        const rzp = new (window as any).Razorpay({
          key: keyId,
          amount: totalAmount * 100,
          currency,
          order_id: orderId,
          name: "Jaisalmerholidays",
          description: tourTitle,
          prefill: { name, email, contact: phone },
          theme: { color: "#641516" },
          modal: { ondismiss: () => reject(new Error("Payment cancelled")) },
          handler: async (resp: any) => {
            try {
              const verify = await fetch("/api/public/booking-verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...resp, booking: bookingPayload }),
              });
              if (!verify.ok) {
                const txt = await verify.text();
                return reject(new Error(`Verification failed: ${txt}`));
              }
              resolve();
            } catch (err) { reject(err); }
          },
        });
        rzp.open();
      });
      setStatus("success");
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-[#1a0808]/70 backdrop-blur-md flex items-end sm:items-center justify-center overflow-x-hidden overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
            className="relative w-full sm:max-w-md sm:mx-4 bg-[var(--cream)] rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[92vh] overflow-x-hidden overflow-y-auto border border-[var(--gold)]/30"
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: "min(28rem, 100vw)" }}
          >
            {/* Decorative header band */}
            <div className="relative bg-gradient-to-br from-[var(--maroon)] to-[#4a0f10] text-[var(--cream)] px-5 sm:px-7 pt-6 pb-5 rounded-t-3xl sm:rounded-t-3xl">
              <button
                onClick={onClose}
                className="absolute right-3 top-3 w-9 h-9 grid place-items-center rounded-full bg-[var(--cream)]/15 hover:bg-[var(--cream)]/25 text-[var(--cream)] transition"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[var(--gold)] font-semibold">Reserve your experience</p>
              <h3 className="font-display text-xl sm:text-2xl mt-1 leading-tight break-words pr-10">
                {tourTitle}
              </h3>
              <div className="w-10 h-[2px] bg-[var(--gold)] rounded-full mt-3" />
              <p className="mt-2 text-xs sm:text-sm text-[var(--cream)]/80">
                ₹{unitPrice.toLocaleString("en-IN")} <span className="opacity-70">per guest</span>
              </p>
            </div>

            {status === "success" ? (
              <div className="p-8 text-center">
                <CheckCircle2 size={64} className="text-[var(--maroon)] mx-auto" />
                <h3 className="font-display text-2xl mt-4 text-[var(--maroon)]">Booking confirmed</h3>
                <p className="text-[var(--muted-foreground)] mt-2">
                  Thank you {name}! We've received your payment for <strong>{tourTitle}</strong>.
                  Our team will WhatsApp you shortly with next steps.
                </p>
                <button
                  onClick={onClose}
                  className="btn-primary btn-primary-hover mt-6 mx-auto"
                >Close</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-5 sm:p-7">
                <div className="grid gap-3">
                  <Field label="Full name" required value={name} onChange={setName} />
                  <Field label="Email" type="email" required value={email} onChange={setEmail} />
                  <Field label="Phone (WhatsApp)" required value={phone} onChange={setPhone} inputMode="tel" />

                  <div>
                    <span className="text-sm font-medium text-[var(--ink)]">Guests<span className="text-[var(--maroon)]"> *</span></span>
                    <div className="mt-1 flex items-center justify-between rounded-xl border border-[var(--border)] bg-white/80 px-2 py-1.5">
                      <button
                        type="button"
                        onClick={() => setGuests((g) => Math.max(1, g - 1))}
                        className="w-9 h-9 rounded-lg bg-[var(--maroon)] text-[var(--cream)] font-bold text-lg leading-none hover:opacity-90"
                        aria-label="Decrease guests"
                      >−</button>
                      <div className="flex-1 text-center">
                        <span className="font-display text-xl text-[var(--maroon)]">{guests}</span>
                        <span className="ml-1 text-xs text-[var(--ink)]/60">{guests === 1 ? "guest" : "guests"}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setGuests((g) => Math.min(50, g + 1))}
                        className="w-9 h-9 rounded-lg bg-[var(--maroon)] text-[var(--cream)] font-bold text-lg leading-none hover:opacity-90"
                        aria-label="Increase guests"
                      >+</button>
                    </div>
                  </div>

                  <Field label="Preferred date" type="date" value={date} onChange={setDate} />

                  <label className="block">
                    <span className="text-sm font-medium text-[var(--ink)]">Notes (optional)</span>
                    <textarea
                      value={notes} onChange={(e) => setNotes(e.target.value)}
                      rows={2}
                      className="mt-1 w-full rounded-xl border border-[var(--border)] bg-white/80 px-3 py-2 text-sm outline-none focus:border-[var(--maroon)] resize-none"
                    />
                  </label>
                </div>

                {/* Total block */}
                <div className="mt-5 rounded-2xl bg-gradient-to-br from-[var(--gold)]/20 to-[var(--cream)] border border-[var(--gold)]/40 p-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-[var(--maroon)]/70 font-semibold">Total to pay</p>
                      <p className="text-xs text-[var(--ink)]/60 mt-0.5">
                        ₹{unitPrice.toLocaleString("en-IN")} × {guests}
                      </p>
                    </div>
                    <p className="font-display text-3xl sm:text-4xl text-[var(--maroon)] leading-none">
                      ₹{formattedTotal}
                    </p>
                  </div>
                </div>

                {error && (
                  <p className="mt-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg p-2 break-words">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-primary btn-primary-hover mt-4 w-full justify-center disabled:opacity-70"
                >
                  {status === "loading"
                    ? (<><Loader2 size={16} className="animate-spin" /> Processing…</>)
                    : (<>Pay ₹{formattedTotal}</>)}
                </button>
                <p className="mt-2 flex items-center justify-center gap-1.5 text-[11px] text-[var(--ink)]/60">
                  <ShieldCheck size={12} /> Secure payment powered by Razorpay
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  label, value, onChange, type = "text", required, min, inputMode,
}: {
  label: string; value: string; onChange: (v: string) => void;
  type?: string; required?: boolean; min?: number; inputMode?: "tel" | "text" | "email" | "numeric";
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-[var(--ink)]">{label}{required && <span className="text-[var(--maroon)]"> *</span>}</span>
      <input
        type={type} required={required} value={value} min={min} inputMode={inputMode}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-xl border border-[var(--border)] bg-white/80 px-3 py-2 text-sm outline-none focus:border-[var(--maroon)]"
      />
    </label>
  );
}
