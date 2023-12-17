import React from "react";
import DropDownComp from "../Dropdowns/DropDownComp";
import {
  makeUp,
  bathAndBody,
  brands,
  fragrance,
  oralCare,
  skincare,
} from "./BeautyData";

const DropDownBeauty = () => {
  return (
    <>
      <DropDownComp
        products={[makeUp, bathAndBody, skincare, oralCare, fragrance, brands]}
        headers={[
          "MAKEUP",
          "BATH&BODY",
          "SKINCARE",
          "ORAL CARE",
          "FRAGRANCE",
          "BRANDS",
        ]}
        classNames={"beauty"}
      />
    </>
  );
};

export default DropDownBeauty;
