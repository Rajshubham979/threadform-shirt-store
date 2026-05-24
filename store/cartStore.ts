"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartItem } from "@/types";

type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.items.find(
            (entry) =>
              entry.productId === item.productId &&
              entry.size === item.size &&
              entry.color === item.color
          );

          if (existing) {
            return {
              items: state.items.map((entry) =>
                entry === existing
                  ? { ...entry, quantity: entry.quantity + item.quantity }
                  : entry
              )
            };
          }

          return { items: [...state.items, item] };
        }),
      removeItem: (productId, size, color) =>
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(item.productId === productId && item.size === size && item.color === color)
          )
        })),
      updateQuantity: (productId, size, color, quantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId && item.size === size && item.color === color
              ? { ...item, quantity }
              : item
          )
        })),
      clearCart: () => set({ items: [] })
    }),
    { name: "shirt-store-cart" }
  )
);
