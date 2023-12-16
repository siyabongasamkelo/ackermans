export const showReducer = (state, action) => {
  if (action.payload === "menu") {
    state.value.showSlider = !state.value.showSlider;
    state.value.showMenu = !state.value.showMenu;
  }

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

  //-------------states for the beauty menu ----------------//

  if (action.payload === "Beauty") {
    state.value.showMenu = false;
    state.value.showBeauty = true;
  }

  if (action.payload === "Makeup") {
    state.value.showMenu = false;
    state.value.showBeauty = false;
    state.value.showMakeup = true;
  }

  if (action.payload === "Bath & Body") {
    state.value.showMenu = false;
    state.value.showBeauty = false;
    state.value.showBathAndBody = true;
  }

  if (action.payload === "Skincare") {
    state.value.showMenu = false;
    state.value.showBeauty = false;
    state.value.showSkincare = true;
  }

  if (action.payload === "Oral Care") {
    state.value.showMenu = false;
    state.value.showBeauty = false;
    state.value.showOralcare = true;
  }

  if (action.payload === "Fragrance") {
    state.value.showMenu = false;
    state.value.showBeauty = false;
    state.value.showFragrance = true;
  }

  if (action.payload === "Brands") {
    state.value.showMenu = false;
    state.value.showBeauty = false;
    state.value.showBrands = true;
  }

  //-------------states for the baby menu ----------------//
  if (action.payload === "Baby") {
    state.value.showMenu = false;
    state.value.showBaby = true;
  }
  if (action.payload === "Newborn") {
    state.value.showMenu = false;
    state.value.showBaby = false;
    state.value.showNewborn = true;
  }
  if (action.payload === "Boys 3-36 Months") {
    state.value.showMenu = false;
    state.value.showBaby = false;
    state.value.showBoys3To36 = true;
  }
  if (action.payload === "Girls 3-36 Months") {
    state.value.showMenu = false;
    state.value.showBaby = false;
    state.value.showGirls3To36 = true;
  }
  if (action.payload === "Baby Esentials") {
    state.value.showMenu = false;
    state.value.showBaby = false;
    state.value.showBabyEssentials = true;
  }
  if (action.payload === "Limitted Edition") {
    state.value.showMenu = false;
    state.value.showBaby = false;
    state.value.showBabyLimitedEdition = true;
  }
  if (action.payload === "Lilly + Sid") {
    state.value.showMenu = false;
    state.value.showBaby = false;
    state.value.showLillyPlusSid = true;
  }
  if (action.payload === "My First Wardrobe") {
    state.value.showMenu = false;
    state.value.showBaby = false;
    state.value.showFirstWardrobe = true;
  }

  //-------------states for the kids menu ----------------//
  if (action.payload === "Kids") {
    state.value.showMenu = false;
    state.value.showKids = true;
  }
  if (action.payload === "Boys 2-10 Years") {
    state.value.showMenu = false;
    state.value.showKids = false;
    state.value.showBoys2To10Years = true;
  }
  if (action.payload === "Girls 2-10 Years") {
    state.value.showMenu = false;
    state.value.showKids = false;
    state.value.showGirls2To10Years = true;
  }
  if (action.payload === "School") {
    state.value.showMenu = false;
    state.value.showKids = false;
    state.value.showSchool = true;
  }
  if (action.payload === "Swim Shop") {
    state.value.showMenu = false;
    state.value.showKids = false;
    state.value.showSwimShop = true;
  }
  if (action.payload === "Lilly + Sids") {
    state.value.showMenu = false;
    state.value.showKids = false;
    state.value.showKidsLillyPlusSid = true;
  }
};
