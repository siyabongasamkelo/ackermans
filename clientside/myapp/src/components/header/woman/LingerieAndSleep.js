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

const LingerieAndSleep = () => {
  const dispatch = useDispatch();
  const showLingerieAndSleep = useSelector(
    (state) => state.header.value.showLingerieAndSleep
  );

  const LingerieAndSleep = [
    "View all in Lingerie & SleepWear",
    "Bras",
    "Panties",
    "Seamfree",
    "Shapewear",
    "Socks & Hosiery",
    "Lingerie Essentials",
    "Sleepware",
    "Matching Sets",
  ];

  return (
    <>
      {showLingerieAndSleep ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Lingerie & Sleep
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
      {showLingerieAndSleep
        ? LingerieAndSleep.map((clothing) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {clothing} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default LingerieAndSleep;
