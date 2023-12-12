import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../Features/HeaderLinks";
import { lillyAndSid } from "./BabyData";

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

const LillyAndSid = () => {
  const dispatch = useDispatch();
  const showLIllyAndSid = useSelector(
    (state) => state.header.value.showLIllyAndSid
  );

  return (
    <>
      {showLIllyAndSid ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Lilly + Sid
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
      {showLIllyAndSid
        ? lillyAndSid.map((limitedEdition) => {
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

export default LillyAndSid;
