import HeaderMenuComp from "../HeaderMenuComp";
import { homeware } from "../MenuData";
import { bathroom, drinkAndLunch } from "./HomewearData";

const HomewearMenu = () => {
  return (
    <>
      <HeaderMenuComp
        data={homeware}
        title={"HOMEWARE"}
        shows={"showHomeware"}
      />
      <HeaderMenuComp
        data={bathroom}
        title={"BATHROOM"}
        shows={"showBathroom"}
      />
      <HeaderMenuComp
        data={drinkAndLunch}
        title={"DRINKWARE & LUNCHWARE"}
        shows={"showDrinkAndLunch"}
      />
    </>
  );
};

export default HomewearMenu;
