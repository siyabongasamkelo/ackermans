import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  closeIts,
  showMenu,
  closeAll,
  showBras,
  showLingerieAndSleep,
  showPanties,
  showSeamFree,
  showShapeWare,
  showSocksAndHorsery,
  showLingerieEssentials,
  showSleepWare,
} from "../../../Features/HeaderLinks";
import { lingerieAndSleep } from "./WomanData";

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
  const showLingerieAndSleeps = useSelector(
    (state) => state.header.value.showLingerieAndSleep
  );

  return (
    <>
      {showLingerieAndSleeps ? (
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
      {showLingerieAndSleeps
        ? lingerieAndSleep.map((lingerie) => {
            return (
              <div
                className="list d-flex align-items-center justify-content-between"
                onClick={() => {
                  if (lingerie === "Bras") {
                    dispatch(showLingerieAndSleep());
                    dispatch(showBras());
                  }
                  if (lingerie === "Panties") {
                    dispatch(showLingerieAndSleep());
                    dispatch(showPanties());
                  }
                  if (lingerie === "Seamfree") {
                    dispatch(showLingerieAndSleep());
                    dispatch(showSeamFree());
                  }
                  if (lingerie === "Shapewear") {
                    dispatch(showLingerieAndSleep());
                    dispatch(showShapeWare());
                  }
                  if (lingerie === "Socks & Hosiery") {
                    dispatch(showLingerieAndSleep());
                    dispatch(showSocksAndHorsery());
                  }
                  if (lingerie === "Lingerie Essentials") {
                    dispatch(showLingerieAndSleep());
                    dispatch(showLingerieEssentials());
                  }
                  if (lingerie === "Sleepware") {
                    dispatch(showLingerieAndSleep());
                    dispatch(showSleepWare());
                  }
                }}
              >
                {lingerie} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default LingerieAndSleep;
