import PolicyLayout from "../components/PolicyLayout";
import { LEGAL_CONFIG } from "../data/legal";

export default function RefundPolicy() {
  return (
    <PolicyLayout title="Cancellation & Refund Policy">
      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg">Order Cancellation</h2>
      <p>
        You may cancel your order by contacting us on WhatsApp within a few hours of placing it, before
        the order has been shipped. Once an order has been dispatched, it cannot be cancelled.
      </p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Damaged or Incorrect Items</h2>
      <p>
        If you receive a damaged, defective, or incorrect product, please contact us within 48 hours of
        delivery with a photo of the item and your order details. We will arrange a replacement or a
        refund after verification.
      </p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Refunds</h2>
      <p>
        Approved refunds are processed to the original payment method within 5–7 business days. For
        payments made via Razorpay, refunds are handled through Razorpay's secure refund process.
      </p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Non-Returnable Items</h2>
      <p>
        As our product is a consumable food item, we do not accept returns once the package has been
        opened, unless the product was damaged or defective on arrival.
      </p>

      <h2 className="font-bold text-[var(--color-dark-choc)] text-lg pt-2">Contact Us</h2>
      <p>
        For cancellations, refunds, or replacement requests, reach us at{" "}
        <a href={`mailto:${LEGAL_CONFIG.supportEmail}`} className="text-[var(--color-accent)] font-semibold">
          {LEGAL_CONFIG.supportEmail}
        </a>{" "}
        or {LEGAL_CONFIG.supportPhone}.
      </p>
    </PolicyLayout>
  );
}
