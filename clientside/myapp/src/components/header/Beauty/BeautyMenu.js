import React from "react";
import HeaderMenuComp from "../HeaderMenuComp";
// import { makeUp } from "./BeautyData";
import { beauty } from "../MenuData";

const BeautyMenu = () => {
  return (
    <>
      <HeaderMenuComp data={beauty} title={"BEAUTY"} shows={"showBeauty"} />
    </>
  );
};

export default BeautyMenu;
