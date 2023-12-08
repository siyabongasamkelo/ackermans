import { createSlice } from "@reduxjs/toolkit";

export const HeadrsLinksSlice = createSlice({
  name: "HeadrsLinks",
  initialState: {
    value: {
      closeIt: false,
      showMenu: false,
      showWomans: false,
      showBeauty: false,
      showBaby: false,
      showKids: false,
      showTeens: false,
      showCharacter: false,
      showHomeware: false,
      showTech: false,
      showFinance: false,
      //-------------------menu for womans------------------------//
      showClothing: false,
      showLingerieAndSleep: false,
      showShoes: false,
      showAccessories: false,
      showActiveware: false,
      showLimitedEdtion: false,
      // ------- states for womans clothing menu -------------//
      showTops: false,
      showTshirts: false,
      showPants: false,
      showDeminJeans: false,
      showShorts: false,
      showSkirt: false,
      showDressAndJump: false,
      // ------- states for womans clothing lingerie & Sleep -------------//
      showBras: false,
      showPanties: false,
      showSeamFree: false,
      showShapeWare: false,
      showSocksAndHorsery: false,
      showLingerieEssentials: false,
      showSleepWare: false,
      // ------- states for womans clothing shoes -------------//
      showHeels: false,
      showPumpsAndFlats: false,
      showSandals: false,
      showSneakersAndTrainers: false,
      // ------- states for womans clothing accessoris -------------//
      showBagAndWallets: false,
      showHeadgear: false,
      // ------- states for womans clothing activeware -------------//
      showActiveTop: false,
      showActivePants: false,
    },
  },
  reducers: {
    closeIts: (state, action) => {
      state.value.closeIt = true;
    },
    showMenu: (state, action) => {
      state.value.showMenu = true;
    },
    showWoman: (state, action) => {
      state.value.showWomans = !state.value.showWomans;
      state.value.showMenu = false;
    },
    showBeauty: (state, action) => {
      state.value.showBeauty = true;
      state.value.showMenu = false;
    },
    showBaby: (state, action) => {
      state.value.showBaby = true;
      state.value.showMenu = false;
    },
    showKids: (state, action) => {
      state.value.showKids = true;
      state.value.showMenu = false;
    },
    showTeens: (state, action) => {
      state.value.showTeens = true;
      state.value.showMenu = false;
    },
    showCharacter: (state, action) => {
      state.value.showCharacter = true;
      state.value.showMenu = false;
    },
    showHomeware: (state, action) => {
      state.value.showHomeware = true;
      state.value.showMenu = false;
    },
    showTech: (state, action) => {
      state.value.showTech = true;
      state.value.showMenu = false;
    },
    showFinance: (state, action) => {
      state.value.showFinance = true;
      state.value.showMenu = false;
    },
    showClothing: (state, action) => {
      state.value.showClothing = !state.value.showClothing;
      state.value.showMenu = false;
    },
    showLingerieAndSleep: (state, action) => {
      state.value.showLingerieAndSleep = !state.value.showLingerieAndSleep;
      state.value.showMenu = false;
    },
    showShoes: (state, action) => {
      state.value.showShoes = !state.value.showShoes;
      state.value.showMenu = false;
    },
    showAccessories: (state, action) => {
      state.value.showAccessories = !state.value.showAccessories;
      state.value.showMenu = false;
    },
    showActiveware: (state, action) => {
      state.value.showActiveware = !state.value.showActiveware;
      state.value.showMenu = false;
    },
    showLimitedEdtion: (state, action) => {
      state.value.showLimitedEdtion = true;
      state.value.showMenu = false;
    },
    showTops: (state, action) => {
      state.value.showTops = true;
      state.value.showMenu = false;
    },
    showTshirts: (state, action) => {
      state.value.showTshirts = true;
      state.value.showMenu = false;
    },
    showPants: (state, action) => {
      state.value.showPants = true;
      state.value.showMenu = false;
    },
    showDeminJeans: (state, action) => {
      state.value.showDeminJeans = true;
      state.value.showMenu = false;
    },
    showShorts: (state, action) => {
      state.value.showShorts = true;
      state.value.showMenu = false;
    },
    showSkirt: (state, action) => {
      state.value.showSkirt = true;
      state.value.showMenu = false;
    },
    showDressAndJump: (state, action) => {
      state.value.showDressAndJump = true;
      state.value.showMenu = false;
    },
    showBras: (state, action) => {
      state.value.showBras = true;
      state.value.showMenu = false;
    },
    showPanties: (state, action) => {
      state.value.showPanties = true;
      state.value.showMenu = false;
    },
    showSeamFree: (state, action) => {
      state.value.showSeamFree = true;
      state.value.showMenu = false;
    },
    showShapeWare: (state, action) => {
      state.value.showShapeWare = true;
      state.value.showMenu = false;
    },
    showSocksAndHorsery: (state, action) => {
      state.value.showSocksAndHorsery = true;
      state.value.showMenu = false;
    },
    showLingerieEssentials: (state, action) => {
      state.value.showLingerieEssentials = true;
      state.value.showMenu = false;
    },
    showSleepWare: (state, action) => {
      state.value.showSleepWare = true;
      state.value.showMenu = false;
    },
    showHeels: (state, action) => {
      state.value.showHeels = true;
      state.value.showMenu = false;
    },
    showPumpsAndFlats: (state, action) => {
      state.value.showPumpsAndFlats = true;
      state.value.showMenu = false;
    },
    showSandals: (state, action) => {
      state.value.showSandals = true;
      state.value.showMenu = false;
    },
    showSneakersAndTrainers: (state, action) => {
      state.value.showSneakersAndTrainers = true;
      state.value.showMenu = false;
    },
    showBagAndWallets: (state, action) => {
      state.value.showBagAndWallets = true;
      state.value.showMenu = false;
    },
    showHeadgear: (state, action) => {
      state.value.showHeadgear = true;
      state.value.showMenu = false;
    },
    showActiveTop: (state, action) => {
      state.value.showActiveTop = true;
      state.value.showMenu = false;
    },
    showActivePants: (state, action) => {
      state.value.showActivePants = true;
      state.value.showMenu = false;
    },
    closeAll: (state, action) => {
      state.value.closeIt = false;
      state.value.showWomans = false;
      state.value.showMenu = false;
      state.value.showBeauty = false;
      state.value.showBaby = false;
      state.value.showKids = false;
      state.value.showCharacter = false;
      state.value.showTeens = false;
      state.value.showHomeware = false;
      state.value.showTech = false;
      state.value.showFinance = false;
      // ------- states for womans menu -------------//
      state.value.showClothing = false;
      state.value.showLingerieAndSleep = false;
      state.value.showShoes = false;
      state.value.showAccessories = false;
      state.value.showActiveware = false;
      state.value.showLimitedEdtion = false;
      // ------- states for womans clothing menu -------------//
      state.value.showTops = false;
      state.value.showTshirts = false;
      state.value.showPants = false;
      state.value.showDeminJeans = false;
      state.value.showShorts = false;
      state.value.showSkirt = false;
      state.value.showDressAndJump = false;

      // ------- states for womans clothing lingerie -------------//
      state.value.showBras = false;
      state.value.showPanties = false;
      state.value.showSeamFree = false;
      state.value.showShapeWare = false;
      state.value.showSocksAndHorsery = false;
      state.value.showLingerieEssentials = false;
      state.value.showSleepWare = false;
      // ------- states for womans clothing shoes -------------//
      state.value.showHeels = false;
      state.value.showPumpsAndFlats = false;
      state.value.showSandals = false;
      state.value.showSneakersAndTrainers = false;
      // ------- states for womans clothing accessories -------------//
      state.value.showBagAndWallets = false;
      state.value.showHeadgear = false;
      // ------- states for womans clothing activeware -------------//
      state.value.showActiveTop = false;
      state.value.showActivePants = false;
    },
  },
});

export const {
  closeIts,
  showMenu,
  showWoman,
  showBeauty,
  showBaby,
  showKids,
  showTeens,
  showCharacter,
  showHomeware,
  showTech,
  showFinance,
  showClothing,
  showLingerieAndSleep,
  showShoes,
  showAccessories,
  showActiveware,
  showLimitedEdtion,
  showTops,
  showTshirts,
  showPants,
  showDeminJeans,
  showShorts,
  showSkirt,
  showDressAndJump,
  showBras,
  showPanties,
  showSeamFree,
  showShapeWare,
  showSocksAndHorsery,
  showLingerieEssentials,
  showSleepWare,
  showHeels,
  showPumpsAndFlats,
  showSandals,
  showSneakersAndTrainers,
  showBagAndWallets,
  showHeadgear,
  showActiveTop,
  showActivePants,
  closeAll,
} = HeadrsLinksSlice.actions;
export default HeadrsLinksSlice.reducer;
