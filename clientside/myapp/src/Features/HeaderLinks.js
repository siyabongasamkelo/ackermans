import { createSlice } from "@reduxjs/toolkit";

export const HeadrsLinksSlice = createSlice({
  name: "HeadrsLinks",
  initialState: {
    value: {
      closeIt: false,
      showMenu: false,
      showWomans: false,
      showBeauty: false,
    },
  },
  reducers: {
    closeIts: (state, action) => {
      state.value.closeIt = true;
    },
    showMenu: (state, action) => {
      state.value.showMenu = true;
    },
    showWoman: (state, action) => {
      state.value.showWomans = true;
      state.value.showMenu = false;
    },
    showBeauty: (state, action) => {
      state.value.showWomans = true;
      state.value.showMenu = false;
    },
    closeAll: (state, action) => {
      state.value.closeIt = false;
      state.value.showWomans = false;
      state.value.showMenu = false;
      state.value.showBeauty = false;
    },
  },
});

export const { closeIts, showMenu, showWoman, showBeauty, closeAll } =
  HeadrsLinksSlice.actions;
export default HeadrsLinksSlice.reducer;
