import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { themenu } from "./MenuData";
import WomansMenu from "./woman/WomanMenu";
import HeaderMenuComp from "./HeaderMenuComp";
import BeautyMenu from "./Beauty/BeautyMenu";
import BabyMenu from "./Baby/BabyMenu";
import KidsMenu from "./Kids/KidsMenu";
import TeensMenu from "./Teens/TeensMenu";
import CharacterMenu from "./Character/CharacterMenu";
import HomewearMenu from "./Homewear/HomewearMenu";
import TechMenu from "./Tech/TechMenu";
import FinanceMenu from "./Finance/FinanceMenu";

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
  const showSlider = useSelector((state) => state.headers.value.showSlider);

  return (
    <>
      <Popup
        as={motion.div}
        animate={{
          x: showSlider ? -12 : -500,
        }}
        transition={{ duration: 0.5 }}
        className=" d-lg-none"
      >
        {/* This is for displaying the menu when */}

        <HeaderMenuComp data={themenu} shows={"showMenu"} title={"MENU"} />

        {/* This is for displaying the woman menu on mobile view */}
        <WomansMenu />
        <BeautyMenu />
        <BabyMenu />
        <KidsMenu />
        <TeensMenu />
        <CharacterMenu />
        <HomewearMenu />
        <FinanceMenu />
        <TechMenu />
      </Popup>
    </>
  );
};

export default HeaderSlider;
