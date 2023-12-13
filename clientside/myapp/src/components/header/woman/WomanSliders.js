import React from "react";
import HeaderSliderComp from "../HeaderSliderComp";
import { clothing, lingerieAndSleep, shoes } from "./WomanData";
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
    </>
  );
};

export default WomanSliders;
