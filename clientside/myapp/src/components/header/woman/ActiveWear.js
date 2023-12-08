import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  closeIts,
  showMenu,
  closeAll,
  showActiveware,
  showActiveTop,
  showActivePants,
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

const ActiveWare = () => {
  const dispatch = useDispatch();
  const showActivewares = useSelector(
    (state) => state.header.value.showActiveware
  );

  const activeWare = ["View all in ActiveWare", "Top", "Pants"];

  return (
    <>
      {showActivewares ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            ActiveWare
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
      {showActivewares
        ? activeWare.map((clothing) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {
                  if (clothing === "Top") {
                    dispatch(showActiveware());
                    dispatch(showActiveTop());
                  }
                  if (clothing === "Pants") {
                    dispatch(showActiveware());
                    dispatch(showActivePants());
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

export default ActiveWare;
