import { create } from 'zustand';
import { BurguerData } from '@/features/home/types/BurguerData';
import { persist, createJSONStorage } from 'zustand/middleware';

interface CartItem extends BurguerData {
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  addToCart: (product: BurguerData) => void;
  decreaseToCart: (product: BurguerData) => void
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const { cart } = get();
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            cart: cart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          });
        } else {
          set({ cart: [...cart, { ...product, quantity: 1 }] });
        }
      },

      decreaseToCart: (product) => {
        const { cart } = get();
        const existingItem = cart.find((item) => item.id === product.id);

        if (existingItem) {
          if (existingItem.quantity > 1) {
            set({
              cart: cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
              ),
            });
          } else {
            set({
              cart: cart.filter((item) => item.id !== product.id),
            });
          }
        }
      },

      removeFromCart: (productId) => {
        const { cart } = get();
        set({
          cart: cart.filter((item) => item.id !== productId),
        });
      },

      clearCart: () => set({ cart: [] }),

      totalItems: () => {
        const { cart } = get();
        return cart.reduce((sum, item) => sum + item.quantity, 0);
      },
      
      totalPrice: () => {
        const { cart } = get();
        return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      },
    }),
    {
      name: 'prime-burguer-cart',
      storage: createJSONStorage(() => localStorage),
    }
  )
)