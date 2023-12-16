import HeaderMenuComp from "../HeaderMenuComp";
import { teens } from "../MenuData";

const TeensMenu = () => {
  return (
    <>
      <HeaderMenuComp data={teens} title={"TEENS"} shows={"showTeens"} />
    </>
  );
};

export default TeensMenu;
