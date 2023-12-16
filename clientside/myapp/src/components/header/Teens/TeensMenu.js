import HeaderMenuComp from "../HeaderMenuComp";
import { teens } from "../MenuData";
import {
  brands,
  graphic,
  limited,
  shopAll,
  teenBoys,
  teenGirls,
} from "./TeenData";

const TeensMenu = () => {
  return (
    <>
      <HeaderMenuComp data={teens} title={"TEENS"} shows={"showTeens"} />
      <HeaderMenuComp data={shopAll} title={"SHOP ALL"} shows={"showShopAll"} />
      <HeaderMenuComp
        data={teenBoys}
        title={"TEEN BOYS"}
        shows={"showTeenBoys"}
      />
      <HeaderMenuComp
        data={teenGirls}
        title={"TEEN GIRLS"}
        shows={"showTeenGirls"}
      />
      <HeaderMenuComp data={brands} title={"BRANDS"} shows={"showTeenBrands"} />
      <HeaderMenuComp
        data={graphic}
        title={"GRAPHIC TEES"}
        shows={"showGraphicTees"}
      />
      <HeaderMenuComp
        data={limited}
        title={"LIMITED EDITION"}
        shows={"showTeenLimitedEdition"}
      />
    </>
  );
};

export default TeensMenu;
