import Razorpay from "razorpay";

// Mirrors src/data/product.ts — server-side source of truth for pricing so a
// tampered client request can never set its own amount.
const PACKAGE_PRICES = {
  "100g": 130,
  "200g": 260,
  "500g": 650,
  "1kg": 1300,
};
const SHIPPING_RUPEES = 50;
const MAX_ITEMS = 20;
const MAX_QUANTITY_PER_ITEM = 50;

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const keyId = process.env.RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Razorpay keys are not configured on the server." }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON body." }) };
  }

  const items = Array.isArray(payload.items) ? payload.items : [];
  if (items.length === 0 || items.length > MAX_ITEMS) {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid cart items." }) };
  }

  let subtotalRupees = 0;
  for (const item of items) {
    const price = PACKAGE_PRICES[item?.packageId];
    const quantity = Number(item?.quantity);
    if (!price || !Number.isInteger(quantity) || quantity <= 0 || quantity > MAX_QUANTITY_PER_ITEM) {
      return { statusCode: 400, body: JSON.stringify({ error: "Invalid cart item." }) };
    }
    subtotalRupees += price * quantity;
  }

  const totalRupees = subtotalRupees + SHIPPING_RUPEES;
  const amountPaise = totalRupees * 100;

  const razorpay = new Razorpay({ key_id: keyId, key_secret: keySecret });

  try {
    const order = await razorpay.orders.create({
      amount: amountPaise,
      currency: "INR",
      receipt: `mayili_${Date.now()}`,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        keyId,
      }),
    };
  } catch (err) {
    return {
      statusCode: 502,
      body: JSON.stringify({ error: "Failed to create Razorpay order.", detail: err.message }),
    };
  }
};
