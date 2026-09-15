import crypto from "node:crypto";

export const handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const keySecret = process.env.RAZORPAY_KEY_SECRET;
  if (!keySecret) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Razorpay secret is not configured on the server." }),
    };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: "Invalid JSON body." }) };
  }

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = payload;
  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return { statusCode: 400, body: JSON.stringify({ error: "Missing payment fields." }) };
  }

  const expectedSignature = crypto
    .createHmac("sha256", keySecret)
    .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    .digest("hex");

  const isValid =
    expectedSignature.length === razorpay_signature.length &&
    crypto.timingSafeEqual(Buffer.from(expectedSignature), Buffer.from(razorpay_signature));

  if (!isValid) {
    return { statusCode: 400, body: JSON.stringify({ verified: false, error: "Signature mismatch." }) };
  }

  return { statusCode: 200, body: JSON.stringify({ verified: true }) };
};
