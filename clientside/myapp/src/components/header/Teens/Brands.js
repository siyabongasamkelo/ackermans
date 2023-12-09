import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../Features/HeaderLinks";

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

const TeenBrands = () => {
  const dispatch = useDispatch();
  const showTeenBrands = useSelector(
    (state) => state.header.value.showTeenBrands
  );

  const brands = ["View all in Teen Brands", "Peanuts", "Barbie"];

  return (
    <>
      {showTeenBrands ? (
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
      {showTeenBrands
        ? brands.map((brands) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {brands} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default TeenBrands;
