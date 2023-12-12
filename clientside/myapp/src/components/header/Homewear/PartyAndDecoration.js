import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../Features/HeaderLinks";
import { party } from "./HomewearData";

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

const PartyAndDecoration = () => {
  const dispatch = useDispatch();
  const showPartyAndDecoration = useSelector(
    (state) => state.header.value.showPartyAndDecoration
  );

  return (
    <>
      {showPartyAndDecoration ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Party & Decoration
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
      {showPartyAndDecoration
        ? party.map((drinkAndLunch) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {drinkAndLunch} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default PartyAndDecoration;
