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

const Tops = () => {
  const dispatch = useDispatch();
  const showTops = useSelector((state) => state.header.value.showTops);

  const tops = [
    "View all in Tops",
    "Shirts",
    "Short Sleeve Tops",
    "Sleeveless Tops",
  ];

  return (
    <>
      {showTops ? (
        <Top className="back d-flex align-items-center justify-content-between">
          <div>
            <ArrowLeft
              onClick={() => {
                dispatch(closeAll());
                dispatch(showMenu());
                dispatch(closeIts());
              }}
            />
            Tops
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
      {showTops
        ? tops.map((clothing) => {
            return (
              <div className="list d-flex align-items-center justify-content-between">
                {clothing} <CaretRightFill />
              </div>
            );
          })
        : ""}
    </>
  );
};

export default Tops;
