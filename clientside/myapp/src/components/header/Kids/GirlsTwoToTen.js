import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../Features/HeaderLinks";
import { girls } from "./KidsData";

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

const GirlsTwoToTen = () => {
  const dispatch = useDispatch();
  const showGirls210 = useSelector((state) => state.header.value.showGirls210);

  return (
    <>
      {showGirls210 ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Girls 2-10 Years
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
      {showGirls210
        ? girls.map((girls) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {girls} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default GirlsTwoToTen;
