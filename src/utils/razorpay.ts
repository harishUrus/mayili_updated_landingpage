import type { CartItem } from "../context/CartContext";
import type { CustomerDetails } from "./customer";

interface RazorpayCheckoutOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: RazorpaySuccessResponse) => void;
  prefill?: { name?: string; contact?: string; email?: string };
  theme?: { color?: string };
  modal?: { ondismiss?: () => void };
}

interface RazorpaySuccessResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

interface RazorpayInstance {
  open: () => void;
}

declare global {
  interface Window {
    Razorpay?: new (options: RazorpayCheckoutOptions) => RazorpayInstance;
  }
}

interface CreateOrderResponse {
  orderId: string;
  amount: number;
  currency: string;
  keyId: string;
}

export async function createRazorpayOrder(
  items: CartItem[],
  customer: CustomerDetails
): Promise<CreateOrderResponse> {
  const res = await fetch("/.netlify/functions/create-razorpay-order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      items: items.map((i) => ({ packageId: i.packageId, quantity: i.quantity })),
      customer,
    }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || "Failed to create payment order.");
  }

  return res.json();
}

export async function verifyRazorpayPayment(response: RazorpaySuccessResponse): Promise<boolean> {
  const res = await fetch("/.netlify/functions/verify-razorpay-payment", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(response),
  });

  if (!res.ok) return false;
  const body = await res.json().catch(() => ({ verified: false }));
  return Boolean(body.verified);
}

export function openRazorpayCheckout(params: {
  order: CreateOrderResponse;
  productName: string;
  customer: CustomerDetails;
  onSuccess: (response: RazorpaySuccessResponse) => void;
  onDismiss?: () => void;
}): void {
  if (!window.Razorpay) {
    throw new Error("Razorpay checkout script has not loaded yet.");
  }

  const razorpay = new window.Razorpay({
    key: params.order.keyId,
    amount: params.order.amount,
    currency: params.order.currency,
    name: "Mayili",
    description: params.productName,
    order_id: params.order.orderId,
    handler: params.onSuccess,
    prefill: {
      name: params.customer.name,
      contact: params.customer.phone,
      email: params.customer.email,
    },
    theme: { color: "#6B3017" },
    modal: { ondismiss: params.onDismiss },
  });

  razorpay.open();
}
