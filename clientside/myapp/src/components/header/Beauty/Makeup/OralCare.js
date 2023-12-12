import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../../Features/HeaderLinks";
import { oralCare } from "./MakeupData";

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

const OralCare = () => {
  const dispatch = useDispatch();
  const showOralCare = useSelector((state) => state.header.value.showOralCare);

  return (
    <>
      {showOralCare ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Oral Care
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
      {showOralCare
        ? oralCare.map((makeup) => {
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

export default OralCare;
