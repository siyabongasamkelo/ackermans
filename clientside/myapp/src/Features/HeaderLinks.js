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
      //-------------------menu for womans------------------------//
      showClothing: false,
      showLingerieAndSleep: false,
      showShoes: false,
      showAccessories: false,
      showActiveware: false,
      showLimitedEdtion: false,
      // ------- states for womans clothing menu -------------//
      showTops: false,
      showTshirts: false,
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
      state.value.showClothing = !state.value.showClothing;
      state.value.showMenu = false;
    },
    showLingerieAndSleep: (state, action) => {
      state.value.showLingerieAndSleep = true;
      state.value.showMenu = false;
    },
    showShoes: (state, action) => {
      state.value.showShoes = true;
      state.value.showMenu = false;
    },
    showAccessories: (state, action) => {
      state.value.showAccessories = true;
      state.value.showMenu = false;
    },
    showActiveware: (state, action) => {
      state.value.showActiveware = true;
      state.value.showMenu = false;
    },
    showLimitedEdtion: (state, action) => {
      state.value.showLimitedEdtion = true;
      state.value.showMenu = false;
    },
    showTops: (state, action) => {
      state.value.showTops = true;
      state.value.showMenu = false;
    },
    showTshirts: (state, action) => {
      state.value.showTshirts = true;
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
      // ------- states for womans menu -------------//
      state.value.showClothing = false;
      state.value.showLingerieAndSleep = false;
      state.value.showShoes = false;
      state.value.showAccessories = false;
      state.value.showActiveware = false;
      state.value.showLimitedEdtion = false;
      // ------- states for womans clothing menu -------------//
      state.value.showTops = false;
      state.value.showTshirts = false;
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
  showShoes,
  showAccessories,
  showActiveware,
  showLimitedEdtion,
  showTops,
  showTshirts,
  closeAll,
} = HeadrsLinksSlice.actions;
export default HeadrsLinksSlice.reducer;
