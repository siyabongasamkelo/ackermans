import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../../Features/HeaderLinks";

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

const DressesAndJump = () => {
  const dispatch = useDispatch();
  const showDressAndJump = useSelector(
    (state) => state.header.value.showDressAndJump
  );

  const dressesAndJump = [
    "View all in Dresses & Jumpsuits",
    "Dresses",
    "Jumpsuits",
  ];

  return (
    <>
      {showDressAndJump ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Dresses And Jumpsuits
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
      {showDressAndJump
        ? dressesAndJump.map((clothing) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {clothing} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default DressesAndJump;
