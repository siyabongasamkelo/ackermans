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

const LimitedEditionKids = () => {
  const dispatch = useDispatch();
  const showLimitedKids = useSelector((state) => state.header.value.showLimitedKids);

  const limited = [
    "View all in Limited Edition",
    "Boys 2-8 Years",
    "Girls 2-8 Years",
    "Sleepwear",
    "Accessories",
    "Shoes",
    "Boys 2-10 Years",
    "Girls 2-10 Years",
  ];

  return (
    <>
      {showLimitedKids ? (
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
      {showLimitedKids
        ? limited.map((limited) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {limited} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default LimitedEditionKids;
