import React from "react";
import DropDownComp from "../Dropdowns/DropDownComp";
import { boys, girls, school } from "./KidsData";

const DropDownKids = () => {
  const empty = [""];
  const kidsSale = [
    "LIMITED EDITION",
    "THE DEMIN SHOP",
    "CHRISTMAS",
    "SWIM SHOP",
    "LILLY + SID",
  ];
  return (
    <>
      <DropDownComp
        products={[boys, girls, empty, empty, school, kidsSale]}
        headers={[
          "BOYS 2-10 YEARS",
          "GIRLS 2-10 YEARS",
          "",
          "",
          "SCHOOL",
          "SALE",
        ]}
        classNames={"kids"}
      />
    </>
  );
};

export default DropDownKids;
