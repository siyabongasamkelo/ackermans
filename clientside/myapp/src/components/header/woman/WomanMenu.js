import {
  accessories,
  activeWare,
  clothing,
  limitedEdition,
  lingerieAndSleep,
  shoes,
} from "./WomanData";
import { woman } from "../MenuData";
import HeaderMenuComp from "../HeaderMenuComp";

const WomansMenu = () => {
  return (
    <>
      <HeaderMenuComp data={woman} shows={"showWoman"} title={"WOMAN"} />

      <HeaderMenuComp
        data={lingerieAndSleep}
        shows={"showLingerie"}
        title={"LINGERIE & SLEEPWARE"}
      />

      <HeaderMenuComp
        data={clothing}
        shows={"showClothing"}
        title={"CLOTHING"}
      />

      <HeaderMenuComp data={shoes} shows={"showShoes"} title={"SHOES"} />

      <HeaderMenuComp
        data={accessories}
        shows={"showAccessories"}
        title={"ACCESSORIES"}
      />

      <HeaderMenuComp
        data={activeWare}
        shows={"showActiveware"}
        title={"ACTIVEWEAR"}
      />

      <HeaderMenuComp
        data={limitedEdition}
        shows={"showLimitedEdition"}
        title={"LIMITED EDTION"}
      />
    </>
  );
};

export default WomansMenu;
