import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  closeIts,
  showMenu,
  closeAll,
  showClothing,
  showTops,
  showTshirts,
} from "../../../Features/HeaderLinks";

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

const Clothing = () => {
  const dispatch = useDispatch();
  const showClothings = useSelector((state) => state.header.value.showClothing);

  const clothing = [
    "View all in Clothing",
    "Tops",
    "T-Shirts",
    "Pants",
    "Demin Jeans",
    "Shorts",
    "Skirts",
    "Dresses Jumpsuits",
  ];

  return (
    <>
      {showClothings ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Clothing
          </div>
          <XLg
            onClick={() => {
              dispatch(closeAll());
            }}
          />
        </Top>
      ) : (
        ""
      )}
      {showClothings
        ? clothing.map((clothing) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {
                  if (clothing === "Tops") {
                    dispatch(showClothing());
                    dispatch(showTops());
                  }
                  if (clothing === "T-Shirts") {
                    dispatch(showClothing());
                    dispatch(showTshirts());
                  }
                }}
              >
                {clothing} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Clothing;
