import { createSlice } from "@reduxjs/toolkit";
// import exp from "constants";

const CoffeeSlice = createSlice({
  name: "coffee",
  initialState: [],
  reducers: {
    setCoffee(state, action) {
      state.push(action.payload);
    },
  },
});
export const { setCoffee } = CoffeeSlice.actions;
export default CoffeeSlice.reducer;
