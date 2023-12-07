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

const Tshirt = () => {
  const dispatch = useDispatch();
  const showTshirts = useSelector((state) => state.header.value.showTshirts);

  const tshirts = [
    "View all in T-shirts",
    "Long Sleeve T-shirts",
    "Short Sleeve T-shirts",
  ];

  return (
    <>
      {showTshirts ? (
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
      {showTshirts
        ? tshirts.map((clothing) => {
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

export default Tshirt;
