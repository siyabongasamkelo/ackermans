import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../Features/HeaderLinks";
import { boys3to36s } from "./BabyData";

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

const Boys3to36 = () => {
  const dispatch = useDispatch();
  const showBoys3to36 = useSelector(
    (state) => state.header.value.showBoys3to36
  );

  return (
    <>
      {showBoys3to36 ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Boys 3-36 Months
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
      {showBoys3to36
        ? boys3to36s.map((boys3to36) => {
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

export default Boys3to36;
