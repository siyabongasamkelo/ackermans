import { createSlice } from "@reduxjs/toolkit";

export const HeadrsLinksSlice = createSlice({
  name: "HeadrsLinks",
  initialState: {
    value: {
      closeIt: false,
      showMenu: false,
      showWomans: false,
      showBeauty: false,
      showBaby: false,
      showKids: false,
      showTeens: false,
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
      state.value.showBeauty = true;
      state.value.showMenu = false;
    },
    showBaby: (state, action) => {
      state.value.showBaby = true;
      state.value.showMenu = false;
    },
    showKids: (state, action) => {
      state.value.showKids = true;
      state.value.showMenu = false;
    },
    showTeens: (state, action) => {
      state.value.showTeens = true;
      state.value.showMenu = false;
    },
    closeAll: (state, action) => {
      state.value.closeIt = false;
      state.value.showWomans = false;
      state.value.showMenu = false;
      state.value.showBeauty = false;
      state.value.showBaby = false;
      state.value.showKids = false;
    },
  },
});

export const {
  closeIts,
  showMenu,
  showWoman,
  showBeauty,
  showBaby,
  showKids,
  showTeens,
  closeAll,
} = HeadrsLinksSlice.actions;
export default HeadrsLinksSlice.reducer;
