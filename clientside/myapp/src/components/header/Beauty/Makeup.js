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

const Makeup = () => {
  const dispatch = useDispatch();
  const showMakeUp = useSelector((state) => state.header.value.showMakeUp);

  const makeUp = [
    "View all in Makeup",
    "Eyes",
    "Lips",
    "Face",
    "Cosmetic Accessories",
  ];

  return (
    <>
      {showMakeUp ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Makeup
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
      {showMakeUp
        ? makeUp.map((makeup) => {
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

export default Makeup;
