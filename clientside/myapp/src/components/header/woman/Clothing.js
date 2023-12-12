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
  showPants,
  showDeminJeans,
  showShorts,
  showSkirt,
  showDressAndJump,
} from "../../../Features/HeaderLinks";
import { clothing } from "./WomanData";

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
                  if (clothing === "Pants") {
                    dispatch(showClothing());
                    dispatch(showPants());
                  }
                  if (clothing === "Demin Jeans") {
                    dispatch(showClothing());
                    dispatch(showDeminJeans());
                  }
                  if (clothing === "Shorts") {
                    dispatch(showClothing());
                    dispatch(showShorts());
                  }
                  if (clothing === "Skirts") {
                    dispatch(showClothing());
                    dispatch(showSkirt());
                  }
                  if (clothing === "Dresses Jumpsuits") {
                    dispatch(showClothing());
                    dispatch(showDressAndJump());
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
