import React from "react";
import DropDownComp from "../Dropdowns/DropDownComp";
import {
  accessories,
  activeWare,
  clothing,
  lingerieAndSleep,
  shoes,
} from "./WomanData";

const DropDownWoman = () => {
  const sale = [
    "LIMITED EDITION",
    "THE LINGERIE SHOP",
    "THE DEMIN SHOP",
    "TRENDING",
    "CHRISTMAS",
    "SUMMER-WARE CAPSULE",
  ];

  return (
    <>
      <DropDownComp
        products={[
          clothing,
          lingerieAndSleep,
          shoes,
          accessories,
          activeWare,
          sale,
        ]}
        headers={[
          "CLOTHING",
          "LINGERIE & SLEEPWARE",
          "SHOES",
          "ACCESSORIES",
          "ACTIVEWARE",
          "SALE",
        ]}
        classNames={"woman"}
      />
    </>
  );
};

export default DropDownWoman;
