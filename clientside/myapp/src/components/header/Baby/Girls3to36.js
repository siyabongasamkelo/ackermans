import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../Features/HeaderLinks";
import { girls3to36 } from "./BabyData";

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

const Girls3to36 = () => {
  const dispatch = useDispatch();
  const showGirls3to36 = useSelector(
    (state) => state.header.value.showGirls3to36
  );

  return (
    <>
      {showGirls3to36 ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Girls 3-36 Months
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
      {showGirls3to36
        ? girls3to36.map((boys3to36) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {boys3to36} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Girls3to36;
