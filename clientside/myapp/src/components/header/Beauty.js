import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  showMenu,
  closeAll,
  closeIts,
  showBeauty,
  showMakeUp,
  showBathAndBody,
  showSkincare,
  showOralCare,
  showFragrance,
  showBrands,
} from "../../Features/HeaderLinks";
import styled from "styled-components";
import { beauty } from "./MenuData";

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

const Beauty = () => {
  const dispatch = useDispatch();
  const showBeautys = useSelector((state) => state.header.value.showBeauty);

  return (
    <>
      {showBeautys ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Beauty
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
      {showBeautys
        ? beauty.map((beauty) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {
                  if (beauty === "Makeup") {
                    dispatch(showBeauty());
                    dispatch(showMakeUp());
                  }
                  if (beauty === "Bath & Body") {
                    dispatch(showBeauty());
                    dispatch(showBathAndBody());
                  }
                  if (beauty === "Skincare") {
                    dispatch(showBeauty());
                    dispatch(showSkincare());
                  }
                  if (beauty === "Oral Care") {
                    dispatch(showBeauty());
                    dispatch(showOralCare());
                  }
                  if (beauty === "Fragrance") {
                    dispatch(showBeauty());
                    dispatch(showFragrance());
                  }
                  if (beauty === "Brands") {
                    dispatch(showBeauty());
                    dispatch(showBrands());
                  }
                }}
              >
                {beauty} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Beauty;
