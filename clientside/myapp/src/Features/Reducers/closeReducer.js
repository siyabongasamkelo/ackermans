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
  state.value.showBeauty = false;
};
