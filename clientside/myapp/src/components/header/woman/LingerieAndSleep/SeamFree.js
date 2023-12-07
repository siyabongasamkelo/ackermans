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

const SeamFree = () => {
  const dispatch = useDispatch();
  const showSeamFree = useSelector((state) => state.header.value.showSeamFree);

  const seamfree = [
    "View all in Seamfree",
    "Bralettes",
    "Cycle Shorts",
    "Croptops",
    "Panties",
  ];

  return (
    <>
      {showSeamFree ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            SeamFree
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
      {showSeamFree
        ? seamfree.map((seamfree) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {seamfree} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default SeamFree;
