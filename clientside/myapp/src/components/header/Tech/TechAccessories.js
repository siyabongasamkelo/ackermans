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

const TechAccessories = () => {
  const dispatch = useDispatch();
  const showTechAccessories = useSelector(
    (state) => state.header.value.showTechAccessories
  );

  const accessories = ["View all in Accessories", "Watches", "Accessories"];

  return (
    <>
      {showTechAccessories ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Accessories
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
      {showTechAccessories
        ? accessories.map((accessories) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {accessories} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default TechAccessories;
