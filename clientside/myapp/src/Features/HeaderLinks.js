import { createSlice } from "@reduxjs/toolkit";

export const HeadrsLinksSlice = createSlice({
  name: "HeadrsLinks",
  initialState: {
    value: {
      closeIt: false,
    },
  },
  reducers: {
    showMenu: (state, action) => {
      state.value.closeIt = !state.value.closeIt;
    },
  },
});

export const { showMenu } = HeadrsLinksSlice.actions;
export default HeadrsLinksSlice.reducer;
