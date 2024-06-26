import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type CartDispatch = typeof store.dispatch;
export default store;
