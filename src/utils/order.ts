import type { Language } from "../context/LanguageContext";

export interface CompletedOrderItem {
  packageId: string;
  label: { ta: string; en: string };
  price: number;
  quantity: number;
}

export interface CompletedOrder {
  items: CompletedOrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  paymentId: string;
  orderId: string;
  status: "paid";
  timestamp: string;
}

const STORAGE_KEY = "mayili_last_order";

export function saveCompletedOrder(order: CompletedOrder): void {
  try {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(order));
  } catch {
    /* sessionStorage unavailable (private mode etc.) — thank-you page will
       show the "order not found" state, which is a safe fallback. */
  }
}

export function readCompletedOrder(): CompletedOrder | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (
      !parsed ||
      typeof parsed.paymentId !== "string" ||
      !parsed.paymentId ||
      typeof parsed.orderId !== "string" ||
      !parsed.orderId ||
      !Array.isArray(parsed.items) ||
      parsed.items.length === 0 ||
      typeof parsed.total !== "number"
    ) {
      return null;
    }
    return parsed as CompletedOrder;
  } catch {
    return null;
  }
}

export function formatOrderForWhatsApp(order: CompletedOrder, currency: string, language: Language): string {
  const lines = [
    "Hello Mayili,",
    "",
    "My payment was successful and I have placed an order.",
    "",
    ...order.items.map(
      (item) => `${item.label[language]} x ${item.quantity} — ${currency}${item.price * item.quantity}`
    ),
    "",
    `Amount Paid: ${currency}${order.total}`,
    `Razorpay Payment ID: ${order.paymentId}`,
    "",
    "Please confirm my order.",
  ];
  return lines.join("\n");
}
