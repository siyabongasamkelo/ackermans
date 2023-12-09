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

const GraphicTees = () => {
  const dispatch = useDispatch();
  const showGraphicTees = useSelector(
    (state) => state.header.value.showGraphicTees
  );

  const graphic = ["View all in Graphic Tees", "Girls", "Boys"];

  return (
    <>
      {showGraphicTees ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Graphic Tees
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
      {showGraphicTees
        ? graphic.map((graphic) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {graphic} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default GraphicTees;
