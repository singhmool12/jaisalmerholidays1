import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/public/booking-order")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const keyId = process.env.RAZORPAY_KEY_ID;
        const keySecret = process.env.RAZORPAY_KEY_SECRET;
        if (!keyId || !keySecret) {
          return new Response("Razorpay not configured", { status: 500 });
        }
        let body: { amount?: number; tourTitle?: string };
        try { body = await request.json(); } catch { return new Response("Invalid JSON", { status: 400 }); }
        const amount = Number(body.amount);
        if (!Number.isFinite(amount) || amount < 1 || amount > 500000) {
          return new Response("Invalid amount", { status: 400 });
        }
        const auth = "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64");
        const receipt = ("rcpt_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 8)).slice(0, 40);
        const rzpRes = await fetch("https://api.razorpay.com/v1/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: auth },
          body: JSON.stringify({
            amount: Math.round(amount * 100),
            currency: "INR",
            receipt,
            notes: { tour: (body.tourTitle || "").slice(0, 200) },
          }),
        });
        if (!rzpRes.ok) {
          const errText = await rzpRes.text();
          console.error("Razorpay order failed", rzpRes.status, errText);
          return new Response(`Razorpay error: ${errText}`, { status: 502 });
        }
        const order = await rzpRes.json();
        return Response.json({ orderId: order.id, keyId, currency: order.currency, amount: order.amount });
      },
    },
  },
});
