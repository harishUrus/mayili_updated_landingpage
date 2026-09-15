import { CartProvider } from "./context/CartContext";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";

export default function App() {
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
