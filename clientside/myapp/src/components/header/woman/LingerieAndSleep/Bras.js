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

const Bras = () => {
  const dispatch = useDispatch();
  const showBras = useSelector((state) => state.header.value.showBras);

  const bras = [
    "View all in Bras",
    "Nursing Bras",
    "Bra Accessories",
    "T-shirts Bras",
    "Multiway Bras",
    "Balconette Bras",
    "Wirefree Bras",
    "Underwire bras",
  ];

  return (
    <>
      {showBras ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Bras
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
      {showBras
        ? bras.map((bras) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {bras} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Bras;
