import { createSlice } from "@reduxjs/toolkit";
// import exp from "constants";

const latteSlice = createSlice({
  name: "latte",
  initialState: [],
  reducers: {
    setLatte(state, action) {
      state.push(action.payload);
    },
  },
});
export const { setLatte } = latteSlice.actions;
export default latteSlice.reducer;
