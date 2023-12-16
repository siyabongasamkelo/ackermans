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
      showMakeup: false,
      showBathAndBody: false,
      showSkincare: false,
      showOralcare: false,
      showFragrance: false,
      showBrands: false,

      //-------------states for the beauty menu ----------------//
      showBaby: false,
      showNewborn: false,
      showBoys3To36: false,
      showGirls3To36: false,
      showBabyEssentials: false,
      showBabyLimitedEdition: false,
      showLillyPlusSid: false,
      showFirstWardrobe: false,
      //-------------states for the kids menu ----------------//
      showKids: false,
      showBoys2To10Years: false,
      showGirls2To10Years: false,
      showSchool: false,
      showSwimShop: false,
      showKidsLillyPlusSid: false,
      //-------------states for the kids teens ----------------//
      showTeens: false,
      showShopAll: false,
      showTeenBoys: false,
      showTeenGirls: false,
      showTeenBrands: false,
      showGraphicTees: false,
      showTeenLimitedEdition: false,
      //-------------states for the kids teens ----------------//
      showCharacter: false,
      showCharacterKid: false,
    },
  },
  reducers: {
    show: showReducer,

    closeAll: closeReducer,
  },
});

export const { show, closeAll } = HeadrsLinkSlice.actions;
export default HeadrsLinkSlice.reducer;
