import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { PRODUCT_CONFIG, type ProductPackage } from "../data/product";

export interface CartItem {
  packageId: string;
  price: number;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (pkg: ProductPackage, quantity: number) => void;
  removeFromCart: (packageId: string) => void;
  itemCount: number;
  subtotal: number;
  shipping: number;
  total: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (pkg: ProductPackage, quantity: number) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.packageId === pkg.id);
      if (existing) {
        return prev.map((i) =>
          i.packageId === pkg.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { packageId: pkg.id, price: pkg.price, quantity }];
    });
    setIsOpen(true);
  };

  const removeFromCart = (packageId: string) => {
    setItems((prev) => prev.filter((i) => i.packageId !== packageId));
  };

  const itemCount = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);
  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.price * i.quantity, 0), [items]);
  const shipping = items.length > 0 ? PRODUCT_CONFIG.shipping : 0;
  const total = subtotal + shipping;

  const value: CartContextValue = {
    items,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
    addToCart,
    removeFromCart,
    itemCount,
    subtotal,
    shipping,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
