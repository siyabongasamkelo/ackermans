import { CaretRightFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { showWoman } from "../Features/HeaderLinks";

const Menu = () => {
  const dispatch = useDispatch();
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
      {themenu.map((menu) => {
        return (
          <div
            className="list d-flex align-items-center justify-content-between"
            onClick={() => {
              if (menu === "Woman") {
                // setShowWomans(true);
                dispatch(showWoman);
              }
            }}
          >
            {menu} <CaretRightFill />
          </div>
        );
      })}
    </>
  );
};

export default Menu;
