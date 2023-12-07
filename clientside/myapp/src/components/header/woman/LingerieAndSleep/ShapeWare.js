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

const ShapeWare = () => {
  const dispatch = useDispatch();
  const showShapeWare = useSelector(
    (state) => state.header.value.showShapeWare
  );

  const shapewear = [
    "View all in Shapewear",
    "Bodysuits",
    "Camisoles",
    "Longlegs",
    "Panties",
  ];

  return (
    <>
      {showShapeWare ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Shapeware
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
      {showShapeWare
        ? shapewear.map((shapewear) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {shapewear} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default ShapeWare;
