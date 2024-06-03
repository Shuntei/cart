import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from ".";
import { JWT_CART_POST } from "@/components/config/api-path";
import axios from "axios";

interface CartItem {
  authId: number;
  id: string;
  price: number;
  quantity: number;
  totalPrice: number;
  description: string;
}

interface CartState {
  items: CartItem[];
  authId: number;
}

const initialState: CartState = {
  items: [],
  authId: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find(
        (v) => v.authId === v.authId && v.id === newItem.id
      );

      if (!existingItem) {
        state.items.push({
          authId: newItem.authId,
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity || 1,
          totalPrice: (newItem.quantity || 1) * newItem.price,
          description: newItem.description,
        });

        // axios.post(JWT_CART_POST, state.items); // 後端路由為 /api/cart
      } else {
        existingItem.quantity = newItem.quantity;
        existingItem.totalPrice = newItem.quantity * existingItem.price;

        // axios.post(JWT_CART_POST, state.items);
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("myCart", JSON.stringify(state.items));
      }
    },
    addQtyInCart(state, action) {
      const thisItem = action.payload;
      const existingItem = state.items.find((v) => v.id === thisItem.id);
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += thisItem.price;
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("myCart", JSON.stringify(state.items));
      }
    },
    addQtyInShop(state, action) {
      const thisItem = action.payload;
      const existingItem = state.items.find((v) => v.id === thisItem);
      if (existingItem) existingItem.quantity++;
    },
    removerQtyInShop(state, action) {
      const thisItem = action.payload;
      const existingItem = state.items.find((v) => v.id === thisItem);
      if (existingItem && existingItem.quantity > 1) existingItem.quantity--;
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((v) => v.id === id);
      if (!existingItem) return;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((v) => v.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem?.price;
      }
      if (typeof window !== "undefined") {
        localStorage.setItem("myCart", JSON.stringify(state.items));
      }
    },
  },
});

export const selectCart = (state: RootState) => state.cart.items;
export const cartActions = cartSlice.actions;
export default cartSlice;
