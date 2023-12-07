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
      showCharacter: false,
      showHomeware: false,
      showTech: false,
      showFinance: false,
      showClothing: false,
      showLingerieAndSleep: false,
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
      state.value.showWomans = !state.value.showWomans;
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
    showCharacter: (state, action) => {
      state.value.showCharacter = true;
      state.value.showMenu = false;
    },
    showHomeware: (state, action) => {
      state.value.showHomeware = true;
      state.value.showMenu = false;
    },
    showTech: (state, action) => {
      state.value.showTech = true;
      state.value.showMenu = false;
    },
    showFinance: (state, action) => {
      state.value.showFinance = true;
      state.value.showMenu = false;
    },
    showClothing: (state, action) => {
      state.value.showClothing = true;
      state.value.showMenu = false;
    },
    showLingerieAndSleep: (state, action) => {
      state.value.showLingerieAndSleep = true;
      state.value.showMenu = false;
    },
    closeAll: (state, action) => {
      state.value.closeIt = false;
      state.value.showWomans = false;
      state.value.showMenu = false;
      state.value.showBeauty = false;
      state.value.showBaby = false;
      state.value.showKids = false;
      state.value.showCharacter = false;
      state.value.showTeens = false;
      state.value.showHomeware = false;
      state.value.showTech = false;
      state.value.showFinance = false;
      state.value.showClothing = false;
      state.value.showLingerieAndSleep = false;
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
  showCharacter,
  showHomeware,
  showTech,
  showFinance,
  showClothing,
  showLingerieAndSleep,
  closeAll,
} = HeadrsLinksSlice.actions;
export default HeadrsLinksSlice.reducer;
