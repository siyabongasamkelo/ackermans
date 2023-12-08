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

const LimitedEdition = () => {
  const dispatch = useDispatch();
  const showBabyLimitedEdition = useSelector(
    (state) => state.header.value.showBabyLimitedEdition
  );

  const LimitedEdition = [
    "View all in Baby Limited Edition",
    "Newborn",
    "Boys 3-36 Months",
    "Girls 3-36 Months",
    "Baby Essentials",
    "Accessories",
  ];

  return (
    <>
      {showBabyLimitedEdition ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Limited Edition
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
      {showBabyLimitedEdition
        ? LimitedEdition.map((limitedEdition) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {limitedEdition} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default LimitedEdition;
