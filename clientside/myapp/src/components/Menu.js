import { CaretRightFill } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const Menu = () => {
  const showMenu = useSelector((state) => state.header.value.closeIt);
  //   const test = useSelector((state) => state.header.value.closeIt);

  //   console.log(test);

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
