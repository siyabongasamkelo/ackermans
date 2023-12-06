import { CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  showBeauty,
  showWoman,
  showMenu,
  closeAll,
} from "../Features/HeaderLinks";

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
  console.log({ showMenus });

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
