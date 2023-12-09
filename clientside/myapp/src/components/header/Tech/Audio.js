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

const Audio = () => {
  const dispatch = useDispatch();
  const showAudio = useSelector((state) => state.header.value.showAudio);

  const audio = ["View all in Audio", "Earphones", "Headphones"];

  return (
    <>
      {showAudio ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Audio
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
      {showAudio
        ? audio.map((audio) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {audio} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Audio;
