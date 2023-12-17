import React from "react";
import DropDownComp from "../Dropdowns/DropDownComp";
import { bathroom, drinkAndLunch, partyAndDec } from "./HomewearData";

const DropDownHomewear = () => {
  const homewareSale = ["LIMITED EDITION", "NOVELTY ESSENTIALS"];
  const empty = [""];
  return (
    <>
      <DropDownComp
        products={[
          bathroom,
          drinkAndLunch,
          empty,
          empty,
          partyAndDec,
          homewareSale,
        ]}
        headers={[
          "BATHROOM",
          "DRINKWARE & LUNCHBOXES",
          "",
          "",
          "PARTY & DECORATIONS",
          "SALES",
        ]}
        classNames={"homeware"}
      />
    </>
  );
};

export default DropDownHomewear;
