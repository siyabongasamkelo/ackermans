import React from "react";
import HeaderMenuComp from "../HeaderMenuComp";
// import { makeUp } from "./BeautyData";
import { beauty } from "../MenuData";
import {
  bathAndBody,
  brands,
  fragrance,
  makeUp,
  oralCare,
  skincare,
} from "./BeautyData";

const BeautyMenu = () => {
  return (
    <>
      <HeaderMenuComp data={beauty} title={"BEAUTY"} shows={"showBeauty"} />
      <HeaderMenuComp data={makeUp} title={"MAKEUP"} shows={"showMakeup"} />
      <HeaderMenuComp
        data={bathAndBody}
        title={"BATH & BODY"}
        shows={"showBathAndBody"}
      />
      <HeaderMenuComp
        data={skincare}
        title={"SKINCARE"}
        shows={"showSkincare"}
      />
      <HeaderMenuComp
        data={oralCare}
        title={"ORALCARE"}
        shows={"showOralcare"}
      />
      <HeaderMenuComp
        data={fragrance}
        title={"FRAGRANCE"}
        shows={"showFragrance"}
      />
      <HeaderMenuComp data={brands} title={"Brands"} shows={"showBrands"} />
    </>
  );
};

export default BeautyMenu;
