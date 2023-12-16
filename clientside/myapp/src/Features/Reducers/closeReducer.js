export const closeReducer = (state, action) => {
  state.value.showMenu = false;
  //-------------states for the womans menu ----------------//
  state.value.showWoman = false;
  state.value.showSlider = false;
  state.value.showClothing = false;
  state.value.showShoes = false;
  state.value.showLingerie = false;
  state.value.showAccessories = false;
  state.value.showActiveware = false;
  state.value.showLimitedEdition = false;
  //-------------states for the womans menu ----------------//
  state.value.showBeauty = false;
  state.value.showMakeup = false;
  state.value.showBathAndBody = false;
  state.value.showSkincare = false;
  state.value.showOralcare = false;
  state.value.showFragrance = false;
  state.value.showBrands = false;
  //-------------states for the beauty menu ----------------//
  state.value.showBabay = false;
  state.value.showNewborn = false;
  state.value.showBoys3To36 = false;
  state.value.showGirls3To36 = false;
  state.value.showBabyEssentials = false;
  state.value.showBabyLimitedEdition = false;
  state.value.showLillyPlusSid = false;
  state.value.showFirstWardrobe = false;
  //-------------states for the kids menu ----------------//
  state.value.showKids = false;
  state.value.showBoys2To10Years = false;
  state.value.showGirls2To10Years = false;
  state.value.showSchool = false;
  state.value.showSwimShop = false;
  state.value.showKidsLillyPlusSid = false;
  //-------------states for the kids teens ----------------//
  state.value.showTeens = false;
  state.value.showShopAll = false;
  state.value.showTeenBoys = false;
  state.value.showTeenGirls = false;
  state.value.showTeenBrands = false;
  state.value.showGraphicTees = false;
  state.value.showTeenLimitedEdition = false;
};
