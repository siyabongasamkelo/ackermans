import { createSlice } from "@reduxjs/toolkit";

export const HeadrsLinkSlice = createSlice({
  name: "HeaderLink",
  initialState: {
    value: {
      showSlider: false,
      showMenu: false,
      //-------------states for the womans menu ----------------//
      showWoman: false,
      showClothing: false,
      showLingerie: false,
      showShoes: false,
      showAccessories: false,
      showActiveware: false,
    },
  },
  reducers: {
    show: (state, action) => {
      if (action.payload === "menu") {
        state.value.showSlider = !state.value.showSlider;
        state.value.showMenu = !state.value.showMenu;
      }

      //-------------states for the womans menu ----------------//

      if (action.payload === "Woman") {
        state.value.showMenu = false;
        state.value.showWoman = true;
      }
      if (action.payload === "Clothing") {
        state.value.showMenu = false;
        state.value.showWoman = false;
        state.value.showClothing = true;
      }
      if (action.payload === "Lingerie & Sleepwear") {
        state.value.showMenu = false;
        state.value.showWoman = false;
        state.value.showLingerie = true;
      }
      if (action.payload === "Shoes") {
        state.value.showMenu = false;
        state.value.showWoman = false;
        state.value.showShoes = true;
      }
      if (action.payload === "Accessories") {
        state.value.showMenu = false;
        state.value.showWoman = false;
        state.value.showAccessories = true;
      }
      if (action.payload === "ActiveWare") {
        state.value.showMenu = false;
        state.value.showWoman = false;
        state.value.showActiveware = true;
      }
    },
    closeAll: (state, action) => {
      state.value.showMenu = false;
      //-------------states for the womans menu ----------------//
      state.value.showWoman = false;
      state.value.showSlider = false;
      state.value.showClothing = false;
      state.value.showShoes = false;
      state.value.showLingerie = false;
      state.value.showAccessories = false;
      state.value.showActiveware = false;
    },
  },
});

export const { show, closeAll } = HeadrsLinkSlice.actions;
export default HeadrsLinkSlice.reducer;
