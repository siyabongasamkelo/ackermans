import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../Features/HeaderLinks";
import { lilly } from "./KidsData";

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

const LillyAndSidKids = () => {
  const dispatch = useDispatch();
  const showLillyAndSadKids = useSelector(
    (state) => state.header.value.showLillyAndSadKids
  );

  return (
    <>
      {showLillyAndSadKids ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Liily + Sid
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
      {showLillyAndSadKids
        ? lilly.map((lilly) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {lilly} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default LillyAndSidKids;
