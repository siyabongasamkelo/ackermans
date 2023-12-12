import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../Features/HeaderLinks";
import { limited } from "./TeenData";

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

const LimitedEditionTeens = () => {
  const dispatch = useDispatch();
  const showTeenLimitedEdition = useSelector(
    (state) => state.header.value.showTeenLimitedEdition
  );

  return (
    <>
      {showTeenLimitedEdition ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Limited Edition
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
      {showTeenLimitedEdition
        ? limited.map((limited) => {
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

export default LimitedEditionTeens;
