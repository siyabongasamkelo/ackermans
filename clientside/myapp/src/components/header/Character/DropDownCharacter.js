import DropDownComp from "../Dropdowns/DropDownComp";
import { baby, kids, homeware } from "./CharacterData";

const DropDownCharacter = () => {
  const characterSale = ["CHRISTMAS"];
  const empty = [""];
  const characterBrands = [
    "Disney",
    "Marvel",
    "Werner Bros",
    "DC Super Heroes",
    "Universal",
    "Nickelodeon",
    "Hasbro",
    "Mattel",
    "Other",
  ];
  return (
    <>
      <DropDownComp
        products={[baby, kids, homeware, empty, characterBrands, characterSale]}
        headers={["BABY", "KIDS", "HOMEWARE", "", "BRANDS", "SALE"]}
        classNames={"character"}
      />
    </>
  );
};

export default DropDownCharacter;
