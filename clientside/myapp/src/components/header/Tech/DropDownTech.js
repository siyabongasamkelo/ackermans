import React from "react";
import DropDownComp from "../Dropdowns/DropDownComp";
import { audio, power, techAccessories } from "./TechData";

const DropDownTech = () => {
  const empty = [""];
  return (
    <>
      <DropDownComp
        products={[audio, power, techAccessories, empty, empty, empty]}
        headers={["AUDIO", "POWERBANKS & CHARGERS", "ACCESSORIES", "", "", ""]}
        classNames={"tech"}
      />
    </>
  );
};

export default DropDownTech;
