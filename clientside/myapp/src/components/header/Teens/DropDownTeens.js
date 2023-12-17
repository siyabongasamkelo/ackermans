import DropDownComp from "../Dropdowns/DropDownComp";
import { shopAll, teenBoys, teenGirls, teenBrands } from "./TeenData";

const DropDownTeens = () => {
  const empty = [""];
  const teensSale = [
    "GRAPHIC TEES",
    "TROPICAL HEAT",
    "THE DEMIN SHOP",
    "LIMITED EDITION",
  ];
  return (
    <>
      <DropDownComp
        products={[shopAll, teenBoys, teenGirls, empty, teenBrands, teensSale]}
        headers={["SHOP ALL", "TEEN BOYS", "TEEN GIRLS", "", "BRANDS", "SALE"]}
        classNames={"teens"}
      />
    </>
  );
};

export default DropDownTeens;
