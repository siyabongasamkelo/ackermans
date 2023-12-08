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

const BathAndBody = () => {
  const dispatch = useDispatch();
  const showBathAndBody = useSelector(
    (state) => state.header.value.showBathAndBody
  );

  const bathAndBody = [
    "View all in Bath & Body",
    "Bath",
    "Toiletries",
    "Hair Care",
    "Bath & Body",
  ];

  return (
    <>
      {showBathAndBody ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Bath And Body
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
      {showBathAndBody
        ? bathAndBody.map((makeup) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {makeup} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default BathAndBody;
