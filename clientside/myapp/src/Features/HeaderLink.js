import { createSlice } from "@reduxjs/toolkit";

export const HeadrsLinkSlice = createSlice({
  name: "HeaderLink",
  initialState: {
    value: {
      showSlider: false,
      showMenu: false,
      //-------------states for the womans menu ----------------//
      showWoman: false,
      showLingerie: false,
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
      if (action.payload === "Woman") {
        state.value.showMenu = false;
        state.value.showWoman = true;
      }
    },
    closeAll: (state, action) => {
      state.value.showMenu = false;
      state.value.showWoman = false;
      state.value.showSlider = false;
    },
  },
});

export const { show, closeAll } = HeadrsLinkSlice.actions;
export default HeadrsLinkSlice.reducer;
