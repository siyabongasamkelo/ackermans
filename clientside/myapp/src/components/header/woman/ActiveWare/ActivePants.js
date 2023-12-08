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

const ActivePants = () => {
  const dispatch = useDispatch();
  const showPantsActive = useSelector(
    (state) => state.header.value.showActivePants
  );

  const PantsActive = ["View all in Pants", "Leggings", "Joggers"];

  return (
    <>
      {showPantsActive ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Pants
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
      {showPantsActive
        ? PantsActive.map((bags) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {bags} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default ActivePants;
