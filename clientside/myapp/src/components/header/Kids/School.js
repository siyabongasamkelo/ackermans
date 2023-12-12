import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../Features/HeaderLinks";
import { school } from "./KidsData";

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

const School = () => {
  const dispatch = useDispatch();
  const showSchool = useSelector((state) => state.header.value.showSchool);

  return (
    <>
      {showSchool ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            School
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
      {showSchool
        ? school.map((school) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {school} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default School;
