import { CartProvider } from "./context/CartContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";

export default function App() {
  const isThankYouPage = window.location.pathname.replace(/\/+$/, "") === "/thank-you";

  if (isThankYouPage) {
    return (
      <LanguageProvider>
        <ThankYou />
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <CartProvider>
        <Navbar />
        <Home />
        <Footer />
        <CartDrawer />
        <WhatsAppButton />
      </CartProvider>
    </LanguageProvider>
  );
}
