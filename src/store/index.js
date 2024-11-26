import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "./slice/coffeeSlice";
import currentReducer from "./slice/CurrentItemSlice";
import cartReducer from "./slice/CartSlice";

export const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
    currentItem: currentReducer,
    cart: cartReducer,
  },
});
