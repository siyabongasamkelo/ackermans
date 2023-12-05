import { useState } from "react";
import { CaretRightFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";

const Womans = () => {
  // const [showWomans, setShowWomans] = useState(false);

  const showWomans = useSelector((state) => state.header.value.showWomans);
  // console.log(theCart);
  const woman = [
    "View all in Woman",
    "Sale",
    "Clothing",
    "Lingerie & Sleepwear",
    "Shoes",
    "Accessories",
    "ActiveWare",
    "Limited Edition",
    "The LIngerie Shop",
    "The Denim Shop",
    "Bra Guide",
    "Trnding",
    "Christmas",
    "Summer-Ware Capsule",
  ];

  return (
    <>
      {showWomans
        ? woman.map((woman) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {
                  // if (woman === "Clothing") {
                  //   setShowMenu(false);
                  //   setShowWomans(false);
                  //   setShowClothing(true);
                  // }
                  // if (woman === "Lingerie & Sleepwear") {
                  //   setShowMenu(false);
                  //   setShowWomans(false);
                  //   setShowLingerieAndSleep(true);
                  // }
                  // if (woman === "Shoes") {
                  //   setShowMenu(false);
                  //   setShowWomans(false);
                  //   setShowShoes(true);
                  // }
                  // if (woman === "Accessories") {
                  //   setShowMenu(false);
                  //   setShowWomans(false);
                  //   setShowAccessories(true);
                  // }
                  // if (woman === "ActiveWare") {
                  //   setShowMenu(false);
                  //   setShowWomans(false);
                  //   setShowActiveware(true);
                  // }
                  // if (woman === "Limited Edition") {
                  //   setShowMenu(false);
                  //   setShowWomans(false);
                  //   setShowLimittedEdition(true);
                  // }
                }}
              >
                {woman} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Womans;
