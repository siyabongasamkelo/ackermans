import { ArrowLeft, CaretRightFill, XLg } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { closeIts, showMenu, closeAll } from "../../../../Features/HeaderLinks";

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

const LingerieEssential = () => {
  const dispatch = useDispatch();
  const showLingerieEssential = useSelector(
    (state) => state.header.value.showLingerieEssentials
  );

  const lingerieEssential = [
    "View all in Lingerie Essential",
    "Cycle Shorts",
    "Slips",
  ];

  return (
    <>
      {showLingerieEssential ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Lingerie Essential
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
      {showLingerieEssential
        ? lingerieEssential.map((lingerie) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {lingerie} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default LingerieEssential;
