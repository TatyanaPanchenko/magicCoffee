import { createSlice } from "@reduxjs/toolkit";
// import exp from "constants";

const RafSlice = createSlice({
  name: "raf",
  initialState: [],
  reducers: {
    setRaf(state, action) {
      state.push(action.payload);
    },
  },
});
export const { setRaf } = RafSlice.actions;
export default RafSlice.reducer;
