import HeaderMenuComp from "../HeaderMenuComp";
import { baby } from "../MenuData";

const BabyMenu = () => {
  return (
    <>
      <HeaderMenuComp data={baby} title={"BABY"} shows={"showBaby"} />
    </>
  );
};

export default BabyMenu;
