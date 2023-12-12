import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../Features/HeaderLinks";
import { swimShops } from "./KidsData";

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

const SwimShops = () => {
  const dispatch = useDispatch();
  const showSwimShops = useSelector(
    (state) => state.header.value.showSwimShops
  );

  return (
    <>
      {showSwimShops ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Swim Shops
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
      {showSwimShops
        ? swimShops.map((limited) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {limited} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default SwimShops;
