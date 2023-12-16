import { createSlice } from "@reduxjs/toolkit";
import { showReducer } from "./Reducers/Showreducer";
import { closeReducer } from "./Reducers/closeReducer";

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
      showLimitedEdition: false,
      //-------------states for the beauty menu ----------------//
      showBeauty: false,
    },
  },
  reducers: {
    show: showReducer,

    closeAll: closeReducer,
  },
});

export const { show, closeAll } = HeadrsLinkSlice.actions;
export default HeadrsLinkSlice.reducer;
