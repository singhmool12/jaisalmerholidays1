import { createFileRoute } from "@tanstack/react-router";
import { createHmac } from "crypto";

type Booking = {
  tourTitle?: string;
  name?: string;
  email?: string;
  phone?: string;
  guests?: string;
  unit?: string;
  date?: string;
  notes?: string;
  amount?: number;
};

function esc(s: unknown): string {
  return String(s ?? "").replace(/[<>&]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;" }[c]!));
}

export const Route = createFileRoute("/api/public/booking-verify")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const keySecret = process.env.RAZORPAY_KEY_SECRET;
        const botToken = process.env.TELEGRAM_BOT_TOKEN;
        const chatId = process.env.TELEGRAM_ADMIN_CHAT_ID;
        if (!keySecret) return new Response("Razorpay not configured", { status: 500 });

        let payload: {
          razorpay_order_id?: string;
          razorpay_payment_id?: string;
          razorpay_signature?: string;
          booking?: Booking;
        };
        try { payload = await request.json(); } catch { return new Response("Invalid JSON", { status: 400 }); }

        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, booking } = payload;
        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
          return new Response("Missing payment fields", { status: 400 });
        }

        const expected = createHmac("sha256", keySecret)
          .update(`${razorpay_order_id}|${razorpay_payment_id}`)
          .digest("hex");
        if (expected !== razorpay_signature) {
          return new Response("Invalid signature", { status: 400 });
        }

        // Send Telegram notification (best effort)
        if (botToken && chatId) {
          const b = booking || {};
          const text =
            `<b>🏜️ New Booking — Jaisalmerholidays</b>\n\n` +
            `<b>Tour:</b> ${esc(b.tourTitle)}\n` +
            `<b>Name:</b> ${esc(b.name)}\n` +
            `<b>Email:</b> ${esc(b.email)}\n` +
            `<b>Phone:</b> ${esc(b.phone)}\n` +
            `<b>${esc(b.unit === "jeeps" ? "Jeeps" : "Guests")}:</b> ${esc(b.guests)}\n` +
            `<b>Date:</b> ${esc(b.date) || "—"}\n` +
            `<b>Notes:</b> ${esc(b.notes) || "—"}\n\n` +
            `<b>Amount:</b> ₹${esc(b.amount)}\n` +
            `<b>Payment ID:</b> <code>${esc(razorpay_payment_id)}</code>\n` +
            `<b>Order ID:</b> <code>${esc(razorpay_order_id)}</code>`;
          try {
            const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ chat_id: chatId, text, parse_mode: "HTML" }),
            });
            if (!tgRes.ok) console.error("Telegram send failed", tgRes.status, await tgRes.text());
          } catch (err) {
            console.error("Telegram send error", err);
          }
        }

        return Response.json({ ok: true });
      },
    },
  },
});
