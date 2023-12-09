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

const Bathroom = () => {
  const dispatch = useDispatch();
  const showBathroom = useSelector((state) => state.header.value.showBathroom);

  const bathroom = ["View all in Bathroom", "Face Cloth", "Towels"];

  return (
    <>
      {showBathroom ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Bathroom
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
      {showBathroom
        ? bathroom.map((bathroom) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {bathroom} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Bathroom;
