import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../Features/HeaderLinks";
import { brands } from "./BeautyData";

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

const Brands = () => {
  const dispatch = useDispatch();
  const showBrands = useSelector((state) => state.header.value.showBrands);

  return (
    <>
      {showBrands ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Brands
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
      {showBrands
        ? brands.map((frangrance) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {frangrance} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Brands;
