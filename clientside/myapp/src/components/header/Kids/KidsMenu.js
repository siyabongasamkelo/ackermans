import React from "react";
import HeaderMenuComp from "../HeaderMenuComp";
import { kids } from "../MenuData";
import { boys, girls, lilly, school, swimShops } from "./KidsData";

const KidsMenu = () => {
  return (
    <>
      <HeaderMenuComp data={kids} title={"KIDS"} shows={"showKids"} />
      <HeaderMenuComp
        data={boys}
        title={"BOYS 2 TO 10 YEARS"}
        shows={"showBoys2To10Years"}
      />
      <HeaderMenuComp
        data={girls}
        title={"GIRLS 2 TO 10 YEARS"}
        shows={"showGirls2To10Years"}
      />
      <HeaderMenuComp data={school} title={"SCHOOL"} shows={"showSchool"} />
      <HeaderMenuComp
        data={swimShops}
        title={"SWIM SHOP"}
        shows={"showSwimShop"}
      />
      <HeaderMenuComp
        data={lilly}
        title={"LILLY + SID"}
        shows={"showKidsLillyPlusSid"}
      />
    </>
  );
};

export default KidsMenu;
