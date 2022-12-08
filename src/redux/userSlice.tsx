import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type InitialState = {
  value: {
    name: string;
    surname: string;
    age: number;
  };
};

const initialState: InitialState = {
  value: {
    name: "Marija",
    surname: "Bonev",
    age: 30,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // functions:
  reducers: {
    userAction: (state, action: PayloadAction<InitialState>) => {
      state.value = action.payload.value;
    },
  },
});

export const { userAction } = userSlice.actions;
export default userSlice.reducer;
