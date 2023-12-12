import { createSlice } from "@reduxjs/toolkit";

export const dropdownSlice = createSlice({
  name: "DropDown",
  initialState: { value: "" },
  reducers: {
    hover: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { addToCart, hover } = dropdownSlice.actions;
export default dropdownSlice.reducer;
