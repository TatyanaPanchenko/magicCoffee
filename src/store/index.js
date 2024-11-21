import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "./slice/coffeeSlice";
import cappuccinoReducer from "./slice/cappuccinoSlice";
import latteReducer from "./slice/latteSlice";
import rafReducer from "./slice/rafSlice";

export const store = configureStore({
  reducer: {
    coffee: coffeeReducer,
    cappuccino: cappuccinoReducer,
    latte: latteReducer,
    raf: rafReducer,
  },
});
