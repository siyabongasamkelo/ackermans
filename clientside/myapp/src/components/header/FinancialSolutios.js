import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { showMenu, closeAll, closeIts } from "../../Features/HeaderLinks";
import styled from "styled-components";
import { FinanctialSolutionss } from "./MenuData";

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

const FinanctialSolutions = () => {
  const dispatch = useDispatch();
  const showFinance = useSelector((state) => state.header.value.showFinance);

  return (
    <>
      {showFinance ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Financial Solutios
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
      {showFinance
        ? FinanctialSolutionss.map((finance) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {finance} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default FinanctialSolutions;
