import { CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  showBeauty,
  showWoman,
  showMenu,
  closeAll,
  showBaby,
  showKids,
  showTeens,
  showCharacter,
  showHomeware,
  showTech,
  showFinance,
  showPromotions,
} from "../../Features/HeaderLinks";

import styled from "styled-components";

export const Top = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  height: 50px;
  svg {
    margin-right: 20px;
  }
  div {
    svg {
      margin-left: 20px;
    }
  }
`;

const Menu = () => {
  const dispatch = useDispatch();
  const showMenus = useSelector((state) => state.header.value.showMenu);

  const themenu = [
    "My Profile",
    "My Orders",
    "Shop",
    "Promotions",
    "Woman",
    "Beauty",
    "Baby",
    "Kids",
    "Teens",
    "Character",
    "Homeware",
    "Tech",
    "Cellular",
    "More",
    "Financtial Solutions",
    "Competions",
    "Ackermans",
    "Catalogues",
  ];

  return (
    <>
      {showMenus ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <h3>Menu</h3>
          <XLg
            onClick={() => {
              dispatch(showMenu());
              dispatch(closeAll());
            }}
          />
        </Top>
      ) : (
        ""
      )}
      {showMenus
        ? themenu.map((menu) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {
                  if (menu === "Woman") {
                    dispatch(showWoman());
                  }
                  if (menu === "Beauty") {
                    dispatch(showBeauty());
                  }
                  if (menu === "Baby") {
                    dispatch(showBaby());
                  }
                  if (menu === "Kids") {
                    dispatch(showKids());
                  }
                  if (menu === "Teens") {
                    dispatch(showTeens());
                  }
                  if (menu === "Character") {
                    dispatch(showCharacter());
                  }
                  if (menu === "Homeware") {
                    dispatch(showHomeware());
                  }
                  if (menu === "Tech") {
                    dispatch(showTech());
                  }
                  if (menu === "Financtial Solutions") {
                    dispatch(showFinance());
                  }
                  if (menu === "Promotions") {
                    dispatch(showPromotions());
                  }
                }}
              >
                {menu} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Menu;
