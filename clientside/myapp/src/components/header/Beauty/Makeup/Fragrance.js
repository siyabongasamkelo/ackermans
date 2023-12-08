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

const Fragrance = () => {
  const dispatch = useDispatch();
  const showFragrance = useSelector(
    (state) => state.header.value.showFragrance
  );

  const frangrance = ["View all in Frangrance", "Pocket Perfume"];

  return (
    <>
      {showFragrance ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Fragrance
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
      {showFragrance
        ? frangrance.map((frangrance) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {frangrance} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Fragrance;
