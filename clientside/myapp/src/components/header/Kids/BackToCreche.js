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

const BackToCrech = () => {
  const dispatch = useDispatch();
  const showBackToCrech = useSelector(
    (state) => state.header.value.showBackToCrech
  );

  const backToCrech = ["View all in Back To Crech", "Boys", "Girls"];

  return (
    <>
      {showBackToCrech ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Back To Crech
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
      {showBackToCrech
        ? backToCrech.map((crech) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {crech} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default BackToCrech;