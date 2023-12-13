import React from "react";
import HeaderSliderComp from "../HeaderSliderComp";
import { clothing, lingerieAndSleep } from "./WomanData";

const WomanSliders = () => {
  return (
    <>
      <HeaderSliderComp data={clothing} shows={"showWoman"} title={"WOMAN"} />
      <HeaderSliderComp
        data={lingerieAndSleep}
        shows={"showWoman"}
        title={"WOMAN"}
      />
    </>
  );
};

export default WomanSliders;
