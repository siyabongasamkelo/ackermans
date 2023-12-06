import { CaretRightFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { showWoman } from "../Features/HeaderLinks";
import { showMenu } from "../Features/HeaderLinks";
const Menu = () => {
  const dispatch = useDispatch();
  const showMenus = useSelector((state) => state.header.value.closeIt);

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
      {showMenus
        ? themenu.map((menu) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {
                  if (menu === "Woman") {
                    // setShowWomans(true);
                    dispatch(showWoman());
                    dispatch(showMenu());
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
