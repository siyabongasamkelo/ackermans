export const beautyReducer = (state, action) => {
  if (action.payload === "menu") {
    state.value.showSlider = !state.value.showSlider;
    state.value.showMenu = !state.value.showMenu;
  }
  if (action.payload === "test") {
    alert("gffgf");
  }
};
