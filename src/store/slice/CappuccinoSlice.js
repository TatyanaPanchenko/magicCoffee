import { createSlice } from "@reduxjs/toolkit";
// import exp from "constants";

const CappuccinoSlice = createSlice({
  name: "cappuccino",
  initialState: [],
  reducers: {
    setCappuccino(state, action) {
      state.push(action.payload);
    },
  },
});
export const { setCappuccino } = CappuccinoSlice.actions;
export default CappuccinoSlice.reducer;
