import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { showMenu, closeAll, closeIts } from "../../Features/HeaderLinks";
import styled from "styled-components";
import { character } from "./MenuData";

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

const Character = () => {
  const dispatch = useDispatch();
  const showCharacters = useSelector(
    (state) => state.header.value.showCharacter
  );

  return (
    <>
      {showCharacters ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Character
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
      {showCharacters
        ? character.map((character) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {character} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Character;
