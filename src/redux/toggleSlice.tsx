import { createSlice } from "@reduxjs/toolkit";

export type InitialStateToggle = {
  toggleIsOn: boolean;
};

const initialState: InitialStateToggle = {
  toggleIsOn: false,
};

export const toggleSlice = createSlice({
  name: "toggle",
  initialState,
  reducers: {
    toggleAction: (state) => {
      if (state.toggleIsOn === false) {
        state.toggleIsOn = true;
      } else {
        state.toggleIsOn = false;
      }
    },
  },
});

export const { toggleAction } = toggleSlice.actions;
export default toggleSlice.reducer;
