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

const TeenGirls = () => {
  const dispatch = useDispatch();
  const showTeenGirls = useSelector(
    (state) => state.header.value.showTeenGirls
  );

  const teenGirls = [
    "View all in Teen Girls",
    "Tops & T-Shirts",
    "Shorts",
    "Skirts",
    "Bottom & Jeans",
    "Jackets",
    "Tracksuits",
    "Dresses",
    "Sleepwear",
    "Underwear & Socks",
    "Bath & Body",
    "Accessories",
  ];

  return (
    <>
      {showTeenGirls ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Teen Girls
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
      {showTeenGirls
        ? teenGirls.map((teenGirls) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {teenGirls} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default TeenGirls;
