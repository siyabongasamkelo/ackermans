import { createSlice } from "@reduxjs/toolkit";

export const HeadrsLinksSlice = createSlice({
  name: "HeadrsLinks",
  initialState: {
    value: {
      closeIt: false,
      showWomans: false,
    },
  },
  reducers: {
    showMenu: (state, action) => {
      state.value.closeIt = !state.value.closeIt;
    },
    showWoman: (state, action) => {
      state.value.showWomans = !state.value.showWomans;
    },
  },
});

export const { showMenu, showWoman } = HeadrsLinksSlice.actions;
export default HeadrsLinksSlice.reducer;
