import DropDownComp from "../Dropdowns/DropDownComp";
import { newborn, babyEssentialss, boys3to36s, girls3to36 } from "./BabyData";

const DropDownBaby = () => {
  const empty = [""];
  const babySale = [
    "LIMITED EDITION",
    "CHRISTMAS",
    "LILLY + SID",
    "TURTLEDOVE LONDON",
    "MY FIRST WARDROBE",
  ];
  return (
    <>
      <DropDownComp
        products={[
          newborn,
          boys3to36s,
          girls3to36,
          empty,
          babyEssentialss,

          babySale,
        ]}
        headers={[
          "NEWBORN",
          "BOYS 3-36 MONTHS",
          "GIRLS 3-36 MONTHS",

          "",
          "BABY ESSENTIALS",
          "SALE",
        ]}
        classNames={"baby"}
      />
    </>
  );
};

export default DropDownBaby;
