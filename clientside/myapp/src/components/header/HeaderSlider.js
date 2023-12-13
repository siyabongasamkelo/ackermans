import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import HeaderSliderComp from "./HeaderSliderComp";
import { themenu, woman } from "./MenuData";

export const Popup = styled.div`
  height: 90vh;
  width: 100%;
  position: absolute;
  z-index: 2;
  .menu {
    background-color: rgba(0, 0, 0, 0.2);
    height: 50px;
    svg {
      margin-right: 20px;
    }
  }
  .list {
    height: 50px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    margin-left: 20px;
    svg {
      margin-right: 30px;
    }
  }
`;

const HeaderSlider = () => {
  const showMenu = useSelector((state) => state.headers.value.showMenu);

  // const showMenus = useSelector((state) => state.headers.value.showWoman);
  return (
    <>
      <Popup
        as={motion.div}
        animate={{
          x: showMenu ? -12 : -500,
        }}
        transition={{ duration: 0.5 }}
        className=" d-lg-none"
      >
        {/* This is for displaying the menu when */}
        <HeaderSliderComp data={themenu} shows={"showMenu"} title={"MENU"} />

        {/* This is for displaying the woman menu */}
        <HeaderSliderComp data={woman} shows={"showWoman"} title={"WOMAN"} />
      </Popup>
    </>
  );
};

export default HeaderSlider;
