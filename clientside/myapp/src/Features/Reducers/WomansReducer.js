export const womansReducer = (state, action) => {
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
  if (action.payload === "Limited Edition") {
    state.value.showMenu = false;
    state.value.showWoman = false;
    state.value.showLimitedEdition = true;
  }
};
