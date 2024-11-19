import { createSlice } from "@reduxjs/toolkit";
// import exp from "constants";

const latteSlice = createSlice({
  name: "late",
  initialState: { name: null, description: null },
  reducers: {
    setLatte(state, action) {
      state.name = action.payload.name;
      state.description = action.payload.description;
    },
  },
});

export const { setLatte } = latteSlice.actions;
export default latteSlice.reducer;
