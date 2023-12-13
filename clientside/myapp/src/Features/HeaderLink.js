import { createSlice } from "@reduxjs/toolkit";

export const HeadrsLinkSlice = createSlice({
  name: "HeaderLink",
  initialState: {
    value: {
      showMenu: false,
      //-------------states for the womans menu ----------------//
      showWoman: false,
    },
  },
  reducers: {
    show: (state, action) => {
      if (action.payload === "menu") {
        state.value.showMenu = !state.value.showMenu;
      }

      //-------------states for the womans menu ----------------//

      if (action.payload === "Woman") {
        state.value.showMenu = false;
        state.value.showWoman = !state.value.showWoman;
      }
    },
    closeAll: (state, action) => {
      state.value.showMenu = false;
      state.value.showWoman = false;
    },
  },
});

export const { show, closeAll } = HeadrsLinkSlice.actions;
export default HeadrsLinkSlice.reducer;
