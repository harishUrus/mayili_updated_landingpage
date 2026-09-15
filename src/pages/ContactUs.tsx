import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import PolicyLayout from "../components/PolicyLayout";
import { LEGAL_CONFIG } from "../data/legal";
import { PRODUCT_CONFIG } from "../data/product";

export default function ContactUs() {
  return (
    <PolicyLayout title="Contact Us">
      <p>We'd love to hear from you. Reach out with any questions about our products or your order.</p>

      <div className="space-y-4 pt-2">
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-[var(--color-green)] shrink-0" />
          <span>{LEGAL_CONFIG.supportPhone}</span>
        </div>
        <div className="flex items-center gap-3">
          <MessageCircle className="w-5 h-5 text-[var(--color-green)] shrink-0" />
          <a
            href={PRODUCT_CONFIG.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] font-semibold"
          >
            Chat with us on WhatsApp
          </a>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-[var(--color-green)] shrink-0" />
          <a href={`mailto:${LEGAL_CONFIG.supportEmail}`} className="text-[var(--color-accent)] font-semibold">
            {LEGAL_CONFIG.supportEmail}
          </a>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="w-5 h-5 text-[var(--color-green)] shrink-0" />
          <span>{LEGAL_CONFIG.registeredAddress}</span>
        </div>
      </div>
    </PolicyLayout>
  );
}
