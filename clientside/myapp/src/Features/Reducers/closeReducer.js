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
};