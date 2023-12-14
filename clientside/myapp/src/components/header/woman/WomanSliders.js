import React from "react";
import HeaderSliderComp from "../HeaderSliderComp";
import {
  accessories,
  activeWare,
  clothing,
  lingerieAndSleep,
  shoes,
} from "./WomanData";
import { woman } from "../MenuData";

const WomanSliders = () => {
  return (
    <>
      <HeaderSliderComp data={woman} shows={"showWoman"} title={"WOMAN"} />

      <HeaderSliderComp
        data={lingerieAndSleep}
        shows={"showLingerie"}
        title={"LINGERIE & SLEEPWARE"}
      />

      <HeaderSliderComp
        data={clothing}
        shows={"showClothing"}
        title={"CLOTHING"}
      />

      <HeaderSliderComp data={shoes} shows={"showShoes"} title={"SHOES"} />

      <HeaderSliderComp
        data={accessories}
        shows={"showAccessories"}
        title={"ACCESSORIES"}
      />

      <HeaderSliderComp
        data={accessories}
        shows={"showAccessories"}
        title={"ACCESSORIES"}
      />

      <HeaderSliderComp
        data={activeWare}
        shows={"showActiveware"}
        title={"ACTIVEWEAR"}
      />
    </>
  );
};

export default WomanSliders;
