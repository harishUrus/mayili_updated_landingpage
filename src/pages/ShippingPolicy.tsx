import PolicyLayout from "../components/PolicyLayout";
import { LEGAL_CONFIG } from "../data/legal";
import { PRODUCT_CONFIG } from "../data/product";

export default function ShippingPolicy() {
  return (
    <PolicyLayout title="Shipping & Delivery Policy">
      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg">Delivery Area</h2>
      <p>We currently deliver across Tamil Nadu, India.</p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Shipping Charges</h2>
      <p>
        A flat shipping charge of {PRODUCT_CONFIG.currency}
        {PRODUCT_CONFIG.shipping} is applied per order, shown clearly at checkout before payment.
      </p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Delivery Timeline</h2>
      <p>
        Orders are typically dispatched within 1–2 business days of confirmation. Delivery usually takes
        3–7 business days depending on your location within Tamil Nadu. You will receive delivery
        updates via WhatsApp.
      </p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Order Tracking</h2>
      <p>
        Since orders are confirmed and coordinated over WhatsApp, tracking updates will be shared
        directly with you on WhatsApp once your order ships.
      </p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Contact Us</h2>
      <p>
        For questions about your delivery, contact us at{" "}
        <a href={`mailto:${LEGAL_CONFIG.supportEmail}`} className="text-[var(--color-accent)] font-semibold">
          {LEGAL_CONFIG.supportEmail}
        </a>{" "}
        or {LEGAL_CONFIG.supportPhone}.
      </p>
    </PolicyLayout>
  );
}
