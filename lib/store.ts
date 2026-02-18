import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, WooProduct } from '@/types/woocommerce';

interface CartStore {
  cart: CartItem[];
  isCartOpen: boolean;
  addToCart: (product: WooProduct, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  setIsCartOpen: (open: boolean) => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      isCartOpen: false,
      
      addToCart: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.cart.find((item) => item.product.id === product.id);
          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.product.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            };
          }
          return { cart: [...state.cart, { product, quantity }] };
        });
      },
      
      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.product.id !== productId),
        }));
      },
      
      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }
        set((state) => ({
          cart: state.cart.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item
          ),
        }));
      },
      
      clearCart: () => set({ cart: [] }),
      
      setIsCartOpen: (open) => set({ isCartOpen: open }),
      
      totalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      },
      
      totalPrice: () => {
        return get().cart.reduce((total, item) => {
          const price = parseFloat(item.product.price) || 0;
          return total + price * item.quantity;
        }, 0);
      },
    }),
    {
      name: 'esentra-cart',
    }
  )
);
