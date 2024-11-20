import { configureStore } from "@reduxjs/toolkit";

import latteReducer from "./slice/latteSlice";

export const store = configureStore({
  reducer: {
    latte: latteReducer,
  },
});
