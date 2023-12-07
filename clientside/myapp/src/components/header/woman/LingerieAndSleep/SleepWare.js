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

const Sleepware = () => {
  const dispatch = useDispatch();
  const showSleepWare = useSelector(
    (state) => state.header.value.showSleepWare
  );

  const sleepware = [
    "View all in Sleepware",
    "Pyjamas",
    "Gowns",
    "Onesies",
    "Sleep Shirts",
    "Chemises",
  ];

  return (
    <>
      {showSleepWare ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            SleepWare
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
      {showSleepWare
        ? sleepware.map((sleepware) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {sleepware} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Sleepware;
