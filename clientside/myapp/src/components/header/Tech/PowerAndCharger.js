import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../Features/HeaderLinks";
import { power } from "./TechData";

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

const PowerAndCharger = () => {
  const dispatch = useDispatch();
  const showPowerAndCharger = useSelector(
    (state) => state.header.value.showPowerAndCharger
  );

  return (
    <>
      {showPowerAndCharger ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Power Banks & Chargers
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
      {showPowerAndCharger
        ? power.map((power) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {power} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default PowerAndCharger;
