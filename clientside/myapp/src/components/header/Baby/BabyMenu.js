import HeaderMenuComp from "../HeaderMenuComp";
import { baby } from "../MenuData";
import {
  LimitedEditions,
  babyEssentialss,
  boys3to36s,
  firstWardrobe,
  girls3to36,
  lillyAndSid,
  newborn,
} from "./BabyData";

const BabyMenu = () => {
  return (
    <>
      <HeaderMenuComp data={baby} title={"BABY"} shows={"showBaby"} />
      <HeaderMenuComp data={newborn} title={"NEWBORN"} shows={"showNewborn"} />
      <HeaderMenuComp
        data={boys3to36s}
        title={"BOYS 3-36 MONTHS"}
        shows={"showBoys3To36"}
      />
      <HeaderMenuComp
        data={girls3to36}
        title={"GIRLS 3-36 MONTHS"}
        shows={"showGirls3To36"}
      />
      <HeaderMenuComp
        data={babyEssentialss}
        title={"BABY ESSENTIALS"}
        shows={"showBabyEssentials"}
      />
      <HeaderMenuComp
        data={LimitedEditions}
        title={"LIMITED EDITION"}
        shows={"showBabyLimitedEdition"}
      />
      <HeaderMenuComp
        data={lillyAndSid}
        title={"LILLY + SID"}
        shows={"showLillyPlusSid"}
      />
      <HeaderMenuComp
        data={firstWardrobe}
        title={"MY FIRST WARDDROBE"}
        shows={"showFirstWardrobe"}
      />
    </>
  );
};

export default BabyMenu;
