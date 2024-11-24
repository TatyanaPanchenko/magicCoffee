import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "./slice/coffeeSlice";

export const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
  },
});
